export const listOfProgressBarProps = {
    elementName : "",
    props       : [
        {
            name         : "max",
            description  : "Maximum value to reach 100% fill",
            values       : ["Scalar integer"],
            defaultValue : "&mdash;",
        },
        {
            name         : "value",
            description  : "Current value of the fill",
            values       : ["Scalar integer"],
            defaultValue : "&mdash;",
        },
        {
            name         : "unit",
            description  : "Suffix for the value",
            values       : ["string"],
            defaultValue : "&mdash;",
        },
        {
            name         : "shape",
            description  : "Corner radius of the progress bar and the fill",
            values       : ["rounded", "curved"],
            defaultValue : "&mdash;",
        },
        {
            name         : "height",
            description  : "Height of the progress element",
            values       : ["Any CSS unit value"],
            defaultValue : "1em",
        },
        {
            name         : "barBg",
            description  : "Background colour of the progress element",
            values       : ["Any defaultColour value"],
            defaultValue : "defaultColours.slate20",
        },
        {
            name         : "barFill",
            description  : "Fill colour of the progress element",
            values       : ["Any defaultColour value"],
            defaultValue : "defaultColours.slate20",
        },
    ],
};
