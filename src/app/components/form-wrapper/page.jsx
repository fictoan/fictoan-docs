"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    InputField,
    ToastItem,
    ToastsWrapper,
    Button,
    Range, FormItemGroup, Checkbox,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-form.css";

// HOOKS ===============================================================================================================

// UTILS ===============================================================================================================

// DATA ================================================================================================================

const ToastDocs = () => {
    // SAMPLE ==========================================================================================================
    const [selectedSpacing, setSelectedSpacing] = useState("");
    const [isJoint, setIsJoint] = useState(false);
    const [isButtonFullWidth, setIsButtonFullWidth] = useState(false);

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================


    return (
        <Article id="page-form">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Form</Heading>
                    <Text size="large" marginBottom="small">
                        The component is
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; </Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

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
                        <Row horizontalPadding="large" marginBottom="none">
                            <Portion>
                                <Card padding="micro" shape="rounded" shadow="soft">
                                    <Text size="large" weight="700" marginBottom="micro">Sign up</Text>

                                    <Form spacing={selectedSpacing}>
                                        <FormItemGroup isJoint={isJoint}>
                                            <InputField label="First name" />
                                            <InputField label="Last name" />
                                        </FormItemGroup>

                                        <InputField label="Email" />

                                        <InputField label="Address" />

                                        <Button
                                            kind="primary"
                                            {...(isButtonFullWidth ? { isFullWidth : true } : {})}
                                        >
                                            Submit
                                        </Button>
                                    </Form>
                                </Card>
                            </Portion>
                        </Row>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
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
                                            `<Form${selectedSpacing && ` spacing="${selectedSpacing}"`}>`,
                                            `    <FormItemGroup${isJoint ? " isJoint" : ""}>`,
                                            `        <InputField label="First name" />`,
                                            `        <InputField label="Last name" />`,
                                            `    </FormItemGroup>\n`,
                                            `    <InputField label="Email" />\n`,
                                            `    <InputField label="Address" />\n`,
                                            `    <Button kind="primary"${isButtonFullWidth ? ` isFullWidth` : ""}>Submit</Button>`,
                                            `</Form>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* POSITION ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="spacing" label="Size" name="spacing"
                                        options={[
                                            { id : "spacing-opt-0", value : "none", label : "none" },
                                            { id : "spacing-opt-1", value : "nano", label : "nano" },
                                            { id : "spacing-opt-2", value : "micro", label : "micro" },
                                            { id : "spacing-opt-3", value : "tiny", label : "tiny" },
                                            { id : "spacing-opt-4", value : "small", label : "small" },
                                            { id : "spacing-opt-5", value : "medium", label : "medium" },
                                            { id : "spacing-opt-6", value : "large", label : "large" },
                                            { id : "spacing-opt-7", value : "huge", label : "huge" },
                                        ]}
                                        defaultValue={selectedSpacing}
                                        onChange={() => setSelectedSpacing(event.target.value)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* IS JOINT ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-is-joint"
                                        value="checkbox-is-joint"
                                        name="checkbox-is-joint"
                                        label="Join inputs inside the FormItemGroup"
                                        checked={isJoint}
                                        onChange={() => setIsJoint(event.target.checked)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* IS JOINT ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-button-full-width"
                                        value="checkbox-button-full-width"
                                        name="checkbox-button-full-width"
                                        label="Make button full width"
                                        checked={isButtonFullWidth}
                                        onChange={() => setIsButtonFullWidth(event.target.checked)}
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
                                    <CodeBlock language="css">
                                        // Nothing for the Form
                                    </CodeBlock>
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default ToastDocs;
