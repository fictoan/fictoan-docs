import React from "react";
import { Row, Portion, Callout, Select, Range } from "fictoan-react";

// LIST OF PROPS =======================================================================================================
export const calloutProps = {
    component  : "Callout",
    properties : [
        "kind",
        "shadow",
    ],
    variables  : {
        "callout-border-radius"  : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "callout-border-width"   : {
            type         : "reference",
            defaultValue : "nano",
        },
        "callout-info-bg"        : {
            type         : "reference",
            defaultValue : "blue-light-60",
        },
        "callout-info-border"    : {
            type         : "reference",
            defaultValue : "blue-dark-40",
        },
        "callout-success-bg"     : {
            type         : "reference",
            defaultValue : "green-light-60",
        },
        "callout-success-border" : {
            type         : "reference",
            defaultValue : "green-dark-40",
        },
        "callout-warning-bg"     : {
            type         : "reference",
            defaultValue : "amber-light-60",
        },
        "callout-warning-border" : {
            type         : "reference",
            defaultValue : "amber-dark-40",
        },
        "callout-error-bg"       : {
            type         : "reference",
            defaultValue : "red-light-60",
        },
        "callout-error-border"   : {
            type         : "reference",
            defaultValue : "red-dark-40",
        },
    },
};

// RENDER SAMPLE =======================================================================================================
export const CalloutSample = () => (
    <Row marginBottom="none">
        <Portion desktopSpan="half">
            <Callout kind="info">This is a <code>kind="info"</code> callout</Callout>
        </Portion>

        <Portion desktopSpan="half">
            <Callout kind="success">This is a <code>kind="success"</code> callout</Callout>
        </Portion>

        <Portion desktopSpan="half">
            <Callout kind="warning">This is a <code>kind="warning"</code> callout</Callout>
        </Portion>

        <Portion desktopSpan="half">
            <Callout kind="error">This is a <code>kind="error"</code> callout</Callout>
        </Portion>
    </Row>
);

// THEME VARIABLES =====================================================================================================
export const CalloutThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <>
            {/* COMMON ///////////////////////////////////////////////////// */}
            <Row marginBottom="micro">
                {/* BORDER RADIUS ========================================== */}
                <Portion desktopSpan="half">
                    <Range
                        key="callout-border-radius"
                        label="Border radius"
                        value={componentVariables["callout-border-radius"].value}
                        onChange={(e) => handleVariableChange("callout-border-radius", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["callout-border-radius"].unit}
                    />
                </Portion>

                {/* BORDER WIDTH =========================================== */}
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
                        defaultValue={componentVariables["callout-info-bg"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-info-border"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-success-bg"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-success-border"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-warning-bg"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-warning-border"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-error-bg"] || "select-a-colour"}
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
                        defaultValue={componentVariables["callout-error-border"] || "select-a-colour"}
                        onChange={(e) => handleVariableChange("callout-error-border", e.target.value)}
                        isFullWidth
                    />
                </Portion>
            </Row>
        </>
    );
};
