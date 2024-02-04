"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article,
    Element,
    Form,
    Card,
    Header,
    RadioTabGroup,
    Select,
    Range,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-card.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { cardProps } from "./config";


const CardDocs = () => {
    const { componentVariables, cssVariablesList, handleVariableChange } = useThemeVariables(cardProps.variables);

    const [label, setLabel] = useState("Text");
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("");
    const [selectedBorderColour, setSelectedBorderColour] = useState("");

    const handlePaddingChange = (event) => {
        setSelectedPadding(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShapeChange = (event) => {
        setSelectedShape(event.target.value !== "none" ? event.target.value : undefined);
    }

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    }

    const handleBorderColourChange = (event) => {
        setSelectedBorderColour(event.target.value !== "none" ? event.target.value : undefined);
    }

    return (
        <Article id="page-card">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Card</Heading>
                    <Text size="large" marginBottom="small">
                        The card is a simple box that encloses content within, and is one of the oft-used components
                        in modern UI.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The card always takes up 100% width of its parent</Text>
                    <Text>&bull; It grows to take the height of its content</Text>
                    <Text>&bull; Border-radius values work only when <code>shape="rounded"</code> is present</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/*  CONFIGURATOR ////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion>
                    <Element
                        id="component-wrapper"
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        <Card
                            id="interactive-component"
                            {...(
                                selectedPadding !== undefined ? { padding : selectedPadding } : {}
                            )}
                            {...(
                                selectedShape !== undefined ? { shape : selectedShape } : {}
                            )}
                            {...(
                                selectedBgColour !== undefined ? { bgColour : selectedBgColour } : {}
                            )}
                            {...(
                                selectedBorderColour !== undefined ? { borderColor : selectedBorderColour } : {}
                            )}
                        >
                            {label}
                        </Card>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Card`,
                                            selectedPadding ? `    padding="${selectedPadding}"` : null,
                                            selectedShape ? `    shape="${selectedShape}"` : null,
                                            selectedBgColour ? `    bgColour="${selectedBgColour}"` : null,
                                            selectedBorderColour ? `    borderColour="${selectedBorderColour}"` : null,
                                            `>${label ? `\n    ${label}\n` : ""}</Card>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* SIZE =========================================================================== */}
                                <Portion>
                                    <RadioTabGroup
                                        id="padding" label="Padding" name="padding"
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

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="nano" />
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

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
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
                                        defaultValue={selectedBgColour || "select-a-colour"}
                                        onChange={handleBgColourChange}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ================================================================== */}
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
                            </Row>
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
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

                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["card-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("card-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["card-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("card-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["card-border-radius"].value}
                                        onChange={(e) => handleVariableChange("card-border-radius", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["card-border-radius"].unit}
                                    />
                                </Portion>

                                {/* BORDER WIDTH =================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={componentVariables["card-border-width"].value}
                                        onChange={(e) => handleVariableChange("card-border-width", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["card-border-width"].unit}
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

export default CardDocs;
