//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleTabs = `// Content for tabs --------------------
const tabOneContent = () => (
    <Text>Content for tab 1</Text>
)

const tabTwoContent = () => (
    <Text>Content for tab 2</Text>
)

const tabThreeContent = () => (
    <Text>Content for tab 3</Text>
)

// Actual component --------------------
<Tabs
    tabs={[
        {
            key     : "tab1",
            label   : "Tab 1",
            content : tabOneContent()
        },
        {
            key     : "tab2",
            label   : "Tab 2",
            content : tabTwoContent()
        },
        {
            key     : "tab3",
            label   : "Tab 3",
            content : tabThreeContent()
        }
    ]}
/>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleButtonKinds = `tabs={[
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
export const sampleButtonTheme = `tabs : {
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
