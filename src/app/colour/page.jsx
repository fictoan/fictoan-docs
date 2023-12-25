"use client";

import { Element, Card, Heading, Text, HRule, Portion, Row, Callout } from "fictoan-react";

import "./page-colour.css";
import { useState } from "react";

const ColourDocs = () => {
    const listOfColours = [
        "red",
        "salmon",
        "orange",
        "amber",
        "yellow",
        "spring",
        "pistachio",
        "green",
        "teal",
        "cyan",
        "sky",
        "blue",
        "indigo",
        "violet",
        "purple",
        "pink",
        "crimson",
        "brick",
        "sienna",
        "brown",
        "slate",
        "grey",
    ];

    const generateShades = (color) => [
        `${color}-dark-90`,
        `${color}-dark-80`,
        `${color}-dark-70`,
        `${color}-dark-60`,
        `${color}-dark-50`,
        `${color}-dark-40`,
        `${color}-dark-30`,
        `${color}-dark-20`,
        `${color}-dark-10`,
        color,
        `${color}-light-10`,
        `${color}-light-20`,
        `${color}-light-30`,
        `${color}-light-40`,
        `${color}-light-50`,
        `${color}-light-60`,
        `${color}-light-70`,
        `${color}-light-80`,
        `${color}-light-90`,
    ];

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
        <article id="page-colour">
            <Element as="section" id="basics" marginTop="small">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">
                            Adding a bit of colour to your projects
                        </Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Fictoan comes with 22 different named colours, apart
                            from <code>black</code>, <code>white</code>, and <code>transparent</code>,
                            for adding colour to your elements.
                        </Text>

                        <Text marginBottom="micro">
                            There are five props&mdash;<br />
                            <code>bgColour</code>,<br />
                            <code>textColour</code>,<br />
                            <code>borderColour</code>,<br />
                            <code>strokeColour</code>,<br />
                            and <code>fillColour</code><br />&mdash;that
                            accept any value from the list of colours below. Use them like so&mdash;
                        </Text>

                        <Text marginBottom="micro">
                            The last two props&mdash;<code>strokeColour</code> and <code>fillColour</code>&mdash;work
                            only for SVG elements.
                        </Text>

                        <Callout kind="info" marginBottom="micro">
                            <Text textColour="white">
                                And oh, you can use either spelling colour/color in the props above.
                            </Text>
                        </Callout>

                        <Text>
                            The last two props&mdash;<code>strokeColour</code> and <code>fillColour</code>&mdash;work
                            only for SVG elements.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" kind="primary" />

            <Element as="section" id="colour-list">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h6" marginBottom="nano">List of colours</Heading>
                        <Text>Use any of these below values as variables with the above props.</Text>
                    </Portion>
                </Row>


                <Row sidePadding="small" gutters="small" marginBottom="tiny">
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
                <Row sidePadding="tiny" gutters="none" marginBottom="tiny">
                </Row>
            </Element>
        </article>
    );
};


export default ColourDocs;
