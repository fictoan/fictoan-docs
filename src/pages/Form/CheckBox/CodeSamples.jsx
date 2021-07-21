//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleCheckBox = `<CheckBox
    as="input"
    id="checkbox-1"
    value="checkbox-1"
    name="checkbox-1"
    label="Check me"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleSwitch = `<Switch
    as="input"
    id="switch-1"
    value="switch-1"
    name="switch-1"
    label="Toggle me"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleCheckBoxTheming = `checkBox : {
    square : {
        default    : {
            bg : defaultColours.slate20
        },
        onHover    : {
            bg : defaultColours.slate40
        },
        isChecked  : {
            bg : customColours.hue
        },
        isDisabled : {
            bg : defaultColours.slate10
        }
    },
    check  : {
        default : {
            border : defaultColours.white
        }
    }
},

toggleSwitch : {
    switch : {
        default   : {
            bg : defaultColours.white
        },
        isChecked : {
            bg : defaultColours.white
        }
    }
},`;
