"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useRef, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element, Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6, Divider, Portion, Row, Table, Text, Article, CodeBlock,
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


const TypographyDocs = () => {
    const [fontSizes, setFontSizes] = useState({});
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);
    const h3Ref = useRef(null);
    const h4Ref = useRef(null);
    const h5Ref = useRef(null);
    const h6Ref = useRef(null);
    const pRef = useRef(null);

    const updateSizes = () => {
        setFontSizes({
            size1: h1Ref.current ? getComputedStyle(h1Ref.current).fontSize : '',
            size2: h2Ref.current ? getComputedStyle(h2Ref.current).fontSize : '',
            size3: h3Ref.current ? getComputedStyle(h3Ref.current).fontSize : '',
            size4: h4Ref.current ? getComputedStyle(h4Ref.current).fontSize : '',
            size5: h5Ref.current ? getComputedStyle(h5Ref.current).fontSize : '',
            size6: h6Ref.current ? getComputedStyle(h6Ref.current).fontSize : '',
            size7: pRef.current ? getComputedStyle(pRef.current).fontSize : '',
        });
    };

    useEffect(() => {
        updateSizes();
        window.addEventListener('resize', updateSizes);
        return () => window.removeEventListener('resize', updateSizes);
    }, []);

    return (
        <article id="page-typography">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1 className="test-heading">Typography</Heading1>
                </Portion>
            </Row>

            <PropsList propData={listOfHeadingProps} />

            <Element as="div" marginTop="small" />

            <PropsList propData={listOfTextProps} />

            {/* //////////////////////////////////////////////////////////// */}
            {/* BASICS */}
            {/* //////////////////////////////////////////////////////////// */}
            <Element as="section" id="basics">
                <Row horizontalPadding="small" className="margin-top-medium">
                    <Portion>
                        <Heading4 marginBottom="nano">Basics</Heading4>
                        <Text>
                            There are three main kinds of type elements—the<code>Heading</code>, <code>Text</code> and
                            links.
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading1 ref={h1Ref} marginBottom="nano">H1 — {fontSizes.size1}</Heading1>
                        <Heading2 ref={h2Ref} marginBottom="nano">H2 — {fontSizes.size2}</Heading2>
                        <Heading3 ref={h3Ref} marginBottom="nano">H3 — {fontSizes.size3}</Heading3>
                        <Heading4 ref={h4Ref} marginBottom="nano">H4 — {fontSizes.size4}</Heading4>
                        <Heading5 ref={h5Ref} marginBottom="nano">H5 — {fontSizes.size5}</Heading5>
                        <Heading6 ref={h6Ref} marginBottom="nano">H6 — {fontSizes.size6}</Heading6>
                        <Text ref={pRef} marginBottom="nano">{fontSizes.size7} p</Text>

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
                        <CodeBlock withSyntaxHighlighting source={sampleHeadings} language="jsx" />
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
                        <CodeBlock withSyntaxHighlighting source={sampleText} language="jsx" />
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
                        <CodeBlock withSyntaxHighlighting source={sampleColouring1} language="jsx" marginTop="nano" />
                        <Heading6
                            marginBottom="micro" marginTop="nano"
                            textColour="red-light30"
                        >
                            I’m red-light30
                        </Heading6>
                    </Portion>

                    <Portion>
                        <CodeBlock withSyntaxHighlighting source={sampleColouring2} language="jsx" marginTop="nano" />
                        <Text
                            marginBottom="micro" marginTop="nano"
                            textColor="violet-dark10"
                        >
                            I’m violet-dark10
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock withSyntaxHighlighting source={sampleColouring3} language="jsx" marginTop="nano" />
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

                        <CodeBlock withSyntaxHighlighting source={sampleTextTheme} language="jsx" marginBottom="micro" />

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

                        <CodeBlock withSyntaxHighlighting source={sampleFontImport} language="jsx" marginBottom="micro" />

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
                        <CodeBlock withSyntaxHighlighting source={sampleHeadingSizing} language="jsx" marginBottom="nano" />
                        <CodeBlock withSyntaxHighlighting source={sampleHeadingSizingCalc} language="css" />
                    </Portion>
                </Row>

                <Divider horizontalMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                <Row horizontalPadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading6 marginBottom="nano">Text sizing</Heading6>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Now, you might not want to use headings every time you want to change the size of the text.
                            For this, you can use a prop called <code>size</code> to increase or decrease body font.
                        </Text>

                        <Text size="nano">Nano text</Text>
                        <Text size="micro">Micro text</Text>
                        <Text size="tiny">Tiny text</Text>
                        <Text size="small">Small text</Text>
                        <Text size="medium">Medium text</Text>
                        <Text size="large">Large text</Text>
                        <Text size="huge">Huge text</Text>
                        <Text size="mega">Mega text</Text>
                        <Text size="giga">Giga text</Text>
                        <Text size="tera">Tera text</Text>
                        <Text size="peta">Peta text</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock withSyntaxHighlighting source={sampleTextSizing} language="jsx" />
                    </Portion>
                </Row>
            </Element>
        </article>
    );
};

export default TypographyDocs;
