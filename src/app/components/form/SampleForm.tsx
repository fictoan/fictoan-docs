"use client";

import React, { FormEvent, useState } from "react";

import {
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    CodeBlock, Divider, FileUpload, Footer,
    Form,
    FormItemGroup,
    InputField,
    ListBox,
    Portion,
    RadioGroup,
    RadioTabGroup,
    Range,
    Row,
    Select,
    Switch,
    SwitchGroup,
    Text,
    TextArea,
} from "fictoan-react";

import EyeOpenIcon from "../../../assets/icons/eye-open.svg";
import EyeClosedIcon from "../../../assets/icons/eye-closed.svg";

export const SampleForm = ({ spacing, isJoint, isButtonFullWidth }) => {
    // FORM STATE ====================================================================================================
    const [ formData, setFormData ] = useState({
        // Text inputs
        firstName   : "",
        lastName    : "",
        email       : "",
        password    : "",
        phoneNumber : "",
        website     : "",

        // Rich inputs
        birthDate : "",
        age       : "",
        about     : "",

        // Selects and ListBox
        country  : "",
        language : "",
        role     : "developer",
        skills   : [] as string[],

        // Options
        gender            : "female",
        contactPreference : "sms",

        // Checkboxes and Switches
        interests     : [] as string[],
        food          : [] as string[],
        hobbies       : [] as string[],
        notifications : false,
        newsletter    : false,

        // Range
        experienceLevel     : "5",
        experienceAsManager : "3",

        // File
        documents      : [],

        termsAccepted : false,
    });

    const [showPassword, setShowPassword] = useState(false);

    // FORM HANDLERS ===================================================================================================
    const handleInputChange = (name: string) => (
        valueOrEvent: string | string[] | React.ChangeEvent<HTMLInputElement>,
    ) => {
        // Handle array values (for ListBox multiple selection)
        if (Array.isArray(valueOrEvent)) {
            setFormData(prev => ({
                ...prev,
                [name] : valueOrEvent,
            }));
            return;
        }

        // Handle existing string/event cases
        const value = typeof valueOrEvent === "string"
            ? valueOrEvent
            : valueOrEvent.target.value;

        setFormData(prev => ({
            ...prev,
            [name] : value,
        }));
    };

    const handleRadioChange = (name: string) => (value: string) => {
        setFormData(prev => ({
            ...prev,
            [name] : value,
        }));
    };

    const handleCheckboxChange = (name: string, value?: string) => (checked: boolean) => {
        if (name === "interests") {
            setFormData(prev => ({
                ...prev,
                interests : checked
                    ? [ ...prev.interests, value! ]
                    : prev.interests.filter(interest => interest !== value),
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name] : checked,
            }));
        }
    };

    const handleListBoxChange = (name: string) => (
        valueOrEvent: string | string[] | React.ChangeEvent<HTMLInputElement>,
    ) => {
        console.log("ListBoxChange - input:", valueOrEvent);

        // Handle both direct values and events
        const value = typeof valueOrEvent === "object" && "target" in valueOrEvent
            ? valueOrEvent.target.value
            : valueOrEvent;

        if (value == null) return;

        setFormData(prev => ({
            ...prev,
            [name] : Array.isArray(value) ? value : [ value ],
        }));
    };

    const handleRangeChange = (name: string) => (value: number) => {
        setFormData(prev => ({
            ...prev,
            [name] : value.toString(),
        }));
    };

    const handleFileChange = (name: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            if (name === "profilePicture") {
                setFormData(prev => ({
                    ...prev,
                    [name] : files[0].name,
                }));
            } else {
                // For multiple files
                setFormData(prev => ({
                    ...prev,
                    [name] : Array.from(files).map(file => file.name),
                }));
            }
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <Row isFullWidth>
            {/* ACTUAL FORM //////////////////////////////////////////////////////////////////////////////////////// */}
            <Portion desktopSpan="half">
                <Card padding="micro" shape="rounded" shadow="soft">
                    <Text size="large" weight="700" marginBottom="micro">Sign up</Text>

                    <Form
                        // spacing={spacing}
                        onSubmit={handleSubmit}
                    >
                        {/* FIRST NAME AND LAST NAME =============================================================== */}
                        <FormItemGroup isJoint={isJoint}>
                            <InputField
                                label="First name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange("firstName")}
                                placeholder="John"
                                required
                            />

                            <InputField
                                label="Last name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange("lastName")}
                                placeholder="Doe"
                                required
                            />
                        </FormItemGroup>

                        {/* EMAIL ================================================================================== */}
                        <InputField
                            label="Email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange("email")}
                            placeholder="john@example.com"
                            required
                        />

                        {/* PASSWORD =============================================================================== */}
                        {/* <InputField */}
                        {/*     label="Password" */}
                        {/*     type="password" */}
                        {/*     name="password" */}
                        {/*     value={formData.password} */}
                        {/*     onChange={handleInputChange("password")} */}
                        {/*     helpText="At least 8 characters" */}
                        {/*     iconRight={<EyeIcon />} */}
                        {/* /> */}

                        <InputField
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange("password")}
                            helpText="At least 8 characters"
                            iconRight={
                                <div
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setShowPassword(!showPassword);
                                    }}
                                >
                                    {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
                                </div>
                            }
                        />

                        {/* PHONE NUMBER AND WEBSITE =============================================================== */}
                        <FormItemGroup isJoint={isJoint}>
                            <InputField
                                label="Phone Number"
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange("phoneNumber")}
                                placeholder="+1 (234) 567-8900"
                            />

                            <InputField
                                label="Website"
                                type="url"
                                name="website"
                                value={formData.website}
                                onChange={handleInputChange("website")}
                                placeholder="https://example.com"
                            />
                        </FormItemGroup>

                        {/* ABOUT YOU ============================================================================== */}
                        <TextArea
                            label="About you"
                            characterLimit={50}
                            wordLimit={10}
                            // @ts-ignore
                            onChange={handleInputChange("about")}
                            value={formData.about}
                        />

                        {/* COUNTRY AND LANGUAGE =================================================================== */}
                        <FormItemGroup equalWidthForChildren>
                            <Select
                                label="Country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange("country")}
                                options={[
                                    { label : "United States", value : "us" },
                                    { label : "United Kingdom", value : "uk" },
                                    { label : "Canada", value : "ca" },
                                ]}
                                isFullWidth
                            />

                            <Select
                                label="Language"
                                name="language"
                                value={formData.language}
                                onChange={handleInputChange("language")}
                                options={[
                                    { label : "English", value : "en" },
                                    { label : "Spanish", value : "es" },
                                    { label : "French", value : "fr" },
                                ]}
                                isFullWidth
                            />
                        </FormItemGroup>

                        {/* SKILLS ================================================================================= */}
                        <ListBox
                            label="Skills"
                            name="skills"
                            value={formData.skills}
                            isFullWidth
                            onChange={handleListBoxChange("skills")}
                            options={[
                                { value : "react", label : "React" },
                                { value : "vue", label : "Vue" },
                                { value : "angular", label : "Angular" },
                                { value : "svelte", label : "Svelte" },
                            ]}
                            allowMultiSelect
                            allowCustomEntries
                            helpText="Select from the list, or add your own"
                        />

                        {/* FILE UPLOAD ============================================================================ */}
                        <FileUpload
                            id="file-upload"
                            name="files"
                            label="Upload your resume"
                            allowMultipleFiles
                            accept=".pdf,.doc,.docx, .png,.jpg,.jpeg"
                            onChange={(files) => console.log("Files:", files)}
                            helpText="Max file size is 5MB"
                            required
                            badgeBgColour="amber"
                            badgeTextColour="black"
                            height="120px"
                        />

                        {/* EXPERIENCE ============================================================================= */}
                        <FormItemGroup equalWidthForChildren>
                            <Range
                                isFullWidth
                                label="Experience"
                                name="experienceLevel"
                                min={1} max={20}
                                suffix=" years"
                                value={formData.experienceLevel}
                                onChange={handleRangeChange("experienceLevel")}
                            />

                            <Range
                                isFullWidth
                                label="Exp as manager"
                                name="experienceAsManager"
                                min={1}
                                // @ts-expect-error
                                max={formData.experienceLevel}
                                suffix={` years`}
                                value={formData.experienceAsManager}
                                onChange={handleRangeChange("experienceAsManager")}
                            />
                        </FormItemGroup>

                        {/* CONTACT PREFERENCE ===================================================================== */}
                        <RadioTabGroup
                            id="contact-preference"
                            name="contactPreference"
                            label="Preferred contact method"
                            value={formData.contactPreference}
                            options={[
                                { id : "email-contact", label : "Email", value : "email" },
                                { id : "phone-contact", label : "Phone", value : "phone" },
                                { id : "sms-contact", label : "SMS", value : "sms" },
                                { id : "letters-contact", label : "Letters", value : "letters" },
                                { id : "pigeon", label : "Pigeon", value : "pigeon" },
                            ]}
                            onChange={handleRadioChange("contactPreference")}
                        />

                        {/* GENDER ================================================================================ */}
                        <RadioGroup
                            label="Gender"
                            name="gender"
                            value={formData.gender}
                            options={[
                                { id : "male", label : "Male", value : "male" },
                                { id : "female", label : "Female", value : "female" },
                                { id : "other", label : "Other", value : "other" },
                            ]}
                            onChange={handleRadioChange("gender")}
                        />

                        {/* INTERESTS ============================================================================== */}
                        <Text marginBottom="nano">Interests</Text>
                        <FormItemGroup>
                            <Checkbox
                                id="interest-tech"
                                name="interests"
                                value="tech"
                                label="Technology"
                                checked={formData.interests.includes("tech")}
                                onChange={handleCheckboxChange("interests", "tech")}
                            />

                            <Checkbox
                                id="interest-books"
                                name="interests"
                                value="books"
                                label="Books"
                                checked={formData.interests.includes("books")}
                                onChange={handleCheckboxChange("interests", "books")}
                            />

                            <Checkbox
                                id="interest-movies"
                                name="interests"
                                value="movies"
                                label="Movies"
                                checked={formData.interests.includes("movies")}
                                onChange={handleCheckboxChange("interests", "movies")}
                            />

                            <Checkbox
                                id="interest-business"
                                name="interests"
                                value="business"
                                label="Business"
                                checked={formData.interests.includes("business")}
                                onChange={handleCheckboxChange("interests", "business")}
                            />

                            <Checkbox
                                id="interest-Travel"
                                name="interests"
                                value="Travel"
                                label="Travel"
                                checked={formData.interests.includes("Travel")}
                                onChange={handleCheckboxChange("interests", "Travel")}
                            />
                        </FormItemGroup>

                        {/* FOOD =================================================================================== */}
                        {/* <CheckboxGroup */}
                        {/*     label="Preferred cuisine" */}
                        {/*     name="food" */}
                        {/*     options={[ */}
                        {/*         { id : "indian", value : "indian", label : "Indian" }, */}
                        {/*         { id : "italian", value : "italian", label : "Italian" }, */}
                        {/*         { id : "French", value : "French", label : "French" }, */}
                        {/*         { id : "greek", value : "greek", label : "Greek" }, */}
                        {/*         { id : "thai", value : "thai", label : "Thai" }, */}
                        {/*     ]} */}
                        {/*     value={formData.food} */}
                        {/*     onChange={(values: any) => setFormData({ ...formData, food : values })} */}
                        {/* /> */}

                        <FormItemGroup equalWidthForChildren>
                            {/* NOTIFICATIONS ========================================================================== */}
                            <Switch
                                id="notifications"
                                name="notifications"
                                label="Enable notifications"
                                checked={formData.notifications}
                                onChange={handleCheckboxChange("notifications")}
                            />

                            {/* NEWSLETTER ============================================================================= */}
                            <Switch
                                id="newsletter"
                                name="newsletter"
                                label="Subscribe to newsletter"
                                checked={formData.newsletter}
                                onChange={handleCheckboxChange("newsletter")}
                            />
                        </FormItemGroup>

                        <Divider marginBottom="micro" kind="secondary" />

                        <Footer verticallyCentreItems pushItemsToEnds>
                            {/* TERMS CHECKBOX ===================================================================== */}
                            <Checkbox
                                id="terms"
                                name="termsAccepted"
                                label="I accept the terms and conditions"
                                checked={formData.termsAccepted}
                                onChange={handleCheckboxChange("termsAccepted")}
                            />

                            {/* SUBMIT BUTTON ====================================================================== */}
                            <Button
                                kind="primary"
                                type="submit"
                                isFullWidth={isButtonFullWidth}
                            >
                                Submit
                            </Button>
                        </Footer>
                    </Form>
                </Card>
            </Portion>

            {/* DISPLAY FORM VALUES //////////////////////////////////////////////////////////////////////////////// */}
            <Portion desktopSpan="half">
                <Card padding="micro" shape="rounded">
                    <Text size="large" weight="700" marginBottom="micro">Current form values</Text>
                    <CodeBlock withSyntaxHighlighting language="jsx" showCopyButton>
                        {JSON.stringify(formData, null, 4)}
                    </CodeBlock>
                </Card>
            </Portion>
        </Row>
    );
};
