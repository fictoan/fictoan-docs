import React from "react";
import { Row, Text, Portion, FormItem, InputField, HRule, CodeBlock, FormItemGroup, FormWrapper } from "fictoan-react";

//  Code sample 01 ========================================================================================
const snippetForm = `
<Form>
    All form elements
</Form>
`;

//  Code sample 02 ========================================================================================
const snippetFormItem = `
<Form>
    <FormItem>
        Some element
    </FormItem>

    <FormItem>
        Some element
    </FormItem>

    ...how many ever you need.
</Form>
`;

//  Code sample 03 ========================================================================================
const snippetTextInput = `
<InputField
    label="Label, visible by default"
    helpText="This is a very long helpText"
    placeholder="Placeholder"
/>
`;

//  Code sample04
const snippetInputValidation = `
<InputField
    label="Email"
    helpText="Your work email works best"
    placeholder="name@example.com"
    errorText="Enter a valid email"
    validateThis
    pattern="^([0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$"
/>
`;

class Forms extends React.PureComponent {
    componentDidMount() {
        document.title = "Form — FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article id="page-form">
                <Row sidePadding="huge" marginTop="small" marginBottom="small">
                    <Portion>
                        <h2 className="text-hue">Form</h2>
                    </Portion>
                </Row>

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   SETTING IT UP  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge" className="margin-top-medium">
                    <Portion>
                        <h4>Basics</h4>
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Text>
                            Most form elements are available as components in RF. They all come with a bit of additional
                            functionality and design tweaks over the regular native elements.
                        </Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" thick bgColour="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   FORM  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}

                <section id="add-content">
                    <Row sidePadding="huge">
                        <Portion>
                            <h4>Form</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="huge">
                        <Portion>
                            <Text>
                                The <code>Form</code> component is used to encapsulate all the form elements with proper
                                spacing and margins.
                            </Text>

                            <CodeBlock source={snippetForm} language="jsx" />
                        </Portion>
                    </Row>

                    <HRule sideMargin="huge" thin bgColour="sky-20" />

                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*   FORM UNIT  */}
                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}

                    <Row sidePadding="huge">
                        <Portion>
                            <h4>Form unit</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="huge">
                        <Portion>
                            <Text>
                                The <code>FormItem</code> component is used to wrap individual elements and ensures
                                equal margins and alignment between them.
                            </Text>

                            <FormWrapper spacing="large">
                                <div>
                                    <FormItemGroup>
                                        <InputField
                                            label="Label, visible by default"
                                        />

                                        <InputField
                                            label="Label, visible by default"
                                        />

                                        <InputField
                                            label="Label, visible by default"
                                        />
                                    </FormItemGroup>
                                </div>
                            </FormWrapper>

                            <CodeBlock source={snippetFormItem} language="jsx" />
                        </Portion>
                    </Row>

                    <HRule thin sideMargin="large" bgColour="sky-20" />

                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*   TEXT INPUT  */}
                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////  */}

                    <Row sidePadding="huge">
                        <Portion>
                            <h4>Text input</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="huge">
                        <Portion>
                            <h6>Default</h6>
                            <Text>
                                The <code>InputField</code> is the basic input element for text. It comes with a default{" "}
                                <code>label</code>, a <code>helpText</code> and a native <code>placeholder</code>. The{" "}
                                <code>label</code> is visible by default, and the <code>helpText</code> is displayed on
                                focus.
                            </Text>

                            <FormItem className="margin-top-tiny margin-bottom-tiny">
                                <InputField
                                    label="Label, visible by default"
                                    helpText="Help text, visible on focus"
                                    placeholder="Placeholder"
                                />
                                <InputField
                                    label="Email"
                                    helpText="Your work email works best"
                                    placeholder="name@example.com"
                                    errorText="Enter a valid email"
                                    validateThis
                                    pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"
                                />
                            </FormItem>

                            <CodeBlock source={snippetTextInput} language="jsx" />
                        </Portion>
                    </Row>

                    <HRule thin sideMargin="large" bgColour="sky-20" />

                    <Row sidePadding="huge">
                        <Portion>
                            <h6>Validation</h6>
                            <Text>
                                The <code>InputField</code> can do some basic validation using the <code>pattern</code>{" "}
                                attribute. Just add the <code>validateThis</code> prop.
                            </Text>

                            <Text>This will add a grey check mark at the right-hand side of the field. </Text>

                            <Text>
                                It takes a regular expression to check against the input and adds a <code>:valid</code>{" "}
                                or a <code>:invalid</code> pseudo-class depending on validation passing or failing. The{" "}
                                <code>:valid</code> pseudo-class makes the check green, and the <code>:invalid</code>{" "}
                                displays a red cross. These stylings are applied with the <code>valid</code> and{" "}
                                <code>invalid</code> props as well.
                            </Text>

                            <FormItem className="margin-top-tiny margin-bottom-tiny">
                                <InputField
                                    label="Email"
                                    helpText="Your work email works best"
                                    placeholder="name@example.com"
                                    errorText="Enter a valid email"
                                    validateThis
                                    pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"
                                />
                            </FormItem>

                            <CodeBlock source={snippetInputValidation} language="jsx" />
                        </Portion>
                    </Row>
                </section>

                {/* <FormItem> */}
                {/*    <CheckBox id="sup" label="Some label" /> */}
                {/* </FormItem> */}

                {/* <FormItem> */}
                {/*    <Switch id="sup2" label="Some label" /> */}
                {/* </FormItem> */}
            </article>
        );
    }
}

export default Forms;
