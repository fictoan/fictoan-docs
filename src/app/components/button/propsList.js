export const listOfButtonProps = {
    elementName : "",
    props : [
        {
            name         : "kind",
            description  : "Denotes which part of the cells to draw the borders for",
            values       : ["primary", "secondary", "tertiary", "custom"],
            defaultValue : "&mdash;",
        },
        {
            name         : "size",
            description  : "The, um, size of the button",
            values       : ["tiny", "small", "medium", "large", "huge"],
            defaultValue : "medium, auto-fallback",
        },
        {
            name         : "shape",
            description  : "Corner radius",
            values       : ["rounded", "curved", "circular"],
            defaultValue : "&mdash;",
        },
        {
            name         : "isLoading",
            description  : "Adds a spinner inside the button to show a loading state",
            values       : ["boolean"],
            defaultValue : "&mdash;",
        },
        {
            name         : "shadow",
            description  : "Box shadow",
            values       : ["mild", "hard", "soft"],
            defaultValue : "&mdash;",
        },
        {
            name         : "bgColour/bgColor",
            description  : "Background colour",
            values       : ["Any colour from defaultColours"],
            defaultValue : "&mdash;",
        },
        {
            name         : "borderColour/borderColor",
            description  : "Border colour",
            values       : ["Any colour from defaultColours"],
            defaultValue : "&mdash;",
        },
        {
            name         : "textColour/textColor",
            description  : "Text colour",
            values       : ["Any colour from defaultColours"],
            defaultValue : "&mdash;",
        },
    ],
};
