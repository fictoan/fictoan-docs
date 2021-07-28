import React, { useEffect } from "react";

import { CodeBlock, Element, Heading, HRule, Portion, RadioButton, Row, Table, Text } from "fictoan-react";

import { RadioButtonDocsStyled } from "./RadioButton.styled";
import { sampleRadioButton, sampleRadioButtonTheming } from "./CodeSamples";

export const RadioButtonDocs = () => {
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
                    <Heading as="h2" className="text-hue">Radio button</Heading>
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
                                    <code>as</code>
                                </td>

                                <td>
                                    Component type
                                </td>

                                <td>
                                    <code>input</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT CHECKBOX */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default radio button</Heading>

                        <Text marginBottom="micro">
                            The <code>RadioButton</code> is a modified default <code>input type="radio"</code> element
                            to allow for better usability and styling.
                        </Text>

                        <CodeBlock source={sampleRadioButton} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            Of the above attributes, the <code>name</code> needs to match all the radio buttons you want
                            as a group.
                        </Text>

                        <RadioButton
                            as="input"
                            id="radio-1"
                            name="choices-1"
                            value="yes"
                            label="Yes"
                        />

                        <RadioButton
                            as="input"
                            id="radio-2"
                            name="choices-1"
                            value="no"
                            label="No"
                        />

                        <RadioButton
                            as="input"
                            id="radio-3"
                            name="choices-1"
                            value="maybe"
                            label="Maybe"
                        />
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

                        <CodeBlock source={sampleRadioButtonTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </RadioButtonDocsStyled>
    );
}
