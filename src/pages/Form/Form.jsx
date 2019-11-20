import React from "react";
import { Row, Portion, FormUnit, InputField, HRule, Notification } from "reactised-fictoan";

import Highlight, { defaultProps } from "prism-react-renderer";

import iconLeft from "../../assets/icons/home.svg";

//  Code sample 01 ========================================================================================
const snippetForm = `
<Form>
    All form elements
</Form>
`;

//  Code sample 02 ========================================================================================
const snippetFormUnit = `
<Form>
    <FormUnit>
        Some element
    </FormUnit>
    
    <FormUnit>
        Some element
    </FormUnit>
    
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
        console.log(iconLeft);
        return (
            <article id="page-form">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Form</h2>
                    </Portion>
                </Row>

                <Notification
                    isDismissible
                    position="top-left"
                    type="error"
                    content="Most form elements are available as components in RF. They all come with a bit of additional
                            functionality and design tweaks over the regular native elements."
                />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   SETTING IT UP  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="large" className="margin-top-medium">
                    <Portion>
                        <h4>Basics</h4>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <p>
                            Most form elements are available as components in RF. They all come with a bit of additional
                            functionality and design tweaks over the regular native elements.
                        </p>
                    </Portion>
                </Row>

                <HRule sideMargin="large" thick bgColor="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   FORM  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}

                <section id="add-content">
                    <Row sidePadding="large">
                        <Portion>
                            <h4>Form</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="large">
                        <Portion>
                            <p>
                                The <code>Form</code> component is used to encapsulate all the form elements with proper
                                spacing and margins.
                            </p>

                            <Highlight {...defaultProps} code={snippetForm} language="jsx" theme={undefined}>
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={className} style={style}>
                                        <code>
                                            {tokens.map((line, i) => (
                                                <div {...getLineProps({ line, key: i })}>
                                                    {line.map((token, key) => (
                                                        <span {...getTokenProps({ token, key })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                )}
                            </Highlight>
                        </Portion>
                    </Row>

                    <HRule sideMargin="large" thin bgColor="sky-20" />

                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*   FORM UNIT  */}
                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}

                    <Row sidePadding="large">
                        <Portion>
                            <h4>Form unit</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="large">
                        <Portion>
                            <p>
                                The <code>FormUnit</code> component is used to wrap individual elements and ensures
                                equal margins and alignment between them.
                            </p>

                            <Highlight {...defaultProps} code={snippetFormUnit} language="jsx" theme={undefined}>
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={className} style={style}>
                                        <code>
                                            {tokens.map((line, i) => (
                                                <div {...getLineProps({ line, key: i })}>
                                                    {line.map((token, key) => (
                                                        <span {...getTokenProps({ token, key })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                )}
                            </Highlight>
                        </Portion>
                    </Row>

                    <HRule thin sideMargin="large" bgColor="sky-20" />

                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*   TEXT INPUT  */}
                    {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}

                    <Row sidePadding="large">
                        <Portion>
                            <h4>Text input</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="large">
                        <Portion>
                            <h6>Default</h6>
                            <p>
                                The <code>InputField</code> is the basic input element for text. It comes with a default{" "}
                                <code>label</code>, a <code>helpText</code> and a native <code>placeholder</code>. The{" "}
                                <code>label</code> is visible by default, and the <code>helpText</code> is displayed on
                                focus.
                            </p>

                            <FormUnit className="margin-top-tiny margin-bottom-tiny">
                                <InputField
                                    label="Label, visible by default"
                                    helpText="Help text, visible on focus"
                                    placeholder="Placeholder"
                                />
                            </FormUnit>

                            <Highlight {...defaultProps} code={snippetTextInput} language="jsx" theme={undefined}>
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={className} style={style}>
                                        <code>
                                            {tokens.map((line, i) => (
                                                <div {...getLineProps({ line, key: i })}>
                                                    {line.map((token, key) => (
                                                        <span {...getTokenProps({ token, key })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                )}
                            </Highlight>
                        </Portion>
                    </Row>

                    <HRule thin sideMargin="large" bgColor="sky-20" />

                    <Row sidePadding="large">
                        <Portion>
                            <h6>Validation</h6>
                            <p>
                                The <code>InputField</code> can do some basic validation using the <code>pattern</code>{" "}
                                attribute. Just add the <code>validateThis</code> prop.
                            </p>

                            <p>This will add a grey check mark at the right-hand side of the field. </p>

                            <p>
                                It takes a regular expression to check against the input and adds a <code>:valid</code>{" "}
                                or a <code>:invalid</code> pseudo-class depending on validation passing or failing. The{" "}
                                <code>:valid</code> pseudo-class makes the check green, and the <code>:invalid</code>{" "}
                                displays a red cross. These stylings are applied with the <code>valid</code> and{" "}
                                <code>invalid</code> props as well.
                            </p>

                            <FormUnit className="margin-top-tiny margin-bottom-tiny">
                                <InputField
                                    label="Email"
                                    helpText="Your work email works best"
                                    placeholder="name@example.com"
                                    errorText="Enter a valid email"
                                    validateThis
                                    pattern="^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"
                                />
                            </FormUnit>

                            <Highlight {...defaultProps} code={snippetInputValidation} language="jsx" theme={undefined}>
                                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                    <pre className={className} style={style}>
                                        <code>
                                            {tokens.map((line, i) => (
                                                <div {...getLineProps({ line, key: i })}>
                                                    {line.map((token, key) => (
                                                        <span {...getTokenProps({ token, key })} />
                                                    ))}
                                                </div>
                                            ))}
                                        </code>
                                    </pre>
                                )}
                            </Highlight>
                        </Portion>
                    </Row>
                </section>

                {/*<FormUnit>*/}
                {/*    <CheckBox id="sup" label="Some label" />*/}
                {/*</FormUnit>*/}

                {/*<FormUnit>*/}
                {/*    <Switch id="sup2" label="Some label" />*/}
                {/*</FormUnit>*/}
            </article>
        );
    }
}

export default Forms;
