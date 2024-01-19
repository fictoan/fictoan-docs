"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Heading,
    HRule,
    Portion,
    RadioButton,
    Row,
    Text,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-home.css";

// CODE SNIPPETS ===============================================================
import { sampleRadioButton, sampleRadioButtonTheming, sampleRadioChecked, sampleRadioDisabled } from "./CodeSamples";

// DATA ========================================================================

const HomePage = () => {
    return (
        <Element as="article" id="page-radio-button">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Radio button</Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  USAGE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="cehckbox">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Usage</Heading>

                        <Text marginBottom="micro">
                            The <code>RadioButton</code> is a modified default <code>input type="radio"</code> element
                            to allow for better usability and styling.
                        </Text>

                        <CodeBlock source={sampleRadioButton} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            Of the above attributes, the <code>name</code> needs to match all the radio buttons you want
                            as a group.
                        </Text>

                        <RadioButton
                            id="radio-1"
                            name="choices-1"
                            value="yes"
                            label="Yes"
                        />

                        <RadioButton
                            id="radio-2"
                            name="choices-1"
                            value="no"
                            label="No"
                            defaultChecked
                        />

                        <RadioButton
                            id="radio-3"
                            name="choices-1"
                            value="maybe"
                            label="Maybe"
                        />
                    </Portion>
                </Row>
            </Element>


            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  STATES */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="states">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">States</Heading>
                    </Portion>

                    {/* CHECKED ============================================ */}
                    <Portion>
                        <Heading as="h6">Checked</Heading>

                        <Text marginBottom="micro">
                            The <code>defaultChecked</code> decides which button in the group is checked by default.
                        </Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleRadioChecked} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <RadioButton
                            id="radio-a"
                            name="choices-2"
                            value="yes"
                            label="Yes"
                            defaultChecked
                        />

                        <RadioButton
                            id="radio-b"
                            name="choices-2"
                            value="no"
                            label="No"
                        />
                    </Portion>

                    <Portion>
                        <HRule kind="tertiary" />
                    </Portion>

                    {/* DISABLED =========================================== */}
                    <Portion>
                        <Heading as="h6">Disabled</Heading>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleRadioDisabled} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <RadioButton
                            id="radio-i"
                            name="choices-3"
                            value="yes"
                            label="Yes"
                        />

                        <RadioButton
                            id="radio-j"
                            name="choices-3"
                            value="no"
                            label="No"
                        />

                        <RadioButton
                            id="radio-k"
                            name="choices-3"
                            value="maybe"
                            label="Maybe"
                            defaultChecked
                            disabled
                        />
                    </Portion>

                    <Portion>
                        <Text>You can apply the attributes together too.</Text>
                    </Portion>
                </Row>
            </Element>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  THEMING  */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="theming">
                <Row layout="grid" horizontalPadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h4" marginBottom="tiny">Theming</Heading>

                        <CodeBlock source={sampleRadioButtonTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </Element>
    );
};

export default HomePage;
