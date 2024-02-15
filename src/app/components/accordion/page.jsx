"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Accordion,
    Heading,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    Select,
    Checkbox,
    Div,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-accordion.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";

const AccordionDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================
    const [openAccordion, setOpenAccordion] = useState(false);

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================


    return (
        <Article id="page-toast">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="small">Accordion</Heading>
                </Portion>

                <Portion>
                    <Heading as="h5" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The component is a styled <code>details</code> and <code>summary</code> elements</Text>
                    <Text>&bull; It takes the full width of its parent container</Text>
                    <Text>&bull; You can style it like a card, using <code>bgColour</code>, <code>borderColour</code> etc</Text>
                    <Text>&bull; It’s toggled by using the <code>open</code> prop</Text>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Div padding="small" shape="rounded" bgColour="slate-light-80">
                        <Accordion
                            summary="Hello there, folks!"
                            open={openAccordion}
                        >
                            <Text>
                                More content visible when open
                            </Text>
                        </Accordion>
                    </Div>
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
                                            `<Accordion`,
                                            `    summary="Hello there, folks!"`,
                                            openAccordion ? `    open` : null,
                                            `>`,
                                            `    <Text>`,
                                            `        What's up?`,
                                            `    </Text>`,
                                            `</Accordion>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* OVERLAY ======================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-open"
                                        value="checkbox-open"
                                        name="checkbox-open"
                                        label="Open"
                                        checked={openAccordion}
                                        onChange={() => setOpenAccordion(event.target.checked)}
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

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Chevron"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["accordion-chevron"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("accordion-chevron", e.target.value)}
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

export default AccordionDocs;
