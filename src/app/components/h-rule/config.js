import React from "react";
import { Row, Portion, Range, Select, Button, HRule } from "fictoan-react";

// LIST OF PROPS =======================================================================================================
export const hRuleProps = {
    component  : "HRule",
    properties : [
        "kind-main",
    ],
    variables  : {
        "hr-default-height"   : {
            type         : "value-unit",
            defaultValue : 1,
            unit         : "px",
        },
        "hr-default-bg"       : {
            type         : "reference",
            defaultValue : "slate",
        },
        "hr-primary-height"   : {
            type         : "value-unit",
            defaultValue : 4,
            unit         : "px",
        },
        "hr-primary-bg"       : {
            type         : "reference",
            defaultValue : "slate",
        },
        "hr-secondary-height" : {
            type         : "value-unit",
            defaultValue : 2,
            unit         : "px",
        },
        "hr-secondary-bg"     : {
            type         : "reference",
            defaultValue : "slate-light-60",
        },
        "hr-tertiary-height"  : {
            type         : "value-unit",
            defaultValue : 1,
            unit         : "px",
        },
        "hr-tertiary-bg"      : {
            type         : "reference",
            defaultValue : "slate-light-20",
        },
    },
};

// RENDER SAMPLE =======================================================================================================
export const HRuleSample = () => (
    <Row marginBottom="none">
        <Portion>
            <HRule />
        </Portion>
    </Row>
);

// THEME VARIABLES =====================================================================================================
export const HRuleThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <Row marginBottom="none">
            {/* BORDER RADIUS ============================================== */}
            <Portion desktopSpan="half">
                <Range
                    label="Height"
                    value={componentVariables["hr-default-height"].value}
                    onChange={(e) => handleVariableChange("hr-default-height", e.target.value)}
                    min={0} max={10} step={1}
                    suffix={componentVariables["hr-default-height"].unit}
                />
            </Portion>

            {/* BORDER WIDTH =============================================== */}
            <Portion desktopSpan="half">
                <Select
                    label="Default background colour"
                    options={[{
                        label    : "Select a colour",
                        value    : "select-a-colour",
                        disabled : true,
                        selected : true,
                    }, ...colourOptions]}
                    defaultValue={componentVariables["hr-default-bg"] || "select-a-colour"}
                    onChange={(e) => handleVariableChange("hr-default-bg", e.target.value)}
                    isFullWidth
                />
            </Portion>
        </Row>
    );
};
