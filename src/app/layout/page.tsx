"use client";

import React from "react";

import { Card, Element, Heading, Divider, Portion, Row, Table, Tabs, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

import "./page-layout.css";

import {
    sampleContentPadding,
    sampleGutters,
    sampleNamedPortions,
    sampleResonsiveness,
    sampleGridRow,
    sampleRowAndPortion1,
    sampleRowAndPortion3,
    sampleRowAndPortion4,
    sampleTurnOffResponsiveness,
} from "./CodeSamples";

import RowGridDocs from "./content/RowGridDocs";
import RowFlexboxDocs from "@/app/layout/content/RowFlexboxDocs";

        const tabTwoContent = () => (
            <Text>Content for tab 2</Text>
        )
const LayoutDocs = () => {
    return (
        <>
            <head>
                <title>Layout — Fictoan documentation</title>
            </head>

            <article id="page-layout">
                <Row horizontalPadding="huge" marginTop="small" marginBottom="medium">
                    <Portion>
                        <Heading as="h2" textColour="hue">Layout</Heading>
                    </Portion>
                </Row>

                {/* //////////////////////////////////////////////////////////// */}
                {/*   BASICS  */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="basics">
                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h4" marginBottom="nano">The Row element</Heading>

                            <Text marginBottom="micro">
                                The Row is your basic building block for layouts. It supports both grid and flexbox,
                                using the <code>layout</code> prop.
                            </Text>
                        </Portion>
                    </Row>

                    <Tabs
                        tabs={[
                            {
                                key     : "tab1",
                                label   : "Grid",
                                content : <RowGridDocs />
                            },
                        ]}
                        align="center"
                    />

                    <Divider horizontalMargin="huge" kind="primary" />
                </Element>


                {/* //////////////////////////////////////////////////////////// */}
                {/*   ADDING CONTENT  */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="add-content">
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6" marginBottom="nano">Adding content</Heading>

                            <Text marginBottom="micro">
                                Content is added with the <code>Portion</code> component within the <code>Row</code>.
                                You need to specify the number of columns you want the <code>Portion</code> to occupy.
                            </Text>

                            <Text marginBottom="micro">
                                You can do this by adding a <code>desktopSpan</code> prop, and the number of columns as
                                its value. So, if you say <code>desktopSpan="12"</code>, it means that
                                the <code>Portion</code> will occupy twelve columns, or half the <code>Row</code>, like
                                so—.
                            </Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <CodeBlock source={sampleRowAndPortion1} language="jsx" />
                        </Portion>
                    </Row>

                    {/*  DEMONSTRATION  ======================================  */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>

                            <Row className="demo-row" marginBottom="none" retainLayoutAlways>
                                <Portion desktopSpan="half" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;Portion desktopSpan="12"&gt;
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add content here
                                        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Portion&gt;
                                    </Text>
                                </Portion>
                            </Row>

                            <Row bgColour="slate-10" marginBottom="none" isFullHeight retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">1</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">2</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">3</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">4</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">5</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">6</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">7</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">8</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">9</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">10</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">11</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">12</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">13</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">14</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">15</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">16</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">17</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">18</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">19</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">20</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">21</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">22</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">23</Text>
                                </Portion>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro">
                                    <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">24</Text>
                                </Portion>
                            </Row>
                        </Card>
                    </Element>

                    <Divider horizontalMargin="huge" kind="secondary" />


                    {/* MULTIPLE PORTIONS ////////////////////////////////////////////////////////////////////////////// */}
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6" marginBottom="nano">Multiple Portions</Heading>
                            <Text>In the same way, you can add as many <code>Portion</code> elements inside
                                the <code>Row</code>. If the sum of columns values exceeds <code>24</code>, they will
                                wrap to the next line.</Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <CodeBlock source={sampleRowAndPortion3} language="jsx" />
                        </Portion>
                    </Row>

                    {/*  DEMONSTRATION  ======================================  */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop screen-tall" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>

                            <Row className="demo-row" marginBottom="none" retainLayoutAlways>
                                <Portion desktopSpan="12" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="12"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="12"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="12" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="12"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="12"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="8" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="8" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="8" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="8"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="4" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="4"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="4"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="6" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="6"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="6"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="14" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="14"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="14"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="13" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="13"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="13"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="7" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="7"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="7"&gt;
                                    </Text>
                                </Portion>

                                <Portion desktopSpan="6" bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace" showOnlyOnDesktop
                                          showOnlyOnTabletLandscape>
                                        &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="6"&gt;
                                    </Text>
                                    <Text size="small" fontStyle="monospace" showOnlyOnTabletPortrait showOnlyOnMobile>
                                        &nbsp;&nbsp;desktopSpan="6"&gt;
                                    </Text>
                                </Portion>
                            </Row>

                            <Row bgColour="slate-10" marginBottom="none" isFullHeight retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>
                        </Card>
                    </Element>

                    <Divider horizontalMargin="huge" kind="secondary" />


                    {/* MULTIPLE ROWS ////////////////////////////////////////////////////////////////////////////////// */}
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6" marginBottom="nano">Multiple Rows</Heading>
                            <Text>While you can put infinite <code>Portion</code> elements inside a <code>Row</code>,
                                it’s
                                better to logically break it up according to your content.</Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <CodeBlock source={sampleRowAndPortion4} language="jsx" />
                        </Portion>
                    </Row>

                    {/*  DEMONSTRATION  ======================================  */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop free-size" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>


                            <Row className="demo-parent-row" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Row className="demo-row" style={{ "top" : "12px" }} retainLayoutAlways>
                                    <Portion desktopSpan="12" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="12"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="12"&gt;
                                        </Text>
                                    </Portion>

                                    <Portion desktopSpan="12" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="12"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="12"&gt;
                                        </Text>
                                    </Portion>
                                </Row>
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                            </Row>


                            <Row className="demo-parent-row" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Row className="demo-row" style={{ "top" : "12px" }} retainLayoutAlways>
                                    <Portion desktopSpan="8" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                    </Portion>

                                    <Portion desktopSpan="8" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                    </Portion>

                                    <Portion desktopSpan="8" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="8"&gt;
                                        </Text>
                                    </Portion>
                                </Row>

                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                            </Row>


                            <Row className="demo-parent-row" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Row className="demo-row" style={{ "top" : "12px" }} retainLayoutAlways>
                                    <Portion desktopSpan="5" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="5"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="5"&gt;
                                        </Text>
                                    </Portion>

                                    <Portion desktopSpan="13" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="13"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="13"&gt;
                                        </Text>
                                    </Portion>

                                    <Portion desktopSpan="6" bgColour="sky-light-20">
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnDesktop
                                              showOnlyOnTabletLandscape>
                                            &nbsp;&nbsp;&lt;Portion<br />&nbsp;&nbsp;desktopSpan="6"&gt;
                                        </Text>
                                        <Text size="tiny" fontStyle="monospace" showOnlyOnTabletPortrait
                                              showOnlyOnMobile>
                                            &nbsp;&nbsp;desktopSpan="6"&gt;
                                        </Text>
                                    </Portion>
                                </Row>
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" />
                            </Row>


                        </Card>
                    </Element>

                    <Divider horizontalMargin="huge" kind="secondary" />


                    {/* NAMING PORTIONS //////////////////////////////////////////////////////////////////////////////// */}
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6" marginBottom="nano">Naming Portions</Heading>
                            <Text>The <code>desktopSpan</code> attribute takes any whole number
                                from <code>1</code> to <code>24</code>. You can also use the names of the fractions to
                                set
                                this value, like so&mdash;</Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion desktopSpan="half">
                            <CodeBlock source={sampleNamedPortions} language="jsx" />
                        </Portion>

                        <Portion desktopSpan="half">
                            <Table isFullWidth bordersFor="both" padding="tiny">
                                <thead>
                                    <tr>
                                        <td>
                                            <strong>Columns</strong>
                                        </td>
                                        <td>
                                            <strong>Name</strong>
                                        </td>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>2</td>
                                        <td>one-twelfth</td>
                                    </tr>

                                    <tr>
                                        <td>3</td>
                                        <td>one-eighth</td>
                                    </tr>

                                    <tr>
                                        <td>4</td>
                                        <td>one-sixth</td>
                                    </tr>

                                    <tr>
                                        <td>5</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>6</td>
                                        <td>one-fourth</td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>8</td>
                                        <td>one-third</td>
                                    </tr>

                                    <tr>
                                        <td>9</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>10</td>
                                        <td>five-twelfth</td>
                                    </tr>

                                    <tr>
                                        <td>11</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>12</td>
                                        <td>half</td>
                                    </tr>

                                    <tr>
                                        <td>13</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>14</td>
                                        <td>seven-twelfth</td>
                                    </tr>

                                    <tr>
                                        <td>15</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>16</td>
                                        <td>two-third</td>
                                    </tr>

                                    <tr>
                                        <td>17</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>18</td>
                                        <td>three-fourth</td>
                                    </tr>

                                    <tr>
                                        <td>19</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>20</td>
                                        <td>five-sixth</td>
                                    </tr>

                                    <tr>
                                        <td>21</td>
                                        <td>seven-eighth</td>
                                    </tr>

                                    <tr>
                                        <td>22</td>
                                        <td>eleven-twelfth</td>
                                    </tr>

                                    <tr>
                                        <td>23</td>
                                        <td>&mdash;</td>
                                    </tr>

                                    <tr>
                                        <td>24</td>
                                        <td>whole</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Portion>
                    </Row>

                    <Divider horizontalMargin="huge" kind="primary" />
                </Element>


                {/* //////////////////////////////////////////////////////////// */}
                {/*  RESPONSIVENESS */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="responsiveness">
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6" marginBottom="nano">Responsive behaviour</Heading>
                            <Text marginBottom="micro">
                                There are four breakpoints as listed below. Using these, you can control the behaviour
                                of a <code>Portion</code> element across devices. The default prop is{" "}
                                <code>desktopSpan</code>, but you can add three
                                more—<code>tabletLandscapeSpan</code>,{" "}
                                <code>tabletPortraitSpan</code> and <code>mobileSpan</code>.
                            </Text>
                        </Portion>

                        <Portion desktopSpan="half" tabletLandscapeSpan="half" tabletPortraitSpan="half">
                            <Text className="weight-600 no-margin-bottom">Mobile</Text>
                            <Text>Less than 600px wide</Text>
                            <code>mobileSpan</code>
                        </Portion>

                        <Portion desktopSpan="half" tabletLandscapeSpan="half" tabletPortraitSpan="half">
                            <Text className="weight-600 no-margin-bottom">Tab portrait</Text>
                            <Text>601px to 900px</Text>
                            <code>tabletPortraitSpan</code>
                        </Portion>

                        <Portion desktopSpan="half" tabletLandscapeSpan="half" tabletPortraitSpan="half">
                            <Text className="weight-600 no-margin-bottom">Tab landscape</Text>
                            <Text>901px to 1200px</Text>
                            <code>tabletLandscapeSpan</code>
                        </Portion>

                        <Portion desktopSpan="half" tabletLandscapeSpan="half" tabletPortraitSpan="half">
                            <Text className="weight-600 no-margin-bottom">Desktop</Text>
                            <Text>1201px and above</Text>
                            <code>desktopSpan</code>
                        </Portion>

                        <Portion>
                            <CodeBlock source={sampleResonsiveness} language="jsx" />
                        </Portion>
                    </Row>

                    {/* DEMONSTRATION ========================================== */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop screen-short" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>

                            <Row className="demo-row" style={{ "top" : "80px" }} marginBottom="none">
                                <Portion desktopSpan="one-sixth" tabletLandscapeSpan="8" tabletPortraitSpan="half"
                                         mobileSpan="two-third"
                                         bgColour="sky-light-20">
                                    <Text size="small" fontStyle="monospace"
                                          showOnlyOnDesktop>&nbsp;&nbsp;&nbsp;&nbsp;one-sixth</Text>
                                    <Text size="small" fontStyle="monospace"
                                          showOnlyOnTabletLandscape>&nbsp;&nbsp;&nbsp;&nbsp;one-third</Text>
                                    <Text size="small" fontStyle="monospace"
                                          showOnlyOnTabletPortrait>&nbsp;&nbsp;&nbsp;&nbsp;half</Text>
                                    <Text size="small" fontStyle="monospace"
                                          showOnlyOnMobile>&nbsp;&nbsp;&nbsp;&nbsp;two-third</Text>
                                </Portion>
                            </Row>

                            <Row bgColour="slate-10" marginBottom="none" isFullHeight retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>
                        </Card>
                    </Element>

                    <Divider horizontalMargin="huge" kind="secondary" />

                    <Row horizontalPadding="huge">
                        <Portion>
                            <Heading as="h6">Turn off responsiveness</Heading>
                            <Text>You can also turn off the responsiveness across these breakpoints by using the
                                following
                                props.</Text>
                        </Portion>

                        <Portion>
                            <CodeBlock source={sampleTurnOffResponsiveness} language="jsx" />
                        </Portion>
                    </Row>

                    <Divider horizontalMargin="huge" kind="primary" />
                </Element>


                {/* //////////////////////////////////////////////////////////// */}
                {/*   CONTENT PADDING  */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="content-padding">
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6">Padding your content</Heading>
                            <Text>Control the width of your content using the <code>horizontalPadding</code> prop for
                                the <code>Row</code>.</Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <CodeBlock source={sampleContentPadding} language="jsx" />
                        </Portion>
                    </Row>

                    {/*  DEMONSTRATION  ======================================  */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop screen-extra-tall" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>

                            <Text>&nbsp;&nbsp;&nbsp;&nbsp;No padding</Text>
                            <Row bgColour="slate-10" style={{ "height" : "80px" }} retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="nano"</Element>
                            <Row horizontalPadding="nano" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="micro"</Element>
                            <Row horizontalPadding="micro" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="tiny"</Element>
                            <Row horizontalPadding="tiny" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="small"</Element>
                            <Row horizontalPadding="small" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="medium"</Element>
                            <Row horizontalPadding="medium" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="large"</Element>
                            <Row horizontalPadding="huge" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginLeft="tiny" marginBottom="nano">horizontalPadding="huge"</Element>
                            <Row horizontalPadding="huge" bgColour="slate-10" style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>
                        </Card>
                    </Element>


                    <Divider horizontalMargin="huge" kind="primary" />
                </Element>


                {/* //////////////////////////////////////////////////////////// */}
                {/*   CONTENT PADDING  */}
                {/* //////////////////////////////////////////////////////////// */}
                <Element as="section" id="gutter-sizing">
                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <Heading as="h6">Gutters for the Row</Heading>
                            <Text>You can also change the gaps between the columns using the <code>gutters</code> props
                                for
                                the <code>Row</code>.</Text>
                        </Portion>
                    </Row>

                    <Row horizontalPadding="huge" marginBottom="nano">
                        <Portion>
                            <CodeBlock source={sampleGutters} language="jsx" />
                        </Portion>
                    </Row>

                    {/*  DEMONSTRATION  ======================================  */}
                    <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                        <Card className="screen-desktop screen-extra-tall" shape="rounded" shadow="hard">
                            <Element as="div" className="title-bar" bgColour="slate-light-40">
                                <Text textColour="red">●</Text>
                                <Text textColour="amber">●</Text>
                                <Text textColour="green">●</Text>
                            </Element>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="none"</Element>
                            <Row horizontalPadding="medium" gutters="none" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="nano"</Element>
                            <Row horizontalPadding="medium" gutters="nano" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="micro"</Element>
                            <Row horizontalPadding="medium" gutters="micro" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="tiny"</Element>
                            <Row horizontalPadding="medium" gutters="tiny" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="small"</Element>
                            <Row horizontalPadding="medium" gutters="small" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="medium"</Element>
                            <Row horizontalPadding="medium" gutters="medium" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="large"</Element>
                            <Row horizontalPadding="medium" gutters="large" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>

                            <Element as="code" marginBottom="nano" horizontallyCentreThis>gutters="huge"</Element>
                            <Row horizontalPadding="medium" gutters="huge" bgColour="slate-10"
                                 style={{ "height" : "80px" }}
                                 retainLayoutAlways>
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                                <Portion desktopSpan="1" bgColour="sky-light-60" paddingTop="micro" />
                            </Row>
                        </Card>
                    </Element>
                </Element>
            </article>
        </>
    );
};

export default LayoutDocs;
