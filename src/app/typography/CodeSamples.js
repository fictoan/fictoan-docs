// Code sample 01 ==============================================================
export const sampleHeadings = `<Heading1>Heading 1</Heading1>
<Heading2>Heading 2</Heading2>
<Heading3>Heading 3</Heading3>
<Heading4>Heading 4</Heading4>
<Heading5>Heading 5</Heading5>
<Heading6>Heading 6</Heading6>`;


// Code sample 02 ==============================================================
export const sampleText = `<Text>Sample text goes here</Text>`;


// Code sample 02 ==============================================================
export const sampleTextTheme = `/* GENERICS ============================================================= */
--font-sans-serif           : "IBM Plex Sans", sans-serif;
--font-serif                : "IBM Plex Serif", serif;
--font-mono                 : "IBM Plex Mono", monospace;

/* PARAGRAPHS =========================================================== */
--paragraph-font            : var(--font-sans-serif);
--paragraph-font-size       : 1rem;
--paragraph-line-height     : 1.2;
--paragraph-font-weight     : 400;
--paragraph-text-colour     : var(--grey);

--paragraph-subtext-colour  : var(--slate-dark30);
--paragraph-subtext-size    : 0.8rem;

/* HEADINGS ============================================================= */
--heading-font              : var(--font-sans-serif);
--heading-font-size         : 1.5rem;
--heading-size-multiplier   : 1.2;
--heading-line-height       : 1;
--heading-font-weight       : 700;
--heading-text-colour       : var(--slate);

/* LINKS ================================================================ */
--link-font                 : var(--paragraph-font);
--link-text-default         : var(--blue);
--link-text-hover           : var(--blue);

/* SELECTION ============================================================ */
--text-selected             : var(--white);
--text-bg-selected          : var(--hue);`;


// Code sample 03 ==============================================================
export const sampleColouring1 = `<Heading6 textColour="red-light30">I’m red-light30</Heading6>`;
export const sampleColouring2 = `<Text textColor="violet-dark10">I’m violet-dark10</Text>`;
export const sampleColouring3 = `<Heading4 textColour="pistachio">I’m pistachio</Heading4>`;


// Code sample 03 ==============================================================
export const sampleFontImport = `// fonts.css
@font-face {
    font-family : "IBM Plex Sans";
    src         : url("../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Regular.woff2") format("woff2");
    font-weight : 400;
    font-style  : normal;
}

@font-face {
    font-family : "IBM Plex Sans";
    src         : url("../assets/fonts/IBM-Plex-Sans/IBMPlexSans-Bold.woff2") format("woff2");
    font-weight : 700;
    font-style  : normal;
}`;


// Code sample 04 ==============================================================
export const sampleHeadingSizing = `--paragraph-font-size     : 1rem;
--heading-font-size       : 1.5rem;
--heading-size-multiplier : 1.2;`;

// Code sample 04 ==============================================================
export const sampleHeadingSizingCalc = `h1 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 2.4); }
h2 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 2); }
h3 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 1.64); }
h4 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 1.48); }
h5 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 1.24); }
h6 { font-size : calc(var(--paragraph-font-size) * var(--heading-size-multiplier) * 1.16); }`;


// Code sample 04 ==============================================================
export const sampleTextSizing = `<Text size="nano">Nano text</Text>
<Text size="micro">Micro text</Text>
<Text size="tiny">Tiny text</Text>
<Text size="small">Small text</Text>
<Text size="medium">Medium text</Text>
<Text size="large">Large text</Text>
<Text size="huge">Huge text</Text>`;
