//  External deps
import React, { useEffect } from "react";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule,
    Table
} from "fictoan-react";

//  Local components
import { TypographyStyled } from "./Typography.styled";
import {
    sampleHeadings,
    sampleText,
    sampleTextTheme,
    sampleDocsTheme,
    sampleHeadingSizing,
    sampleTextSizing,
} from "./CodeSamples";

//  Local assets


export const Typography = () => {
    useEffect(() => {
        document.title = "06Typography — Fictoan";
    }, []);

    return (
        <TypographyStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Typography</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="basics">
                <Row sidePadding="huge" className="margin-top-medium">
                    <Portion>
                        <Heading as="h4">Basics</Heading>
                        <Text>
                            There are three main kinds of type elements—the <code>Heading</code>, <code>Text</code> and links.
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

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  HEADINGS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="headings">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">Headings</Heading>
                        <Text>The <code>Heading</code> element is common across all six sizes, and is invoked with the <code>as</code> prop, like so&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleHeadings} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="primary" />
            </Element>



            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  TEXT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="text">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">Text</Heading>
                        <Text>The <code>Text</code> element pretty straight-forward&mdash;</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleText} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  GLOBAL STYLING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="global-styling">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">Global styling</Heading>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleTextTheme} language="jsx" />
                    </Portion>

                    <Portion desktopSpan="half">
                        <Text>The <code>text</code> object in the theme file is where you can set global defaults for entire project.</Text>
                        <Text marginBottom="nano">The <code>font</code> object here takes the name of your font under each type. For example, this Docs project has it set to&mdash;</Text>

                        <CodeBlock source={sampleDocsTheme} language="jsx" />

                        <Text marginBottom="nano">Just add your font to the project, import it, and add the names here.</Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  GLOBAL STYLING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="sizing">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h4">Sizing</Heading>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Text>Notice the <code>size</code> key in <code>paras</code>. The value is the size of your body font in <code>em</code> units.</Text>

                        <Text>This base font size is is run through a power function to calculate heading sizes, using the <code>multiplier</code> value. So, we get&mdash;</Text>

                        <Table bordersFor="both" padding="tiny">
                            <thead>
                                <tr>
                                    <td className="weight-600">Element</td>
                                    <td className="weight-600">Size</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Para</td>
                                    <td>1em</td>
                                </tr>
                                <tr>
                                    <td>Heading 6</td>
                                    <td>1.2400em</td>
                                </tr>
                                <tr>
                                    <td>Heading 5</td>
                                    <td>1.5376em</td>
                                </tr>
                                <tr>
                                    <td>Heading 4</td>
                                    <td>1.9066em</td>
                                </tr>
                                <tr>
                                    <td>Heading 3</td>
                                    <td>2.364em</td>
                                </tr>
                                <tr>
                                    <td>Heading 2</td>
                                    <td>3.635em</td>
                                </tr>
                                <tr>
                                    <td>Heading 1</td>
                                    <td>5.589em</td>
                                </tr>
                            </tbody>
                        </Table>

                        <Text marginBottom="none">Change the <code>multiplier</code> value to get differently sized headings.</Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleHeadingSizing} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                <Row sidePadding="huge" marginBottom-micro>
                    <Portion>
                        <Heading as="h5">Text sizing</Heading>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Text>Now, you might not want to use headings every time you want to change the size of the text. For this, you can use a prop called <code>size</code> to increase or decrease body font.</Text>

                        <Text size="nano" marginBottom="none">Nano text</Text>
                        <Text size="micro" marginBottom="none">Micro text</Text>
                        <Text size="tiny" marginBottom="none">Tiny text</Text>
                        <Text size="small" marginBottom="none">Small text</Text>
                        <Text size="medium" marginBottom="none">Medium text</Text>
                        <Text size="large" marginBottom="none">Large text</Text>
                        <Text size="huge" marginBottom="none">Huge text</Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleTextSizing} language="jsx" />
                    </Portion>
                </Row>
            </Element>
        </TypographyStyled>
    );
}
