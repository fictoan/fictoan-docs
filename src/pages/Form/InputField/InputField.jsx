import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule,
    InputField,
    Table,
    CodeBlock,
} from "fictoan-react";

import { CardDocsStyled } from "./InputField.styled";
import {
    sampleInput,
    sampleInputBasicProps,
    sampleInputHelpText,
    sampleInputRequired,
    sampleInputValidation,
    sampleInputTheme
} from "./CodeSamples";


export const InputFieldDocs = () => {
    useEffect(() => {
        document.title = "Input field — Fictoan";

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
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Input field</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    {/*  NATIVE PROPS  ///////////////////////////////////  */}
                    <Heading as="h5" marginBottom="nano">Native props</Heading>
                    <Table bordersFor="both" padding="tiny" isfullwidth>
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
                                    <code>type</code>
                                </td>

                                <td>
                                    Data type to be entered
                                </td>

                                <td>
                                    Standard list of accepted native input data types
                                </td>

                                <td>
                                    text
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>label</code>
                                </td>

                                <td>
                                    Input label
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>placeholder</code>
                                </td>

                                <td>
                                    Temporary text displayed inside the input field when value is empty
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>required</code>
                                </td>

                                <td>
                                    Flag to indicate mandatory input for form submission
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>pattern</code>
                                </td>

                                <td>
                                    Regex to verify input value
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    {/*  CUSTOM PROPS  ///////////////////////////////////  */}
                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Table bordersFor="both" padding="tiny" isfullwidth>
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
                                    <code>helpText</code>
                                </td>

                                <td>
                                    Explanation of expected valid input
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>validateThis</code>
                                </td>

                                <td>
                                    Flag for turning on basic input validation
                                </td>

                                <td>
                                    boolean
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>errorText</code>
                                </td>

                                <td>
                                    Temporary text displayed inside the input field when value is empty
                                </td>

                                <td>
                                    string
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
                            The <code>InputField</code> component is a simple, straightforward native element with some
                            added features.
                        </Text>

                        <CodeBlock source={sampleInput} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>InputField</code>, which looks like
                            this&mdash;
                        </Text>

                        <InputField />

                        <Text marginTop="micro">
                            It defaults to a text input, with a border that changes colour and width when active. The
                            input takes the full-width of the parent container.
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
                        <Heading as="h5" marginBottom="nano">Label and placeholder</Heading>

                        <Text marginBottom="micro">
                            For an input field to be useful, there are two main props: the <code>label</code>, and
                            the <code>placeholder</code>.
                        </Text>

                        <CodeBlock source={sampleInputBasicProps} language="jsx" marginBottom="micro" />

                        <InputField
                            label="Label"
                            placeholder="Placeholder"
                        />

                        <Text marginTop="micro">
                            The <code>label</code> sits above the box, and the <code>placeholder</code>, inside. On
                            focus, the <code>label</code> increases in weight, and the placeholder is hidden during
                            typing.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CUSTOM STYLING  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Help text</Heading>

                        <Text marginBottom="micro">
                            The <code>helpText</code> prop allows you to add a description of what is a valid entry for
                            the input.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleInputHelpText} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <InputField
                            label="Email"
                            placeholder="Work email preferred"
                            helpText="Confirmation will be sent here"
                        />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CUSTOM STYLING  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Required</Heading>

                        <Text marginBottom="micro">
                            The <code>required</code> flag adds a red asterisk to the left of the label.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleInputRequired} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <InputField
                            label="Email"
                            placeholder="Work email preferred"
                            helpText="Confirmation will be sent here"
                            required
                        />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SHADOW  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Validation</Heading>

                        <Text marginBottom="micro">
                            Input validation is done by adding a chain of props to the component—
                        </Text>

                        <Text marginBottom="nano">
                            <code>validateThis</code> to enable UI states for validation indication.
                        </Text>

                        <Text marginBottom="nano">
                            <code>pattern</code> to validate against a provided regex.
                        </Text>

                        <Text marginBottom="micro">
                            <code>errorText</code> to display mistakes in the input
                        </Text>

                        <Text marginBottom="micro">
                            You can use <code>type</code> to enable basic in-browser validation&mdash;but just this prop
                            along is not
                            recommended as you’ll have no control over the underlying validation expression.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleInputValidation} language="jsx" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <InputField
                            label="Email"
                            placeholder="Work email preferred"
                            helpText="Confirmation will be sent here"
                            required
                            validateThis
                            errorText="Um, that isn’t a valid email"
                            pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                        />

                        <Text marginTop="micro" marginBottom="micro">
                            Adding the <code>validateThis</code> flag enables a grey check mark at the right end of the
                            input field, which either turns green on valid entry, or into a red cross mark on invalid
                            entry.
                        </Text>

                        <Text marginBottom="micro">
                            The error state is displayed when the input loses focus, so that it doesn’t start screaming
                            bloody murder from the get go.
                        </Text>

                        <Text marginTop="micro">
                            Keep the <code>helpText</code> and the <code>errorText</code> short for best results.
                        </Text>
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

                            <CodeBlock source={sampleInputTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </CardDocsStyled>
    );
}
