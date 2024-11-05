"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Callout,
    Element,
    Heading1,
    Heading4,
    Divider,
    Portion,
    Row,
    Select,
    Text,
    Article,
    Button,
    Form,
    Card, Header, RadioTabGroup, Range, InputField, Checkbox, RadioButton, Div,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-select.css";

// CODE SNIPPETS =======================================================================================================
import {
    sampleSelect,
    sampleSelectGroupOptions,
    sampleSelectLabel,
    sampleSelectOption,
    sampleSelectOptionSelected,
    sampleSelectTheming,
} from "./CodeSamples";

// DATA ================================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";
import { selectProps } from "./config";
import { colourOptions } from "../../colour/colours";


const SelectDocs = () => {
    useEffect(() => {
        document.title = "Select dropdown — Fictoan";
    }, []);

    // SAMPLE ==========================================================================================================
    const [label, setLabel] = useState("Select an option");
    const [options, setOptions] = useState([
        { label : "Option 1", value : "1" },
    ]);
    const [selectedDefaultValue, setSelectedDefaultValue] = useState("");
    const [isFullWidth, setIsFullWidth] = useState(false);

    // Function to handle adding a new option
    const addOption = () => {
        setOptions([...options, { label : "", value : "" }]);
    };

    // Function to handle updating an option
    const updateOption = (index, newLabel, newValue) => {
        const newOptions = [...options];
        newOptions[index] = { label : newLabel, value : newValue };
        setOptions(newOptions);
    };

    // CUSTOMISE =======================================================================================================

    // THEME ===========================================================================================================
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(selectProps.variables);

    return (
        <Article id="page-select">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Select dropdown</Heading1>
                    <Text size="large" marginBottom="small">
                        A native select dropdown for picking a choice from a long list
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>
                            It takes the width of the longest option, use <code>isFullWidth</code> to make it take the
                            width of the parent container
                        </li>
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
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        <Select
                            label={label}
                            options={options}
                            defaultValue={selectedDefaultValue}
                            isFullWidth={isFullWidth}
                        />
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Select`,
                                            `    label="${label}"`,
                                            `    options={[`,
                                            ...options.map((option) => `        { label: "${option.label}", value: "${option.value}" },`),
                                            `    ]}`,
                                            selectedDefaultValue ? `    defaultValue="${selectedDefaultValue}"` : null,
                                            isFullWidth ? `    isFullWidth` : null,
                                            `/>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* LABEL ========================================================================== */}
                                <Portion>
                                    <InputField
                                        label="Label"
                                        onChange={(e) => setLabel(e.target.value)}
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />

                            {/* OPTION ============================================================================= */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Div verticallyCentreItems pushItemsToEnds>
                                        <Text weight="700" size="large">List of options</Text>

                                        <Button
                                            kind="tertiary" size="small" type="button"
                                            onClick={addOption}
                                        >
                                            Add another option
                                        </Button>
                                    </Div>
                                </Portion>

                                {options.map((option, index) => (
                                    <React.Fragment key={index}>
                                        <Portion desktopSpan="half">
                                            <InputField
                                                placeholder="Label"
                                                value={option.label}
                                                onChange={(e) => updateOption(index, e.target.value, option.value)}
                                            />
                                        </Portion>
                                        <Portion desktopSpan="half">
                                            <InputField
                                                placeholder="Value"
                                                value={option.value}
                                                onChange={(e) => updateOption(index, option.label, e.target.value)}
                                            />
                                        </Portion>
                                    </React.Fragment>
                                ))}
                            </Row>

                            <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />

                            <Row marginBottom="none">
                                <Portion>
                                    {options.map((option, index) => (
                                        <RadioButton
                                            key={index}
                                            id={`default-option-${index}`}
                                            name="set-default-option"
                                            label={`Set ${option.label} as default`}
                                            value={option.value}
                                            checked={selectedDefaultValue === option.value}
                                            onChange={(e) => setSelectedDefaultValue(e.target.value)}
                                        />
                                    ))}
                                </Portion>

                                <Portion>
                                    <Button
                                        kind="tertiary" size="small" type="button"
                                        onClick={() => setSelectedDefaultValue("")}
                                    >
                                        Clear default option
                                    </Button>
                                </Portion>
                            </Row>

                            <Divider kind="secondary" horizontalMargin="none" verticalMargin="micro" />

                            <Row marginBottom="none">
                                <Portion>
                                    <Checkbox
                                        id="is-full-width"
                                        name="is-full-width"
                                        label="Full width"
                                        checked={isFullWidth}
                                        onChange={() => setIsFullWidth(!isFullWidth)}
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
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Set values globally
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>

                                {/* CHEVRON ======================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Dropdown chevron"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["dropdown-chevron"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("dropdown-chevron", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion>
                                    <Text>All other theming options are inherited from the InputField.</Text>
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default SelectDocs;
