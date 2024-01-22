"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Callout, Element, Heading, HRule, Portion, Row, Select, Text, Article } from "fictoan-react";

// COMPONENTS ==================================================================
import { PropsList } from "../../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./page-select.css";
import { CodeBlock } from "fictoan-react/components";

// CODE SNIPPETS ===============================================================
import {
    sampleSelect, sampleSelectGroupOptions,
    sampleSelectLabel,
    sampleSelectOption,
    sampleSelectOptionSelected,
    sampleSelectTheming,
} from "./CodeSamples";

// DATA ========================================================================
import { listOfSelectProps } from "./propsList";


const SelectDocs = () => {
    return (
        <Article id="page-select">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Select dropdown</Heading>
                </Portion>
            </Row>

            <PropsList propData={listOfSelectProps} />

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* USAGE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* DEFAULT ==================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Default</Heading>

                    <Text marginBottom="micro">
                        The <code>Select</code> is a modified default <code>select</code> element. Add
                        an <code>options</code> array with a <code>label</code> and <code>value</code> keys, and you’re
                        good to go.
                    </Text>

                    <CodeBlock source={sampleSelect} language="jsx" marginBottom="micro" />

                    <Select
                        name="list-of-options"
                        options={[
                            { label : "Option 1", value : "1" },
                            { label : "Option 2", value : "2" },
                        ]}
                        marginBottom="micro"
                    />

                    <Callout kind="info">
                        <Text textColour="white">
                            It’s necessary to add the <code>name</code> attribute to be able to reference the submitted
                            data in a form.
                        </Text>
                    </Callout>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* LABEL ====================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Label</Heading>

                    <Text marginBottom="micro">
                        You can pass an optional <code>label</code> prop to have a simple, um, label accompany
                        the <code>Select</code> component, just like the input field.
                    </Text>

                    <CodeBlock source={sampleSelectLabel} language="jsx" marginBottom="micro" />

                    <Select
                        label="Your options"
                        name="list-of-options"
                        options={[
                            { label : "Option 1", value : "1" },
                            { label : "Option 2", value : "2" },
                        ]}
                    />
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* OPTIONS ==================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Options</Heading>

                    <Text marginBottom="micro">
                        The <code>options</code> prop accepts an array of individual option objects that show up as
                        items in the dropdown. In the <code>options</code>, the <code>label</code> is what is displayed
                        in the dropdown, and the <code>value</code> is what is returned when the option is selected.
                    </Text>

                    <CodeBlock source={sampleSelectOption} language="jsx" marginBottom="micro" />

                    <Select
                        label="Your options"
                        name="list-of-options"
                        options={[
                            { label : "Option 1", value : "1" },
                            { label : "Option 2", value : "2" },
                        ]}
                        marginBottom="micro"
                    />
                </Portion>

                <Portion>
                    <HRule kind="tertiary" verticalMargin="micro" />
                </Portion>

                {/* DEFAULT OPTION ========================================= */}
                <Portion>
                    <Heading as="h6" marginBottom="nano">Default option</Heading>
                    <Text marginBottom="micro">
                        You can pass the <code>defaultValue</code> to have an option pre-selected when the component is
                        rendered.
                    </Text>

                    <CodeBlock source={sampleSelectOptionSelected} language="jsx" marginBottom="micro" />

                    <Select
                        label="Your options"
                        name="list-of-options"
                        defaultValue="3"
                        options={[
                            { label : "Option 1", value : "1" },
                            { label : "Option 2", value : "2" },
                            { label : "Option 3", value : "3" },
                        ]}
                    />
                </Portion>

                <Portion>
                    <HRule kind="tertiary" verticalMargin="micro" />
                </Portion>

                {/* GROUP OPTIONS ========================================== */}
                <Portion>
                    <Heading as="h6" marginBottom="nano">Grouped options</Heading>

                    <Text marginBottom="micro">
                        You can also add groups within the <code>options</code> array. Add another object containing
                        a <code>label</code>, and another <code>options</code> array with the
                        same <code>label</code> and <code>value</code> keys.
                    </Text>

                    <CodeBlock source={sampleSelectGroupOptions} language="jsx" marginBottom="micro" />

                    <Select
                        label="Your options"
                        name="list-of-options"
                        defaultValue="g2-2"
                        options={[
                            { label : "Option 1", value : "1" },
                            { label : "Option 2", value : "2" },
                            {
                                label   : "Group 1",
                                options : [
                                    { label : "Group 1 Option 1", value : "g1-1" },
                                    { label : "Group 1 Option 2", value : "g1-2" },
                                ],
                            },
                            {
                                label   : "Group 2",
                                options : [
                                    { label : "Group 2 Option 1", value : "g2-1" },
                                    { label : "Group 2 Option 2", value : "g2-2" },
                                ],
                            },
                        ]}
                        marginBottom="micro"
                    />

                    <Text>
                        The option object takes <code>name</code>, <code>value</code> as standard keys. You can also
                        use <code>disabled</code> and <code>selected</code> with boolean values for some extra
                        functionality.
                    </Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* THEME */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Theme</Heading>
                    <Text marginBottom="micro">
                        Most of the styling for the <code>Select</code> component is done via
                        the <code>InputField</code> variables.
                    </Text>

                    <CodeBlock source={sampleSelectTheming} language="css" />
                </Portion>
            </Row>
        </Article>
    );
};

export default SelectDocs;
