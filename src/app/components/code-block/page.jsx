"use client";

import React from "react";

import { Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components"

import "./page-code-block.css";
import { sampleCodeBlock } from "./CodeSamples";

const CodeBlockDocs = () => {
    return (
        <>
            <head>
                <title>Code block — Fictoan documentation</title>
            </head>

            <article id="page-code-block">
                <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h2" className="text-hue">CodeBlock</Heading>
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="micro">Props</Heading>

                        <Heading as="h5" marginBottom="nano">Custom props</Heading>
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
                                        <code>source</code>
                                    </td>

                                    <td>
                                        The content for the code inside the block
                                    </td>

                                    <td>
                                        Object / string
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>language</code>
                                    </td>

                                    <td>
                                        Language for tokenisation
                                    </td>

                                    <td>
                                        <code>bash</code><br />
                                        <code>csharp</code><br />
                                        <code>css</code><br />
                                        <code>diff</code><br />
                                        <code>django</code><br />
                                        <code>go</code><br />
                                        <code>http</code><br />
                                        <code>java</code><br />
                                        <code>javascript</code><br />
                                        <code>json</code><br />
                                        <code>jsx</code><br />
                                        <code>makefile</code><br />
                                        <code>markup</code><br />
                                        <code>php</code><br />
                                        <code>python</code><br />
                                        <code>ruby</code><br />
                                        <code>scala</code><br />
                                        <code>typescript</code><br />
                                        <code>tsx</code>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                        <Heading as="h5" marginBottom="nano">Shared props</Heading>
                        <Text>None</Text>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  BASICS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="default">
                    <Row sidePadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="nano">Default</Heading>

                            <Text marginBottom="micro">
                                The <code>CodeBlock</code> component uses a <code>pre</code> tag for the display, and
                                PrismJS for the tokenisation.
                            </Text>

                            <CodeBlock source={sampleCodeBlock} language="jsx" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will display a simple <code>CodeBlock</code>, which
                                looks like...um, this&mdash;
                            </Text>

                            <CodeBlock source={sampleCodeBlock} language="jsx" />

                            <Text marginTop="micro">
                                Meta, no?  (¬‿¬ )
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  PROPS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="props">
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  THEMING  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="section" id="theming">
                        <Row sidePadding="huge" marginBottom="small">
                            <Portion>
                                <Heading as="h3" marginBottom="tiny">Theming</Heading>

                                <CodeBlock source={sampleCodeBlock} language="css" />
                            </Portion>
                        </Row>
                    </Element>
                </Element>
            </article>
        </>
    );
};

export default CodeBlockDocs;
