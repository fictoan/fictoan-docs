import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule,
    Table
} from "fictoan-react";

import { HRuleStyled } from "./HRule.styled";
import { sampleHRule, sampleHRuleKinds, sampleHRuleSideMargin } from "./CodeSamples";


export const HorizontalRule = () => {
    useEffect(() => {
        document.title = "HRule — FICTOAN";
    }, []);

    return (
        <HRuleStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Horizontal rule</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="tiny">Props</Heading>

                        <Table bordersFor="both" padding="tiny">
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Value</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><code>kind</code></td>
                                    <td><code>primary</code>, <code>secondary</code>, <code>tertiary</code>.</td>
                                    <td><code>primary</code></td>
                                </tr>
                                <tr>
                                    <td><code>sideMargin</code></td>
                                    <td><code>nano</code>, <code>micro</code>, <code>tiny</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>huge</code></td>
                                    <td>&mdash;</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">Default</Heading>

                        <Text>
                            The <code>HRule</code> element is used to separate sections of content on your page. It’s a self-closing element, and doesn’t accept any children.
                        </Text>

                        <CodeBlock source={ sampleHRule } language="jsx" />

                        <Text>
                            The above code will display the default <code>HRule</code>, which looks like this&mdash;
                        </Text>

                        <HRule />

                        <Text>
                            It has a top and bottom margin of <code>4vmax</code>, which you can over ride with the <code>marginTop</code> and <code>marginBottom</code> props.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            <Element as="section" id="usage">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">Modifiers</Heading>
                    </Portion>
                </Row>
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5">Kind</Heading>

                        <Text>
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
                        <Heading as="h5">Side margin</Heading>

                        <Text>
                            While the <code>HRule</code> takes up 100% of the available width, you might want it to be as wide as the content above and below it.
                        </Text>

                        <Text>
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
        </HRuleStyled>
    );
}
