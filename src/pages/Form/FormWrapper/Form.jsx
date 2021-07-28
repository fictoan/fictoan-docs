import React, { useEffect } from "react";

import { CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import { FormDocsStyled } from "./Form.styled";
import { sampleFormWrapper, sampleFormWrapperSpacing } from "./CodeSamples";

export const FormDocs = () => {
    useEffect(() => {
        document.title = "Form wrapper — Fictoan";

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
        <FormDocsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Form wrapper</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
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
                                    <code>spacing</code>
                                </td>

                                <td>
                                    Margin bottom for the individual form items.
                                </td>

                                <td>
                                    <code>none</code><br />
                                    <code>nano</code><br />
                                    <code>micro</code><br />
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    <code>small</code>
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
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default form</Heading>

                        <Text marginBottom="micro">
                            The <code>Form</code> uses a native <code>form</code> element that you can extend with
                            props and events.
                        </Text>

                        <CodeBlock source={sampleFormWrapper} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The form wrapper acts as a simple container within which you can add individual form items,
                            and also attach the <code>action</code> attribute to.
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
                {/*  KIND  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Spacing</Heading>

                        <Text marginBottom="micro">
                            The Tabs component accepts basically one custom prop—<code>tabs</code>.
                        </Text>

                        <CodeBlock source={sampleFormWrapperSpacing} language="jsx" marginBottom="micro" />

                        <Text marginTop="micro">
                            The prop accepts an array of individual elements with <code>key</code>, <code>label</code>,
                            and <code>content</code> values. The first two are strings, the last one should point to a
                            React component.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <Text>
                                Nothing for the <code>FormWrapper</code>, sorry.
                            </Text>
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </FormDocsStyled>
    );
}
