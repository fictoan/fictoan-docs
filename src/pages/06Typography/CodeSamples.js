//  Code sample 01 ========================================================================================
export const sampleHeadings = `
<Heading as="h1">Heading 1</Heading>
<Heading as="h2">Heading 2</Heading>
<Heading as="h3">Heading 3</Heading>
<Heading as="h4">Heading 4</Heading>
<Heading as="h5">Heading 5</Heading>
<Heading as="h6">Heading 6</Heading>
`;


//  Code sample 02 ========================================================================================
export const sampleText = `
<Text>Sample text goes here</Text>
`;


//  Code sample 02 ========================================================================================
export const sampleTextTheme = `
text : {
    font : {
        sans  : "sans-serif",
        serif : "serif",
        mono  : "monospace",
    },

    paras : {
        size       : 1,
        color      : defaultColours.grey,
        weight     : 400,
        lineHeight : 1.64,
    },

    headings : {
        font       : "sans-serif",
        color      : mainColors.shade,
        weight     : 600,
        multiplier : 1.16,
        lineHeight : 1.24
    },

    links : {
        default : {
            color : defaultColours.blue90,
        },
        onHover : {
            color : defaultColours.blue60
        }
    },

    selection : {
        bg   : mainColors.hue,
        text : defaultColours.white
    },
}
`;


//  Code sample 03 ========================================================================================
export const sampleDocsTheme = `
font : {
    sans  : "Space Grotesk, sans-serif",
    serif : "serif",
    mono  : "Space Mono, monospace"
},
`;


//  Code sample 04 ========================================================================================
export const sampleHeadingSizing = `
text : {
    paras : {
        size : 1,
    },

    headings : {
        multiplier : 1.16
    }
}
`;


//  Code sample 04 ========================================================================================
export const sampleTextSizing = `
<Text size="nano">Nano text</Text>
<Text size="micro">Micro text</Text>
<Text size="tiny">Tiny text</Text>
<Text size="small">Small text</Text>
<Text size="medium">Medium text</Text>
<Text size="large">Large text</Text>
<Text size="huge">Huge text</Text>
`;
