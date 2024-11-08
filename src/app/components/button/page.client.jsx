"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    Select,
    Button,
    Range, InputField, Checkbox,
CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-button.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import { buttonProps } from "./config";

const ButtonDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(buttonProps.variables);

    // CUSTOMISE =======================================================================================================
    const [label, setLabel] = useState("Text");
    const [selectedKind, setSelectedKind] = useState("none");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedShadow, setSelectedShadow] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState(null);
    const [selectedBorderColour, setSelectedBorderColour] = useState(undefined);
    const [selectedTextColour, setSelectedTextColour] = useState("");

    // THEME ===========================================================================================================


    const handleIsLoadingChange = (event) => {
        setIsLoading(event.target.checked);
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

    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium">
                <Portion>
                    <Heading1>Button</Heading1>
                    <Text size="large" marginBottom="small">
                        A clickable component to trigger an action or an event
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>
                            The <code>kind</code> prop accepts <code>primary / secondary / tertiary</code> and
                            also <code>custom</code>
                        </li>
                        <li>
                            For the first three &ldquo;named&rdquo; types, the background, text and border colours are
                            defined in the theme, to ensure consistency. The <code>custom</code> value lets you add them
                            manually.
                        </li>
                    </ul>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        <Button
                            id="interactive-component"
                            {...(
                                selectedKind !== undefined ? { kind : selectedKind } : {}
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
                        </Button>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Button`,
                                            selectedKind && `    kind="${selectedKind}"`,
                                            selectedShape && `    shape="${selectedShape}"`,
                                            selectedSize && `    size="${selectedSize}"`,
                                            selectedShadow && `    shadow="${selectedShadow}"`,
                                            selectedBgColour && `    bgColour="${selectedBgColour}"`,
                                            selectedBorderColour && `    borderColour="${selectedBorderColour}"`,
                                            selectedTextColour && `    textColour="${selectedTextColour}"`,
                                            isLoading && `    isLoading`,
                                            `>`,
                                            `    ${label}`,
                                            `</Button>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* LABEL ========================================================================== */}
                                <Portion>
                                    <InputField
                                        type="text"
                                        label="Label"
                                        placeholder="Label"
                                        onChange={(e) => setLabel(e.target.value)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-loading"
                                        value="checkbox-loading"
                                        name="checkbox-loading"
                                        label="Is loading"
                                        checked={isLoading}
                                        onChange={handleIsLoadingChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
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
                                        defaultValue={selectedKind}
                                        onChange={() => setSelectedKind(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="size"
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
                                        onChange={() => setSelectedSize(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="shape"
                                        label="Shape"
                                        name="shape"
                                        options={[
                                            { id : "shape-opt-0", value : "none", label : "none" },
                                            { id : "shape-opt-1", value : "rounded", label : "rounded" },
                                            { id : "shape-opt-2", value : "curved", label : "curved" },
                                        ]}
                                        defaultValue={selectedShape}
                                        onChange={() => setSelectedShape(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="shadow" label="Shadow" name="shadow"
                                        options={[
                                            { id : "shadow-opt-0", value : "none", label : "none" },
                                            { id : "shadow-opt-1", value : "mild", label : "mild" },
                                            { id : "shadow-opt-3", value : "hard", label : "hard" },
                                            { id : "shadow-opt-2", value : "soft", label : "soft" },
                                        ]}
                                        defaultValue={selectedShadow}
                                        onChange={() => setSelectedShadow(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* BG COLOUR ========================== */}
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

                                {/* BG COLOUR ========================== */}
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

                                {/* BG COLOUR ========================== */}
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
                            </Row>
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                    Set values globally
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>
                            </Row>

                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700" marginBottom="nano">
                                        Primary button — default state
                                    </Text>
                                </Portion>

                                {/* BORDER RADIUS ============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["button-primary-border-radius-default"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-radius-default", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-radius-default"].unit}
                                    />
                                </Portion>

                                {/* BORDER WIDTH =============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={componentVariables["button-primary-border-width-default"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-width-default", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-width-default"].unit}
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-bg-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-bg-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ========================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-border-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-border-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ================================================ */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-text-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-text-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" verticalMargin="micro" />

                            {/* HOVER ////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700" marginBottom="nano">
                                        Primary button — hover state
                                    </Text>
                                </Portion>

                                {/* BORDER RADIUS ============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={buttonProps.variables["button-primary-border-radius-hover"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-radius-hover", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-radius-hover"].unit}
                                    />
                                </Portion>

                                {/* BORDER WIDTH =============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={componentVariables["button-primary-border-width-hover"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-width-hover", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-width-hover"].unit}
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-bg-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-bg-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ========================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-border-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-border-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ================================================ */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-text-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-text-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" verticalMargin="micro" />

                            {/* HOVER ////////////////////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700" marginBottom="nano">
                                        Primary button — disabled state
                                    </Text>
                                </Portion>

                                {/* BORDER RADIUS ============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={buttonProps.variables["button-primary-border-radius-disabled"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-radius-disabled", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-radius-disabled"].unit}
                                    />
                                </Portion>

                                {/* BORDER WIDTH =============================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={componentVariables["button-primary-border-width-disabled"].value}
                                        onChange={(e) => handleVariableChange("button-primary-border-width-disabled", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["button-primary-border-width-disabled"].unit}
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-bg-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-bg-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ========================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-border-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-border-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ================================================ */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-text-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-text-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" verticalMargin="micro" />

                            {/* SPINNER //////////////////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700" marginBottom="nano">
                                        Primary button — loading state
                                    </Text>
                                </Portion>

                                {/* SPINNER COLOUR ============================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Spinner colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={buttonProps.variables["button-primary-spinner-loading"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("button-primary-spinner-loading", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default ButtonDocs;
