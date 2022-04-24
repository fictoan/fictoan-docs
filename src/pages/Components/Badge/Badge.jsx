import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Badge,
    CodeBlock,
    Heading,
    HRule,
    Table,
    Text
} from "fictoan-react";

import { RadioButtonDocsStyled } from "./Badge.styled";
import { sampleBadge, sampleBadgeSibling } from "./CodeSamples";

export const BadgeDocs = () => {
    useEffect(() => {
        document.title = "CheckBox — Fictoan";

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
        <RadioButtonDocsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Badge</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth>
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
                                    <code>size</code>
                                </td>

                                <td>
                                    The, um, size of the button
                                </td>

                                <td>
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    <code>tiny</code>, auto-fallback
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
                                    <code>curved</code><br />
                                    <code>circular</code><br />
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth>
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
                                    <code>textColour</code> / <code>textColor</code>
                                </td>

                                <td>
                                    Text colour
                                </td>

                                <td>
                                    Any colour from <code>defaultColours</code>.
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
            {/*  DEFAULT CHECKBOX */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default badge</Heading>

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
                            <Badge size="tiny" shape="curved" bgColour="green-20" textColour="green">
                                NEW
                            </Badge>
                        </Element>

                        <Text marginTop="micro">
                            The <code>verticallyCentreItems</code> prop in the parent aligns the elements on the Y-axis.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <Text>Nothing here, but you can use all the props you would for a <code>Button</code>, such as <code>bgColour</code>, <code>textColour</code> and <code>borderColour</code>.</Text>
                    </Portion>
                </Row>
            </Element>
        </RadioButtonDocsStyled>
    );
}
