"use client";

import React from "react";

import { Card, Element, Heading, Portion, Row, Text, Article } from "fictoan-react";

import { CodeBlock } from "fictoan-react/components";
import { sampleGridRow } from "../CodeSamples";

const RowGridDocs = () => {
    return (
        <>
            <div>
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h6" weight="700">Grid</Heading>
                        <Text marginBottom="nano">
                            This is the default behaviour, and has a hard-coded 24-column setup.
                        </Text>

                        <CodeBlock source={sampleGridRow} language="jsx" marginBottom="micro" />

                        <Text marginBottom="nano">
                            This creates a row with 24 columns.
                        </Text>
                    </Portion>
                </Row>

                {/* DEMONSTRATION ====================================== */}
                <Element
                    as="div"
                    marginBottom="micro" paddingLeft="tiny" paddingRight="tiny"
                >

                    <Card className="screen-desktop" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColour="slate-light-80">
                            <Text textColour="red">●</Text>
                            <Text textColour="amber">●</Text>
                            <Text textColour="green">●</Text>
                        </Element>

                        <Row layout="grid" bgColour="slate-10" marginBottom="none" isFullHeight>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColour="sky-light-80" paddingTop="micro">
                                <Text hideOnTabletPortrait hideOnMobile size="small" align="centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>
                </Element>

                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Text marginBottom="nano">
                            Now you can add content to it using the <code>Portion</code> component.
                        </Text>
                    </Portion>
                </Row>
            </div>
        </>
    );
};

export default RowGridDocs;
