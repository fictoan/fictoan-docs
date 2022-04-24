//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleCheckBox = `<CheckBox
    id="checkbox-1"
    value="checkbox-1"
    name="checkbox-1"
    label="Check me"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleSwitch = `<Switch
    id="switch-1"
    value="switch-1"
    name="switch-1"
    label="Toggle me"
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleCheckBoxTheming = `/*  CHECKBOX  ===================  */
checkBox : {
    square : {
        default    : {
            bg : String(defaultColours.slate20)
        },
        onHover    : {
            bg : String(defaultColours.slate40)
        },
        isChecked  : {
            bg : String(customColours.hue)
        },
        isDisabled : {
            bg : String(defaultColours.slate10)
        }
    },
    check  : {
        default : {
            border : String(defaultColours.white)
        }
    }
},

/*  SWITCH  ===================  */
toggleSwitch : {
    case : {
        default   : {
            bg : defaultColours.slate30
        },
        onHover   : {
            bg : defaultColours.green40
        },
        isChecked : {
            bg : defaultColours.green90
        },
        isDisabled : {
            bg : defaultColours.grey
        }
    },
    actuator : {
        default   : {
            bg : defaultColours.white
        },
        onHover   : {
            bg : defaultColours.white
        },
        isChecked : {
            bg : defaultColours.white
        },
        isDisabled : {
            bg : defaultColours.grey70
        }
    }
},`;
