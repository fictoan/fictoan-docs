export const listOfHeadingProps = {
    elementName : "Heading",
    props       : [
        {
            name         : "as",
            description  : "Choice of heading size.",
            values       : ["h1", "h2", "h3", "h4", "h5", "h6"],
            defaultValue : "div",
        },
        {
            name         : "textColour / textColor",
            description  : "Text colour of the heading.",
            values       : [ "ColourProps" ],
            defaultValue : "",
        },
    ],
};

export const listOfTextProps = {
    elementName : "Text",
    props       : [
        {
            name         : "textColour / textColor",
            description  : "Text colour of the, um, text.",
            values       : [ "ColourProps" ],
            defaultValue : "",
        },
    ],
};
