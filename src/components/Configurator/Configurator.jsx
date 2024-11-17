"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useMemo, useContext, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Card,
    Divider,
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
    Checkbox,
    Callout, Switch, Footer,
CodeBlock
} from "fictoan-react";

// COMPONENTS ==================================================================
import { ButtonSample } from "../../app/components/button/config";

// UTILS =======================================================================
import { generateShades, listOfColours } from "../../app/colour/colours";

// STYLES ======================================================================
import "./configurator.css";

// CONTEXTS ====================================================================
import { CustomThemeContext } from "../../app/contexts/theme";

// DATA ========================================================================


export const ComponentConfigurator = ({ component, properties, variablesStructure }) => {
    const { customTheme, setCustomTheme } = useContext(CustomThemeContext);

    const [showAllButtons, setShowAllButtons] = useState(true);

    const [label, setLabel] = useState("Text");
    const [selectedKind, setSelectedKind] = useState("none");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedShadow, setSelectedShadow] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState(null);
    const [selectedBorderColour, setSelectedBorderColour] = useState(undefined);
    const [selectedTextColour, setSelectedTextColour] = useState("");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // COMPONENT LIST
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const Component = useMemo(() => {
        switch (component) {
            case "Badge":
                return (
                    Badge
                );
            case "Button":
                return (
                    showAllButtons ? ButtonSample : Button
                );
            case "Callout":
                return (
                    Callout
                );
            case "Card":
                return (
                    Card
                );
            case "Divider":
                return (
                    Divider
                );
            default:
                return (
                    Text
                );
        }
    }, [component, showAllButtons]);

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // STATE HANDLERS
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    // Generate shades for the colors in listOfColours
    const colourOptionsWithShades = listOfColours.flatMap(color =>
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

    // Separate black, white, and transparent
    const basicColourOptions = [
        { label : "black", value : "black" },
        { label : "white", value : "white" },
        { label : "transparent", value : "transparent" },
    ].map(color => (
        {
            customLabel : (
                <Div verticallyCentreItems>
                    <Div
                        className="color-option"
                        bgColour={color.value}
                        padding="nano"
                        shape="rounded"
                        style={{
                            backgroundColor : color.value === "transparent" ? "rgba(0,0,0,0)" : color.value,
                            border          : color.value === "transparent" ? "1px dashed rgba(0,0,0,0.3)" : "",
                        }}
                    />
                    <Text marginLeft="nano">{color.label}</Text>
                </Div>
            ),
            label       : color.label,
            value       : color.value,
        }
    ));

// Combine both sets of options
    const colourOptions = [...colourOptionsWithShades, ...basicColourOptions];

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
            let updatedVar = { ...currentVar };

            // Check if the current variable is of type "reference" and the newValue is numeric
            // Also, ensure it's meant to be converted to "value-unit" by checking the defaultValue
            if (currentVar.type === "reference" && !isNaN(newValue) && ["global-border-width", "global-border-radius"].includes(currentVar.defaultValue)) {
                updatedVar = {
                    ...updatedVar,
                    type  : "value-unit",
                    value : newValue,
                    unit  : "px", // Assuming you want to convert these references to pixel values
                };
            } else {
                // For non-special cases, update the value directly
                updatedVar.value = newValue;
            }

            return {
                ...prevValues,
                [varName] : updatedVar,
            };
        });

        // Then, update your theme and CSS properties as needed
        updateThemeAndCSS(varName, newValue);
    };

    const updateThemeAndCSS = (varName, newValue) => {
        const varDetails = componentVariables[varName];
        let cssValue;

        // Directly use newValue for reference types to avoid nested var(--var(--value))
        if (varDetails.type === "reference") {
            cssValue = `var(--${newValue})`;
        } else if (varDetails.type === "value-unit") {
            cssValue = `${newValue}${varDetails.unit}`;
        } else {
            cssValue = newValue;
        }

        setCustomTheme(prevValues => (
            {
                ...prevValues,
                [varName] : cssValue,
            }
        ));

        // Uncomment if you want to apply the styles directly
        // document.documentElement.style.setProperty(`--${varName}`, cssValue);
    }

    // STEP 4 — Hope for the best.
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <Div id="component-configurator" className="demo-row" marginBottom="micro">
            <Row className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light80"
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

                        <Footer>
                            {component === "Button" && (
                                <Switch
                                    id="show-all-buttons"
                                    value="show-all-buttons"
                                    name="show-all-buttons"
                                    label="Show all buttons"
                                    checked={showAllButtons}
                                    onChange={(e) => setShowAllButtons(e.target.checked)}
                                />
                            )}
                        </Footer>
                    </Element>
                </Portion>
            </Row>

            <Row>
                {/* INDIVIDUAL LOCAL PROPS ///////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                Configure props
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
                                    isLoading && `    isLoading`,
                                    `>`,
                                    `    ${label}`,
                                    `</${component}>`,
                                ].filter(Boolean).join("\n")}
                            </CodeBlock>

                            {/* KIND =============================================================================== */}
                            {properties.includes("kind") && (
                                <>
                                    {component === "Button" || component === "Divider" && (
                                        <>
                                            <RadioTabGroup
                                                id="kind"
                                                label="Kind"
                                                name="kind"
                                                options={[
                                                    { id : "kind-opt-0", value : "custom", label : "custom" },
                                                    { id : "kind-opt-1", value : "primary", label : "primary" },
                                                    { id : "kind-opt-2", value : "secondary", label : "secondary" },
                                                    { id : "kind-opt-3", value : "tertiary", label : "tertiary" },
                                                ]}
                                                value={selectedKind}
                                                onChange={handleKindChange}
                                            />
                                            <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                        </>
                                    )}

                                    {component === "Callout" && (
                                        <>
                                            <RadioTabGroup
                                                id="kind"
                                                label="Kind"
                                                name="kind"
                                                options={[
                                                    { id : "kind-opt-0", value : "info", label : "info" },
                                                    { id : "kind-opt-1", value : "warning", label : "warning" },
                                                    { id : "kind-opt-2", value : "error", label : "error" },
                                                    { id : "kind-opt-3", value : "success", label : "success" },
                                                ]}
                                                value={selectedKind}
                                                onChange={handleKindChange}
                                            />
                                            <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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
                                        value={selectedPadding}
                                        onChange={handlePaddingChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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
                                        value={selectedSize}
                                        onChange={handleSizeChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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
                                        value={selectedShape}
                                        onChange={handleShapeChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
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
                                        value={selectedShadow}
                                        onChange={handleShadowChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                                </>
                            )}

                            {/* COLOURS ============================================================================ */}
                            {properties.includes("bgColour" || "bgColor" || "borderColour" || "borderColor" || "textColour" || "textColor")
                                ? (
                                    <Row marginBottom="none">
                                        {/* BG COLOUR ========================== */}
                                        {properties.includes("bgColour" || "bgColor") && (
                                            <Portion desktopSpan="half">
                                                <Select
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
                                    Set global theme values
                                </Text>
                            </Header>

                            {/* CODE BLOCK ========================================================================= */}
                            <CodeBlock language="css" showCopyButton marginBottom="micro" source={cssVariablesList} />

                            {/* BADGE ============================================================================== */}
                            {/* {component === "Badge" && ( */}
                            {/*     <BadgeThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}

                            {/* BREADCRUMBS ======================================================================== */}
                            {/* {component === "Breadcrumbs" && ( */}
                            {/*     <BreadcrumbsThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}

                            {/* BUTTON ============================================================================= */}
                            {/* {component === "Button" && ( */}
                            {/*     <ButtonThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}

                            {/* CALLOUT ============================================================================ */}
                            {/* {component === "Callout" && ( */}
                            {/*     <CalloutThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}

                            {/* CARD =============================================================================== */}
                            {/* {component === "Card" && ( */}
                            {/*     <CardThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}

                            {/* H-RULE ============================================================================= */}
                            {/* {component === "Divider" && ( */}
                            {/*     <DividerThemeConfigurator */}
                            {/*         componentVariables={componentVariables} */}
                            {/*         handleVariableChange={handleVariableChange} */}
                            {/*         colourOptions={colourOptions} */}
                            {/*     /> */}
                            {/* )} */}
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Div>
    );
};
