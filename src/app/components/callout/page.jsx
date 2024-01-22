"use client";

import React from "react";

import { Badge, Button, Callout, Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-callout.css";

import { sampleCalloutTheme, sampleCodeInsideCallout } from "./CodeSamples";

const CalloutDocs = () => {
    return (
        <>
            <head>
                <title>Callout — Fictoan documentation</title>
            </head>

            <article id="page-callout">
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" className="text-hue">Callout</Heading>
                    </Portion>
                </Row>

                <Row horizontalPadding="huge">
                    <Portion>
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
                                        <code>kind</code>
                                    </td>

                                    <td>
                                        <Text>Default callouts for different situations.</Text>
                                    </td>

                                    <td>
                                        <code>info</code><br />
                                        <code>success</code><br />
                                        <code>warning</code><br />
                                        <code>error</code><br />
                                    </td>

                                    <td>
                                        <Text>&mdash;</Text>
                                    </td>
                                </tr>


                                <tr>
                                    <td>
                                        <code>children</code>
                                    </td>

                                    <td>
                                        <Text>Accepts any other markup as part of the callout.</Text>
                                    </td>

                                    <td>
                                        <Text>&mdash;</Text>
                                    </td>

                                    <td>
                                        <Text>&mdash;</Text>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* DEFAULT */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="default">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h6" marginBottom="tiny">Default</Heading>
                            <Row>
                                <Portion>
                                    <Text>The <code>Callout</code> component lets you highlight messages with these easy defaults.</Text>
                                </Portion>

                                <Portion>
                                    <Callout kind="info" marginBottom="nano">
                                        <Text textColour="white">This works. Just FYI.</Text>
                                    </Callout>
                                </Portion>

                                <Portion>
                                    <Callout kind="success" marginBottom="nano">
                                        <Text textColour="green-dark-40">Successfully displaying callout.</Text>
                                    </Callout>
                                </Portion>

                                <Portion>
                                    <Callout kind="warning" marginBottom="nano">
                                        <Text textColour="orange-dark-20">Don’t wear me out. I am warning you.</Text>
                                    </Callout>
                                </Portion>

                                <Portion>
                                    <Callout kind="error" marginBottom="nano">
                                        <Text textColour="red-dark-40">Successful display, but <code>kind="error"</code>. Wow.</Text>
                                    </Callout>
                                </Portion>
                            </Row>

                            <Text marginTop="micro" marginBottom="micro">
                                You can also drop any component inside of the Callout.
                            </Text>

                            <Callout kind="info" marginBottom="nano">
                                <Element as="div" className="vertically-centre-items" marginBottom="nano">
                                    <Heading as="h3">Add headings.&nbsp;</Heading>
                                    <Badge shape="rounded" bgColor="blue-40" borderColor="blue-80" textColor="blue">Or a status tag</Badge>
                                </Element>

                                <Text marginBottom="tiny">Type regular text or insert some <code>code</code>.</Text>

                                <Text>Seriously, add anything.</Text>
                                <CodeBlock source={sampleCodeInsideCallout} language="css" marginBottom="tiny"/>

                                <Button kind="primary">And end with a button?</Button>
                            </Callout>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="item-props">

                    <Element as="section" id="theming">
                        <Row horizontalPadding="huge" marginBottom="small">
                            <Portion>
                                <Heading as="h6" marginBottom="tiny">Theming</Heading>
                                <CodeBlock source={sampleCalloutTheme} language="css" />
                            </Portion>
                        </Row>
                    </Element>
                </Element>
            </article>
        </>
    );
};

export default CalloutDocs;
