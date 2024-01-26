"use client";

import React from "react";

import { Badge, Button, Callout, Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-callout.css";

import { sampleCalloutTheme, sampleCodeInsideCallout } from "./CodeSamples";
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";
import { calloutProps } from "./config";

const CalloutDocs = () => {
    return (
        <>
            <head>
                <title>Callout — Fictoan documentation</title>
            </head>

            <article id="page-callout">
                <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" className="text-hue">Callout</Heading>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*  CONFIGURATOR */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row layout="grid" horizontalPadding="small" marginTop="medium" marginBottom="small">
                    <Portion>
                        <ComponentConfigurator
                            component={calloutProps.component}
                            properties={calloutProps.properties}
                        />
                    </Portion>
                </Row>

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* DEFAULT */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="default">
                    <Row layout="grid" horizontalPadding="huge">
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
                        <Row layout="grid" horizontalPadding="huge" marginBottom="small">
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
