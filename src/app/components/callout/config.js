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
            type         : "value-unit",
            defaultValue : "8",
            unit         : "px",
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
