"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article,
    Form,
    Card,
    Header,
    RadioTabGroup, Range, Select, ProgressBar, InputField,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-progress-bar.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { progressProps } from "./config";

const ProgressBarDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(progressProps.variables);

    const [max, setMax] = useState("");
    const [value, setValue] = useState("");
    const [label, setLabel] = useState("");
    const [suffix, setSuffix] = useState("");

    const [selectedShape, setSelectedShape] = useState("");

    return (
        <Article id="page-progress">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Progress bar</Heading>
                    <Text size="large" marginBottom="small">
                        The line
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The card always takes up 100% width of its parent</Text>
                    <Text>&bull; It grows to take the height of its content</Text>
                    <Text>&bull; Border-radius values work only when <code>shape="rounded"</code> is present</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                    >
                        <ProgressBar
                            id="interactive-component"
                            {...(
                                selectedShape !== undefined ? { shape : selectedShape } : {}
                            )}
                            {...(
                                max !== undefined ? { max : max } : {}
                            )}
                            {...(
                                value !== undefined ? { value : value } : {}
                            )}
                            {...(
                                label !== undefined ? { label : label } : {}
                            )}
                            {...(
                                suffix !== undefined ? { suffix : suffix } : {}
                            )}
                        />
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<ProgressBar`,
                                            max ? `    max="${max}"` : null,
                                            value ? `    value="${value}"` : null,
                                            label ? `    label="${label}"` : null,
                                            suffix ? `    unit="${suffix}"` : null,
                                            `/>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* SHAPE ========================================================================== */}
                                <Portion>
                                    <RadioTabGroup
                                        id="shape" label="Shape" name="shape"
                                        options={[
                                            { id : "shape-opt-0", value : "none", label : "none" },
                                            { id : "shape-opt-1", value : "rounded", label : "rounded" },
                                            { id : "shape-opt-2", value : "curved", label : "curved" },
                                        ]}
                                        defaultValue={selectedShape}
                                        onChange={() => setSelectedShape(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <InputField
                                        type="number"
                                        label="Max possible value"
                                        placeholder="Enter a number"
                                        onChange={(e) => setMax(e.target.value)}
                                    />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <Range
                                        label="Current value"
                                        value={value}
                                        onChange={(e) => setValue(e.target.value)}
                                        suffix={suffix}
                                        min={0} max={max} step={1}
                                    />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <InputField
                                        type="text"
                                        label="Label"
                                        placeholder="Enter text"
                                        onChange={(e) => setLabel(e.target.value)}
                                    />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <InputField
                                        type="text"
                                        label="Suffix"
                                        placeholder="Enter text"
                                        onChange={(e) => setSuffix(e.target.value)}
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
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
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

                                {/* HEIGHT ========================================================================= */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Height"
                                        value={componentVariables["progress-bar-height"].value}
                                        onChange={(e) => handleVariableChange("progress-bar-height", e.target.value)}
                                        suffix={componentVariables["progress-bar-height"].unit}
                                        min={0} max={200} step={1}
                                    />
                                </Portion>

                                {/* HEIGHT ========================================================================= */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["progress-bar-border-radius"].value}
                                        onChange={(e) => handleVariableChange("progress-bar-border-radius", e.target.value)}
                                        suffix={componentVariables["progress-bar-border-radius"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["progress-bar-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("progress-bar-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Fill colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["progress-bar-fill"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("progress-bar-fill", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* LABEL ========================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Label colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["progress-bar-label"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("progress-bar-label", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Value colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["progress-bar-value"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("progress-bar-value", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default ProgressBarDocs;
