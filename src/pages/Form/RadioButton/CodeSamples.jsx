//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleRadioButton = `<RadioButton
    id="radio-1"
    name="choices"
    value="yes"
    label="Yes"
/>

<RadioButton
    id="radio-2"
    name="choices"
    value="no"
    label="No"
/>

<RadioButton
    id="radio-3"
    name="choices"
    value="maybe"
    label="Maybe"
/>`;

//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleSwitch = `<Switch
    id="switch-1"
    value="switch-1"
    name="switch-1"
    label="Toggle me"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleRadioButtonTheming = `radioButton : {
    inset  : {
        default    : {
            bg : defaultColours.slate20
        },
        onHover    : {
            bg : defaultColours.slate40
        },
        isSelected : {
            bg : customColours.hue
        },
        isDisabled : {
            bg : defaultColours.slate10
        }
    },
    circle : {
        default : {
            bg : defaultColours.white
        }
    }
}`;
