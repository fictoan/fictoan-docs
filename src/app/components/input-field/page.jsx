"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule,
    InputField,
    Callout,
    Article,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { PropsList } from "../../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./input-field.css";

// CODE SNIPPETS ===============================================================
import {
    sampleInput,
    sampleInputBasicProps,
    sampleInputHelpText,
    sampleInputRequired,
    sampleInputTheme,
} from "./CodeSamples";

// DATA ========================================================================
import { listOfInputFieldProps } from "./propsList";


const InputFieldDocs = () => {
    useEffect(() => {
        document.title = "Input field — Fictoan";
    }, []);

    const [pattern, setPattern] = useState("[a-zA-Z0-9_.+\\-]+@[a-zA-Z0-9\\-]+\\.[a-zA-Z0-9\\-.]+$");

    const handleInputChange = (event) => {
        setPattern(event.target.value);
    };

    const sampleInputValidation = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent here"
    validateThis
    pattern="${pattern}"
    errorText="Um, that isn’t a valid email"
/>`;

    return (
        <Article id="page-input-field">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="intro" marginTop="medium" marginBottom="small">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h1" className="text-hue">Input field</Heading>
                    </Portion>
                </Row>

                <PropsList propData={listOfInputFieldProps} />
            </Element>

            <HRule horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////// */}
            {/*  BASICS  */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="default">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Default</Heading>

                        <Text marginBottom="micro">
                            The <code>InputField</code> component is a simple, straightforward native element with some
                            added features.
                        </Text>

                        <CodeBlock source={sampleInput} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>InputField</code>, which looks like
                            this&mdash;
                        </Text>

                        <InputField />

                        <Text marginTop="micro">
                            It defaults to a text input, with a border that changes colour when active. The input always
                            takes the full-width of the parent container.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule horizontalMargin="huge" verticalMargin="small" />


            {/* //////////////////////////////////////////////////////////// */}
            {/* PROPS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="props">
                {/* LABEL and PLACEHOLDER ================================== */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Label and placeholder</Heading>

                        <Text marginBottom="micro">
                            For an input field to be useful, there are two main props: the <code>label</code>, and
                            the <code>placeholder</code>.
                        </Text>

                        <CodeBlock source={sampleInputBasicProps} language="jsx" marginBottom="micro" />

                        <InputField
                            label="This is a label"
                            placeholder="This is a placeholder"
                        />

                        <Text marginTop="micro">
                            The <code>label</code> sits above the box, and the <code>placeholder</code>, inside. On
                            focus, the <code>label</code> increases in weight, and the placeholder is hidden during
                            typing.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* HELP TEXT ============================================== */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Help text</Heading>

                        <Text marginBottom="micro">
                            The <code>helpText</code> prop allows you to add a description of what is a valid entry for
                            the input.
                        </Text>

                        <CodeBlock source={sampleInputHelpText} language="jsx" marginBottom="micro" />

                        <InputField
                            label="Email"
                            placeholder="Work email preferred"
                            helpText="Confirmation will be sent to this id"
                        />
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* REQUIRED =============================================== */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Required</Heading>

                        <Text marginBottom="micro">
                            The <code>required</code> flag adds a red asterisk to the left of the label.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleInputRequired} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <InputField
                            label="Email"
                            placeholder="Work email preferred"
                            helpText="Confirmation will be sent here"
                            required
                        />
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* VALIDATION ============================================= */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Validation</Heading>

                        <Text marginBottom="micro">
                            Input validation is done by adding a chain of props to the component—
                        </Text>

                        <Text marginBottom="nano">
                            <code>validateThis</code> to enable UI states for validation indication.
                        </Text>

                        <Text marginBottom="nano">
                            <code>pattern</code> to validate against a provided regex.
                        </Text>

                        <Text marginBottom="micro">
                            <code>errorText</code> to display mistakes in the input
                        </Text>

                        <Text marginTop="micro" marginBottom="micro">
                            Adding the <code>validateThis</code> flag enables a grey check mark at the right end of the
                            input field, which either turns green on valid entry, or into a red cross mark on invalid
                            entry.
                        </Text>

                        <Text marginBottom="micro">
                            You can use <code>type</code> to enable basic in-browser validation&mdash;but just this
                            prop along is not recommended as you’ll have no control over the underlying validation
                            expression.
                        </Text>

                        <Callout kind="info">
                            <Text textColour="white">
                                The error state is displayed when the input loses focus, so that it doesn’t start
                                screaming
                                bloody murder from the get go.
                            </Text>
                        </Callout>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleInputValidation} language="jsx" />

                        <Element as="div" id="test-regex" verticallyCentreItems marginTop="nano" marginBottom="micro">
                            <Text>Wanna test it?</Text>
                            <InputField
                                placeholder="Paste a regex here"
                                onChange={handleInputChange}
                            />
                        </Element>
                    </Portion>

                    <Portion>
                        <InputField
                            id="email"
                            label="Email"
                            placeholder="Work email preferred"
                            validateThis
                            helpText="Confirmation will be sent here"
                            errorText="Um, that isn’t a valid email"
                            autoComplete="off"
                            pattern={pattern}
                            required
                        />

                        <Text marginTop="micro">
                            Keep the <code>helpText</code> and the <code>errorText</code> short for best results.
                        </Text>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" verticalMargin="small" />


                {/* //////////////////////////////////////////////////////////// */}
                {/* THEMING */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="theming">
                    <Row horizontalPadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h4" marginBottom="tiny">Theme</Heading>

                            <CodeBlock source={sampleInputTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </Article>
    );
};

export default InputFieldDocs;
