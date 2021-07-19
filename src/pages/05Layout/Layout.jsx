//  External deps
import React, { useEffect } from "react";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule,
    Card,
    CodeBlock,
    Table
} from "fictoan-react";

//  Local components
import { LayoutStyled } from "./Layout.styled";
import {
    sampleRow1,
    sampleRowAndPortion1,
    sampleRowAndPortion3,
    sampleRowAndPortion4,
    sampleNamedPortions,
    sampleResonsiveness,
    sampleTurnOffResponsiveness,
    sampleContentPadding,
    sampleGutters
} from "./CodeSamples";

//  Local assets


export const Layout = () => {
    useEffect(() => {
        document.title = "05Layout — Fictoan";
    }, []);

    return (
        <LayoutStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="medium">
                <Portion>
                    <Heading as="h2" textColor="hue">Layout</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="basics">
                <Row sidePadding="huge" marginBottom="none">
                    <Portion>
                        <Heading as="h4">The basics</Heading>

                        <Text>The basis of any interface is a well-defined column-setup. RF uses a hard-coded 24-column system to build upon.</Text>

                        <Text>RF has <code>Row</code> element as the fundamental building block of the UI. This <code>Row</code> is what constructs the column scaffolding for the rest of the elements.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRow1} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny">
                    <Card className="screen-desktop" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>
                        <Row bgColor="slate-10" marginBottom="none" isFullHeight>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>
                </Element>

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   ADDING CONTENT  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="add-content">
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h4">Adding content</Heading>

                        <Text>Content is added with the <code>Portion</code> component within the <code>Row</code>. You need to specify the number of columns you want the <code>Portion</code> to occupy.</Text>

                        <Text>You can do this by adding a <code>desktopSpan</code> prop, and the number of columns as its value. So, if you say <code>desktopSpan="12"</code>, it means that the <code>Portion</code> will occupy twelve columns, or half the <code>Row</code>, like so—.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRowAndPortion1} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Row className="demo-row" marginBottom="none">
                            <Portion desktopSpan="12" bgColor="red-40">
                                <Text size="small" isMono>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;Portion desktopSpan="12"><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add content here<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/Portion>
                                </Text>
                            </Portion>
                        </Row>

                        <Row bgColor="slate-10" marginBottom="none" isFullHeight>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile size="small" align="centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>

                    <HRule sideMargin="huge" kind="secondary" />
                </Element>


                {/*   MULTIPLE PORTIONS  ////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h5">Multiple Portions</Heading>
                        <Text>In the same way, you can add as many <code>Portion</code> elements inside the <code>Row</code>. If the sum of columns values exceeds <code>24</code>, they will wrap to the next line.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRowAndPortion3} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop screen-tall" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Row className="demo-row" marginBottom="none">
                            <Portion desktopSpan="12" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="12"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="12"></Text>
                            </Portion>

                            <Portion desktopSpan="12" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="12"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="12"></Text>
                            </Portion>

                            <Portion desktopSpan="8" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"></Text>
                            </Portion>

                            <Portion desktopSpan="8" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"></Text>
                            </Portion>

                            <Portion desktopSpan="8" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"></Text>
                            </Portion>

                            <Portion desktopSpan="4" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="4"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="4"></Text>
                            </Portion>

                            <Portion desktopSpan="6" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="6"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="6"></Text>
                            </Portion>

                            <Portion desktopSpan="14" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="14"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="14"></Text>
                            </Portion>

                            <Portion desktopSpan="13" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="13"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="13"></Text>
                            </Portion>

                            <Portion desktopSpan="7" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="7"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="7"></Text>
                            </Portion>

                            <Portion desktopSpan="6" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="6"></Text>
                                <Text size="small" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="6"></Text>
                            </Portion>
                        </Row>

                        <Row bgColor="slate-10" marginBottom="none" isFullHeight>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>
                    </Card>
                </Element>

                <HRule sideMargin="huge" kind="secondary" />


                {/*   MULTIPLE ROWS  ////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h5">Multiple Rows</Heading>
                        <Text>While you can put infinite <code>Portion</code> elements inside a <code>Row</code>, it’s better to logically break it up according to your content.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRowAndPortion4} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop free-size" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>


                        <Row className="demo-parent-row" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Row className="demo-row" style={{"top": "12px"}} retainLayoutAlways>
                                <Portion desktopSpan="12" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="12"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="12"</Text>
                                </Portion>

                                <Portion desktopSpan="12" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="12"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="12"</Text>
                                </Portion>
                            </Row>
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                        </Row>


                        <Row className="demo-parent-row" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Row className="demo-row" style={{"top": "12px"}} retainLayoutAlways>
                                <Portion desktopSpan="8" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"</Text>
                                </Portion>

                                <Portion desktopSpan="8" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"</Text>
                                </Portion>

                                <Portion desktopSpan="8" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="8"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="8"</Text>
                                </Portion>
                            </Row>

                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                        </Row>



                        <Row className="demo-parent-row" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Row className="demo-row" style={{"top": "12px"}} retainLayoutAlways>
                                <Portion desktopSpan="5" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="5"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="5"</Text>
                                </Portion>

                                <Portion desktopSpan="13" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="13"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="13"</Text>
                                </Portion>

                                <Portion desktopSpan="6" bgColor="red-40">
                                    <Text size="tiny" isMono showOnlyOnDesktop showOnlyOnTabLS>&nbsp;&nbsp;&lt;Portion<br/>&nbsp;&nbsp;desktopSpan="6"></Text>
                                    <Text size="tiny" isMono showOnlyOnTabPT showOnlyOnMobile>&nbsp;&nbsp;desktopSpan="6"</Text>
                                </Portion>
                            </Row>
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                            <Portion desktopSpan="1" bgColor="red-20" />
                        </Row>


                    </Card>
                </Element>

                <HRule sideMargin="huge" kind="secondary" />


                {/*   NAMING PORTIONS  ///////////////////////////////////////////////////////////////////////////  */}
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h5">Naming Portions</Heading>
                        <Text>The <code>desktopSpan</code> attribute takes any whole number from <code>1</code> to <code>24</code>. You can also use the names of the fractions to set this value, like so&mdash;</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
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

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   RESPONSIVENESS  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="responsiveness">
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h4">Responsive behaviour</Heading>
                        <Text>
                            There are four breakpoints as listed below. Using these, you can control the behaviour
                            of a <code>Portion</code> element across devices. The default prop is{" "}
                            <code>desktopSpan</code>, but you can add three more—<code>tabLSSpan</code>,{" "}
                            <code>tabPTSpan</code> and <code>mobileSpan</code>.
                        </Text>
                    </Portion>

                    <Portion desktopSpan="one-fourth" tabLSSpan="half" tabPTSpan="half">
                        <Text className="weight-600 no-margin-bottom">Mobile</Text>
                        <Text>Less than 600px wide</Text>
                        <code>mobileSpan</code>
                    </Portion>

                    <Portion desktopSpan="one-fourth" tabLSSpan="half" tabPTSpan="half">
                        <Text className="weight-600 no-margin-bottom">Tab portrait</Text>
                        <Text>601px to 900px</Text>
                        <code>tabPTSpan</code>
                    </Portion>

                    <Portion desktopSpan="one-fourth" tabLSSpan="half" tabPTSpan="half">
                        <Text className="weight-600 no-margin-bottom">Tab landscape</Text>
                        <Text>901px to 1200px</Text>
                        <code>tabLSSpan</code>
                    </Portion>

                    <Portion desktopSpan="one-fourth" tabLSSpan="half" tabPTSpan="half">
                        <Text className="weight-600 no-margin-bottom">Desktop</Text>
                        <Text>1201px and above</Text>
                        <code>desktopSpan</code>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleResonsiveness} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop screen-short" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Row className="demo-row" style={{"top" : "80px"}} marginBottom="none">
                            <Portion desktopSpan="one-sixth" tabLSSpan="8" tabPTSpan="half" mobileSpan="two-third" bgColor="red-40">
                                <Text size="small" isMono showOnlyOnDesktop>&nbsp;&nbsp;&nbsp;&nbsp;one-sixth</Text>
                                <Text size="small" isMono showOnlyOnTabLS>&nbsp;&nbsp;&nbsp;&nbsp;one-third</Text>
                                <Text size="small" isMono showOnlyOnTabPT>&nbsp;&nbsp;&nbsp;&nbsp;half</Text>
                                <Text size="small" isMono showOnlyOnMobile>&nbsp;&nbsp;&nbsp;&nbsp;two-third</Text>
                            </Portion>
                        </Row>

                        <Row bgColor="slate-10" marginBottom="none" isFullHeight retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>
                    </Card>
                </Element>

                <HRule sideMargin="huge" kind="secondary" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5">Turn off responsiveness</Heading>
                        <Text>You can also turn off the responsiveness across these breakpoints by using the following props.</Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleTurnOffResponsiveness} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="primary" />
            </Element>



            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   CONTENT PADDING  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="content-padding">
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <h4>Padding your content</h4>
                        <Text>Control the width of your content using the <code>sidePadding</code> prop for the <code>Row</code>.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleContentPadding} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop screen-extra-tall" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Text>&nbsp;&nbsp;&nbsp;&nbsp;No padding</Text>
                        <Row bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="nano"</Element>
                        <Row sidePadding="nano" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="micro"</Element>
                        <Row sidePadding="micro" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="tiny"</Element>
                        <Row sidePadding="tiny" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="small"</Element>
                        <Row sidePadding="small" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="medium"</Element>
                        <Row sidePadding="medium" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="large"</Element>
                        <Row sidePadding="huge" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">sidePadding="huge"</Element>
                        <Row sidePadding="huge" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>
                    </Card>
                </Element>


                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   CONTENT PADDING  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="gutter-sizing">
                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <h4>Gutters for the Row</h4>
                        <Text>You can also change the gaps between the columns using the <code>gutters</code> props for the <code>Row</code>.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleGutters} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="small">
                    <Card className="screen-desktop screen-extra-tall" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="none"</Element>
                        <Row sidePadding="medium" gutters="none" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="nano"</Element>
                        <Row sidePadding="medium" gutters="nano" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="micro"</Element>
                        <Row sidePadding="medium" gutters="micro" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="tiny"</Element>
                        <Row sidePadding="medium" gutters="tiny" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="small"</Element>
                        <Row sidePadding="medium" gutters="small" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="medium"</Element>
                        <Row sidePadding="medium" gutters="medium" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="large"</Element>
                        <Row sidePadding="medium" gutters="large" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>

                        <Element as="code" marginLeft="tiny" marginBottom="nano">gutters="huge"</Element>
                        <Row sidePadding="medium" gutters="huge" bgColor="slate-10" style={{"height" : "80px"}} retainLayoutAlways>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro" />
                        </Row>
                    </Card>
                </Element>
            </Element>
        </LayoutStyled>
    );
}
