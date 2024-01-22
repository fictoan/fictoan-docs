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
    PinInputField,
    Article
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { PropsList } from "../../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./pin-input-field.css";

// CODE SNIPPETS ===============================================================
import {
    samplePinInput,
    sampleInputNumberOfFields,
    sampleInputHelpText,
    sampleInputRequired,
    sampleInputTheme, samplePinInputType, samplePinInputMask, samplePinInputOTP,
} from "./CodeSamples";

// DATA ========================================================================
import { listOfPinInputFieldProps } from "./propsList";
import Link from "next/link";


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
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="intro" marginTop="medium" marginBottom="small">
                <Row layout="flexbox" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h1" className="text-hue">Pin Input field</Heading>
                    </Portion>
                </Row>

                <PropsList propData={listOfPinInputFieldProps} />
            </Element>

            <HRule horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  BASICS  */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="default">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Default</Heading>

                        <Text marginBottom="micro">
                            The <code>PinInputField</code> uses an array of <code>InputField</code> component, but added
                            with superpowers.
                        </Text>

                        <Text marginBottom="micro">As the bare minimum, add the <code>numberOfFields</code> prop.</Text>

                        <CodeBlock source={samplePinInput} language="jsx" marginBottom="micro" />

                        <PinInputField numberOfFields={4} />
                    </Portion>
                </Row>
            </Element>


            <HRule horizontalMargin="huge" verticalMargin="small" />


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* PROPS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="props">
                {/* NUMBER OF FIELDS ======================================= */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Number of fields</Heading>

                        <Text marginBottom="micro">
                            This decides the length of PIN you want to accept.
                        </Text>

                        <CodeBlock source={sampleInputNumberOfFields} language="jsx" marginBottom="micro" />

                        <PinInputField numberOfFields={3} />
                        <PinInputField numberOfFields={5} />
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* TYPE =================================================== */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Type</Heading>

                        <Text marginBottom="micro">
                            <code>numeric</code>, <code>alphanumeric</code>
                        </Text>

                        <Text marginBottom="micro">
                            This prop decides whether the PIN should be just digits, or accept both alphabets and
                            digits.
                        </Text>

                        <CodeBlock source={samplePinInputType} language="jsx" marginBottom="micro" />

                        <Text marginBottom="nano">Numeric:</Text>
                        <PinInputField numberOfFields={4} type="numeric" />

                        <Text marginTop="micro" marginBottom="nano">Alphanumeric:</Text>
                        <PinInputField numberOfFields={4} type="alphanumeric" />

                        <Text marginTop="micro">
                            The <code>numeric</code> type also brings up the numpad by default on phones, when the Pin
                            input is in focus.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* MASK =================================================== */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Mask</Heading>

                        <Text marginBottom="micro">
                            This hides the entered character and shows a dot instead.
                        </Text>

                        <CodeBlock source={samplePinInputMask} language="jsx" marginBottom="micro" />

                        <PinInputField numberOfFields={4} mask />
                    </Portion>
                </Row>


                <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


                {/* OTP ==================================================== */}
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">OTP</Heading>

                        <Text marginBottom="micro">
                            Add the <code>isOTP</code> prop, and on supported OSes, the incoming SMS will suggested as a
                            paste-able value.
                        </Text>

                        <CodeBlock source={samplePinInputOTP} language="jsx" marginBottom="micro" />

                        <PinInputField numberOfFields={4} isOTP />
                    </Portion>
                </Row>


                <HRule horizontalMargin="huge" verticalMargin="small" />


                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* THEMING */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="theming">
                    <Row layout="grid" horizontalPadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h4" marginBottom="tiny">Theme</Heading>

                            <Text>Same as <Link href="/components/form/input-field">InputField</Link>.</Text>
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </Article>
    );
};

export default InputFieldDocs;
