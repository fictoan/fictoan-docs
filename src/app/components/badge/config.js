import React from "react";
import { Row, Portion, Range } from "fictoan-react";

// LIST OF PROPS =======================================================================================================
export const badgeProps = {
    component  : "Badge",
    properties : [
        "label",
        "size",
        "shape",
        "shadow",
        "bgColour",
        "textColour",
        "borderColour",
    ],
    variables  : {
        "badge-font"          : {
            type         : "reference",
            defaultValue : "paragraph-font",
        },
        "badge-border-radius" : {
            type         : "value-unit",
            defaultValue : 8,
            unit         : "px",
        },
        "badge-border-width"  : {
            type         : "value-unit",
            defaultValue : 1,
            unit         : "px",
        },
    }
};

// RENDER SAMPLE =======================================================================================================

// THEME VARIABLES =====================================================================================================
export const BadgeThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <Row marginBottom="none">
            {/* BORDER RADIUS ============================================== */}
            <Portion desktopSpan="half">
                <Range
                    label="Border radius"
                    value={componentVariables["badge-border-radius"].value}
                    onChange={(e) => handleVariableChange("badge-border-radius", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["badge-border-radius"].unit}
                />
            </Portion>

            {/* BORDER WIDTH =============================================== */}
            <Portion desktopSpan="half">
                <Range
                    label="Border width"
                    value={componentVariables["badge-border-width"].value}
                    onChange={(e) => handleVariableChange("badge-border-width", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["badge-border-width"].unit}
                />
            </Portion>
        </Row>
    )
}
