import React from "react";
import { BreadcrumbItem, BreadcrumbsWrapper, Row, Portion, InputField, Select } from "fictoan-react";

// LIST OF PROPS =======================================================================================================
export const breadcrumbsProps = {
    component  : "Breadcrumbs",
    properties : [
        "label",
        "padding",
        "bgColour",
    ],
    variables  : {
        "breadcrumbs-wrapper-bg"            : {
            type         : "reference",
            defaultValue : "transparent",
        },
        "breadcrumb-item-separator"        : {
            type         : "string",
            defaultValue : "/",
        },
        "breadcrumb-item-separator-colour"  : {
            type         : "reference",
            defaultValue : "slate-light-10",
        },
        "breadcrumb-item-text-colour"  : {
            type         : "reference",
            defaultValue : "paragraph-text-colour",
        },
        "breadcrumb-item-text-colour-active"  : {
            type         : "reference",
            defaultValue : "paragraph-text-colour",
        },
    }
};

// RENDER SAMPLE =======================================================================================================
export const BreadcrumbsSample = () => (
    <BreadcrumbsWrapper>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Home</BreadcrumbItem>
    </BreadcrumbsWrapper>
);

// THEME VARIABLES =====================================================================================================
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

