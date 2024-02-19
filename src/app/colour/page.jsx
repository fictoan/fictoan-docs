"use client";

// EXTERNAL DEPS ===============================================================
import React, { useState } from "react";

// INTERNAL DEPS ===============================================================
import { Element, Card, Heading, Text, Divider, Portion, Row, Callout, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-colour.css";

// CODE SNIPPETS ===============================================================
import { sampleUsage1, sampleUsage2, sampleUsage3 } from "./CodeSamples";

// DATA ========================================================================
import { listOfColours, generateShades } from "../../utils/colours";

const ColourDocs = () => {
    const [copiedShade, setCopiedShade] = useState(null);

    const copyToClipboard = (shade) => {
        navigator.clipboard.writeText(shade)
            .then(() => {
                setCopiedShade(shade);
                setTimeout(() => setCopiedShade(null), 3000);
            })
            .catch(err => {
                console.error("Unable to copy colour name: ", err);
            });
    };

    return (
        <Article id="page-colour">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="basics" marginTop="medium" marginBottom="small">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h1" className="text-hue">Colour</Heading>
                    </Portion>
                </Row>

                <Row horizontalPadding="huge" marginBottom="micro">
                    <Portion>
                        <Text marginBottom="micro">
                            Fictoan comes with 22 different named colours, apart
                            from <code>black</code>, <code>white</code>, and <code>transparent</code>,
                            for adding colour to your elements.
                        </Text>

                        <Text marginBottom="micro">
                            There are three colour props&mdash;<br />
                            <code>textColour</code>,<br />
                            <code>bgColour</code>,<br />
                            <code>borderColour</code>,<br />
                            and they accept any value from the list of colours below. Use them like so&mdash;
                        </Text>

                        <Callout kind="info" marginBottom="small">
                            <Text textColour="white">
                                And oh, you can use either spelling colour/color in the props above.
                            </Text>
                        </Callout>

                        <Element as="div" id="usage-examples">
                            <Element as="div" marginBottom="micro">
                                <CodeBlock source={sampleUsage1} language="jsx" marginBottom="nano" />
                                <Card padding="small" bgColour="crimson-light-10" borderColour="pistachio-light-30" />
                            </Element>

                            <Divider kind="tertiary" verticalMargin="micro" />

                            <Element as="div" marginBottom="micro">
                                <CodeBlock source={sampleUsage2} language="jsx" marginBottom="nano" />
                                <Element as="section" bgColour="amber-light-30" padding="small" />
                            </Element>

                            <Divider kind="tertiary" verticalMargin="micro" />

                            <Element as="div" marginBottom="micro">
                                <CodeBlock source={sampleUsage3} language="jsx" marginBottom="nano" />
                                <Element as="ul" borderColour="cyan-dark-10" bgColour="slate-light-70" padding="micro">
                                    <Element as="li" borderColour="pink-light-30">
                                        Hello
                                    </Element>

                                    <Element as="li" borderColour="spring-dark-60">
                                        Hello
                                    </Element>

                                    <Element as="li" borderColour="blue">
                                        Hello
                                    </Element>
                                </Element>
                            </Element>
                        </Element>
                    </Portion>
                </Row>
            </Element>

            <Divider horizontalMargin="huge" kind="primary" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////// */}
            {/* LIST OF COLOURS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="colour-list">
                <Row horizontalPadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">List of colours</Heading>
                        <Text>Use any of these below values as variables with the above props.</Text>
                    </Portion>
                </Row>


                <Row horizontalPadding="small" gutters="small" marginBottom="tiny">
                    {listOfColours.map((color) => (
                        <Portion desktopSpan="one-fourth" key={color}>
                            <Element as="div" className="colour-column" marginBottom="micro">
                                <Text weight="700" marginBottom="micro">{color}</Text>
                                {generateShades(color).map((shade) => (
                                    <Card
                                        key={shade}
                                        className="colour-card"
                                        bgColour={shade}
                                        borderColour="transparent"
                                        padding="tiny"
                                        onClick={() => copyToClipboard(shade)}
                                    >
                                        <Text size="small" className="colour-name" textColour="white">
                                            {copiedShade === shade ? "Copied!" : shade}
                                        </Text>
                                    </Card>
                                ))}
                            </Element>
                        </Portion>
                    ))}

                    <Portion desktopSpan="one-fourth">
                        <Element as="div" className="colour-column" marginBottom="micro">
                            <Text weight="700" marginBottom="nano">black</Text>
                            <Card padding="tiny" bgColour="black" borderColour="grey" />
                        </Element>

                        <Element as="div" className="colour-column" marginBottom="micro">
                            <Text weight="700" marginBottom="nano">white</Text>
                            <Card padding="tiny" bgColour="white" borderColour="grey" />
                        </Element>

                        <Element as="div" className="colour-column" marginBottom="micro">
                            <Text weight="700" marginBottom="nano">transparent</Text>
                            <Card id="transparent-card" padding="tiny" borderColour="grey" />
                        </Element>
                    </Portion>
                </Row>

                {/* BLACK WHITE TRANSPARENT ================================ */}
                <Row horizontalPadding="tiny" gutters="none" marginBottom="tiny">
                </Row>
            </Element>
        </Article>
    );
};


export default ColourDocs;
