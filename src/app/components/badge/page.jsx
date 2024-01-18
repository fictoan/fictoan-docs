"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Badge, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { PropsList } from "../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./page-name.css";

// CODE SNIPPETS ===============================================================
import { sampleBadge, sampleBadgeSibling, sampleBadgeTheming } from "./CodeSamples";

// DATA ========================================================================
import { listOfBadgeProps } from "./propsList";



const BadgeDocs = () => {
    return (
        <>
            <head>
                <title>Badge — Fictoan documentation</title>
            </head>

            <article id="page-badge">
                <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h1" className="text-hue">Badge</Heading>
                    </Portion>
                </Row>

                <PropsList propData={listOfBadgeProps} />

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*  DEFAULT BADGE */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="default">
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h4" marginBottom="tiny">Default badge</Heading>

                            <Text marginBottom="micro">
                                The <code>Badge</code> is a modified native <code>mark</code> element. By default, it uses a
                                light blue bg and darker blue for text.
                            </Text>

                            <CodeBlock source={sampleBadge} language="jsx" marginBottom="micro" />

                            <Text marginBottom="micro">
                                The above code will render a simple badge like so&mdash;
                            </Text>

                            <Badge>NEW</Badge>

                            <Text marginTop="micro" marginBottom="micro">
                                Now, obviously you’d want to use it alongside another item. Here’s the markup for that&mdash;
                            </Text>

                            <CodeBlock source={sampleBadgeSibling} language="jsx" marginBottom="micro" />

                            <Element as="div" verticallyCentreItems>
                                <Heading as="h6" marginRight="nano">Apple sundae</Heading>
                                <Badge size="small" shape="curved" bgColour="green-light-60" textColour="green-dark-40">
                                    NEW
                                </Badge>
                            </Element>

                            <Text marginTop="micro">
                                The <code>verticallyCentreItems</code> prop in the parent aligns the elements on the Y-axis.
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />


                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*  THEMING  */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Element as="section" id="theming">
                    <Row layout="grid" horizontalPadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h4" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleBadgeTheming} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </article>
        </>
    );
};

export default BadgeDocs;
