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
            defaultValue : "slate-light60",
        },
        "card-border-width"  : {
            type         : "value-unit",
            defaultValue : 1,
            unit         : "px",
            max          : 10,
            step         : 1,
        },
        "card-border-radius" : {
            type         : "value-unit",
            defaultValue : 8,
            unit         : "px",
            max          : 20,
            step         : 1,
        },
    },
};
