export const radioTabGroupProps = {
    component  : "Radio Tab Group",
    properties : [],
    variables  : {
        "radio-tabs-height"             : {
            type         : "value-unit",
            defaultValue : 48,
            unit         : "px",
        },
        "radio-tabs-vertical-gap"       : {
            type         : "value-unit",
            defaultValue : 4,
            unit         : "px",
        },
        "radio-tabs-bg"                 : {
            type         : "reference",
            defaultValue : "slate-light-70",
        },
        "radio-tabs-border"             : {
            type         : "reference",
            defaultValue : "slate-light-70",
        },
        "radio-tabs-label-text-default" : {
            type         : "reference",
            defaultValue : "slate-dark-60",
        },
        "radio-tabs-label-text-hover"   : {
            type         : "reference",
            defaultValue : "slate-dark-80",
        },
        "radio-tabs-label-bg-hover"     : {
            type         : "reference",
            defaultValue : "slate-light-90",
        },
        "radio-tabs-label-bg-active"    : {
            type         : "reference",
            defaultValue : "white",
        },
        "radio-tabs-label-text-active"  : {
            type         : "reference",
            defaultValue : "black",
        },
        "radio-tabs-label-focus-border" : {
            type         : "reference",
            defaultValue : "blue",
        },
    },
};
