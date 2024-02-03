// LIST OF PROPS =======================================================================================================
import { Portion, Row, Range, Button, Select, Text, HRule } from "fictoan-react";
import React from "react";

export const buttonProps = {
    component  : "Button",
    properties : [
        "label",
        "kind",
        "size",
        "shape",
        "shadow",
        "bgColour",
        "textColour",
        "borderColour",
        "is-loading",
    ],
    variables  : {
        // PRIMARY BUTTON ======================================================
        "button-primary-bg-default"             : {
            type         : "reference",
            defaultValue : "blue",
        },
        "button-primary-text-default"           : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-border-default"         : {
            type         : "reference",
            defaultValue : "blue",
        },
        "button-primary-border-width-default"   : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-border-radius-default"  : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "button-primary-bg-hover"               : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-text-hover"             : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-border-hover"           : {
            type         : "reference",
            defaultValue : "blue-dark-30",
        },
        "button-primary-border-width-hover"     : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-border-radius-hover"    : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "button-primary-spinner-loading"        : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-bg-disabled"            : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-text-disabled"          : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-border-disabled" : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-border-width-disabled"  : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-border-radius-disabled" : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
    },
};

// RENDER SAMPLE =======================================================================================================
export const ButtonSample = () => (
    <Row marginBottom="none">
        <Portion desktopSpan="one-fourth">
            <Button kind="primary" isFullWidth>Primary button</Button>
        </Portion>

        <Portion desktopSpan="one-fourth">
            <Button kind="primary" isFullWidth isLoading>Primary button</Button>
        </Portion>

        <Portion desktopSpan="one-fourth">
            <Button kind="secondary" isFullWidth>Secondary button</Button>
        </Portion>

        <Portion desktopSpan="one-fourth">
            <Button kind="secondary" isFullWidth isLoading>Secondary button</Button>
        </Portion>

        <Portion desktopSpan="one-fourth">
            <Button kind="tertiary" isFullWidth>Tertiary button</Button>
        </Portion>

        <Portion desktopSpan="one-fourth">
            <Button kind="tertiary" isFullWidth isLoading>Tertiary button</Button>
        </Portion>
    </Row>
);

// THEME VARIABLES =====================================================================================================
export const ButtonThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <>
            {/* DEFAULT //////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row marginBottom="none">
                <Portion>
                    <Text weight="700" marginBottom="nano">
                        Primary button — default state
                    </Text>
                </Portion>

                {/* BORDER RADIUS ============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border radius"
                        value={componentVariables["button-primary-border-radius-default"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-radius-default", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-radius-default"].unit}
                    />
                </Portion>

                {/* BORDER WIDTH =============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border width"
                        value={componentVariables["button-primary-border-width-default"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-width-default", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-width-default"].unit}
                    />
                </Portion>

                {/* BG COLOUR ============================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Background colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-bg-default"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-bg-default", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* BORDER COLOUR ========================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Border colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-border-default"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-border-default", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* TEXT COLOUR ================================================ */}
                <Portion desktopSpan="half">
                    <Select
                        label="Text colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-text-default"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-text-default", e.target.value)}
                        isFullWidth
                    />
                </Portion>
            </Row>

            <HRule kind="secondary" verticalMargin="micro" />

            {/* HOVER ////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row marginBottom="none">
                <Portion>
                    <Text weight="700" marginBottom="nano">
                        Primary button — hover state
                    </Text>
                </Portion>

                {/* BORDER RADIUS ============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border radius"
                        value={buttonProps.variables["button-primary-border-radius-hover"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-radius-hover", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-radius-hover"].unit}
                    />
                </Portion>

                {/* BORDER WIDTH =============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border width"
                        value={componentVariables["button-primary-border-width-hover"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-width-hover", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-width-hover"].unit}
                    />
                </Portion>

                {/* BG COLOUR ============================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Background colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-bg-hover"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-bg-hover", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* BORDER COLOUR ========================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Border colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-border-hover"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-border-hover", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* TEXT COLOUR ================================================ */}
                <Portion desktopSpan="half">
                    <Select
                        label="Text colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-text-hover"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-text-hover", e.target.value)}
                        isFullWidth
                    />
                </Portion>
            </Row>

            <HRule kind="secondary" verticalMargin="micro" />

            {/* HOVER ////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row marginBottom="none">
                <Portion>
                    <Text weight="700" marginBottom="nano">
                        Primary button — disabled state
                    </Text>
                </Portion>

                {/* BORDER RADIUS ============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border radius"
                        value={buttonProps.variables["button-primary-border-radius-disabled"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-radius-disabled", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-radius-disabled"].unit}
                    />
                </Portion>

                {/* BORDER WIDTH =============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border width"
                        value={componentVariables["button-primary-border-width-disabled"].value}
                        onChange={(e) => handleVariableChange("button-primary-border-width-disabled", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["button-primary-border-width-disabled"].unit}
                    />
                </Portion>

                {/* BG COLOUR ============================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Background colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-bg-disabled"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-bg-disabled", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* BORDER COLOUR ========================================== */}
                <Portion desktopSpan="half">
                    <Select
                        label="Border colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-border-disabled"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-border-disabled", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* TEXT COLOUR ================================================ */}
                <Portion desktopSpan="half">
                    <Select
                        label="Text colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-text-disabled"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-text-disabled", e.target.value)}
                        isFullWidth
                    />
                </Portion>
            </Row>

            <HRule kind="secondary" verticalMargin="micro" />

            {/* SPINNER //////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row marginBottom="none">
                <Portion>
                    <Text weight="700" marginBottom="nano">
                        Primary button — loading state
                    </Text>
                </Portion>

                {/* SPINNER COLOUR ============================================= */}
                <Portion desktopSpan="half">
                    <Select
                        label="Background colour"
                        options={[{
                            label    : "Select a colour",
                            value    : "select-a-colour",
                            disabled : true,
                            selected : true,
                        }, ...colourOptions]}
                        defaultValue={buttonProps.variables["button-primary-spinner-loading"].defaultValue || "select-a-colour"}
                        onChange={(e) => handleVariableChange("button-primary-spinner-loading", e.target.value)}
                        isFullWidth
                    />
                </Portion>
            </Row>
        </>
    );
};
