"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";
import { FormEvent, FormEventHandler, ChangeEvent } from "react";


// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Div,
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
    Range,
    FormItemGroup,
    Checkbox,
    CodeBlock,
    Select,
    RadioButton,
    Switch,
    ListBox, RadioGroup, TextArea, CheckboxGroup, SwitchGroup,
} from "fictoan-react";

// STYLES ==============================================================================================================
import "./page-form.css";
import { SampleForm } from "@/app/components/form/SampleForm";

const FormDocs = () => {
    // CONFIGURATOR STATE =============================================================================================
    const [ selectedSpacing, setSelectedSpacing ]     = useState("small");
    const [ isJoint, setIsJoint ]                     = useState(false);
    const [ isButtonFullWidth, setIsButtonFullWidth ] = useState(false);

    return (
        <Article id="page-form">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Form</Heading1>
                    <Text size="large" marginBottom="small">
                        A parent wrapper for all form elements, used to space them evenly
                    </Text>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            <Row horizontalPadding="small" className="rendered-component">
                <Portion id="component-wrapper">
                    <Div
                        padding="small" shape="rounded" bgColour="slate-light80"
                        data-centered-children
                    >
                        <SampleForm
                            spacing={selectedSpacing}
                            isJoint={isJoint}
                            isButtonFullWidth={isButtonFullWidth}
                        />
                    </Div>
                </Portion>

                {/* CONFIGURATOR */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Configure props
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock withSyntaxHighlighting language="jsx" showCopyButton
                                               marginBottom="micro">
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

                                <Portion>
                                    <RadioTabGroup
                                        id="spacing"
                                        label="Spacing"
                                        name="spacing"
                                        options={[
                                            { id : "spacing-opt-0", value : "none", label : "none" },
                                            { id : "spacing-opt-1", value : "nano", label : "nano" },
                                            { id : "spacing-opt-2", value : "micro", label : "micro" },
                                            { id : "spacing-opt-3", value : "tiny", label : "tiny" },
                                            { id : "spacing-opt-4", value : "small", label : "small" },
                                            { id : "spacing-opt-5", value : "medium", label : "medium" },
                                            { id : "spacing-opt-6", value : "large", label : "large" },
                                            { id : "spacing-opt-7", value : "huge", label : "huge" },
                                            { id : "spacing-opt-8", value : "gigantic", label : "gigantic" },
                                            { id : "spacing-opt-9", value : "enormous", label : "enormous" },
                                            { id : "spacing-opt-10", value : "colossal", label : "colossal" },
                                            { id : "spacing-opt-11", value : "massive", label : "massive" },
                                            { id : "spacing-opt-12", value : "giga", label : "giga" },
                                            { id : "spacing-opt-13", value : "tera", label : "tera" },
                                            { id : "spacing-opt-14", value : "peta", label : "peta" },
                                            { id : "spacing-opt-15", value : "exa", label : "exa" },
                                        ]}
                                        value={selectedSpacing}
                                        onChange={(value) => setSelectedSpacing(value)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                <Portion>
                                    <Checkbox
                                        id="checkbox-is-joint"
                                        label="Join inputs inside the FormItemGroup"
                                        checked={isJoint}
                                        onChange={(checked) => setIsJoint(checked)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                <Portion>
                                    <Checkbox
                                        id="checkbox-button-full-width"
                                        value="checkbox-button-full-width"
                                        name="checkbox-button-full-width"
                                        label="Make button full width"
                                        checked={isButtonFullWidth}
                                        onChange={(checked) => setIsButtonFullWidth(checked)}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Form>
                </Portion>
            </Row>
        </Article>
    );
};

export default FormDocs;
