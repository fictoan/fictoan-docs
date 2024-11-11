"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Badge,
    Card,
    Form,
    Header,
    InputField,
    RadioTabGroup,
    Range,
    SelectWithSearch,
    CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-badge.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import { badgeProps } from "./config";


const BadgeDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(badgeProps.variables);

    const [label, setLabel] = useState("Text");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("");
    const [selectedBorderColour, setSelectedBorderColour] = useState("");
    const [selectedTextColour, setSelectedTextColour] = useState("");


    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShapeChange = (event) => {
        setSelectedShape(event.target.value !== "none" ? event.target.value : undefined);
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
        <Article id="page-badge">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Badge</Heading1>
                    <Text size="large" marginBottom="small">
                        The badge is a small inline element that can be used to highlight a piece of information.
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>The badge is a simple, styled <code>mark</code> element</li>
                        <li>You have to manually align it with its sibling</li>
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
                        <Badge
                            id="interactive-component"
                            {...(
                                selectedShape !== undefined ? { shape : selectedShape } : {}
                            )}
                            {...(
                                selectedSize !== undefined ? { size : selectedSize } : {}
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
                        >
                            {label}
                        </Badge>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
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
                                            `<Badge`,
                                            selectedShape ? `    shape="${selectedShape}"` : null,
                                            selectedSize ? `    size="${selectedSize}"` : null,
                                            selectedBgColour ? `    bgColour="${selectedBgColour}"` : null,
                                            selectedBorderColour ? `    borderColour="${selectedBorderColour}"` : null,
                                            selectedTextColour ? `    textColour="${selectedTextColour}"` : null,
                                            `>${label ? `\n    ${label}\n` : ""}</Badge>`,
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

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                                </Portion>

                                {/* SIZE =========================================================================== */}
                                <Portion>
                                    <RadioTabGroup
                                        id="size" label="Size" name="size"
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

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                                </Portion>

                                {/* SHAPE ========================================================================== */}
                                <Portion>
                                    <RadioTabGroup
                                        id="shape" label="Shape" name="shape"
                                        options={[
                                            { id : "shape-opt-0", value : "none", label : "none" },
                                            { id : "shape-opt-1", value : "rounded", label : "rounded" },
                                            { id : "shape-opt-2", value : "curved", label : "curved" },
                                        ]}
                                        defaultValue={selectedShape}
                                        onChange={handleShapeChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
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
                                        defaultValue={selectedBgColour || "select-a-colour"}
                                        onChange={handleBgColourChange}
                                        isFullWidth
                                        allowMultiSelect
                                        badgeBgColour="red-light-70" badgeTextColour="red"
                                        allowCustomEntries
                                    />
                                </Portion>

                                {/* BORDER COLOUR ================================================================== */}
                                <Portion desktopSpan="half">
                                    <SelectWithSearch
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

                                {/* TEXT COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <SelectWithSearch
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
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
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

                                <Portion>
                                    <Text marginBottom="micro">The font for the badge is set to take the <code>--paragraph-font</code> by default. You can change it in the theme file.</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["badge-border-radius"].value}
                                        onChange={(e) => handleVariableChange("badge-border-radius", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix="px"
                                    />
                                </Portion>

                                {/* BORDER WIDTH =================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["badge-border-width"].value}
                                        onChange={(e) => handleVariableChange("badge-border-width", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix="px"
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

export default BadgeDocs;
