"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useMemo, useContext, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Card,
    HRule,
    InputField,
    Portion,
    Row,
    Select,
    RadioTabGroup,
    Text,
    Badge,
    Button,
    Div,
    Form,
    Header,
    SelectWithSearch, Checkbox, Callout,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { BreadcrumbsSample, BreadcrumbsThemeConfigurator } from "../../app/components/breadcrumbs/config";
import { BadgeThemeConfigurator } from "../../app/components/badge/config";
import { CalloutSample, CalloutThemeConfigurator } from "../../app/components/callout/config";
import { CardThemeConfigurator } from "../../app/components/card/config";
import { ButtonSample, ButtonThemeConfigurator } from "../../app/components/button/config";
import { HRuleSample, HRuleThemeConfigurator } from "../../app/components/h-rule/config";

// UTILS =======================================================================
import { generateShades, listOfColours } from "../../utils/colours";

// STYLES ======================================================================
import "./configurator.css";

// CONTEXTS ====================================================================
import { CustomThemeContext } from "../../app/contexts/theme";

// DATA ========================================================================


export const ComponentConfigurator = ({ component, properties, variablesStructure }) => {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // COMPONENT LIST
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const Component = useMemo(() => {
        switch (component) {
            case "Badge":
                return (
                    Badge
                );
            case "Breadcrumbs":
                return (
                    BreadcrumbsSample // Don’t ask me why
                );
            case "Button":
                return (
                    Button
                );
            case "Callout":
                return (
                    Callout
                );
            case "Card":
                return (
                    Card
                );
            case "HRule":
                return (
                    HRuleSample
                );
            default:
                return (
                    Text
                );
        }
    }, [component]);

    const { customTheme, setCustomTheme } = useContext(CustomThemeContext);

    const [label, setLabel] = useState("Text");
    const [selectedKindMain, setSelectedKindMain] = useState("custom");
    const [selectedKind, setSelectedKind] = useState("none");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("none");
    const [selectedShadow, setSelectedShadow] = useState("none");
    const [selectedBgColour, setSelectedBgColour] = useState(null);
    const [selectedBorderColour, setSelectedBorderColour] = useState(undefined);
    const [selectedTextColour, setSelectedTextColour] = useState("");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STATE HANDLERS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const handleKindMainChange = (event) => {
        setSelectedKindMain(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleKindChange = (event) => {
        setSelectedKind(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleIsLoadingChange = (event) => {
        setIsLoading(event.target.checked);
    };

    const handlePaddingChange = (event) => {
        setSelectedPadding(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShapeChange = (event) => {
        setSelectedShape(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShadowChange = (event) => {
        setSelectedShadow(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleBorderColourChange = (event) => {
        setSelectedBorderColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleTextColourChange = (event) => {
        setSelectedTextColour(event.target.value !== "none" ? event.target.value : undefined);
    };


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // COLOUR DROPDOWNS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const colourOptions = listOfColours.flatMap(color =>
        generateShades(color).map(shade => (
            {
                customLabel : (
                    <Div verticallyCentreItems>
                        <Div
                            className="color-option"
                            bgColour={shade}
                            padding="nano" shape="rounded"
                        />
                        <Text marginLeft="nano">{shade}</Text>
                    </Div>
                ),
                label       : shade,
                value       : shade,
            }
        )),
    );

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // GLOBAL THEME MANAGER
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STEP 1 — Fetch all the variables for the component directly from the HTML root ==================================
    const getDefaultVariableValues = () => {
        const root = document.documentElement;
        const styles = getComputedStyle(root);

        return Object.entries(variablesStructure).reduce((acc, [key, varStruct]) => {
            const computedValue = styles.getPropertyValue(key).trim();
            let value, unit;

            if (varStruct.type === "value-unit") {
                // Extract the numeric part of the computed value if it exists, otherwise use default value
                const match = computedValue.match(/^(\d+(?:\.\d+)?)/);
                value = match ? parseFloat(match[1]) : varStruct.defaultValue;
                unit = varStruct.unit;
            } else {
                // For non value-unit types
                value = computedValue || varStruct.defaultValue;
                unit = "";
            }

            acc[key] = {
                ...varStruct,
                value : value,
                unit  : unit,
            };

            return acc;
        }, {});
    };

    // This is just for doing column-indent alignment in the CSS code block, heh
    const findLongestVarNameLength = (variables) => {
        return Math.max(...Object.keys(variables).map(varName => varName.length));
    };

    // STEP 2 — Arrange all the variables for use in the CodeBlock =====================================================
    const generateCSSVariablesList = (variables) => {
        const longestVarNameLength = findLongestVarNameLength(variables);
        const variablesString = Object.entries(variables).map(([varName, varDetails]) => {
            let cssValue;
            switch (varDetails.type) {
                case "value-unit":
                    cssValue = `${varDetails.value}${varDetails.unit}`;
                    break;
                case "reference":
                    cssValue = `var(--${varDetails.value})`;
                    break;
                default:
                    cssValue = varDetails.value;
            }
            const paddedVarName = varName.padEnd(longestVarNameLength);
            return `--${paddedVarName} : ${cssValue};`;
        }).join("\n");

        return "// Paste this in your theme file\n" + variablesString;
    };

    const [componentVariables, setComponentVariables] = useState(getDefaultVariableValues());
    const [cssVariablesList, setCssVariablesList] = useState(generateCSSVariablesList(componentVariables));

    useEffect(() => {
        setCssVariablesList(generateCSSVariablesList(componentVariables));
    }, [componentVariables, variablesStructure]);

    // STEP 3 — Allow the user to change the values of the variables ===================================================
    const handleVariableChange = (varName, newValue) => {
        setComponentVariables(prevValues => {
            const currentVar = prevValues[varName];

            // Update the value but keep the original type
            return {
                ...prevValues,
                [varName] : {
                    ...currentVar,
                    value : currentVar.type === "reference" ? `${newValue}` : newValue,
                },
            };
        });

        // Update global CSS variables and the custom theme
        const varDetails = componentVariables[varName];
        let cssValue;
        if (varDetails.type === "reference") {
            cssValue = `var(--${newValue})`; // Keep the reference type format
        } else if (varDetails.type === "value-unit") {
            cssValue = `${newValue}${varDetails.unit}`; // For value-unit type
        } else if (varDetails.type === "string") {
            cssValue = `"${newValue}"`; // For string type
        } else {
            cssValue = newValue; // For other types
        }

        setCustomTheme(prevValues => (
            {
                ...prevValues,
                [varName] : cssValue,
            }
        ));

        // If you want to update the style property immediately,
        // uncomment the following line:
        // document.documentElement.style.setProperty(`--${varName}`, cssValue);
    };

    // STEP 4 — Hope for the best.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Div id="component-configurator" className="demo-row" marginBottom="micro">
            <Row className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion>
                    <Element
                        id="component-wrapper"
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                    >
                        <Component
                            id="interactive-component"
                            {...(
                                selectedKind !== undefined ? { kind : selectedKind } : {}
                            )}
                            {...(
                                selectedPadding !== undefined ? { padding : selectedPadding } : {}
                            )}
                            {...(
                                selectedShape !== undefined ? { shape : selectedShape } : {}
                            )}
                            {...(
                                selectedSize !== undefined ? { size : selectedSize } : {}
                            )}
                            {...(
                                selectedShadow !== undefined ? { shadow : selectedShadow } : {}
                            )}
                            {...(
                                selectedBgColour !== undefined ? { bgColour : selectedBgColour } : {}
                            )}
                            {...(
                                selectedBorderColour !== undefined ? { borderColor : selectedBorderColour } : {}
                            )}
                            {...(
                                selectedTextColour !== undefined ? { textColour : selectedTextColour } : {}
                            )}
                            {...(
                                isLoading ? { isLoading : isLoading } : {}
                            )}
                        >
                            {label || "Label"}
                        </Component>
                    </Element>
                </Portion>
            </Row>

            <Row>
                {/* INDIVIDUAL LOCAL PROPS ///////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                Customise individually
                            </Text>

                            {/* Lol, hacky max pro */}
                            <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                {[
                                    `// Paste this in your content file`,
                                    `<${component}`,
                                    selectedKind && `    kind="${selectedKind}"`,
                                    selectedPadding && `    padding="${selectedPadding}"`,
                                    selectedShape && `    shape="${selectedShape}"`,
                                    selectedSize && `    size="${selectedSize}"`,
                                    selectedShadow && `    shadow="${selectedShadow}"`,
                                    selectedBgColour && `    bgColour="${selectedBgColour}"`,
                                    selectedBorderColour && `    borderColour="${selectedBorderColour}"`,
                                    selectedTextColour && `    textColour="${selectedTextColour}"`,
                                    `>`,
                                    `    ${label}`,
                                    `</${component}>`,
                                ].filter(Boolean).join("\n")}
                            </CodeBlock>

                            {/* KIND =============================================================================== */}
                            {properties.includes("kind") && (
                                <>
                                    {component === "Button" && (
                                        <>
                                            <RadioTabGroup
                                                label="Kind"
                                                name="kind"
                                                options={[
                                                    { id: "kind-opt-0", value: "custom", label: "custom" },
                                                    { id: "kind-opt-1", value: "primary", label: "primary" },
                                                    { id: "kind-opt-2", value: "secondary", label: "secondary" },
                                                    { id: "kind-opt-3", value: "tertiary", label: "tertiary" },
                                                ]}
                                                defaultValue={selectedKind}
                                                onChange={handleKindChange}
                                            />
                                            <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                        </>
                                    )}

                                    {component === "Callout" && (
                                        <>
                                            <RadioTabGroup
                                                label="Kind"
                                                name="kind"
                                                options={[
                                                    { id: "kind-opt-0", value: "info", label: "info" },
                                                    { id: "kind-opt-1", value: "warning", label: "warning" },
                                                    { id: "kind-opt-2", value: "error", label: "error" },
                                                    { id: "kind-opt-3", value: "success", label: "success" },
                                                ]}
                                                defaultValue={selectedKind}
                                                onChange={handleKindChange}
                                            />
                                            <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                        </>
                                    )}
                                </>
                            )}


                            {/* LABEL ============================================================================== */}
                            {properties.includes("label") && (
                                <>
                                    <InputField
                                        type="text"
                                        label="Label"
                                        placeholder="Label"
                                        onChange={(e) => setLabel(e.target.value)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* LOADING ============================================================================ */}
                            {properties.includes("is-loading") && (
                                <>
                                    <Checkbox
                                        id="checkbox-loading"
                                        value="checkbox-loading"
                                        name="checkbox-loading"
                                        label="Is loading"
                                        checked={isLoading}
                                        onChange={handleIsLoadingChange}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* PADDING ============================================================================ */}
                            {properties.includes("padding") && (
                                <>
                                    <RadioTabGroup
                                        name="padding"
                                        label="Padding"
                                        options={[
                                            { id : "padding-opt-0", value : "none", label : "none" },
                                            { id : "padding-opt-1", value : "nano", label : "nano" },
                                            { id : "padding-opt-2", value : "micro", label : "micro" },
                                            { id : "padding-opt-3", value : "tiny", label : "tiny" },
                                            { id : "padding-opt-4", value : "small", label : "small" },
                                            { id : "padding-opt-5", value : "medium", label : "medium" },
                                            { id : "padding-opt-6", value : "large", label : "large" },
                                            { id : "padding-opt-7", value : "huge", label : "huge" },
                                        ]}
                                        defaultValue={selectedPadding}
                                        onChange={handlePaddingChange}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* SIZE =============================================================================== */}
                            {properties.includes("size") && (
                                <>
                                    <RadioTabGroup
                                        label="Size"
                                        name="size"
                                        options={[
                                            { id : "size-opt-0", value : "none", label : "none" },
                                            { id : "size-opt-1", value : "nano", label : "nano" },
                                            { id : "size-opt-2", value : "micro", label : "micro" },
                                            { id : "size-opt-3", value : "tiny", label : "tiny" },
                                            { id : "size-opt-4", value : "small", label : "small" },
                                            { id : "size-opt-5", value : "medium", label : "medium" },
                                            { id : "size-opt-6", value : "large", label : "large" },
                                            { id : "size-opt-7", value : "huge", label : "huge" },
                                        ]}
                                        defaultValue={selectedSize}
                                        onChange={handleSizeChange}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* SHAPE ============================================================================== */}
                            {properties.includes("shape") && (
                                <>
                                    <RadioTabGroup
                                        label="Shape"
                                        name="shape"
                                        options={[
                                            { id : "shape-opt-0", value : "none", label : "none" },
                                            { id : "shape-opt-1", value : "rounded", label : "rounded" },
                                            { id : "shape-opt-2", value : "curved", label : "curved" },
                                        ]}
                                        defaultValue={selectedShape}
                                        onChange={handleShapeChange}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* SHADOW ============================================================================= */}
                            {properties.includes("shadow") && (
                                <>
                                    <RadioTabGroup
                                        label="Shadow"
                                        name="shadow"
                                        options={[
                                            { id : "shadow-opt-0", value : "none", label : "none" },
                                            { id : "shadow-opt-1", value : "mild", label : "mild" },
                                            { id : "shadow-opt-3", value : "hard", label : "hard" },
                                            { id : "shadow-opt-2", value : "soft", label : "soft" },
                                        ]}
                                        defaultValue={selectedShadow}
                                        onChange={handleShadowChange}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* COLOURS ============================================================================ */}
                            {properties.includes("bgColour" || "bgColor" || "borderColour" || "borderColor" || "textColour" || "textColor")
                                ? (
                                    <Row marginBottom="none">
                                        {/* BG COLOUR ========================== */}
                                        {properties.includes("bgColour" || "bgColor") && (
                                            <Portion desktopSpan="half">
                                                <SelectWithSearch
                                                    label="Background colour"
                                                    options={[{
                                                        label    : "Select a colour",
                                                        value    : "select-a-colour",
                                                        disabled : true,
                                                        selected : true,
                                                    },
                                                        ...colourOptions,
                                                    ]}
                                                    defaultValue="select-a-colour"
                                                    onChange={handleBgColourChange}
                                                    isFullWidth
                                                />
                                            </Portion>
                                        )}

                                        {/* BORDER COLOUR ====================== */}
                                        {properties.includes("borderColour" || "borderColor") && (
                                            <Portion desktopSpan="half">
                                                <Select
                                                    label="Border colour"
                                                    options={[{
                                                        label    : "Select a colour",
                                                        value    : "select-a-colour",
                                                        disabled : true,
                                                        selected : true,
                                                    },
                                                        ...colourOptions,
                                                    ]}
                                                    defaultValue="select-a-colour"
                                                    onChange={handleBorderColourChange}
                                                    isFullWidth
                                                />
                                            </Portion>
                                        )}

                                        {/* TEXT COLOUR ======================== */}
                                        {properties.includes("textColour" || "textColor") && (
                                            <Portion desktopSpan="half">
                                                <Select
                                                    label="Text colour"
                                                    options={[{
                                                        label    : "Select a colour",
                                                        value    : "select-a-colour",
                                                        disabled : true,
                                                        selected : true,
                                                    },
                                                        ...colourOptions,
                                                    ]}
                                                    defaultValue="select-a-colour"
                                                    onChange={handleTextColourChange}
                                                    isFullWidth
                                                />
                                            </Portion>
                                        )}
                                    </Row>
                                ) : null}
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME VALUES //////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                    Set values globally
                                </Text>
                            </Header>

                            {/* CODE BLOCK ========================================================================= */}
                            <CodeBlock language="css" showCopyButton marginBottom="micro" source={cssVariablesList} />

                            {/* BADGE ============================================================================== */}
                            {component === "Badge" && (
                                <BadgeThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}

                            {/* BREADCRUMBS ======================================================================== */}
                            {component === "Breadcrumbs" && (
                                <BreadcrumbsThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}

                            {/* BUTTON ============================================================================= */}
                            {component === "Button" && (
                                <ButtonThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}

                            {/* CALLOUT ============================================================================ */}
                            {component === "Callout" && (
                                <CalloutThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}

                            {/* CARD =============================================================================== */}
                            {component === "Card" && (
                                <CardThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}

                            {/* H-RULE ============================================================================= */}
                            {component === "HRule" && (
                                <HRuleThemeConfigurator
                                    componentVariables={componentVariables}
                                    handleVariableChange={handleVariableChange}
                                    colourOptions={colourOptions}
                                />
                            )}
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Div>
    );
};
