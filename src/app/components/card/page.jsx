"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import { Card, Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-card.css";

// CODE SNIPPETS ===============================================================
import {
    sampleCard,
    sampleCardCustomStyling,
    sampleCardShadow,
    sampleCardTheme,
} from "./CodeSamples";

// DATA ========================================================================
import { cardProps } from "./config";



const CardDocs = () => {
    return (
            <Article id="page-card">
                <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h2" className="text-hue">Card</Heading>
                        <Text>
                            The card is a simple box that encloses content within, and is one of the oft-used components
                            in modern UI.
                        </Text>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/*  CONFIGURATOR */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row layout="grid" horizontalPadding="small" marginTop="medium" marginBottom="small">
                    <Portion>
                        <ComponentConfigurator
                            component={cardProps.component}
                            properties={cardProps.properties}
                        />
                    </Portion>
                </Row>

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  BASICS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="default">
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="nano">Default</Heading>

                            <Text marginBottom="micro">
                                The <code>Card</code> component is basically a rectangle to put your content into.
                                Because
                                it accepts children, your card can be as small or large as you need it to be. One of the
                                first things to do with a card is to add the <code>padding</code> prop.
                            </Text>

                            <CodeBlock source={sampleCard} language="jsx" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will display the default <code>HRule</code>, which looks like this&mdash;
                            </Text>

                            <Card padding="micro" />

                            <Text marginTop="micro" marginBottom="micro">
                                Without the padding, it would just collapse into a line as its height is dependent on
                                the
                                cumulative heights of its children. It’s width is dependent on the parent.
                            </Text>

                            <Text marginTop="micro">
                                The default card also comes with a very light grey border, to easily identify its
                                boundary.
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  PROPS  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="props">
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3">Props</Heading>
                        </Portion>
                    </Row>

                    {/*  =============================================================================================  */}
                    {/*  SHAPE  */}
                    {/*  =============================================================================================  */}
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Shape</Heading>

                            <Text marginBottom="micro">
                                The default card is a sharp rectangle, which you can modify with
                                the <code>shape</code> prop. It takes <code>rounded</code> and <code>curved</code> as
                                values.
                            </Text>

                            <CodeBlock source={sampleCard} language="jsx" marginBottom="micro" />

                            <Card padding="micro" marginBottom="nano">Default</Card>
                            <Card shape="rounded" padding="micro" marginRight="nano">Rounded</Card>

                            <Text marginTop="micro">
                                The radius value for <code>rounded</code> again comes from the theme file.
                            </Text>
                        </Portion>
                    </Row>


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  CUSTOM STYLING  */}
                    {/*  =============================================================================================  */}
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Custom BG and border</Heading>

                            <Text marginBottom="micro">
                                You can add custom styling with the <code>bgColour</code>, and
                                the <code>borderColour</code> props. Both take any colour value
                                from <code>defaultColours</code> in <Link href="/colour">colours</Link>.
                            </Text>
                        </Portion>

                        <Portion desktopSpan="half">
                            <CodeBlock source={sampleCardCustomStyling} language="jsx" marginBottom="micro" />
                        </Portion>

                        <Portion desktopSpan="half">
                            <Card
                                padding="micro"
                                shape="rounded"
                                bgColour="salmon-40"
                                borderColour="salmon"
                            />
                        </Portion>
                    </Row>


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  SHADOW  */}
                    {/*  =============================================================================================  */}
                    <Row layout="grid" horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Shadow</Heading>

                            <Text marginBottom="micro">
                                The Card is one of the elements that benefit the most form the <code>shadow</code> prop.
                                It
                                takes the three usual shadow values—<code>mild</code>, <code>hard</code>,
                                and <code>soft</code>.
                            </Text>
                        </Portion>

                        <Portion desktopSpan="half">
                            <CodeBlock source={sampleCardShadow} language="tsx" marginBottom="micro" />
                        </Portion>

                        <Portion desktopSpan="half">
                            <Card
                                padding="micro"
                                shape="rounded"
                                bgColour="salmon-40"
                                borderColour="salmon"
                                shadow="mild"
                                marginBottom="micro"
                            />
                            <Card
                                padding="micro"
                                shape="rounded"
                                bgColour="salmon-40"
                                borderColour="salmon"
                                shadow="hard"
                                marginBottom="micro"
                            />
                            <Card
                                padding="micro"
                                shape="rounded"
                                bgColour="salmon-40"
                                borderColour="salmon"
                                shadow="soft"
                                marginBottom="micro"
                            />
                        </Portion>
                    </Row>


                    <HRule horizontalMargin="huge" />


                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  THEMING  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="section" id="theming">
                        <Row layout="grid" horizontalPadding="huge" marginBottom="small">
                            <Portion>
                                <Heading as="h3" marginBottom="tiny">Theming</Heading>

                                <CodeBlock source={sampleCardTheme} language="css" />
                            </Portion>
                        </Row>
                    </Element>
                </Element>
        </Article>
    );
};

export default CardDocs;
