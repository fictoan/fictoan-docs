"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    Select,
    Range, Checkbox, Switch, Div,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-checkbox.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { checkboxProps } from "./config";

const CheckboxDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(checkboxProps.variables);

    // SAMPLE ==========================================================================================================

    // CUSTOMISE =======================================================================================================
    const [isSwitch, setIsSwitch] = useState(false);
    const [defaultChecked, setDefaultChecked] = useState(false);
    const [defaultDisabled, setDefaultDisabled] = useState(false);

    // THEME ===========================================================================================================


    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Checkbox / Switch</Heading>
                    <Text size="large" marginBottom="small">
                        The component is a modified versions of the native checkbox
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; Both components need <code>id</code>, <code>label</code> and <code>name</code> to work properly</Text>
                    <Text>&bull; The Switch is just a cosmetically altered version of the checkbox</Text>
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
                        padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        {isSwitch ? (
                            <Switch
                                key={`switch-${defaultChecked}`}
                                id="switch-1"
                                value="switch-1"
                                name="switch-1"
                                label="Check me"
                                defaultChecked={defaultChecked}
                                disabled={defaultDisabled}
                            />
                        ) : (
                            <Checkbox
                                key={`checkbox-${defaultChecked}`}
                                id="checkbox-1"
                                value="checkbox-1"
                                name="checkbox-1"
                                label="Check me"
                                defaultChecked={defaultChecked}
                                disabled={defaultDisabled}
                            />
                        )}
                    </Div>
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
                                            isSwitch ? `<Switch` : `<Checkbox`,
                                            `    id="${isSwitch ? "switch-1" : "checkbox-1"}"`,
                                            `    value="${isSwitch ? "switch-1" : "checkbox-1"}"`,
                                            `    name="${isSwitch ? "switch-1" : "checkbox-1"}"`,
                                            `    label="Check me"`,
                                            defaultChecked ? `   defaultChecked` : null,
                                            defaultDisabled ? `   disabled` : null,
                                            `/>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* POSITION ======================================================================= */}
                                <Portion>
                                    {isSwitch ?
                                        <Switch
                                            id="checkbox-switch-switcher"
                                            value="checkbox-switch-switcher"
                                            name="checkbox-switch-switcher"
                                            label="Make it a switch"
                                            checked={isSwitch}
                                            onChange={() => setIsSwitch(!isSwitch)}
                                        />
                                        :
                                        <Checkbox
                                            id="checkbox-switch-switcher"
                                            value="checkbox-switch-switcher"
                                            name="checkbox-switch-switcher"
                                            label="Make it a switch"
                                            onChange={() => setIsSwitch(!isSwitch)}
                                        />
                                    }

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* CHECKED ======================================================================== */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-default-checked"
                                        value="checkbox-default-checked"
                                        name="checkbox-default-checked"
                                        label="Checked by default"
                                        onChange={() => setDefaultChecked(!defaultChecked)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* DISABLED ======================================================================= */}
                                <Portion>
                                    <Checkbox
                                        id="checkbox-default-disabled"
                                        value="checkbox-default-disabled"
                                        name="checkbox-default-disabled"
                                        label="Disabled"
                                        onChange={() => setDefaultDisabled(!defaultDisabled)}
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
                            </Row>

                            {/* CHECKBOX /////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Checkbox</Text>
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["checkbox-square-border-radius"].value}
                                        onChange={(e) => handleVariableChange("checkbox-square-border-radius", e.target.value)}
                                        suffix={componentVariables["checkbox-square-border-radius"].unit}
                                        min={0} max={10} step={1}
                                    />
                                </Portion>

                                {/* BG DEFAULT ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Tick"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["checkbox-tick"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("checkbox-tick", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG DEFAULT ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Square — default"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["checkbox-square-bg-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("checkbox-square-bg-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG HOVER ======================================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Square — hover"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["checkbox-square-bg-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("checkbox-square-bg-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG CHECKED ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Square — checked"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["checkbox-square-bg-checked"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("checkbox-square-bg-checked", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG DISABLED ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Square — disabled"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["checkbox-square-bg-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("checkbox-square-bg-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" verticalMargin="micro" />

                            {/* SWITCH ///////////////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Switch</Text>
                                </Portion>

                                {/* BG DEFAULT ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Switch — default"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-bg-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-bg-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG DEFAULT ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Slider — default"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-slider-bg-default"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-slider-bg-default", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG HOVER ======================================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Switch — hover"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-bg-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-bg-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG HOVER ======================================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Slider — hover"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-slider-bg-hover"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-slider-bg-hover", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG CHECKED ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Switch — checked"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-bg-checked"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-bg-checked", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG CHECKED ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Slider — checked"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-slider-bg-checked"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-slider-bg-checked", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG DISABLED ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Switch — disabled"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-bg-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-bg-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG DISABLED ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Slider — disabled"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["switch-slider-bg-disabled"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("switch-slider-bg-disabled", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <Divider kind="secondary" verticalMargin="micro" />
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default CheckboxDocs;
