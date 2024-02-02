// LIST OF PROPS =======================================================================================================
import { Portion, Range, Row, Select } from "fictoan-react";
import React from "react";

export const cardProps = {
    component  : "Card",
    properties : [
        "padding",
        "shape",
        "shadow",
        "bgColour",
        "borderColour",
    ],
    variables  : {
        "card-bg"            : {
            type         : "reference",
            defaultValue : "white",
        },
        "card-border"        : {
            type         : "reference",
            defaultValue : "slate-light-60",
        },
        "card-border-width"  : {
            type         : "value-unit",
            defaultValue : 1,
            unit         : "px",
        },
        "card-border-radius" : {
            type         : "value-unit",
            defaultValue : 8,
            unit         : "px",
        },
    }
};

// RENDER SAMPLE =======================================================================================================


// THEME VARIABLES =====================================================================================================
export const CardThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <>
            {/* COMMON ///////////////////////////////////////////////////// */}
            <Row marginBottom="none">
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
                        defaultValue={componentVariables["card-bg"] || "select-a-colour"}
                        onChange={(e) => handleVariableChange("card-bg", e.target.value)}
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
                        defaultValue={componentVariables["card-border"] || "select-a-colour"}
                        onChange={(e) => handleVariableChange("card-border", e.target.value)}
                        isFullWidth
                    />
                </Portion>

                {/* BORDER RADIUS ============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border radius"
                        value={componentVariables["card-border-radius"].value}
                        onChange={(e) => handleVariableChange("card-border-radius", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["card-border-radius"].unit}
                    />
                </Portion>

                {/* BORDER WIDTH =============================================== */}
                <Portion desktopSpan="half">
                    <Range
                        label="Border width"
                        value={componentVariables["card-border-width"].value}
                        onChange={(e) => handleVariableChange("card-border-width", e.target.value)}
                        min={0} max={50} step={1}
                        suffix={componentVariables["card-border-width"].unit}
                    />
                </Portion>
            </Row>
        </>
    );
}
