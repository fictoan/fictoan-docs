//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleTabs = `<FormWrapper>
    <FormItem></FormItem>
    <FormItem></FormItem>
    // ...as many as needed
</FormWrapper>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleTabsTabs = `tabs={[
    {
        key     : "string",
        label   : "string",
        content : tabOneContent()
    },
    {
        key     : "string",
        label   : "string",
        content : tabTwoContent()
    },
    {
        key     : "string",
        label   : "string",
        content : tabThreeContent()
    }
]}`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleTabsTheme = `tabs : {
    label : {
        default    : {
            text : \`$\{lighten(0.16, defaultColours.grey)}\`
        },
        onHover    : {
            text : \`$\{lighten(0.16, customColours.hue)}\`
        },
        isActive   : {
            border : customColours.hue,
            text   : customColours.hue
        },
        isDisabled : {
            text : \`$\{darken(0.24, defaultColours.slate)}\`
        },
        hasAlert   : {
            circle : {
                bg     : defaultColours.red90,
                border : defaultColours.slate10
            }
        }
    }
}`;
