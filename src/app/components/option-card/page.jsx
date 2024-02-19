"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Heading,
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
    OptionCardsGroup,
    OptionCard,
    Checkbox, Div,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-option-card.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { optionCardProps } from "./config";


const SelectableCardDocs = () => {
    const { componentVariables, cssVariablesList, handleVariableChange } = useThemeVariables(optionCardProps.variables);

    // CUSTOMISE =======================================================================================================
    const [allowMultipleSelections, setAllowMultipleSelections] = useState(false);
    const [showTickIcon, setShowTickIcon] = useState(false);

    // THEME ===========================================================================================================

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

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/*  CONFIGURATOR ////////////////////////////////////////////////////////////////////////////////////// */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                    >
                        <Div marginBottom="tiny">
                            <Text>Default</Text>
                            <OptionCardsGroup>
                                <OptionCard id="card-a1">Card 1 Content</OptionCard>
                                <OptionCard id="card-a2">Card 2 Content</OptionCard>
                                <OptionCard id="card-a3">Card 3 Content</OptionCard>
                            </OptionCardsGroup>
                        </Div>

                        <Text marginBottom="nano">Customise as you wish</Text>
                        <OptionCardsGroup allowMultipleSelections showTickIcon>
                            <Row marginBottom="none">
                                <Portion desktopSpan="one-third">
                                    <OptionCard
                                        id="card=b1"
                                        padding="micro" bgColour="white" shape="rounded"
                                    >
                                        Card 1 Content
                                    </OptionCard>
                                </Portion>

                                <Portion desktopSpan="one-third">
                                    <OptionCard
                                        id="card=b2"
                                        padding="micro" bgColour="white" shape="rounded"
                                    >
                                        Card 1 Content
                                    </OptionCard>
                                </Portion>

                                <Portion desktopSpan="one-third">
                                    <OptionCard
                                        id="card=b3"
                                        padding="micro" bgColour="white" shape="rounded"
                                    >
                                        Card 1 Content
                                    </OptionCard>
                                </Portion>
                            </Row>
                        </OptionCardsGroup>
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
                                            `<OptionCardsGroup`,
                                            allowMultipleSelections ? `    allowMultipleSelections` : null,
                                            showTickIcon ? `    showTickIcon` : null,
                                            `>`,
                                            `    <OptionCard id="card=b1">Card 1 Content</OptionCard>`,
                                            `    <OptionCard id="card=b2">Card 2 Content</OptionCard>`,
                                            `    <OptionCard id="card=b3">Card 3 Content</OptionCard>`,
                                            `</OptionCardsGroup>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* MULTIPLE SELECTION ============================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-multiple-selections"
                                        value="checkbox-multiple-selections"
                                        name="checkbox-multiple-selections"
                                        label="Allow multiple selections"
                                        checked={allowMultipleSelections}
                                        onChange={() => setAllowMultipleSelections(event.target.checked)}
                                    />

                                    <Divider kind="tertiary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SIZE =========================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-show-tick"
                                        value="checkbox-show-tick"
                                        name="checkbox-show-tick"
                                        label="Show tick on hover and selection"
                                        checked={showTickIcon}
                                        onChange={() => setShowTickIcon(event.target.checked)}
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
                            </Row>

                            {/* HOVER ////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text size="large" weight="700">Hover</Text>
                                </Portion>

                                {/* BORDER WIDTH =================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={componentVariables["option-card-border-width"].value}
                                        onChange={(e) => handleVariableChange("option-card-border-width", e.target.value)}
                                        suffix={componentVariables["option-card-border-width"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>

                                <Portion desktopSpan="half" />

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["option-card-bg-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("option-card-bg-hover", e.target.value)}
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
                                        defaultValue={componentVariables["option-card-border-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("option-card-border-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                            {/* SELECTED /////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text size="large" weight="700">Selected</Text>
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
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["option-card-bg-selected"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("option-card-bg-selected", e.target.value)}
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
                                        defaultValue={componentVariables["option-card-border-selected"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("option-card-border-selected", e.target.value)}
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

export default SelectableCardDocs;
