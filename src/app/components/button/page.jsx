"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import { Button, Callout, Card, Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-button.css";

// CODE SNIPPETS ===============================================================
import {
    sampleButton,
    sampleButtonCustomStyling1,
    sampleButtonCustomStyling2,
    sampleButtonCustomStyling3,
    sampleButtonHasDelete,
    sampleButtonIsLoading,
    sampleButtonKinds,
    sampleButtonShadow,
    sampleButtonShape,
    sampleButtonTheme,
} from "./CodeSamples";
import { PropsList } from "../../../components/PropsList/PropsList";

// DATA ========================================================================
import { listOfButtonProps } from "./propsList";
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";
import { buttonProps } from "./config";


const ButtonDocs = () => {
    return (
        <Article id="page-button">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Button</Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  PROPS  */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <PropsList propData={listOfButtonProps} />

            <HRule horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" marginTop="medium" marginBottom="small">
                <Portion>
                    <ComponentConfigurator
                        component={buttonProps.component}
                        properties={buttonProps.properties}
                    />
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  DEFAULT  */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="default">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="tiny">Default button</Heading>

                        <Text marginBottom="micro">
                            The <code>Button</code> uses a native <code>button</code> element that you can extend with
                            props and events.
                        </Text>

                        <CodeBlock source={sampleButton} language="markup" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Button</code>, which looks like this&mdash;
                        </Text>

                        <Button>Click me</Button>
                    </Portion>
                </Row>
            </Element>


            <HRule horizontalMargin="huge" verticalMargin="small" />

            {/*  KIND  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Kind</Heading>

                    <Text marginBottom="micro">
                        For the ease of global styling, there are three kinds you can
                        apply—<code>primary</code>, <code>secondary</code> and <code>tertiary</code>. There’s also
                        a <code>custom</code> prop value you can use to explicitly denote over-rides.
                    </Text>

                    <CodeBlock source={sampleButtonKinds} language="jsx" marginBottom="micro" />

                    <Button kind="primary" marginRight="nano">Primary</Button>
                    <Button kind="secondary" marginRight="nano">Secondary</Button>
                    <Button kind="tertiary">Tertiary</Button>

                    <Text marginTop="micro">
                        All of these values come from the theme file, where you can set once for your entire project
                        globally.
                    </Text>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/*  SIZE  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Size</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleButtonKinds} language="jsx" marginBottom="micro" />

                    <Button kind="primary" size="tiny" marginRight="nano">Tiny</Button>
                    <Button kind="primary" size="small" marginRight="nano">Small</Button>
                    <Button kind="primary" marginRight="nano">Medium</Button>
                    <Button kind="primary" size="large" marginRight="nano">Large</Button>
                    <Button kind="primary" size="huge">Huge</Button>

                    <Text marginTop="micro">
                        All of these values come from the theme file, where you can set once for your entire project
                        globally.
                    </Text>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/*  SHAPE  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Shape</Heading>

                    <Text marginBottom="micro">
                        The default button is a sharp rectangle, which you can modify with
                        the <code>shape</code> prop. It
                        takes <code>rounded</code>, <code>curved</code>, <code>circular</code> as values.
                    </Text>

                    <CodeBlock source={sampleButtonShape} language="jsx" marginBottom="micro" />

                    <Button marginRight="nano">Default</Button>
                    <Button shape="rounded" marginRight="nano">Rounded</Button>
                    <Button shape="curved" marginRight="nano">Curved</Button>
                    <Button shape="circular" marginRight="micro">Circular</Button>

                    <Text marginTop="micro">
                        The value for <code>rounded</code> again comes from the theme file.
                    </Text>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/*  CUSTOM STYLING  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Custom BG, border and text colours</Heading>

                    <Text marginBottom="micro">
                        If you prefer to custom style your buttons, you can do that too, with
                        the <code>bgColour</code>, <code>borderColour</code> and the <code>textColour</code> props.
                        All three take any colour value from <code>defaultColours</code> in <Link
                        href="/colour">colours</Link>.
                    </Text>
                </Portion>

                <Portion desktopSpan="half">
                    <CodeBlock source={sampleButtonCustomStyling1} language="jsx" marginBottom="micro" />
                </Portion>

                <Portion desktopSpan="half">
                    <Button shape="rounded" bgColour="transparent" borderColour="red" textColour="green"
                            marginRight="nano">Click me</Button>
                </Portion>

                <Portion desktopSpan="half">
                    <CodeBlock source={sampleButtonCustomStyling2} language="jsx" marginBottom="micro" />
                </Portion>

                <Portion desktopSpan="half">
                    <Button shape="rounded" bgColour="amber-light-60" borderColour="orange" textColour="orange"
                            marginRight="nano">Click me</Button>
                </Portion>

                <Portion desktopSpan="half">
                    <CodeBlock source={sampleButtonCustomStyling3} language="jsx" marginBottom="micro" />
                </Portion>

                <Portion desktopSpan="half">
                    <Button shape="rounded" bgColour="spring" borderColour="spring" textColour="crimson"
                            marginRight="nano">Click me</Button>
                </Portion>

                <Portion>
                    <Text marginTop="micro">
                        All of these values come from the theme file, where you can set once for your entire project
                        globally.
                    </Text>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/*  SHADOW  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Shadow</Heading>

                    <Text marginBottom="micro">
                        The <code>shadow</code> props takes three values&mdash;<code>mild</code>, <code>hard</code>,
                        and <code>soft</code>.
                    </Text>

                    <CodeBlock source={sampleButtonShadow} language="jsx" marginBottom="micro" />

                    <Button kind="secondary" shadow="mild" marginRight="nano">Mild shadow</Button>
                    <Button kind="secondary" shadow="hard" marginRight="nano">Hard shadow</Button>
                    <Button kind="secondary" shadow="soft" marginRight="micro">Soft shadow</Button>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/*  IS LOADING  */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Loading states</Heading>

                    <Text marginBottom="micro">
                        Add a <code>isLoading</code> prop to add a small circular spinner inside the button.
                    </Text>

                    <CodeBlock source={sampleButtonIsLoading} language="jsx" marginBottom="micro" />

                    <Button kind="primary" isLoading marginRight="nano">Text</Button>
                    <Button kind="secondary" isLoading marginRight="nano">Text</Button>
                    <Button kind="tertiary" isLoading marginRight="nano">Text</Button>

                    <Callout kind="info" marginTop="micro">
                        <Text>
                            NOTE: The <code>isLoading</code> state disables user interaction, shadows etc.
                        </Text>
                    </Callout>
                </Portion>
            </Row>


            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="small" />


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* THEME */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="theming">
                <Row horizontalPadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h6" marginBottom="tiny">Theme</Heading>

                        <CodeBlock source={sampleButtonTheme} language="css" />
                    </Portion>
                </Row>
            </Element>
        </Article>

    );
};

export default ButtonDocs;
