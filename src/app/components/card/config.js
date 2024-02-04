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
            defaultValue : "black",
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
