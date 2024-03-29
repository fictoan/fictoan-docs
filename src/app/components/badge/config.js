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
