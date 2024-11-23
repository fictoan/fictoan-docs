import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { ListBox, Row, Portion, Text, Div, Range } from "fictoan-react";
import { colourOptionsWithShades, listOfColours } from "../app/colour/colours";

// Finds the longest variable name so that we can column indent on the `:`. This is used in the CSS variables code block
const findLongestVarNameLength = (variables) => {
    return Math.max(...Object.keys(variables).map(varName => varName.length + 2));
};

// Checks if a CSS variable is a color variable by looking at its value and if the value references a colour from the
// Fictoan colour list
const isColorVariable = (value) => {
    if (value?.startsWith("var(--")) {
        const varName = value.match(/var\(--([^)]+)\)/)?.[1];
        return varName ? listOfColours.some(color => varName === color || varName.startsWith(`${color}-`)) : false;
    }
    return false;
};

// Strips `var()`. For example, converts "var(--blue-light20)" to "blue-light20"
const extractColorValue = (value) => {
    if (value?.startsWith("var(--")) {
        const match = value.match(/var\(--([^)]+)\)/);
        return match?.[1] ?? null;
    }
    return null;
};

// Checks if a CSS variable contains a numerical value, works for both direct numbers and references to other
// numerical variables
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

// Extracts the numerical value from a CSS variable, and handles both direct numbers and references to other variables
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

// Extracts the unit suffix from a CSS value (px, rem, em, etc)
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

// Create range input controls for numerical variables
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

// Main hook for managing theme variables and controls
// Takes a filter function to limit which CSS variables to process
export const createThemeConfigurator = (filter) => {
    // State for storing theme variables and their formatted CSS representation
    const [variables, setVariables] = useState({
        componentVariables: {},
        cssVariablesList: "",
    });

    // Refs for DOM element and initialisation tracking
    const interactiveElementRef = useRef(null);
    const isInitializedRef = useRef(false);

    // Formats CSS variables into a pretty-printed string
    // Used for displaying in the code block
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

    // Extracts CSS variables from the main theme file for component with `id="interactive-component"`
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

    // Initialise variables on first render
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

    // Handles changes to variables from the UI controls
    const handleVariableChange = useCallback((varName, newValue) => {
        const isColor = Object.entries(variables.componentVariables)
            .some(([name, value]) => name === varName && isColorVariable(value));

        const cssValue = isColor ? `var(--${newValue})` : newValue;
        const property = `--${varName}`;

        // Update the DOM element directly
        const element = interactiveElementRef.current;
        if (element) {
            element.style.setProperty(property, cssValue);
        }

        // Update React state and formatted CSS
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

    // Generates the UI controls based on variable types
    const themeConfigurator = useCallback(() => {
        // Find and process color variables
        const colorVariables = Object.entries(variables.componentVariables)
            .filter(([_, value]) => isColorVariable(value))
            .map(([varName, value]) => ({
                type: "color",
                name: varName,
                currentValue: extractColorValue(value),
                defaultValue: extractColorValue(value),
            }));

        // Find and process numerical variables
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

        // Render appropriate controls for each variable type
        return (
            <Row marginBottom="none">
                {allVariables.map(({ type, name, currentValue, defaultValue, suffix }) => {
                    if (type === "color") {
                        // Create color picker with default color option
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
                        // Create range slider for numerical values
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
        );
    }, [variables.componentVariables, handleVariableChange]);

    // Memoized props for the interactive component
    const componentProps = useMemo(() => ({
        id: "interactive-component",
    }), []);

    return {
        componentVariables : variables.componentVariables,
        componentProps,
        handleVariableChange,
        cssVariablesList   : variables.cssVariablesList,
        themeConfigurator,
        interactiveElementRef
    };
};
