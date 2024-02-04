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
    Card,
    Form,
    Header,
    RadioTabGroup,
    Select,
    Range,
    Callout,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-callout.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { calloutProps } from "./config";


const CalloutDocs = () => {
    const {
        componentVariables,
        handleVariableChange,
        cssVariablesList,
    } = useThemeVariables(calloutProps.variables);

    const [selectedKind, setSelectedKind] = useState("");

    const handleKindChange = (event) => {
        setSelectedKind(event.target.value !== "none" ? event.target.value : undefined);
    };

    return (
        <Article id="page-callout">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Callout</Heading>
                    <Text size="large" marginBottom="small">
                        The call out is a box that can be used to highlight important information. It comes in four
                        variants.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The badge is a simple, styled <code>mark</code> element</Text>
                    <Text>&bull; You have to manually align it with its sibling</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion>
                    <Element
                        id="component-wrapper"
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                    >
                        <Row marginBottom="none">
                            <Portion desktopSpan="half">
                                <Callout kind="info">
                                    <Text weight="700">This is an info callout</Text>
                                </Callout>
                            </Portion>

                            <Portion desktopSpan="half">
                                <Callout kind="success">
                                    <Text weight="700">This is a success callout</Text>
                                </Callout>
                            </Portion>

                            <Portion desktopSpan="half">
                                <Callout kind="warning">
                                    <Text weight="700">This is a warning callout</Text>
                                </Callout>
                            </Portion>

                            <Portion desktopSpan="half">
                                <Callout kind="error">
                                    <Text weight="700">This is an error callout</Text>
                                </Callout>
                            </Portion>
                        </Row>
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
                                            `<Callout kind="info">
    <Text weight="700">This is an info callout</Text>
</Callout>

<Callout kind="success">
    <Text weight="700">This is a success callout</Text>
</Callout>

<Callout kind="warning">
    <Text weight="700">This is a warning callout</Text>
</Callout>

<Callout kind="error">
    <Text weight="700">This is an error callout</Text>
</Callout>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                <Portion>
                                    <RadioTabGroup
                                        id="shape" label="Shape" name="shape"
                                        options={[
                                            { id : "shape-opt-0", value : "info", label : "info" },
                                            { id : "shape-opt-1", value : "success", label : "success" },
                                            { id : "shape-opt-2", value : "warning", label : "warning" },
                                            { id : "shape-opt-3", value : "error", label : "error" },
                                        ]}
                                        defaultValue={selectedKind}
                                        onChange={handleKindChange}
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

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        key="callout-border-radius"
                                        label="Border radius"
                                        value={componentVariables["callout-border-radius"].value}
                                        onChange={(e) => handleVariableChange("callout-border-radius", e.target.value)}
                                        suffix={componentVariables["callout-border-radius"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>

                                {/* BORDER WIDTH =================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        key="callout-border-width"
                                        label="Border width"
                                        value={componentVariables["callout-border-width"].value}
                                        onChange={(e) => handleVariableChange("callout-border-width", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["callout-border-width"].unit}
                                    />
                                </Portion>
                            </Row>

                            {/* INFO /////////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Info - BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-info-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-info-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ========================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Info - border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-info-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-info-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            {/* SUCCESS //////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Success - BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-success-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-success-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Success - border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-success-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-success-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            {/* WARNING //////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Warning - BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-warning-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-warning-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Warning - border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-warning-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-warning-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            {/* ERROR ////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Error - BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-error-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-error-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ============================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Error - border colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["callout-error-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-error-border", e.target.value)}
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

export default CalloutDocs;
