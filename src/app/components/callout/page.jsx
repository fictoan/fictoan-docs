"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Heading,
    Divider,
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
    Div,
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
    // CUSTOMISE =======================================================================================================
    const [selectedKind, setSelectedKind] = useState("info");

    // THEME ===========================================================================================================
    const {
        componentVariables,
        handleVariableChange,
        cssVariablesList,
    } = useThemeVariables(calloutProps.variables);

    return (
        <Article id="page-callout">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Callout</Heading>
                    <Text size="large" marginBottom="small">
                        The call out is a box that can be used to highlight important information.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull;  It comes in four variants.</Text>
                    <Text>&bull;  Accepts all sorts of children elements.</Text>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Div padding="small" shape="rounded" bgColour="slate-light-80">
                        <Callout
                            {...(
                                selectedKind !== undefined ? { kind : selectedKind } : {}
                            )}
                        >
                            <Text weight="700">This is a{selectedKind === "info" || selectedKind === "error" ? "n" : ""} {selectedKind} callout</Text>
                        </Callout>
                        {/* <Row marginBottom="none"> */}
                        {/*     <Portion desktopSpan="half"> */}
                        {/*         <Callout kind="info"> */}
                        {/*             <Text weight="700">This is an info callout</Text> */}
                        {/*         </Callout> */}
                        {/*     </Portion> */}

                        {/*     <Portion desktopSpan="half"> */}
                        {/*         <Callout kind="success"> */}
                        {/*             <Text weight="700">This is a success callout</Text> */}
                        {/*         </Callout> */}
                        {/*     </Portion> */}

                        {/*     <Portion desktopSpan="half"> */}
                        {/*         <Callout kind="warning"> */}
                        {/*             <Text weight="700">This is a warning callout</Text> */}
                        {/*         </Callout> */}
                        {/*     </Portion> */}

                        {/*     <Portion desktopSpan="half"> */}
                        {/*         <Callout kind="error"> */}
                        {/*             <Text weight="700">This is an error callout</Text> */}
                        {/*         </Callout> */}
                        {/*     </Portion> */}
                        {/* </Row> */}
                    </Div>
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
                                            `<Callout`,
                                            selectedKind ? `   kind=${selectedKind}` : null,
                                            `>`,
                                            `    <Text weight="700">`,
                                            `        This is a${selectedKind === "info" || selectedKind === "error" ? "n" : ""} ${selectedKind} callout`,
                                            `    </Text>`,
                                            `</Callout>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                <Portion>
                                    <RadioTabGroup
                                        id="kind" label="Kind" name="kind"
                                        options={[
                                            { id : "kind-opt-0", value : "info", label : "info" },
                                            { id : "kind-opt-1", value : "success", label : "success" },
                                            { id : "kind-opt-2", value : "warning", label : "warning" },
                                            { id : "kind-opt-3", value : "error", label : "error" },
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

                            <Row marginBottom="micro">
                                <Portion>
                                    <CodeBlock
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
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
                                        label="Border width"
                                        value={componentVariables["callout-border-width"].value}
                                        onChange={(e) => handleVariableChange("callout-border-width", e.target.value)}
                                        suffix={componentVariables["callout-border-width"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                            {/* INFO /////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                <Portion>
                                    <Text size="large" weight="700">Info</Text>
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
                                        defaultValue={componentVariables["callout-info-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-info-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER COLOUR ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
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

                            <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                            {/* SUCCESS //////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                <Portion>
                                    <Text size="large" weight="700">Success</Text>
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
                                        defaultValue={componentVariables["callout-success-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-success-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
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

                            <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                            {/* WARNING //////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="micro">
                                <Portion>
                                    <Text size="large" weight="700">Warning</Text>
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
                                        defaultValue={componentVariables["callout-warning-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-warning-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
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

                            <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                            {/* ERROR ////////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text size="large" weight="700">Error</Text>
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
                                        defaultValue={componentVariables["callout-error-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("callout-error-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border colour"
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
