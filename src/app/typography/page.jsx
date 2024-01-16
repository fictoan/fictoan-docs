"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

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
    sampleHeadingSizing, sampleHeadingSizingCalc,
    sampleText,
    sampleTextSizing,
    sampleTextTheme,
} from "./CodeSamples";

// DATA ========================================================================
import { listOfHeadingProps, listOfTextProps } from "./propsList";


const TypographyDocs = () => {
    return (
        <article id="page-typography">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" className="text-hue">Typography</Heading>
                </Portion>
            </Row>

            <PropsList propData={listOfHeadingProps} />

            <Element as="div" marginTop="small" />

            <PropsList propData={listOfTextProps} />

            {/* //////////////////////////////////////////////////////////// */}
            {/* BASICS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="basics">
                <Row layout="grid" horizontalPadding="huge" className="margin-top-medium">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Basics</Heading>
                        <Text>
                            There are three main kinds of type elements—the<code>Heading</code>, <code>Text</code> and
                            links.
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading as="h1" marginBottom="nano">Heading 1</Heading>

                        <Heading as="h2" marginBottom="nano">Heading 2</Heading>

                        <Heading as="h3" marginBottom="nano">Heading 3</Heading>

                        <Heading as="h4" marginBottom="nano">Heading 4</Heading>

                        <Heading as="h5" marginBottom="nano">Heading 5</Heading>

                        <Heading as="h6" marginBottom="nano">Heading 6</Heading>

                        <Text marginTop="none" marginBottom="nano">Paragraph</Text>

                        <a href="https://fictoan.io/">Link</a>
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* HEADINGS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="headings">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Heading</Heading>
                        <Text>The <code>Heading</code> element is common across all six sizes, and is invoked with
                            the <code>as</code> prop, like so&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleHeadings} language="jsx" />
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>

            {/* //////////////////////////////////////////////////////////// */}
            {/* TEXT */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="text">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Text</Heading>
                        <Text>The <code>Text</code> element pretty straight-forward&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleText} language="jsx" />
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>

            {/* //////////////////////////////////////////////////////////// */}
            {/* TEXT */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="text">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Colouring</Heading>
                        <Text marginBottom="micro">
                            The <code>textColour</code> / <code>textColor</code> prop let’s you add, well, colour to the
                            text. You can check out the full list of colours in the <a href="/colour">Colour</a> page.
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading as="h6" textColour="red-light-30">I’m red-light-30</Heading>
                        <CodeBlock source={sampleColouring1} language="jsx" marginTop="nano" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <Text textColor="violet-dark-10">I’m violet-dark-10</Text>
                        <CodeBlock source={sampleColouring2} language="jsx" marginTop="nano" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <Heading as="h4" textColour="pistachio">I’m pistachio</Heading>
                        <CodeBlock source={sampleColouring3} language="jsx" marginTop="nano" marginBottom="micro" />
                    </Portion>

                    <Portion>
                        <Text>The link colouring is handled globally in the theme.</Text>
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* GLOBAL STYLING */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="global-styling">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Global variables</Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            The theme file is where you can set global defaults for entire project.
                        </Text>

                        <CodeBlock source={sampleTextTheme} language="jsx" marginBottom="micro" />

                        <HRule kind="secondary" verticalMargin="micro" />
                    </Portion>

                    <Portion>
                        <Heading as="h6" marginBottom="nano">Loading custom fonts</Heading>
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

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />
            </Element>


            {/* //////////////////////////////////////////////////////////// */}
            {/* GLOBAL STYLING */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="sizing">
                <Row layout="grid" horizontalPadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Sizing</Heading>
                    </Portion>

                    <Portion>
                        <Heading as="h6" marginBottom="nano">Heading sizing</Heading>
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

                <HRule horizontalMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                <Row layout="grid" horizontalPadding="huge" marginBottom-micro>
                    <Portion>
                        <Heading as="h6" marginBottom="nano">Text sizing</Heading>
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
