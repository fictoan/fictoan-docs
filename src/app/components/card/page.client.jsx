"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
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
    Element,
    Form,
    Card,
    Header,
    RadioTabGroup,
    Select,
    Range,
    CodeBlock,
    Section
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-card.css";

// HOOKS ===============================================================================================================
import { createThemeConfigurator } from "../../../utils/themeConfigurator";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import "../../../styles/fictoan-theme.css";


const CardDocs = () => {
    const CardComponent = (varName) => {
        return varName.startsWith("card-");
    };
    
    const {
        interactiveElementRef,
        componentProps,
        cssVariablesList,
        themeConfigurator,
    } = createThemeConfigurator(CardComponent);

    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("");
    const [selectedBorderColour, setSelectedBorderColour] = useState("");

    const handlePaddingChange = (event) => {
        setSelectedPadding(event.target.value !== "none" ? event.target.value : undefined);
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

    return (
        <Article id="page-card">
            <Section>
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                    <Portion>
                        <Heading1 marginBottom="micro">Card</Heading1>
                        <Text size="large" marginBottom="small">
                            A box to put all sorts of content inside
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading4 marginBottom="micro">Characteristics</Heading4>
                        <ul>
                            <li>Accepts any React node as a child</li>
                            <li>The card always takes up 100% width of its parent</li>
                            <li>It grows to take the height of its content</li>
                            <li>Border-radius values work only when <code>shape="rounded"</code> is present</li>
                        </ul>
                    </Portion>
                </Row>
            </Section>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light80"
                        data-centered-children
                    >
                        <Card
                            id="interactive-component"
                            ref={interactiveElementRef}
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
                            {...componentProps}
                        >
                            Content goes here
                        </Card>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Configure props
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
                                            `>`,
                                            `    {/* Content goes here */}`,
                                            `</Card>`,
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
                                        value={selectedPadding}
                                        onChange={handlePaddingChange}
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
                                        value={selectedShape}
                                        onChange={handleShapeChange}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" verticalMargin="nano" />
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
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Set global theme values
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock
                                        id="interactive-component-theme-values"
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>
                            </Row>

                            {/* Render the controls directly */}
                            {themeConfigurator && themeConfigurator()}
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default CardDocs;
