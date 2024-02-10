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
    Table,
    Text,
    Article,
    Form,
    Card,
    Header,
    RadioTabGroup, Range, Select,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-h-rule.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { hRuleProps } from "./config";

const HRuleDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(hRuleProps.variables);

    const [selectedKind, setSelectedKind] = useState("");

    return (
        <Article id="page-h-rule">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">H-Rule</Heading>
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
                        data-centered-children
                    >
                        <Text marginBottom="nano">Default</Text>
                        <HRule
                            id="interactive-component"
                            {...(
                                selectedKind !== undefined ? { kind : selectedKind } : {}
                            )}
                            marginBottom="micro"
                        />

                        <Text marginBottom="nano">Primary</Text>
                        <HRule kind="primary" marginBottom="micro" />

                        <Text marginBottom="nano">Secondary</Text>
                        <HRule kind="secondary" marginBottom="micro" />

                        <Text marginBottom="nano">Tertiary</Text>
                        <HRule kind="tertiary" marginBottom="micro" />
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
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
                                            `<HRule`,
                                            selectedKind ? `    kind="${selectedKind}"` : null,
                                            `/>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                <Portion>
                                    <RadioTabGroup
                                        id="kind" label="Kind" name="kind"
                                        options={[
                                            { id : "kind-opt-0", value : "none", label : "none" },
                                            { id : "kind-opt-1", value : "primary", label : "primary" },
                                            { id : "kind-opt-2", value : "secondary", label : "secondary" },
                                            { id : "kind-opt-3", value : "tertiary", label : "tertiary" },
                                        ]}
                                        defaultValue={selectedKind}
                                        onChange={() => setSelectedKind(event.target.value !== "none" ? event.target.value : undefined)}
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

                                {/* DEFAULT //////////////////////////////////////////////////////////////////////// */}
                                <Portion>
                                    <Text weight="700">Default</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Height"
                                        value={componentVariables["hr-height"].value}
                                        onChange={(e) => handleVariableChange("hr-height", e.target.value)}
                                        suffix={componentVariables["hr-height"].unit}
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
                                        defaultValue={componentVariables["hr-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("hr-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion>
                                    <HRule kind="tertiary" />
                                </Portion>

                                {/* PRIMARY //////////////////////////////////////////////////////////////////////// */}
                                <Portion>
                                    <Text weight="700">Primary</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Height"
                                        value={componentVariables["hr-primary-height"].value}
                                        onChange={(e) => handleVariableChange("hr-primary-height", e.target.value)}
                                        suffix={componentVariables["hr-primary-height"].unit}
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
                                        defaultValue={componentVariables["hr-primary-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("hr-primary-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion>
                                    <HRule kind="tertiary" />
                                </Portion>

                                {/* SECONDARY ////////////////////////////////////////////////////////////////////// */}
                                <Portion>
                                    <Text weight="700">Secondary</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Height"
                                        value={componentVariables["hr-secondary-height"].value}
                                        onChange={(e) => handleVariableChange("hr-secondary-height", e.target.value)}
                                        suffix={componentVariables["hr-secondary-height"].unit}
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
                                        defaultValue={componentVariables["hr-secondary-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("hr-secondary-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion>
                                    <HRule kind="tertiary" />
                                </Portion>

                                {/* TERTIARY /////////////////////////////////////////////////////////////////////// */}
                                <Portion>
                                    <Text weight="700">Tertiary</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Height"
                                        value={componentVariables["hr-tertiary-height"].value}
                                        onChange={(e) => handleVariableChange("hr-tertiary-height", e.target.value)}
                                        suffix={componentVariables["hr-tertiary-height"].unit}
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
                                        defaultValue={componentVariables["hr-tertiary-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("hr-tertiary-bg", e.target.value)}
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

export default HRuleDocs;
