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
    InputField,
    ToastItem,
    ToastsWrapper,
    Button,
    Range, FormItemGroup, Checkbox,
CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-form.css";

// HOOKS ===============================================================================================================

// UTILS ===============================================================================================================

// DATA ================================================================================================================

const FormDocs = () => {
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
                    <Heading1>Form</Heading1>
                    <Text size="large" marginBottom="small">
                        A parent wrapper for all form elements, used to space them evenly
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li></li>
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
                                        id="spacing" label="Spacing" name="spacing"
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

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
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

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
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
                                        /* Nothing for the Form */
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

export default FormDocs;
