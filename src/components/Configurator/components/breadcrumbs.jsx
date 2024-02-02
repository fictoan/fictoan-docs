import React from "react";
import { Row, Portion, InputField, Select } from "fictoan-react";

export const BreadcrumbsThemeConfigurator = ({ componentVariables, handleVariableChange, colourOptions }) => {
    return (
        <Row marginBottom="none">
            {/* ITEM SEPARATOR ============================================= */}
            <Portion desktopSpan="half">
                <InputField
                    label="Separator"
                    placeholder="Separator"
                    defaultValue={componentVariables["breadcrumb-item-separator"]?.value}
                    onChange={(e) => handleVariableChange("breadcrumb-item-separator", e.target.value)}
                />
            </Portion>

            {/* BG COLOUR ================================================== */}
            <Portion desktopSpan="half">
                <Select
                    label="Background colour"
                    options={[{
                        label    : "Select a colour",
                        value    : "select-a-colour",
                        disabled : true,
                        selected : true,
                    }, ...colourOptions]}
                    defaultValue={componentVariables["breadcrumbs-wrapper-bg"] || "select-a-colour"}
                    onChange={(e) => handleVariableChange("breadcrumbs-wrapper-bg", e.target.value)}
                    isFullWidth
                />
            </Portion>
        </Row>
    )
}
