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
    Checkbox,
    Select,
    Tabs,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-tabs.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { tabsProps } from "./config";

const TableDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(tabsProps.variables);


    // CUSTOMISE =======================================================================================================
    const [selectedAlign, setSelectedAlign] = useState("left");
    const [isFullWidth, setIsFullWidth] = useState(false);
    const [hasAlert, setHasAlert] = useState(false);
    const [alertTabKey, setAlertTabKey] = useState(null);

    const toggleRandomTabAlert = () => {
        setHasAlert(prev => {
            if (!prev) {
                // Hard coded for 3 tabs
                const randomTabKey = `tab${Math.floor(Math.random() * 3) + 1}`;
                setAlertTabKey(randomTabKey);
            } else {
                setAlertTabKey(null);
            }
            return !prev;
        });
    };

    // THEME ===========================================================================================================

    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Tabs</Heading>
                    <Text size="large" marginBottom="small">
                        The component is
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; </Text>
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
                        <Tabs
                            isFullWidth={isFullWidth}
                            {...(
                                selectedAlign !== undefined ? { align : selectedAlign } : {}
                            )}
                            tabs={[
                                {
                                    key      : "tab1",
                                    label    : "Tab 1",
                                    hasAlert : alertTabKey === "tab1",
                                    content  : <Text>Content for tab 1</Text>
                                    ,
                                },
                                {
                                    key      : "tab2",
                                    label    : "Tab 2",
                                    hasAlert : alertTabKey === "tab2",
                                    content  : <Text>Content for tab 2</Text>,
                                },
                                {
                                    key      : "tab3",
                                    label    : "Tab 3",
                                    hasAlert : alertTabKey === "tab3",
                                    content  : <Text>Content for tab 3</Text>,
                                },
                            ]}
                        />
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
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
                                            `<Tabs`,
                                            isFullWidth ? `    isFullWidth` : null,
                                            `    align="${selectedAlign}"`,
                                            `    tabs={[`,
                                            `        {`,
                                            `            key     : "tab1",`,
                                            `            label   : "Tab 1",`,
                                            `            content : <Text>Content for tab 1</Text>`,
                                            `        },`,
                                            `        {`,
                                            `            key     : "tab2",`,
                                            `            label   : "Tab 2",`,
                                            `            content : <Text>Content for tab 2</Text>`,
                                            `        },`,
                                            `        {`,
                                            `            key     : "tab3",`,
                                            `            label   : "Tab 3",`,
                                            `            content : <Text>Content for tab 3</Text>`,
                                            `        }`,
                                            `    ]}`,
                                            `/>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* ALIGN ========================================================================== */}
                                <Portion>
                                    <RadioTabGroup
                                        id="align" label="Kind" name="align"
                                        options={[
                                            { id : "align-opt-0", value : "left", label : "left" },
                                            { id : "align-opt-1", value : "right", label : "right" },
                                            { id : "align-opt-2", value : "centre", label : "centre" },
                                            { id : "align-opt-3", value : "center", label : "center" },
                                        ]}
                                        defaultValue={selectedAlign}
                                        onChange={() => setSelectedAlign(event.target.value !== "none" ? event.target.value : undefined)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* DISMISSIBLE ==================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-full-width"
                                        value="checkbox-full-width"
                                        name="checkbox-full-width"
                                        label="Make full width"
                                        checked={isFullWidth}
                                        onChange={(event) => setIsFullWidth(event.target.checked)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* DISMISSIBLE ==================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-has-alert"
                                        value="checkbox-has-alert"
                                        name="checkbox-has-alert"
                                        label="Show alert badge on random tab"
                                        checked={hasAlert}
                                        onChange={toggleRandomTabAlert}
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
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tabs-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tabs-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion desktopSpan="half" />

                                {/* LABEL - DEFAULT ================================================================ */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Label - default"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-label-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-label-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* LABEL - HOVER ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Label - hover"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-label-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-label-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* LABEL - ACTIVE ================================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Label - active"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-label-active"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-label-active", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* LABEL - DISABLED =============================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Label - disabled"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-label-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-label-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ALERT - BG ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Alert background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-alert-badge-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-alert-badge-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ALERT - BORDER ================================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Alert border"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["tab-alert-badge-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("tab-alert-badge-border", e.target.value)}
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

export default TableDocs;
