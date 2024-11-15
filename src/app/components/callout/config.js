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
            defaultValue : "global-border-width",
        },
        "callout-info-bg"        : {
            type         : "reference",
            defaultValue : "blue-light60",
        },
        "callout-info-border"    : {
            type         : "reference",
            defaultValue : "blue-dark40",
        },
        "callout-success-bg"     : {
            type         : "reference",
            defaultValue : "green-light60",
        },
        "callout-success-border" : {
            type         : "reference",
            defaultValue : "green-dark40",
        },
        "callout-warning-bg"     : {
            type         : "reference",
            defaultValue : "amber-light60",
        },
        "callout-warning-border" : {
            type         : "reference",
            defaultValue : "amber-dark40",
        },
        "callout-error-bg"       : {
            type         : "reference",
            defaultValue : "red-light60",
        },
        "callout-error-border"   : {
            type         : "reference",
            defaultValue : "red-dark40",
        },
    },
};
