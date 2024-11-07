"use client";

// FRAMEWORK ===========================================================================================================
import React, { useState } from "react";

// INTERFACE ===========================================================================================================
import {
    Element,
    Heading1,
    Heading4,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    Checkbox,
    Select,
    Accordion,
    CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-accordion.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import { accordionProps } from "./config";

const AccordionDocs = () => {
    // SAMPLE ==========================================================================================================
    const [makeFullWidth, setMakeFullWidth] = useState(false);

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(accordionProps.variables);


    return (
        <Article id="page-toast">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Accordion</Heading1>
                    <Text size="large" marginBottom="small">
                        A simple click to expand/collapse block element.
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>The <code>summary</code> accepts any React node as a child</li>
                        <li>The component is typically used with the <code>isFullWidth</code> prop</li>
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
                        <Accordion
                            isFullWidth={makeFullWidth}
                            summary={(
                                <Text>Click me</Text>
                            )}
                        >
                            <Text>Accordion content</Text>
                        </Accordion>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Accordion`,
                                            makeFullWidth ? `    isFullWidth` : null,
                                            `    summary={(`,
                                            `        <Text>Click me</Text>`,
                                            `    )}`,
                                            `>`,
                                            `    <Text>Accordion content</Text>`,
                                            `</Accordion>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* COPY BUTTON ==================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-full-width"
                                        value="checkbox-full-width"
                                        name="checkbox-full-width"
                                        label="Make full width"
                                        checked={makeFullWidth}
                                        onChange={() => setMakeFullWidth(event.target.checked)}
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
                                        id="accordion-chevron"
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
