//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleButton = `<Button>Click me</Button>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleButtonKinds = `<Button kind="primary">Primary</Button>
<Button kind="secondary">Secondary</Button>
<Button kind="tertiary">Tertiary</Button>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleButtonShape = `<Button>Default</Button>
<Button shape="rounded">Rounded</Button>
<Button shape="curved">Curved</Button>
<Button shape="circular">Circular</Button>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleButtonCustomStyling1 = `<Button
    shape="rounded"
    bgColour="transparent"
    borderColour="red"
    textColour="green"
>
    Click me
</Button>`;

//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleButtonCustomStyling2 = `<Button
    shape="rounded"
    bgColour="amber-20"
    borderColour="orange"
    textColour="orange"
>
    Click me
</Button>`;

//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleButtonCustomStyling3 = `<Button
    shape="rounded"
    bgColour="spring"
    borderColour="spring"
    textColour="crimson"
>
    Click me
</Button>`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleButtonShadow = `<Button kind="secondary" shadow="mild">Mild shadow</Button>
<Button kind="secondary" shadow="hard">Hard shadow</Button>
<Button kind="secondary" shadow="soft">Soft shadow</Button>`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleButtonIsLoading = `<Button kind="primary" isLoading>Text</Button>
<Button kind="secondary" isLoading>Text</Button>
<Button kind="tertiary" isLoading>Text</Button>`;


//  Code sample 05 ////////////////////////////////////////////////////////////
export const sampleButtonHasDelete = `<Button kind="primary" hasDelete>Delete this</Button>
<Button kind="secondary" hasDelete>Delete this</Button>`;


//  Code sample 06 ////////////////////////////////////////////////////////////
export const sampleButtonAlignText = `<Table
    bordersFor="both" padding="tiny"
    isStriped isHoverable isFullWidth
    alignText="centre"
/>`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleButtonTheme = `button : {
font        : "sans-serif",
isLoading : {
    spinnerBorder : customColours.hue
},
primary : {
    default : {
        bg           : customColours.hue,
        border       : customColours.hue,
        text         : defaultColours.white,
        borderRadius : "4px",
    },
    onHover : {
        bg     : customColours.hue,
        border : customColours.hue,
        text   : defaultColours.white,
    },
    isActive : {
        bg     : customColours.hue,
        border : customColours.hue,
        text   : defaultColours.white,
    },
    isLoading : {
        spinnerBorder : defaultColours.white
    }
},
secondary : { ...same values },
tertiary : { ...same values }`;
