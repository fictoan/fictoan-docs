"use client";

import React from "react";
import Link from "next/link";

import { Button, Callout, Card, Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-button.css";
import {
    sampleButton,
    sampleButtonCustomStyling1,
    sampleButtonCustomStyling2,
    sampleButtonCustomStyling3, sampleButtonHasDelete,
    sampleButtonIsLoading,
    sampleButtonKinds,
    sampleButtonShadow,
    sampleButtonShape, sampleButtonTheme,
} from "./CodeSamples";

const ButtonDocs = () => {
    return (
        <>
            <head>
                <title>Button — Fictoan documentation</title>
            </head>

            <article id="page-button">
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" className="text-hue">Button</Heading>
                    </Portion>
                </Row>

                {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  PROPS  */}
                {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Table bordersFor="both" padding="tiny">
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>kind</code>
                                    </td>

                                    <td>
                                        Denotes which part of the cells to draw the borders for
                                    </td>

                                    <td>
                                        <code>primary</code><br />
                                        <code>secondary</code><br />
                                        <code>tertiary</code><br />
                                        <code>custom</code>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>size</code>
                                    </td>

                                    <td>
                                        The, um, size of the button
                                    </td>

                                    <td>
                                        <code>tiny</code><br />
                                        <code>small</code><br />
                                        <code>medium</code><br />
                                        <code>large</code><br />
                                        <code>huge</code>
                                    </td>

                                    <td>
                                        <code>medium</code>, auto-fallback
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>shape</code>
                                    </td>

                                    <td>
                                        Corner radius
                                    </td>

                                    <td>
                                        <code>rounded</code><br />
                                        <code>curved</code><br />
                                        <code>circular</code><br />
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>isLoading</code>
                                    </td>

                                    <td>
                                        Adds a spinner inside the button to show a loading state
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                        <Table bordersFor="both" padding="tiny" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>shadow</code>
                                    </td>

                                    <td>
                                        Box shadow
                                    </td>

                                    <td>
                                        <code>mild</code><br />
                                        <code>hard</code><br />
                                        <code>soft</code>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>bgColour</code> / <code>bgColor</code>
                                    </td>

                                    <td>
                                        Background colour
                                    </td>

                                    <td>
                                        Any colour from <code>defaultColours</code>.
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>borderColour</code> / <code>borderColor</code>
                                    </td>

                                    <td>
                                        Border colour
                                    </td>

                                    <td>
                                        Any colour from <code>defaultColours</code>.
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>textColour</code> / <code>textColor</code>
                                    </td>

                                    <td>
                                        Text colour
                                    </td>

                                    <td>
                                        Any colour from <code>defaultColours</code>.
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="default">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h6" marginBottom="tiny">Default button</Heading>

                            <Text marginBottom="micro">
                                The <code>Button</code> uses a native <code>button</code> element that you can extend with
                                props and events.
                            </Text>

                            <CodeBlock source={sampleButton} language="markup" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will display the default <code>Button~</code>, which looks like this&mdash;
                            </Text>

                            <Button>Click me</Button>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />

                {/*  =============================================================================================  */}
                {/*  KIND  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Kind</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SIZE  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Size</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SHAPE  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Shape</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CUSTOM STYLING  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Custom BG, border and text colours</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SHADOW  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Shadow</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  IS LOADING  */}
                {/*  =============================================================================================  */}
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Loading states</Heading>

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


                <HRule kind="secondary" horizontalMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row horizontalPadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h6" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleButtonTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </article>
        </>
    );
};

export default ButtonDocs;
