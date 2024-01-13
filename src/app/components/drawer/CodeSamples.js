//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleInfoPanelSetup = `// Initialise state --------------------
const [isSampleInfoPanelOpen, setIsSampleInfoPanelOpen] = useState(false);


// Opening trigger ---------------------
<Button
    kind="primary"
    onClick={() => setIsSampleInfoPanelOpen(true)}
>
    Open info panel
</Button>


// Actual component --------------------
<InfoPanel
    isOpen={isSampleInfoPanelOpen}
    onCloseCallback={() => setIsSampleInfoPanelOpen(false)}
>
    <Heading as="h5">Hello</Heading>
</InfoPanel>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleInfoPanelWidth = `<InfoPanel width="tiny" | "small" | "medium" | "large" | "huge"></InfoPanel>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleInfoPanelIsOpen = `<InfoPanel isOpen></InfoPanel>`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleInfoPanelCallback = `<InfoPanel
    isOpen={isSampleInfoPanelOpen}
    onCloseCallback={() => setIsSampleInfoPanelOpen(false)}
>`;



//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleInfoPanelTheme = `infoPanel : {
    bg     : defaultColours.white,
    border : defaultColours.slate20,
    dismissButton : {
        color : defaultColours.slate90,
    }
}`;
