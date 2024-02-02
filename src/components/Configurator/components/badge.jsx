import React from "react";
import { Row, Portion, Range } from "fictoan-react";

export const BadgeThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <Row marginBottom="none">
            {/* ITEM SEPARATOR ================================================================= */}
            <Portion desktopSpan="half">
                <Range
                    key="badge-border-radius"
                    label="Border radius"
                    value={componentVariables["badge-border-radius"].value}
                    onChange={(e) => handleVariableChange("badge-border-radius", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["badge-border-radius"].unit}
                    marginBottom="micro"
                />
            </Portion>

            {/* BG COLOUR ====================================================================== */}
            <Portion desktopSpan="half">
                <Range
                    key="badge-border-width"
                    label="Border width"
                    value={componentVariables["badge-border-width"].value}
                    onChange={(e) => handleVariableChange("badge-border-width", e.target.value)}
                    min={0} max={50} step={1}
                    suffix={componentVariables["badge-border-width"].unit}
                    marginBottom="micro"
                />
            </Portion>
        </Row>
    )
}
