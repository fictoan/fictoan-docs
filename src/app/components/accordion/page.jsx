"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
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
    ToastItem,
    ToastsWrapper,
    Range,
    Accordion,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-toast.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";

const AccordionDocs = () => {
    // SAMPLE ==========================================================================================================

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);


    return (
        <Article id="page-toast">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Accordion</Heading1>
                    <Text size="large" marginBottom="small">
                        The component is
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <Text>&bull; </Text>
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
                            isFullWidth
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
                                            `const [showSampleToast, setShowSampleToast] = useState(false); \n`,
                                            `<ToastsWrapper`,
                                            `>`,
                                            `    <ToastItem`,
                                            `        showWhen={showSampleToast}`,
                                            `        closeWhen={() => setShowSampleToast(false)}`,
                                            `    >`,
                                            `        <Text>Hello there, folks!</Text>`,
                                            `    </ToastItem>`,
                                            `</ToastsWrapper>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
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
                                        id="toast-bg"
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["toast-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("toast-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        id="toast-text"
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["toast-text"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("toast-text", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion>
                                    <Range
                                        id="toast-border-radius"
                                        label="Border radius"
                                        value={componentVariables["toast-border-radius"].value}
                                        onChange={(e) => handleVariableChange("toast-border-radius", e.target.value)}
                                        suffix={componentVariables["toast-border-radius"].unit}
                                        min={0} max={50} step={1}
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
