// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6, Divider, Portion, Row, Table, Text, Article, CodeBlock
} from "fictoan-react";

// COMPONENTS ==================================================================
import { PropsList } from "../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./page-typography.css";

// CODE SNIPPETS ===============================================================
import {
    sampleColouring1,
    sampleColouring2,
    sampleColouring3,
    sampleFontImport,
    sampleHeadings,
    sampleHeadingSizing,
    sampleHeadingSizingCalc,
    sampleText,
    sampleTextSizing,
    sampleTextTheme,
} from "./CodeSamples";

// DATA ========================================================================
import { listOfHeadingProps, listOfTextProps } from "./propsList";

export const metadata = {
    title       : "Typography — Fictoan UI",
    description : "How to setup the a type system for your project",
    openGraph   : {
        title       : "Typography — Fictoan UI",
        description : "How to setup the a type system for your project",
        url         : "https://fictoan.io/typography",
        siteName    : "Fictoan UI",
        images      : [
            {
                url    : "https://fictoan.io/components/option-card/opengraph-image",
                width  : 1200,
                height : 630,
                alt    : "Typography — Fictoan UI",
            },
        ],
        locale      : "en_US",
        type        : "website",
    },
    twitter     : {
        card        : "summary_large_image",
        title       : "Typography — Fictoan UI",
        description : "How to setup the a type system for your project",
        images      : ["https://fictoan.io/components/option-card/opengraph-image"],
    },
};


const TypographyDocs = () => {
    return (
        <article id="page-typography">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1 className="text-hue">Typography</Heading1>
                </Portion>
            </Row>

            <PropsList propData={listOfHeadingProps} />

            <Element as="div" marginTop="small" />

            <PropsList propData={listOfTextProps} />

            {/* //////////////////////////////////////////////////////////// */}
            {/* BASICS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="basics">
                <Row horizontalPadding="huge" className="margin-top-medium">
                    <Portion>
                        <Heading4 marginBottom="nano">Basics</Heading4>
                        <Text>
                            There are three main kinds of type elements—the<code>Heading</code>, <code>Text</code> and
                            links.
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading1 marginBottom="nano">Heading 1</Heading1>

                        <Heading2 marginBottom="nano">Heading 2</Heading2>

                        <Heading3 marginBottom="nano">Heading 3</Heading3>

                        <Heading4 marginBottom="nano">Heading 4</Heading4>

                        <Heading5 marginBottom="nano">Heading 5</Heading5>

                        <Heading6 marginBottom="nano">Heading 6</Heading6>

                        <Text marginTop="none" marginBottom="nano">Paragraph</Text>

                        <a href="https://fictoan.io/">Link</a>
                    </Portion>
                </Row>

                <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* HEADINGS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="headings">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading4 marginBottom="nano">Heading</Heading4>
                        <Text>The <code>Heading</code> element is common across all six sizes, and is invoked with
                            the <code>as</code> prop, like so&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleHeadings} language="jsx" />
                    </Portion>
                </Row>

                <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>

            {/* //////////////////////////////////////////////////////////// */}
            {/* TEXT */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="text">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading4 marginBottom="nano">Text</Heading4>
                        <Text>The <code>Text</code> element pretty straight-forward&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleText} language="jsx" />
                    </Portion>
                </Row>

                <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>

            {/* //////////////////////////////////////////////////////////// */}
            {/* TEXT */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="text">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading4 marginBottom="nano">Colouring</Heading4>
                        <Text marginBottom="micro">
                            The <code>textColour</code> / <code>textColor</code> prop let’s you add, well, colour to the
                            text. You can check out the full list of colours in the <a href="/colour">Colour</a> page.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleColouring1} language="jsx" marginTop="nano" />
                        <Heading6
                            marginBottom="micro" marginTop="nano"
                            textColour="red-light-30"
                        >
                            I’m red-light-30
                        </Heading6>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleColouring2} language="jsx" marginTop="nano" />
                        <Text
                            marginBottom="micro" marginTop="nano"
                            textColor="violet-dark-10"
                        >
                            I’m violet-dark-10
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleColouring3} language="jsx" marginTop="nano" />
                        <Heading4
                            marginBottom="micro" marginTop="nano"
                            textColour="pistachio"
                        >
                            I’m pistachio
                        </Heading4>
                    </Portion>

                    <Portion>
                        <Text>The link colouring is handled globally in the theme.</Text>
                    </Portion>
                </Row>

                <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* GLOBAL STYLING */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="global-styling">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading4 marginBottom="nano">Global variables</Heading4>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            The theme file is where you can set global defaults for entire project.
                        </Text>

                        <CodeBlock source={sampleTextTheme} language="jsx" marginBottom="micro" />

                        <Divider kind="secondary" verticalMargin="micro" />
                    </Portion>

                    <Portion>
                        <Heading6 marginBottom="nano">Loading custom fonts</Heading6>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Before changing the font-family values in the theme, you need to load the font in your
                            project. Here’s an example of how it’s done in the boilerplate.
                        </Text>

                        <CodeBlock source={sampleFontImport} language="jsx" marginBottom="micro" />

                        <Text marginBottom="micro">
                            Add the font files to your project, and import them in the <code>fonts.css</code> file,
                            using the <code>@font-face</code> rule.
                        </Text>

                        <Text marginBottom="nano">
                            Just add your font to the project, import it, and add the names here.
                        </Text>
                    </Portion>
                </Row>

                <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* GLOBAL STYLING */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="sizing">
                <Row horizontalPadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading4 marginBottom="micro">Sizing</Heading4>
                    </Portion>

                    <Portion>
                        <Heading6 marginBottom="nano">Heading sizing</Heading6>
                        <Text marginBottom="micro">
                            The paragraph font size and the heading font sizes are set manually in the theme. The rest
                            of the sizes are calculated based on the <code>multiplier</code> value.
                        </Text>

                        <Text marginBottom="none">
                            Change the <code>multiplier</code> value to get differently sized headings.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleHeadingSizing} language="jsx" marginBottom="nano" />
                        <CodeBlock source={sampleHeadingSizingCalc} language="css" />
                    </Portion>
                </Row>

                <Divider horizontalMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                <Row horizontalPadding="huge" marginBottom-micro>
                    <Portion>
                        <Heading6 marginBottom="nano">Text sizing</Heading6>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Now, you might not want to use headings every time you want to change the size of the text.
                            For this, you can use a prop called <code>size</code> to increase or decrease body font.
                        </Text>

                        <Text size="nano" marginBottom="none">Nano text</Text>
                        <Text size="micro" marginBottom="none">Micro text</Text>
                        <Text size="tiny" marginBottom="none">Tiny text</Text>
                        <Text size="small" marginBottom="none">Small text</Text>
                        <Text size="medium" marginBottom="none">Medium text</Text>
                        <Text size="large" marginBottom="none">Large text</Text>
                        <Text size="huge" marginBottom="none">Huge text</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleTextSizing} language="jsx" />
                    </Portion>
                </Row>
            </Element>
        </article>
    );
};

export default TypographyDocs;
