// LIST OF PROPS =======================================================================================================
import { Portion, Row, Button } from "fictoan-react";
import React from "react";

export const buttonPrimaryProps = {
    component : "Button",
    variables : {
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
        "button-primary-border-disabled"        : {
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

export const buttonSecondaryProps = {
    component : "Button",
    variables : {
        "button-secondary-bg-default"             : {
            "type"         : "reference",
            "defaultValue" : "blue-light-50",
        },
        "button-secondary-text-default"           : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-secondary-border-default"         : {
            "type"         : "reference",
            "defaultValue" : "blue-light-50",
        },
        "button-secondary-border-width-default"   : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-secondary-border-radius-default"  : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
        },
        "button-secondary-bg-hover"               : {
            "type"         : "reference",
            "defaultValue" : "blue-light-40",
        },
        "button-secondary-text-hover"             : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-secondary-border-hover"           : {
            "type"         : "reference",
            "defaultValue" : "blue-light-40",
        },
        "button-secondary-border-width-hover"     : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-secondary-border-radius-hover"    : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
        },
        "button-secondary-spinner-loading"        : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-secondary-bg-disabled"            : {
            "type"         : "reference",
            "defaultValue" : "blue-light-10",
        },
        "button-secondary-text-disabled"          : {
            "type"         : "reference",
            "defaultValue" : "white",
        },
        "button-secondary-border-disabled"        : {
            "type"         : "reference",
            "defaultValue" : "blue-light-10",
        },
        "button-secondary-border-width-disabled"  : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-secondary-border-radius-disabled" : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
        },
    },
};

export const buttonTertiaryProps = {
    component : "Button",
    variables : {
        "button-tertiary-bg-default"             : {
            "type"         : "reference",
            "defaultValue" : "transparent",
        },
        "button-tertiary-text-default"           : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-tertiary-border-default"         : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-tertiary-border-width-default"   : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-tertiary-border-radius-default"  : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
        },
        "button-tertiary-bg-hover"               : {
            "type"         : "reference",
            "defaultValue" : "blue-light-80",
        },
        "button-tertiary-text-hover"             : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-tertiary-border-hover"           : {
            "type"         : "reference",
            "defaultValue" : "blue-light-20",
        },
        "button-tertiary-border-width-hover"     : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-tertiary-border-radius-hover"    : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
        },
        "button-tertiary-spinner-loading"        : {
            "type"         : "reference",
            "defaultValue" : "blue",
        },
        "button-tertiary-bg-disabled"            : {
            "type"         : "reference",
            "defaultValue" : "blue-light-10",
        },
        "button-tertiary-text-disabled"          : {
            "type"         : "reference",
            "defaultValue" : "white",
        },
        "button-tertiary-border-disabled"        : {
            "type"         : "reference",
            "defaultValue" : "blue-light-10",
        },
        "button-tertiary-border-width-disabled"  : {
            "type"         : "reference",
            "defaultValue" : "global-border-width",
        },
        "button-tertiary-border-radius-disabled" : {
            "type"         : "reference",
            "defaultValue" : "global-border-radius",
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
