import React, { useEffect } from "react";

import { CodeBlock, Element, Heading, HRule, Portion, Row, Select, Table, Text } from "fictoan-react";

import { RadioButtonDocsStyled } from "./RadioButton.styled";
import { sampleSelect, sampleSelectOption, sampleSelectTheming } from "./CodeSamples";
import { Link } from "react-router-dom";

export const SelectDocs = () => {
    useEffect(() => {
        document.title = "Select — Fictoan";

        // try {
        //     window.scroll({
        //         top  : 0,
        //         left : 0
        //     });
        // } catch (error) {
        //     window.scrollTo(0, 0);
        // }
    }, []);

    return (
        <RadioButtonDocsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Select dropdown</Heading>
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
                        <Heading as="h3" marginBottom="tiny">Default select</Heading>

                        <Text marginBottom="micro">
                            The <code>Select</code> is a modified default <code>select</code> element.
                        </Text>

                        <CodeBlock source={sampleSelect} language="jsx" marginBottom="micro" />

                        <Select
                            options={[
                                {
                                    name     : "Select an option",
                                    value    : "select-an-option",
                                    disabled : true,
                                    selected : true
                                },
                                {
                                    name  : "Option 1",
                                    value : "option-1"
                                },
                                {
                                    name  : "Option 2",
                                    value : "option-2"
                                },
                                {
                                    name  : "Option 3",
                                    value : "option-3"
                                },
                                {
                                    name  : "Option 4",
                                    value : "option-4"
                                },
                                {
                                    name  : "Option 5",
                                    value : "option-5"
                                }
                            ]}
                        />
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  Props  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  OPTIONS  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Options</Heading>

                        <Text marginBottom="micro">
                            The <code>options</code> prop accepts an array of individual option objects that show up as
                            items in the dropdown.
                        </Text>

                        <CodeBlock source={sampleSelectOption} language="jsx" marginBottom="micro" />

                        <Text>
                            The option object takes <code>name</code>, <code>value</code> as standard keys. You can also
                            use <code>disabled</code> and <code>selected</code> with boolean values for some extra
                            functionality.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  LABEL  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Label</Heading>

                        <Text marginBottom="micro">
                            You can pass an optional <code>label</code> prop to have a simple,
                            um, <code>label</code> accompany the <code>Select</code> component.
                        </Text>

                        <CodeBlock source={sampleSelectOption} language="jsx" marginBottom="micro" />

                        <Select
                            label="Your options"
                            options={[
                                {
                                    name     : "Select an option",
                                    value    : "select-an-option",
                                    disabled : true,
                                    selected : true
                                },
                                {
                                    name  : "Option 1",
                                    value : "option-1"
                                },
                                {
                                    name  : "Option 2",
                                    value : "option-2"
                                },
                                {
                                    name  : "Option 3",
                                    value : "option-3"
                                },
                                {
                                    name  : "Option 4",
                                    value : "option-4"
                                },
                                {
                                    name  : "Option 5",
                                    value : "option-5"
                                }
                            ]}
                        />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <Text marginBottom="micro">
                            The <code>Select</code> component shares almost all its theming attributes from the <Link
                            to="/components/input-field">input field</Link>, and the chevron is the only customisation you can
                            do.
                        </Text>

                        <CodeBlock source={sampleSelectTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </RadioButtonDocsStyled>
    );
}
