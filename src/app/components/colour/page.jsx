import { Element, Card, Heading, Text, HRule, Portion, Row } from "fictoan-react";

import "./colour.css";

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
        `${color}-dark-40`,
        `${color}-dark-30`,
        `${color}-dark-20`,
        `${color}-dark-10`,
        color,
        `${color}-light-10`,
        `${color}-light-20`,
        `${color}-light-30`,
        `${color}-light-40`,
    ];

    return (
        <article id="page-colour">
            <Element as="section" id="basics">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">Adding colour</Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Fictoan comes with 223 different variables for adding colour to your elements. There are
                            five props&mdash;
                            <code>bgColour</code>, <code>textColour</code>, <code>borderColour</code>, <code>strokeColour</code> and <code>fillColour</code>&mdash;that
                            accept any value from the list of colours below. Use them like so&mdash;
                        </Text>

                        <Text marginTop="micro" marginBottom="micro">
                            The last two props&mdash;<code>strokeColour</code> and <code>fillColour</code>&mdash;work
                            only for SVG elements.
                        </Text>

                        <Text marginBottom="micro">
                            And oh, you can use both spellings of
                            “colour”—<code>bgColour</code> or <code>bgColour</code> as props. This applies for all five
                            props above.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" kind="primary" />

            <Element as="section" id="colour-list">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">List of colours</Heading>
                        <Text>Use any of these below values as variables with the above props.</Text>
                    </Portion>
                </Row>

                {listOfColours.map((color) => (
                    <Row sidePadding="tiny" gutters="none" marginBottom="tiny" key={color}>
                        <Portion>
                            <Element as="div" className="colour-row">
                                {generateShades(color).map((shade) => (
                                    <Element as="div" key={shade}>
                                        <Card padding="tiny" bgColour={shade} borderColour="transparent" />
                                        <Text size="small">{shade}</Text>
                                    </Element>
                                ))}
                            </Element>
                        </Portion>
                    </Row>
                ))}

                {/*  BLACK WHITE TRANSPARENT  ============================  */}
                <Row sidePadding="tiny" gutters="none" marginBottom="tiny">
                    <Portion>
                        <Element as="div" className="colour-row">
                            <Element as="div">
                                <Card padding="tiny" bgColour="black" borderColour="transparent" />
                                <Text size="small">black</Text>
                            </Element>

                            <Element as="div">
                                <Card padding="tiny" bgColour="white" />
                                <Text size="small">white</Text>
                            </Element>

                            <Element as="div">
                                <Card padding="tiny" bgColour="transparent" borderColour="transparent"
                                      id="transparent-card" />
                                <Text size="small">transparent</Text>
                            </Element>
                        </Element>
                    </Portion>
                </Row>
            </Element>
        </article>
    );
};


export default ColourDocs;
