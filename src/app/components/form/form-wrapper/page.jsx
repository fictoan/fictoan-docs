"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import {
    CheckBox, Element,
    FormItem,
    FormItemGroup,
    Form,
    Heading,
    HRule,
    InputField,
    Portion,
    RadioButton,
    Row,
    Switch,
    Text,
} from "fictoan-react";

// COMPONENTS ==================================================================
import { CodeBlock } from "fictoan-react/components";

// STYLES ======================================================================
import "./page-form.css";

// CODE SNIPPETS ===============================================================
import { snippetForm, snippetFormItem, snippetTextInput, snippetInputValidation } from "./CodeSamples";

// DATA ========================================================================


const FormDocs = () => {
    return (
        <Element as="article" id="page-form">
            <Element as="section" id="intro" marginTop="medium" marginBottom="small">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h1" marginBottom="micro">Form wrapper</Heading>

                        <Text size="large">
                            The Form parent allows for consistent spacing and margins between form elements.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <section id="add-content">
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* USAGE */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4">Usage</Heading>
                    </Portion>
                </Row>

                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Text marginBottom="micro">
                            The <code>Form</code> component is used to encapsulate all the form elements with proper
                            spacing and margins.
                        </Text>

                        <CodeBlock source={snippetForm} language="jsx" />
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" verticalMargin="small" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*   FORM UNIT  */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Form unit</Heading>
                        <Text>
                            The <code>FormItem</code> component is used to wrap individual elements and ensures
                            equal margins and alignment between them.
                        </Text>
                    </Portion>
                </Row>

                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Form spacing="huge">
                            <FormItemGroup>
                                <InputField label="Label" />

                                <InputField label="Label" />
                            </FormItemGroup>

                            <FormItemGroup spacing="tiny">
                                <InputField label="Label" />

                                <InputField label="Label" />

                                <InputField label="Label" />
                            </FormItemGroup>
                        </Form>

                        <CodeBlock source={snippetFormItem} language="jsx" />
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" verticalMargin="small" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*   TEXT INPUT  */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            </section>
        </Element>
    );
};

export default FormDocs;
