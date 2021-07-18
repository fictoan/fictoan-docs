//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleButton = `<Button>Click me</Button>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleButtonKinds = `<Button kind="primary">Primary</Button>
<Button kind="secondary">Secondary</Button>
<Button kind="tertiary">Tertiary</Button>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleButtonPadding = `<Table bordersFor="both" padding="tiny" />`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleButtonStripes = `<Table bordersFor="both" padding="tiny" isStriped />`;


//  Code sample 05 ////////////////////////////////////////////////////////////
export const sampleButtonFullWidth = `<Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth />`;


//  Code sample 06 ////////////////////////////////////////////////////////////
export const sampleButtonAlignText = `<Table
    bordersFor="both" padding="tiny"
    isStriped isHoverable isFullWidth
    alignText="centre"
/>`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleButtonTheme = `table : {
    bg      : defaultColours.white,
    text    : customColours.shade,
    border  : defaultColours.slate40,
    striped : {
        header : {
            bg : defaultColours.blue40,
        },
        cell : {
            bg : defaultColours.slate20,
        }
    },
    onHover : {
        bg   : defaultColours.amber20,
        text : customColours.shade
    },
}`;
