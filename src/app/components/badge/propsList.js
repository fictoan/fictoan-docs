export const listOfBadgeProps = {
    elementName : "",
    props       : [
        {
            name         : "size",
            description  : "The, um, size of the button",
            values       : ["tiny", "small", "medium", "large", "huge"],
            defaultValue : "<code>medium</code>, auto-applied",
        },
        {
            name         : "shape",
            description  : "Corner radius",
            values       : ["rounded", "curved", "circular"],
            defaultValue : "",
        },
        {
            name         : "shadow",
            description  : "Box shadow",
            values       : ["mild", "hard", "soft"],
            defaultValue : "",
        },
        {
            name         : "bgColour/bgColor",
            description  : "Background colour",
            values       : ["ColourProps"],
            defaultValue : "",
        },
        {
            name         : "borderColour/borderColor",
            description  : "Border colour",
            values       : ["ColourProps"],
            defaultValue : "",
        },
        {
            name         : "textColour/textColor",
            description  : "Text colour",
            values       : ["ColourProps"],
            defaultValue : "",
        },
    ],
};
