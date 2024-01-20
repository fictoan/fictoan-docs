"use client";

import React from "react";

import { Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-h-rule.css";
import {
    sampleHRule,
    sampleHRuleKinds,
    sampleHRulehorizontalMargin, sampleHRuleTheme,
} from "./CodeSamples";

const HRuleDocs = () => {
    return (
        <>
            <head>
                <title>H Rule — Fictoan documentation</title>
            </head>

            <article id="page-name">
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h2" className="text-hue">Horizontal rule</Heading>
                    </Portion>
                </Row>

                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="micro">Props</Heading>

                        <Heading as="h5" marginBottom="nano">Custom props</Heading>
                        <Table bordersFor="both" padding="tiny">
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Value</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>kind</code></td>
                                    <td>Hierarchy of the <code>HRule</code>, used to separate content based on nesting.</td>
                                    <td>
                                        <code>primary</code><br />
                                        <code>secondary</code><br />
                                        <code>tertiary</code>
                                    </td>
                                    <td><code>primary</code></td>
                                </tr>
                                <tr>
                                    <td><code>horizontalMargin</code></td>
                                    <td>Width of the <code>HRule</code>.</td>
                                    <td>
                                        <code>nano</code><br />
                                        <code>micro</code><br />
                                        <code>tiny</code><br />
                                        <code>small</code><br />
                                        <code>medium</code><br />
                                        <code>large</code><br />
                                        <code>huge</code>
                                    </td>
                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                        <Heading as="h5" marginBottom="nano">Shared props</Heading>
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
                            </tbody>
                        </Table>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  BASICS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="default">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="nano">Default horizontal rule</Heading>

                            <Text marginBottom="micro">
                                The <code>HRule</code> element is used to separate sections of content on your page. It’s a self-closing element, and doesn’t accept any children.
                            </Text>

                            <CodeBlock source={ sampleHRule } language="jsx" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will display the default <code>HRule</code>, which looks like this&mdash;
                            </Text>

                            <HRule />

                            <Text>
                                It has a default top and bottom margin of <code>tiny</code>, which you can over ride with the <code>marginTop</code> and <code>marginBottom</code> props.
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  PROPS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="usage">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3">Props</Heading>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Kind</Heading>

                            <Text marginBottom="micro">
                                The <code>kind</code> prop accepts three values&mdash;<code>primary</code>, <code>secondary</code>, and <code>tertiary</code>. If this prop isn’t applied, it defaults back to <code>primary</code>.
                            </Text>

                            <CodeBlock source={ sampleHRuleKinds } language="jsx" />

                            <HRule kind="primary" marginTop="micro" marginBottom="micro" />
                            <HRule kind="secondary" marginTop="micro" marginBottom="micro" />
                            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                            <Text>
                                The colours of these three kinds of <code>HRule</code> can be set in the theme.
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />


                <Element as="section" id="usage">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Side margin</Heading>

                            <Text marginBottom="micro">
                                While the <code>HRule</code> takes up 100% of the available width, you might want it to be as wide as the content above and below it.
                            </Text>

                            <Text marginBottom="micro">
                                The <code>horizontalMargin</code> prop sets the width, and aligns the rule to the centre of the page. It takes the same spacing values from <code>nano</code> all the way to <code>huge</code>.
                            </Text>

                            <CodeBlock source={ sampleHRulehorizontalMargin } language="jsx" />
                        </Portion>
                    </Row>

                    <HRule horizontalMargin="nano" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="micro" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="tiny" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="small" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="medium" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="large" marginTop="micro" marginBottom="micro" />
                    <HRule horizontalMargin="huge" marginTop="micro" marginBottom="micro" />
                </Element>

                <HRule horizontalMargin="huge" />

                <Element as="section" id="usage">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="micro">Theming</Heading>

                            <CodeBlock source={ sampleHRuleTheme } language="javascript" />
                        </Portion>
                    </Row>
                </Element>
            </article>
        </>
    );
};

export default HRuleDocs;