"use client";

// EXTERNAL DEPS ===============================================================
import React, { useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Checkbox,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Switch,
    Text,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-home.css";

// CODE SNIPPETS ===============================================================
import {
    sampleCheckbox,
    sampleCheckboxChecked,
    sampleCheckboxDisabled,
    sampleCheckboxTheming,
    sampleSwitch,
    sampleSwitchedChecked,
    sampleSwitchedDisabled,
} from "./CodeSamples";

// DATA ========================================================================

const CheckboxDocs = () => {
    return (
        <Element as="article" id="page-checkbox">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Checkbox and Switch</Heading>

                    <Text size="large">
                        The same component, but styled differently for different behaviour.
                    </Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CHECKBOX */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="cehckbox">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Checkbox</Heading>

                        <Text marginBottom="micro">
                            The <code>Checkbox</code> is a modified default <code>input type="checkbox"</code> element
                            to allow for
                            better usability and styling.
                        </Text>

                        <CodeBlock source={sampleCheckbox} language="jsx" marginBottom="micro" />

                        <Checkbox
                            id="checkbox-1"
                            value="checkbox-1"
                            name="checkbox-1"
                            label="Check me"
                        />

                        <Checkbox
                            id="checkbox-2"
                            value="checkbox-2"
                            name="checkbox-2"
                            label="No, check me"
                        />

                        <Text marginTop="micro">
                            It needs all of the above attributes to work, so make sure you add them all.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* SWITCH */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="switch">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Switching to a switch</Heading>

                        <Text marginBottom="micro">
                            The <code>Switch</code> is a modified default <code>Checkbox</code> to act as a toggle
                            switch. It works in the exact same way as the checkbox, but just looks different.
                        </Text>

                        <CodeBlock source={sampleSwitch} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            It needs all of the above attributes to work, so make sure you add them all.
                        </Text>

                        <Switch
                            id="switch-1"
                            value="switch-1"
                            name="switch-1"
                            label="Toggle me"
                        />

                        <Switch
                            id="switch-2"
                            value="switch-2"
                            name="switch-2"
                            label="No, toggle me"
                        />

                        <Switch
                            id="switch-3"
                            value="switch-3"
                            name="switch-3"
                            label="Toggle me, too!"
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

                        <Text marginBottom="micro">
                            Both these elements can exist in a <code>defaultChecked</code> or a <code>disabled</code> state, or
                            even both.
                        </Text>
                    </Portion>

                    {/* CHECKED ============================================ */}
                    <Portion>
                        <Heading as="h6">Checked</Heading>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleCheckboxChecked} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <Checkbox
                            id="checkbox-3"
                            value="checkbox-3"
                            name="checkbox-3"
                            label="I’m checked"
                            defaultChecked
                        />
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleSwitchedChecked} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <Switch
                            id="switch-4"
                            value="switch-4"
                            name="switch-4"
                            label="I’m also checked"
                            defaultChecked
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
                        <CodeBlock source={sampleCheckboxDisabled} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <Checkbox
                            id="checkbox-4"
                            value="checkbox-4"
                            name="checkbox-4"
                            label="I’m checked"
                            disabled
                        />
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleSwitchedDisabled} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <Switch
                            id="switch-5"
                            value="switch-5"
                            name="switch-5"
                            label="I’m also checked"
                            disabled
                        />
                    </Portion>

                    <Portion>
                        <Text>You can apply the attributes together too.</Text>
                    </Portion>
                </Row>
            </Element>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row layout="grid" horizontalPadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <CodeBlock source={sampleCheckboxTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </Element>
    );
};

export default CheckboxDocs;
