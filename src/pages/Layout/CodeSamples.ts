//  Code sample 01 ========================================================================================
export const sampleRow1 = `
<Row>
    
</Row>
`;


//  Code sample 01 ========================================================================================
export const sampleRowAndPortion1 = `
<Row>
    <Portion desktopSpan="12">
        Some content
    </Portion>
</Row>
`;



//  Code sample 01 ========================================================================================
export const sampleRowAndPortion2 = `
<Row>
    <Portion desktopSpan="12">
        Some content
    </Portion>
    
    <Portion desktopSpan="12">
        Some content
    </Portion>
</Row>
`;


//  Code sample 01 ========================================================================================
export const sampleRowAndPortion3 = `
<Row>
    <Portion desktopSpan="12"></Portion>
    
    <Portion desktopSpan="12"></Portion>
    
    <Portion desktopSpan="8"></Portion>
    
    <Portion desktopSpan="8"></Portion>
    
    <Portion desktopSpan="8"></Portion>
    
    <Portion desktopSpan="4"></Portion>
    
    <Portion desktopSpan="6"></Portion>
    
    <Portion desktopSpan="14"></Portion>
    
    <Portion desktopSpan="13"></Portion>
    
    <Portion desktopSpan="7"></Portion>
    
    <Portion desktopSpan="6"></Portion>
</Row>
`;

//  Code sample 02 ========================================================================================
export const sampleCode2 = `
<Row>
    <Portion desktopSpan="2" />

    <Portion desktopSpan="five-sixth" />

    <Portion desktopSpan="9" />

    <Portion desktopSpan="eleven-twelfth" />
</Row>
`;

//  Code sample 03a ========================================================================================
export const sampleCode3a = `
<Row>
    <Portion desktopSpan="one-sixth" tabLSSpan="8/24" tabPTSpan="half" mobileSpan="24/24" />
</Row>
`;

//  Code sample 03b ========================================================================================
export const sampleCode3b = `
// Portions don’t change on tablet landscape
<Row retainLayoutOnTabLS />

// Portions don’t change on tablet portrait
<Row retainLayoutOnTabPT />

// Portions don’t change on mobile
<Row retainLayoutOnMobile />

// Portions don’t change widths across devices
<Row retainLayoutAlways />
`;

// =========================================================================================================
// SIDE PADDING  ===========================================================================================
//  Code sample 04a ========================================================================================
export const sampleCode4a = `
// Default behaviour
<Row />
`;

//  Code sample 04b ========================================================================================
export const sampleCode4b = `
<Row sidePadding="tiny" />
`;

//  Code sample 04c ========================================================================================
export const sampleCode4c = `
<Row sidePadding="small" />
`;

//  Code sample 04d ========================================================================================
export const sampleCode4d = `
<Row sidePadding="medium" />
`;

//  Code sample 04e ========================================================================================
export const sampleCode4e = `
<Row sidePadding="large" />
`;

//  Code sample 04f ========================================================================================
export const sampleCode4f = `
<Row sidePadding="huge" />
`;

// =========================================================================================================
// GUTTER SIZING  ==========================================================================================
//  Code sample 05a ========================================================================================
export const sampleCode5a = `
<Row gutters="none" />
`;

//  Code sample 05b ========================================================================================
export const sampleCode5b = `
<Row gutters="tiny" />
`;

//  Code sample 05c ========================================================================================
export const sampleCode5c = `
<Row gutters="small" />
`;

//  Code sample 05d ========================================================================================
export const sampleCode5d = `
//  This is default
<Row gutters="medium" />
`;

//  Code sample 05e ========================================================================================
export const sampleCode5e = `
<Row gutters="large" />
`;

//  Code sample 05f ========================================================================================
export const sampleCode5f = `
<Row gutters="huge" />
`;
