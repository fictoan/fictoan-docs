import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
    ListBox,
    Row,
    Portion,
    Text,
    Div,
    Range,
    Card,
    Header,
    CodeBlock
} from "fictoan-react";
import { colourOptionsWithShades, listOfColours } from "../app/colour/colours";

// Utility functions remain the same...
const findLongestVarNameLength = (variables) => {
    return Math.max(...Object.keys(variables).map(varName => varName.length + 2));
};

const isColorVariable = (value) => {
    if (value?.startsWith("var(--")) {
        const varName = value.match(/var\(--([^)]+)\)/)?.[1];
        return varName ? listOfColours.some(color => varName === color || varName.startsWith(`${color}-`)) : false;
    }
    return false;
};

const extractColorValue = (value) => {
    if (value?.startsWith("var(--")) {
        const match = value.match(/var\(--([^)]+)\)/);
        return match?.[1] ?? null;
    }
    return null;
};

const isNumericalVariable = (value) => {
    if (value?.startsWith("var(--")) {
        const varName = value.match(/var\(--([^)]+)\)/)?.[1];
        if (!varName) return false;
        const rootStyles = getComputedStyle(document.documentElement);
        const rootValue = rootStyles.getPropertyValue(`--${varName}`).trim();
        return !isNaN(parseInt(rootValue));
    }
    return !isNaN(parseInt(value));
};

const extractNumericalValue = (value) => {
    if (value?.startsWith("var(--")) {
        const varName = value.match(/var\(--([^)]+)\)/)?.[1];
        if (!varName) return 0;
        const rootStyles = getComputedStyle(document.documentElement);
        const rootValue = rootStyles.getPropertyValue(`--${varName}`).trim();
        return parseInt(rootValue) || 0;
    }
    return parseInt(value) || 0;
};

const extractUnitSuffix = (value) => {
    if (value?.startsWith("var(--")) {
        const varName = value.match(/var\(--([^)]+)\)/)?.[1];
        if (!varName) return "px";
        const rootStyles = getComputedStyle(document.documentElement);
        const rootValue = rootStyles.getPropertyValue(`--${varName}`).trim();
        const match = rootValue.match(/[0-9.]+([a-z%]+)/i);
        return match?.[1] || "px";
    }
    const match = value?.match(/[0-9.]+([a-z%]+)/i);
    return match?.[1] || "px";
};

const RangeInput = ({ name, defaultValue, onChange, suffix = "px" }) => {
    const [rangeValue, setRangeValue] = useState(defaultValue);

    const handleChange = useCallback((e) => {
        const newValue = parseInt(e.target.value);
        setRangeValue(newValue);
        onChange(name, `${newValue}${suffix}`);
    }, [name, onChange, suffix]);

    return (
        <Range
            label={`${name}`}
            value={rangeValue}
            min={0}
            max={32}
            step={1}
            suffix={suffix}
            onChange={handleChange}
            isFullWidth
        />
    );
};

