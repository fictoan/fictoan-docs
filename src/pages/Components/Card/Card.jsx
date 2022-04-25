import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Card, CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import { CardDocsStyled } from "./Card.styled";
import { sampleCard, sampleCardCustomStyling, sampleCardShadow, sampleCardTheme } from "./CodeSamples";


export const CardDocs = () => {
    useEffect(() => {
        document.title = "Card — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <CardDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Card</Heading>
                    <Text>
                        The card is a simple box that encloses content within, and is one of the oft-used components in
                        modern UI.
                    </Text>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Text>None</Text>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
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

                            <tr>
                                <td>
                                    <code>borderColour</code> / <code>borderColor</code>
                                </td>

                                <td>
                                    Border colour
                                </td>

                                <td>
                                    Any colour from <code>defaultColours</code>.
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>padding</code>
                                </td>

                                <td>
                                    Inner padding between the border and the content
                                </td>

                                <td>
                                    <code>nano</code><br />
                                    <code>micro</code><br />
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shadow</code>
                                </td>

                                <td>
                                    Box shadow
                                </td>

                                <td>
                                    <code>mild</code><br />
                                    <code>hard</code><br />
                                    <code>soft</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shape</code>
                                </td>

                                <td>
                                    Corner radius
                                </td>

                                <td>
                                    <code>rounded</code><br />
                                    <code>curved</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">Default</Heading>

                        <Text marginBottom="micro">
                            The <code>Card</code> component is basically a rectangle to put your content into. Because
                            it accepts children, your card can be as small or large as you need it to be. One of the
                            first things to do with a card is to add the <code>padding</code> prop.
                        </Text>

                        <CodeBlock source={sampleCard} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>HRule</code>, which looks like this&mdash;
                        </Text>

                        <Card padding="micro" />

                        <Text marginTop="micro" marginBottom="micro">
                            Without the padding, it would just collapse into a line as its height is dependent on the
                            cumulative heights of its children. It’s width is dependent on the parent.
                        </Text>

                        <Text marginTop="micro">
                            The default card also comes with a very light grey border, to easily identify its boundary.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  SHAPE  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
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


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CUSTOM STYLING  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Custom BG and border</Heading>

                        <Text marginBottom="micro">
                            You can add custom styling with the <code>bgColour</code>, and
                            the <code>borderColour</code> props. Both take any colour value
                            from <code>defaultColours</code> in <Link to="/colour">colours</Link>.
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


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SHADOW  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Shadow</Heading>

                        <Text marginBottom="micro">
                            The Card is one of the elements that benefit the most form the <code>shadow</code> prop. It
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


                <HRule sideMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleCardTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </CardDocsStyled>
    );
}
