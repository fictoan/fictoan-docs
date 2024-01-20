"use client";

import React from "react";

import { Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-table.css";
import {
    sampleTable, sampleTableAlignText,
    sampleTableBordersFor, sampleTableFullWidth,
    sampleTablePadding, sampleTableStripes, sampleTableTheme,
} from "./CodeSamples";

const TableDocs = () => {
    return (
        <>
            <head>
                <title>Table — Fictoan documentation</title>
            </head>

            <article id="page-table">
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h2" className="text-hue">Table</Heading>
                    </Portion>
                </Row>

                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="micro">Props</Heading>

                        <Table bordersFor="both" padding="tiny">
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Value</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><code>bordersFor</code></td>
                                    <td>Denotes which part of the cells to draw the borders for</td>
                                    <td>
                                        <code>rows</code><br />
                                        <code>columns</code><br />
                                        <code>both</code>
                                    </td>
                                    <td>—</td>
                                </tr>

                                <tr>
                                    <td><code>isStriped</code></td>
                                    <td>Adds a background colour for alternate rows</td>
                                    <td>boolean</td>
                                    <td><code>false</code></td>
                                </tr>

                                <tr>
                                    <td><code>isHoverable</code></td>
                                    <td>Adds an extra background colour for rows on hover</td>
                                    <td>boolean</td>
                                    <td><code>false</code></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>

                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  DEFAULT  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="default">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Default</Heading>

                            <Text marginBottom="micro">
                                The <code>Table</code> element is used to separate sections of content on your page. It’s a
                                self-closing element, and doesn’t accept any children.
                            </Text>

                            <CodeBlock source={sampleTable} language="markup" />

                            <Text marginTop="micro" marginBottom="micro">
                                The above code will display the default <code>Table</code>, which looks like this&mdash;
                            </Text>

                            <Table>
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
                                </tbody>
                            </Table>

                            <Text marginTop="micro">
                                The default table looks nothing like an actual table—we need to add props to dress it up.
                            </Text>
                        </Portion>
                    </Row>
                </Element>


                <HRule horizontalMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  Props  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="props">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h3">Props</Heading>
                        </Portion>
                    </Row>

                    {/*  =============================================================================================  */}
                    {/*  BORDERS FOR  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Cell borders</Heading>

                            <Text marginBottom="micro">
                                You can add borders to the cells by adding the <code>bordersFor</code> prop. You can
                                have <code>rows</code>, <code>columns</code> or <code>both</code>.
                            </Text>

                            <CodeBlock source={sampleTableBordersFor} language="jsx" marginBottom="micro" />

                            <Table bordersFor="both">
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


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  PADDING  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Cell padding</Heading>

                            <Text marginBottom="micro">
                                Padding adds some spacing to the cells, and accepts
                                the <code>tiny</code> to <code>huge</code> spacing values.
                            </Text>

                            <CodeBlock source={sampleTablePadding} language="jsx" marginBottom="micro" />

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


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  STRIPES  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Striped rows</Heading>

                            <Text marginBottom="micro">
                                The <code>isStriped</code> prop adds a different background colour to alternate rows, aiding
                                readability. It also adds a coloured header row. Both these values can be set in the theme.
                            </Text>

                            <CodeBlock source={sampleTableStripes} language="jsx" marginBottom="micro" />

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


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  STRIPES  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Change row BG on hover</Heading>

                            <Text marginBottom="micro">
                                The <code>isHoverable</code> prop adds a different background colour to a row on hover. You
                                can change the colour again in the theme.
                            </Text>

                            <CodeBlock source={sampleTableStripes} language="jsx" marginBottom="micro" />

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


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  FULL WIDTH  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Full-width</Heading>

                            <Text marginBottom="micro">
                                You can add the <code>isFullWidth</code> prop to make the table take up the width of its
                                parent. This is a common prop and now unique to the <code>Table</code> element.
                            </Text>

                            <CodeBlock source={sampleTableFullWidth} language="jsx" marginBottom="micro" />

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


                    <HRule kind="secondary" horizontalMargin="huge" />


                    {/*  =============================================================================================  */}
                    {/*  ALIGN TEXT  */}
                    {/*  =============================================================================================  */}
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h5" marginBottom="nano">Text alignment</Heading>

                            <Text marginBottom="micro">
                                There’s a <code>alignText</code> prop to align the text to the <code>left</code>, <code>right</code>, and <code>centre</code>/<code>center</code>.
                            </Text>

                            <CodeBlock source={sampleTableAlignText} language="jsx" marginBottom="micro" />

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


                    <HRule horizontalMargin="huge" />


                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    {/*  THEMING  */}
                    {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
                    <Element as="section" id="theming">
                        <Row horizontalPadding="huge" marginBottom="small">
                            <Portion>
                                <Heading as="h3" marginBottom="tiny">Theming</Heading>

                                <CodeBlock source={sampleTableTheme} language="css" />
                            </Portion>
                        </Row>
                    </Element>
                </Element>
            </article>
        </>
    );
};

export default TableDocs;
