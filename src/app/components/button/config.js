// LIST OF PROPS =======================================================================================================
import { Portion, Row, Range, Select, Callout, Button } from "fictoan-react";
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
        "button-primary-default-bg"             : {
            type         : "reference",
            defaultValue : "blue",
        },
        "button-primary-default-text"           : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-default-border-colour"  : {
            type         : "reference",
            defaultValue : "blue",
        },
        "button-primary-default-border-width"   : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-default-border-radius"  : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "button-primary-hover-bg"               : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-hover-text"             : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-hover-border-colour"    : {
            type         : "reference",
            defaultValue : "blue-dark-30",
        },
        "button-primary-hover-border-width"     : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-hover-border-radius"    : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "button-primary-loading-spinner-colour" : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-disabled-bg"            : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-disabled-text"          : {
            type         : "reference",
            defaultValue : "white",
        },
        "button-primary-disabled-border-colour" : {
            type         : "reference",
            defaultValue : "blue-light-10",
        },
        "button-primary-disabled-border-width"  : {
            type         : "reference",
            defaultValue : "global-border-width",
        },
        "button-primary-disabled-border-radius" : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
    },
};

// RENDER SAMPLE =======================================================================================================
export const ButtonSample = () => (
    <Row marginBottom="none">
        <Portion>
            <Button>sdfd</Button>
            <Button isLoading>sdfd</Button>
        </Portion>
    </Row>
);

// THEME VARIABLES =====================================================================================================
export const ButtonThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <Row marginBottom="none">
            {/* BORDER RADIUS ============================================== */}
            <Portion desktopSpan="half">
                <Range
                    label="Border radius"
                    value={componentVariables["button-primary-default-border-radius"].value}
                    onChange={(e) => handleVariableChange("button-primary-default-border-radius", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["button-primary-default-border-radius"].unit}
                />
            </Portion>

            {/* BORDER WIDTH =============================================== */}
            <Portion desktopSpan="half">
                <Range
                    label="Border width"
                    value={componentVariables["button-primary-default-border-width"].value}
                    onChange={(e) => handleVariableChange("button-primary-default-border-width", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["button-primary-default-border-width"].unit}
                />
            </Portion>
        </Row>
    )
}
