"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Div,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    InputField,
    ToastItem,
    ToastsWrapper,
    Button,
    Range,
    FormItemGroup,
    Checkbox,
    CodeBlock,
    Select,
    RadioButton,
    Switch,
    ListBox
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-form.css";

// HOOKS ===============================================================================================================

// UTILS ===============================================================================================================

// DATA ================================================================================================================

const FormDocs = () => {
    // SAMPLE ==========================================================================================================
    const [selectedSpacing, setSelectedSpacing] = useState("small");
    const [isJoint, setIsJoint] = useState(false);
    const [isButtonFullWidth, setIsButtonFullWidth] = useState(false);

    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        age: "",
        about: "",
        gender: "",
        terms: false,
        newsletter: false,
        notifications: false,
    });

    const [ subscription, setSubscription ] = useState("monthly");

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================


    return (
        <Article id="page-form">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Form</Heading1>
                    <Text size="large" marginBottom="small">
                        A parent wrapper for all form elements, used to space them evenly
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li></li>
                    </ul>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Div
                        padding="small" shape="rounded" bgColour="slate-light80"
                        data-centered-children
                    >
                        <Row horizontalPadding="large" marginBottom="none">
                            <Portion>
                                <Card padding="micro" shape="rounded" shadow="soft">
                                    <Text size="large" weight="700" marginBottom="micro">Sign up</Text>

                                    {/* @ts-ignore */}
                                    <Form spacing={selectedSpacing}>
                                        {/* Text Input Fields */}
                                        <FormItemGroup isJoint={isJoint}>
                                            <InputField label="First name" placeholder="John" />
                                            <InputField label="Last name" placeholder="Doe" />
                                        </FormItemGroup>

                                        {/* Email Input */}
                                        <InputField 
                                            label="Email address" 
                                            type="email"
                                            placeholder="john.doe@example.com"
                                            helpText="We'll never share your email"
                                        />

                                        {/* Password Input */}
                                        <InputField 
                                            label="Password" 
                                            type="password"
                                            placeholder="Enter your password"
                                        />

                                        {/* Number Input */}
                                        <InputField 
                                            label="Age"
                                            type="number"
                                            min={0}
                                            max={120}
                                        />

                                        {/* Textarea */}
                                        <InputField 
                                            label="About you"
                                            type="textarea"
                                            rows={4}
                                            placeholder="Tell us about yourself..."
                                        />

                                        {/* Select Dropdown */}
                                        <Select
                                            label="Country"
                                            options={[
                                                { label: "United States", value: "us" },
                                                { label: "United Kingdom", value: "uk" },
                                                { label: "Canada", value: "ca" }
                                            ]}
                                        />

                                        {/* Radio Buttons */}
                                        <FormItemGroup>
                                            <Text marginBottom="nano">Gender</Text>
                                            <RadioButton
                                                id="gender-male"
                                                name="gender"
                                                value="male"
                                                label="Male"
                                            />
                                            <RadioButton
                                                id="gender-female"
                                                name="gender"
                                                value="female"
                                                label="Female"
                                            />
                                            <RadioButton
                                                id="gender-other"
                                                name="gender"
                                                value="other"
                                                label="Other"
                                            />
                                        </FormItemGroup>

                                        {/* Checkboxes */}
                                        <FormItemGroup>
                                            <Text marginBottom="nano">Interests</Text>
                                            <Checkbox
                                                id="interest-sports"
                                                name="interests"
                                                value="sports"
                                                label="Sports"
                                            />
                                            <Checkbox
                                                id="interest-music"
                                                name="interests"
                                                value="music"
                                                label="Music"
                                            />
                                            <Checkbox
                                                id="interest-reading"
                                                name="interests"
                                                value="reading"
                                                label="Reading"
                                            />
                                        </FormItemGroup>

                                        {/* Switch */}
                                        <Switch
                                            id="notifications"
                                            label="Enable notifications"
                                        />

                                        {/* File Upload */}
                                        <InputField
                                            type="file"
                                            label="Profile picture"
                                            accept="image/*"
                                        />

                                        {/* Range Input */}
                                        <Range
                                            label="Experience level"
                                            min={1}
                                            max={10}
                                            defaultValue={5}
                                        />

                                        {/* Date Input */}
                                        <InputField
                                            type="date"
                                            label="Birth date"
                                        />

                                        {/* Time Input */}
                                        <InputField
                                            type="time"
                                            label="Preferred contact time"
                                        />

                                        {/* Radio Tab Group */}
                                        <RadioTabGroup
                                            id="subscription-plan"
                                            name="subscription"
                                            label="Subscription Plan"
                                            value={subscription}
                                            options={[
                                                { id: "monthly", label: "Monthly", value: "monthly" },
                                                { id: "yearly", label: "Yearly", value: "yearly" },
                                                { id: "lifetime", label: "Lifetime", value: "lifetime" }
                                            ]}
                                            onChange={(e) => setSubscription(e.target.value)}
                                        />

                                        {/* ListBox */}
                                        <ListBox
                                            label="Choose your role"
                                            defaultValue="developer"
                                            options={[
                                                {
                                                    value: "developer",
                                                    label: "Developer",
                                                },
                                                {
                                                    value: "designer",
                                                    label: "Designer",
                                                },
                                                {
                                                    value: "manager",
                                                    label: "Project Manager",
                                                }
                                            ]}
                                        />

                                        {/* Submit Button */}
                                        <Button kind="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card>
                            </Portion>
                        </Row>
                    </Div>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Configure props
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock withSyntaxHighlighting language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Form${selectedSpacing && ` spacing="${selectedSpacing}"`}>`,
                                            `    <FormItemGroup${isJoint ? " isJoint" : ""}>`,
                                            `        <InputField label="First name" />`,
                                            `        <InputField label="Last name" />`,
                                            `    </FormItemGroup>\n`,
                                            `    <InputField label="Email" />\n`,
                                            `    <InputField label="Address" />\n`,
                                            `    <Button kind="primary"${isButtonFullWidth ? ` isFullWidth` : ""}>Submit</Button>`,
                                            `</Form>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* POSITION ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="spacing" label="Spacing" name="spacing"
                                        options={[
                                            { id : "spacing-opt-0", value : "none", label : "none" },
                                            { id : "spacing-opt-1", value : "nano", label : "nano" },
                                            { id : "spacing-opt-2", value : "micro", label : "micro" },
                                            { id : "spacing-opt-3", value : "tiny", label : "tiny" },
                                            { id : "spacing-opt-4", value : "small", label : "small" },
                                            { id : "spacing-opt-5", value : "medium", label : "medium" },
                                            { id : "spacing-opt-6", value : "large", label : "large" },
                                            { id : "spacing-opt-7", value : "huge", label : "huge" },
                                        ]}
                                        value={selectedSpacing}
                                        onChange={(e) => setSelectedSpacing(e.target.value)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* IS JOINT ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-is-joint"
                                        label="Join inputs inside the FormItemGroup"
                                        checked={isJoint}
                                        onChange={(e) => setIsJoint((e.target as HTMLInputElement).checked)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* IS JOINT ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-button-full-width"
                                        value="checkbox-button-full-width"
                                        name="checkbox-button-full-width"
                                        label="Make button full width"
                                        checked={isButtonFullWidth}
                                        onChange={(e) => setIsButtonFullWidth((e.target as HTMLInputElement).checked)}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                    Set global theme values
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock withSyntaxHighlighting language="css">
                                        /* Nothing for the Form */
                                    </CodeBlock>
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default FormDocs;
