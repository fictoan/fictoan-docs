"use client";

import React from "react";

import { Card, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./base-element.css";
import { sampleElement } from "./CodeSamples";

const BaseElementDocs = () => {
    return (
        <>
            <head>
                <title>Base element — Fictoan documentation</title>
            </head>

            <article id="page-base-element">
                <Row layout="grid" sidePadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" className="text-hue" marginBottom="small">Base element</Heading>
                        <Text>
                            This is a common element that lets you use the Fictoan props to any native HTML element. This
                            makes it easier to play with the rest of the components on page without having to write CSS.
                        </Text>
                    </Portion>
                </Row>

                <Row layout="grid" sidePadding="huge">
                    <Portion>
                        <Heading as="h6" marginBottom="micro">Props</Heading>

                        <Text size="large" weight="700" marginBottom="nano">Unique props</Text>
                        <Table bordersFor="both" padding="tiny" isStriped>
                            <thead>
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Possible values</td>
                                    <td className="weight-600">Default value</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>as</code>
                                    </td>

                                    <td>
                                        <Text>Convert this into any possible native HTML element</Text>
                                    </td>

                                    <td>
                                        <Text>Any valid HTML element. Check {" "}
                                            <Element
                                                as="a"
                                                href="https://www.w3.org/TR/2012/WD-html-markup-20121025/elements.html"
                                                rel="noopener noreferrer" target="_blank"
                                            >
                                                this list
                                            </Element>.</Text>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                        <Text size="large" weight="700" marginBottom="nano">Shared props</Text>
                        <Text>None</Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* BASICS */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="default">
                    <Row layout="grid" sidePadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="nano">Default</Heading>

                            <Text marginBottom="micro">
                                The <code>Element</code> component is just a replacement for using the HTML element directly
                                to get access to Fictoan props. Usage is pretty simple, with the <code>as</code> prop.
                            </Text>

                            <CodeBlock source={sampleElement} language="jsx" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will render an <code>article</code>, but you can now use all Fictoan props to
                                place and style it as you wish, without the need to write CSS. Nifty, eh?
                            </Text>
                        </Portion>
                    </Row>
                </Element>
            </article>
        </>
    );
};

export default BaseElementDocs;
