//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleInput = `<InputField />`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleInputBasicProps = `<InputField
    label="Label"
    placeholder="Placeholder"
/>`;


//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleInputHelpText = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent here"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleInputValidation = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent here"
    required
    validateThis
    pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"
    errorText="Um, that isn’t a valid email"
/>`;

//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleInputRequired = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent here"
    required
/>`;

//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleInputTheme = `input : {
    default     : {
        bg     : defaultColours.white,
        border : defaultColours.slate40,
        label  : defaultColours.grey90,
        text   : defaultColours.grey90
    },
    onFocus     : {
        bg       : defaultColours.white,
        border   : defaultColours.blue90,
        text     : defaultColours.grey90,
        helpText : defaultColours.grey90
    },
    isValid     : {
        bg     : defaultColours.white,
        border : defaultColours.green80,
        label  : defaultColours.grey90
    },
    isInvalid   : {
        bg       : defaultColours.red10,
        border   : defaultColours.red80,
        label    : defaultColours.red,
        helpText : defaultColours.red
    },
    isReadOnly  : {
        bg     : defaultColours.grey50,
        border : defaultColours.grey50,
        label  : defaultColours.grey90
    },
    required    : {
        text : defaultColours.red
    },
}`;
