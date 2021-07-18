import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule,
    Table,
    Card
} from "fictoan-react";

import { CardComponentStyled } from "./Card.styled";
import {
    sampleHRuleTheme,
    sampleHRule,
    sampleHRuleKinds,
    sampleHRuleSideMargin
} from "./CodeSamples";


export const CardComponent = () => {
    useEffect(() => {
        document.title = "Card — Fictoan";
    }, []);

    return (
        <CardComponentStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Card</Heading>
                </Portion>

                <Portion>
                    <Text>
                        The card component is an extremely versatile yet simple box that encloses content within. 
                    </Text>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Table bordersFor="both" padding="small">
                        <thead className="bg-slate-10">
                            <tr>
                                <td className="weight-600">Prop</td>
                                <td className="weight-600">Description</td>
                                <td className="weight-600">Value</td>
                                <td className="weight-600">Default</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><code>shape</code></td>
                                <td>Corner radius of the card</td>
                                <td>
                                    <code>rounded</code><br />
                                    <code>curved</code>
                                </td>
                                <td>—</td>
                            </tr>
                            <tr>
                                <td><code>padding</code></td>
                                <td>Gap between border and content inside the card</td>
                                <td>
                                    <code>nano</code><br />
                                    <code>micro</code><br />
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>
                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td><code>bgColour</code> / <code>bgColor</code></td>
                                <td>Background colour</td>
                                <td>
                                    Any colour from the list of colours. Custom fallback value can be set in the theme.
                                </td>
                                <td>white</td>
                            </tr>

                            <tr>
                                <td><code>borderColour</code> / <code>borderColor</code></td>
                                <td>Outer border colour</td>
                                <td>
                                    Border colour
                                </td>
                                <td>&#123;lighten(0.96, defaultColours.black)&#125;</td>
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
                            The <code>HRule</code> element is used to separate sections of content on your page. It’s a self-closing element, and doesn’t accept any children.
                        </Text>

                        <CodeBlock source={ sampleHRule } language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>HRule</code>, which looks like this&mdash;
                        </Text>

                        <Card />

                        <Text>
                            It has a default top and bottom margin of <code>4vmax</code>, which you can over ride with the <code>marginTop</code> and <code>marginBottom</code> props.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Modifiers</Heading>
                    </Portion>
                </Row>
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Kind</Heading>

                        <Text marginBottom="micro">
                            The <code>kind</code> prop accepts three values&mdash;<code>primary</code>, <code>secondary</code>, and <code>tertiary</code>. If this prop isn’t applied, it defaults back to <code>primary</code>.
                        </Text>

                        <CodeBlock source={ sampleHRuleKinds } language="jsx" />

                        <HRule kind="primary" marginTop="micro" marginBottom="micro" />
                        <HRule kind="secondary" marginTop="micro" marginBottom="micro" />
                        <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                        <Text>
                            The colours of these three kinds of <code>HRule</code> can be set in the theme.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Side margin</Heading>

                        <Text marginBottom="micro">
                            While the <code>HRule</code> takes up 100% of the available width, you might want it to be as wide as the content above and below it.
                        </Text>

                        <Text marginBottom="micro">
                            The <code>sideMargin</code> prop sets the width, and aligns the rule to the centre of the page. It takes the same spacing values from <code>nano</code> all the way to <code>huge</code>.
                        </Text>

                        <CodeBlock source={ sampleHRuleSideMargin } language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="nano" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="micro" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="tiny" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="small" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="medium" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="large" marginTop="micro" marginBottom="micro" />
                <HRule sideMargin="huge" marginTop="micro" marginBottom="micro" />
            </Element>

            <HRule sideMargin="huge" />

            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="micro">Theming</Heading>

                        <CodeBlock source={ sampleHRuleTheme } language="javascript" />
                    </Portion>
                </Row>
            </Element>
        </CardComponentStyled>
    );
}