export const createThemeConfigurator = (filter) => {
    const [variables, setVariables] = useState({
        componentVariables: {},
        cssVariablesList: "",
    });

    const interactiveElementRef = useRef(null);
    const isInitializedRef = useRef(false);

    const formatCSSVariablesList = useCallback((vars) => {
        if (!Object.keys(vars).length) return "";
        const longestLength = findLongestVarNameLength(vars);
        return Object.entries(vars)
            .map(([name, value]) => {
                const fullVarName = `--${name}`;
                const paddedName = fullVarName.padEnd(longestLength);
                return `${paddedName} : ${value};`;
            })
            .join("\n");
    }, []);

    const extractVariables = useCallback(() => {
        const extractedVars = {};
        try {
            Array.from(document.styleSheets).forEach(styleSheet => {
                try {
                    Array.from(styleSheet.cssRules || styleSheet.rules).forEach(rule => {
                        if (rule.style && rule.selectorText === "#interactive-component") {
                            Array.from(rule.style).forEach(prop => {
                                if (prop.startsWith("--") && (!filter || filter(prop.substring(2)))) {
                                    const value = rule.style.getPropertyValue(prop).trim();
                                    extractedVars[prop.substring(2)] = value;
                                }
                            });
                        }
                    });
                } catch (e) {
                    // Skip cross-origin stylesheets silently
                }
            });
        } catch (e) {
            console.warn("Could not read stylesheets:", e);
        }
        return extractedVars;
    }, [filter]);

    useEffect(() => {
        if (!isInitializedRef.current) {
            const vars = extractVariables();
            const formattedCss = formatCSSVariablesList(vars);
            setVariables({
                componentVariables: vars,
                cssVariablesList: formattedCss,
            });
            isInitializedRef.current = true;
        }
    }, [extractVariables, formatCSSVariablesList]);

    const handleVariableChange = useCallback((varName, newValue) => {
        const isColor = Object.entries(variables.componentVariables)
            .some(([name, value]) => name === varName && isColorVariable(value));

        const cssValue = isColor ? `var(--${newValue})` : newValue;
        const property = `--${varName}`;

        const element = interactiveElementRef.current;
        if (element) {
            element.style.setProperty(property, cssValue);

            if (isColor) {
                const classPrefix = varName.split('-')[0];
                const oldClasses = Array.from(element.classList)
                    .filter(cls => cls.startsWith(`${classPrefix}-`));
                oldClasses.forEach(cls => element.classList.remove(cls));
                element.classList.add(`${classPrefix}-${newValue}`);
            }
        }

        setVariables(prev => {
            const updatedVars = {
                ...prev.componentVariables,
                [varName]: cssValue
            };
            return {
                componentVariables: updatedVars,
                cssVariablesList: formatCSSVariablesList(updatedVars)
            };
        });
    }, [variables.componentVariables, formatCSSVariablesList]);

    const themeConfigurator = useCallback(() => {
        const colorVariables = Object.entries(variables.componentVariables)
            .filter(([_, value]) => isColorVariable(value))
            .map(([varName, value]) => ({
                type: "color",
                name: varName,
                currentValue: extractColorValue(value),
                defaultValue: extractColorValue(value),
            }));

        const numericalVariables = Object.entries(variables.componentVariables)
            .filter(([_, value]) => isNumericalVariable(value))
            .map(([varName, value]) => {
                const numValue = extractNumericalValue(value);
                const suffix = extractUnitSuffix(value);
                return {
                    type: "number",
                    name: varName,
                    currentValue: numValue,
                    defaultValue: numValue,
                    suffix,
                };
            });

        const allVariables = [...colorVariables, ...numericalVariables];
        if (allVariables.length === 0) return null;

        return (
            <Card padding="micro" shape="rounded">
                <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                    <Text size="large" weight="700" textColour="white">
                        Set global theme values
                    </Text>
                </Header>

                <Row marginBottom="none">
                    <Portion>
                        <CodeBlock
                            source={variables.cssVariablesList}
                            language="css"
                            showCopyButton
                            marginBottom="micro"
                        />
                    </Portion>
                </Row>

                <Row marginBottom="none">
                    {allVariables.map(({ type, name, currentValue, defaultValue, suffix }) => {
                        if (type === "color") {
                            const extendedOptions = [...colourOptionsWithShades];
                            if (defaultValue && !extendedOptions.find(opt => opt.value === defaultValue)) {
                                extendedOptions.unshift({
                                    customLabel: (
                                        <Div verticallyCentreItems>
                                            <Div
                                                className="color-option"
                                                bgColour={defaultValue}
                                                padding="nano"
                                                shape="rounded"
                                            />
                                            <Text marginLeft="nano">{defaultValue}</Text>
                                        </Div>
                                    ),
                                    label: defaultValue,
                                    value: defaultValue,
                                });
                            }

                            return (
                                <Portion desktopSpan="half" key={name}>
                                    <ListBox
                                        label={name}
                                        options={extendedOptions}
                                        defaultValue={defaultValue}
                                        onChange={(value) => handleVariableChange(name, value)}
                                        allowCustomEntries
                                        isFullWidth
                                    />
                                </Portion>
                            );
                        }

                        if (type === "number") {
                            return (
                                <Portion desktopSpan="half" key={name}>
                                    <RangeInput
                                        name={name}
                                        defaultValue={currentValue}
                                        onChange={handleVariableChange}
                                        suffix={suffix}
                                    />
                                </Portion>
                            );
                        }

                        return null;
                    })}
                </Row>
            </Card>
        );
    }, [variables.componentVariables, variables.cssVariablesList, handleVariableChange]);

    const componentProps = useMemo(() => ({
        id: "interactive-component",
    }), []);

    return {
        componentVariables: variables.componentVariables,
        componentProps,
        handleVariableChange,
        themeConfigurator,
        interactiveElementRef
    };
};
