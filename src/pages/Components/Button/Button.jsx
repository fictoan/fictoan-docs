import React, { useEffect } from "react";

import { Button, CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import { ButtonStyled } from "./Button.styled";
import {
    sampleButton,
    sampleButtonAlignText,
    sampleButtonFullWidth,
    sampleButtonKinds,
    sampleButtonPadding,
    sampleButtonStripes,
    sampleButtonTheme
} from "./CodeSamples";


export const ButtonDocs = () => {
    useEffect(() => {
        document.title = "Button — Fictoan";

        // try {
        //     window.scroll({
        //         top: 0,
        //         left: 0
        //     });
        // } catch (error) {
        //     window.scrollTo(0, 0);
        // }
    }, []);

    return (
        <ButtonStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Button</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Table bordersFor="both" padding="tiny">
                        <thead className="bg-slate-10">
                            <tr>
                                <td className="weight-600">Prop</td>
                                <td className="weight-600">Description</td>
                                <td className="weight-600">Values</td>
                                <td className="weight-600">Default</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <code>kind</code>
                                </td>

                                <td>
                                    Denotes which part of the cells to draw the borders for
                                </td>

                                <td>
                                    <code>primary</code><br />
                                    <code>secondary</code><br />
                                    <code>tertiary</code><br />
                                    <code>custom</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>size</code>
                                </td>

                                <td>
                                    The, um, size of the button
                                </td>

                                <td>
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    <code>medium</code>, auto-fallback
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shape</code>
                                </td>

                                <td>
                                    Corner radius
                                </td>

                                <td>
                                    <code>rounded</code><br />
                                    <code>curved</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shadow</code>
                                </td>

                                <td>
                                    Box shadow
                                </td>

                                <td>
                                    <code>mild</code><br />
                                    <code>hard</code><br />
                                    <code>soft</code>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>isLoading</code>
                                </td>

                                <td>
                                    Adds a spinner inside the button to show a loading state
                                </td>

                                <td>
                                    boolean
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>hasDelete</code>
                                </td>

                                <td>
                                    Adds a small &ldquo;&times;&rdquo; to the right side of the button
                                </td>

                                <td>
                                    boolean
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default</Heading>

                        <Text marginBottom="micro">
                            The <code>Button</code> uses a native <code>button</code> element that you can extend with
                            props and events.
                        </Text>

                        <CodeBlock source={sampleButton} language="markup" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Table</code>, which looks like this&mdash;
                        </Text>

                        <Button>Click me</Button>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  KIND  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Kind</Heading>

                        <Text marginBottom="micro">
                            For the ease of global styling, there are three kinds you can
                            apply—<code>primary</code>, <code>secondary</code> and <code>tertiary</code>. There’s also
                            a <code>custom</code> prop value you can use to explicitly denote over-rides.
                        </Text>

                        <CodeBlock source={sampleButtonKinds} language="jsx" marginBottom="micro" />

                        <Button kind="primary" marginRight="nano">Primary</Button>
                        <Button kind="secondary" marginRight="nano">Secondary</Button>
                        <Button kind="tertiary">Tertiary</Button>

                        <Text marginTop="micro">
                            All of these values come from the theme file, where you can set once for your entire project
                            globally.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="tertiary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  PADDING  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Cell padding</Heading>

                        <Text marginBottom="micro">
                            Padding adds some spacing to the cells, and accepts
                            the <code>tiny</code> to <code>huge</code> spacing values.
                        </Text>

                        <CodeBlock source={sampleButtonPadding} language="jsx" marginBottom="micro" />

                        <Table bordersFor="both" padding="tiny">
                            <thead>
                                <tr>
                                    <td>Header 1</td>
                                    <td>Header 2</td>
                                    <td>Header 3</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                </tr>

                                <tr>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                    <td>Cell 6</td>
                                </tr>

                                <tr>
                                    <td>Cell 7</td>
                                    <td>Cell 8</td>
                                    <td>Cell 9</td>
                                </tr>

                                <tr>
                                    <td>Cell 10</td>
                                    <td>Cell 11</td>
                                    <td>Cell 12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>


                <HRule kind="tertiary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  STRIPES  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Striped rows</Heading>

                        <Text marginBottom="micro">
                            The <code>isStriped</code> prop adds a different background colour to alternate rows, aiding
                            readability. It also adds a coloured header row. Both these values can be set in the theme.
                        </Text>

                        <CodeBlock source={sampleButtonStripes} language="jsx" marginBottom="micro" />

                        <Table bordersFor="both" padding="tiny" isStriped>
                            <thead>
                                <tr>
                                    <td>Header 1</td>
                                    <td>Header 2</td>
                                    <td>Header 3</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                </tr>

                                <tr>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                    <td>Cell 6</td>
                                </tr>

                                <tr>
                                    <td>Cell 7</td>
                                    <td>Cell 8</td>
                                    <td>Cell 9</td>
                                </tr>

                                <tr>
                                    <td>Cell 10</td>
                                    <td>Cell 11</td>
                                    <td>Cell 12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>


                <HRule kind="tertiary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  STRIPES  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Change row BG on hover</Heading>

                        <Text marginBottom="micro">
                            The <code>isHoverable</code> prop adds a different background colour to a row on hover. You
                            can change the colour again in the theme.
                        </Text>

                        <CodeBlock source={sampleButtonStripes} language="jsx" marginBottom="micro" />

                        <Table bordersFor="both" padding="tiny" isStriped isHoverable>
                            <thead>
                                <tr>
                                    <td>Header 1</td>
                                    <td>Header 2</td>
                                    <td>Header 3</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                </tr>

                                <tr>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                    <td>Cell 6</td>
                                </tr>

                                <tr>
                                    <td>Cell 7</td>
                                    <td>Cell 8</td>
                                    <td>Cell 9</td>
                                </tr>

                                <tr>
                                    <td>Cell 10</td>
                                    <td>Cell 11</td>
                                    <td>Cell 12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>


                <HRule kind="tertiary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  FULL WIDTH  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Full-width</Heading>

                        <Text marginBottom="micro">
                            You can add the <code>isFullWidth</code> prop to make the table take up the width of its
                            parent. This is a common prop and now unique to the <code>Table</code> element.
                        </Text>

                        <CodeBlock source={sampleButtonFullWidth} language="jsx" marginBottom="micro" />

                        <Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth>
                            <thead>
                                <tr>
                                    <td>Header 1</td>
                                    <td>Header 2</td>
                                    <td>Header 3</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                </tr>

                                <tr>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                    <td>Cell 6</td>
                                </tr>

                                <tr>
                                    <td>Cell 7</td>
                                    <td>Cell 8</td>
                                    <td>Cell 9</td>
                                </tr>

                                <tr>
                                    <td>Cell 10</td>
                                    <td>Cell 11</td>
                                    <td>Cell 12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>


                <HRule kind="tertiary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  ALIGN TEXT  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Text alignment</Heading>

                        <Text marginBottom="micro">
                            There’s a <code>alignText</code> prop to align the text to
                            the <code>left</code>, <code>right</code>, and <code>centre</code>/<code>center</code>.
                        </Text>

                        <CodeBlock source={sampleButtonAlignText} language="jsx" marginBottom="micro" />

                        <Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth alignText="centre">
                            <thead>
                                <tr>
                                    <td>Header 1</td>
                                    <td>Header 2</td>
                                    <td>Header 3</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Cell 1</td>
                                    <td>Cell 2</td>
                                    <td>Cell 3</td>
                                </tr>

                                <tr>
                                    <td>Cell 4</td>
                                    <td>Cell 5</td>
                                    <td>Cell 6</td>
                                </tr>

                                <tr>
                                    <td>Cell 7</td>
                                    <td>Cell 8</td>
                                    <td>Cell 9</td>
                                </tr>

                                <tr>
                                    <td>Cell 10</td>
                                    <td>Cell 11</td>
                                    <td>Cell 12</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>


                <HRule sideMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleButtonTheme} language="json" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </ButtonStyled>
    );
}
