import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule,
    Card,
    CodeBlock
} from "reactised-fictoan";

import { LayoutStyled } from "./Layout.styled";
import {
    sampleRow1,
    sampleRowAndPortion1,
    sampleRowAndPortion2,
    sampleRowAndPortion3,
    sampleCode2,
    sampleCode3a,
    sampleCode3b,
    sampleCode4a,
    sampleCode4b,
    sampleCode4c,
    sampleCode4d,
    sampleCode4e,
    sampleCode4f,
    sampleCode5a,
    sampleCode5b,
    sampleCode5c,
    sampleCode5d,
    sampleCode5e,
    sampleCode5f
} from "./CodeSamples";


export const Layout = () => {
    useEffect(() => {
        document.title = "Layout — Reactised FICTOAN";

        try {
            window.scroll({
                top : 0,
                left: 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <LayoutStyled>
            <Row sidePadding="large" marginTop="small" marginBottom="medium">
                <Portion>
                    <Heading as="h2" textColor="hue">Layout</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="basics">
                <Row sidePadding="large" marginBottom="none">
                    <Portion>
                        <Heading as="h4">The basics</Heading>

                        <Text>The basis of any interface is a well-defined column-setup. RF uses a hard-coded 24-column system to build upon.</Text>

                        <Text>RF has <code>Row</code> element as the fundamental building block of the UI. This <code>Row</code> is what constructs the column scaffolding for the rest of the elements.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="large" marginBottom="nano">
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
                                <Text className="text-centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>
                </Element>
            </Element>

            <HRule sideMargin="large" bgColor="sky-40" />

            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   ADDING CONTENT  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="add-content">
                <Row sidePadding="large" marginBottom="nano">
                    <Portion>
                        <Heading as="h4">Adding content</Heading>

                        <Text>Content is added with the <code>Portion</code> component within the <code>Row</code>. You need to specify the number of columns you want the <code>Portion</code> to occupy.</Text>

                        <Text>You can do this by adding a <code>desktopSpan</code> prop, and the number of columns as its value. So, if you say <code>desktopSpan="12"</code>, it means that the <code>Portion</code> will occupy twelve columns, or half the <code>Row</code>, like so—.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="large" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRowAndPortion1} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="tiny">
                    <Card className="screen-desktop" shape="rounded" shadow="hard">
                        <Element as="div" className="title-bar" bgColor="slate-20">
                            <Heading as="h4" textColor="red-80">●</Heading>
                            <Heading as="h4" textColor="amber-80">●</Heading>
                            <Heading as="h4" textColor="green-80">●</Heading>
                        </Element>

                        <Row className="demo-row" marginBottom="none">
                            <Portion desktopSpan="12" bgColor="red-40">
                                <Text size="small" isMono>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Portion desktopSpan="12"></Text>
                            </Portion>
                        </Row>

                        <Row bgColor="slate-10" marginBottom="none" isFullHeight>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text className="text-centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>
                </Element>

                <Row sidePadding="large" marginBottom="nano">
                    <Portion>
                        <Text>In the same way, you can add as many <code>Portion</code> elements inside the <code>Row</code>. If the sum of columns values exceeds <code>24</code>, they will wrap to the next line.</Text>
                    </Portion>
                </Row>

                <Row sidePadding="large" marginBottom="nano">
                    <Portion>
                        <CodeBlock source={sampleRowAndPortion3} language="jsx" />
                    </Portion>
                </Row>

                {/*  DEMONSTRATION  ======================================  */}
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginBottom="tiny">
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
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1" bgColor="red-20" paddingTop="micro">
                                <Text hideOnTabPT hideOnMobile className="text-centre">24</Text>
                            </Portion>
                        </Row>
                    </Card>
                </Element>




























                {/*  DEMONSTRATION  ======================================  */}
                <HRule sideMargin="large" marginTop="huge" bgColor="sky-40" />
                <Element as="div" paddingLeft="tiny" paddingRight="tiny" marginTop="huge">
                    <Row
                        bgColor="slate-10"
                        className="retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile"
                    >
                        <Portion desktopSpan="4" bgColor="red-20" className="padding-top-small">
                            <Text className="text-centre">4/24</Text>
                        </Portion>

                        <Portion desktopSpan="8" bgColor="red-20" className="padding-top-small">
                            <Text className="text-centre">8/24</Text>
                        </Portion>

                        <Portion desktopSpan="12" bgColor="red-20" className="padding-top-small">
                            <Text className="text-centre">12/24</Text>
                        </Portion>
                    </Row>
                </Element>

                <Row sidePadding="large">
                    <Portion>
                        <Text>
                            The <code>Portion</code> width classes can take any value from <code>1/24</code> to{" "}
                            <code>24/24</code>, and any fraction in-between. Some of these fraction classes can also
                            be named fractions in its most reduced form, such as <code>one-third</code> instead of{" "}
                            <code>8/24</code>, and <code>five-twelfth</code> instead of <code>10/24</code> and so
                            on. Here is the full list&mdash;
                        </Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <table className="ff-table full-width bordered-all padding-tiny">
                            <thead>
                                <tr>
                                    <td>
                                        <strong>Fraction</strong>
                                    </td>
                                    <td>
                                        <strong>Name</strong>
                                    </td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>width-1/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-2/24</td>
                                    <td>one-twelfth</td>
                                </tr>

                                <tr>
                                    <td>width-3/24</td>
                                    <td>one-eighth</td>
                                </tr>

                                <tr>
                                    <td>width-4/24</td>
                                    <td>one-sixth</td>
                                </tr>

                                <tr>
                                    <td>width-5/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-6/24</td>
                                    <td>one-fourth</td>
                                </tr>

                                <tr>
                                    <td>width-7/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-8/24</td>
                                    <td>one-third</td>
                                </tr>

                                <tr>
                                    <td>width-9/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-10/24</td>
                                    <td>five-twelfth</td>
                                </tr>

                                <tr>
                                    <td>width-11/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-12/24</td>
                                    <td>half</td>
                                </tr>

                                <tr>
                                    <td>width-13/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-14/24</td>
                                    <td>seven-twelfth</td>
                                </tr>

                                <tr>
                                    <td>width-15/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-16/24</td>
                                    <td>two-third</td>
                                </tr>

                                <tr>
                                    <td>width-17/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-18/24</td>
                                    <td>three-fourth</td>
                                </tr>

                                <tr>
                                    <td>width-19/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-20/24</td>
                                    <td>five-sixth</td>
                                </tr>

                                <tr>
                                    <td>width-21/24</td>
                                    <td>seven-eighth</td>
                                </tr>

                                <tr>
                                    <td>width-22/24</td>
                                    <td>eleven-twelfth</td>
                                </tr>

                                <tr>
                                    <td>width-23/24</td>
                                    <td>&mdash;</td>
                                </tr>

                                <tr>
                                    <td>width-24/24</td>
                                    <td>whole</td>
                                </tr>
                            </tbody>
                        </table>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Text>You can use any of these as classes, like so&mdash;</Text>
                        <CodeBlock source={sampleCode2} language="jsx" />
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="large" bgColor="sky-40" />

            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   RESPONSIVENESS  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <section id="responsiveness">
                <Row sidePadding="large">
                    <Portion>
                        <h4>Behaviour across devices</h4>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <h5>Responsiveness</h5>
                    </Portion>

                    <Portion>
                        <Text>
                            There are four breakpoints as listed below. Using these, you can control the behaviour
                            of a <code>Portion</code> component across devices. The default prop is{" "}
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
                        <CodeBlock source={sampleCode3a} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row bgColor="slate-20">
                        <Portion
                            desktopSpan="one-sixth"
                            tabLSSpan="one-third"
                            tabPTSpan="half"
                            mobileSpan="whole"
                            className="bg-sky padding-all-fixed-3x"
                        >
                            <Text className="text-centre no-margin-bottom show-only-on-desktop">
                                One-sixth on desktop
                            </Text>
                            <Text className="text-centre no-margin-bottom show-only-on-tab-ls">
                                One-third on tab landscape
                            </Text>
                            <Text className="text-centre no-margin-bottom show-only-on-tab-pt">Half on tab portrait</Text>
                            <Text className="text-centre no-margin-bottom show-only-on-mobile">Whole on mobile</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large">
                    <Portion>
                        <Text>
                            You can also turn off the responsiveness across these breakpoints by using the following
                            props.
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock source={sampleCode3b} language="jsx" />
                    </Portion>
                </Row>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row id="visibility" sidePadding="large">
                    <Portion>
                        <h5>Visibility across devices</h5>
                    </Portion>

                    <Portion>
                        <Text>
                            Using the same breakpoints you can also show or hide elements, using{" "}
                            <code>hideOnDesktop</code>, <code>showOnlyOnDesktop</code>, <code>hideOnTabLS</code>,{" "}
                            <code>showOnlyOnTabLS</code>, <code>hideOnTabPT</code>, <code>showOnlyOnTabPT</code>,{" "}
                            <code>hideOnMobile</code>, <code>showOnlyOnMobile</code>. You can use these on any
                            element.
                        </Text>
                    </Portion>
                </Row>
            </section>

            <HRule sideMargin="large" bgColor="sky-40" />

            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   CONTENT PADDING  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <section id="content-padding">
                <Row sidePadding="large">
                    <Portion>
                        <h4>Padding the content</h4>
                    </Portion>

                    <Portion>
                        <Text>
                            Control the width of your content using the <code>content-padding</code> classes.
                        </Text>
                    </Portion>
                </Row>

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4a} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row bgColor="slate-20" gutters="none">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Full width content</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4b} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row sidePadding="tiny" gutters="none" bgColor="slate-20">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Content</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4c} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row sidePadding="small" gutters="none" bgColor="slate-20">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Content</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4d} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row sidePadding="medium" gutters="none" bgColor="slate-20">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Content</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4e} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row sidePadding="large" gutters="none" bgColor="slate-20">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Content</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode4f} language="jsx" />
                    </Portion>
                </Row>

                <div className="side-padding-large">
                    <Row sidePadding="huge" gutters="none" bgColor="slate-20">
                        <Portion className="bg-sky whole padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">Content</Text>
                        </Portion>
                    </Row>
                </div>
            </section>

            <HRule sideMargin="large" bgColor="sky-40" />

            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*   GUTTER SIZING  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////  */}
            <section id="gutter-sizing">
                <Row sidePadding="large">
                    <Portion>
                        <h4>Gutter sizing</h4>
                    </Portion>

                    <Portion>
                        <Text>
                            The <code>Row</code> comes with a default 16px gutter. You can add sizing props to
                            control gutter width.
                        </Text>
                    </Portion>
                </Row>

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5a} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="none" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5b} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="tiny" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5c} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="small" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5d} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="medium" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5e} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="large" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>

                <HRule
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large" className="margin-bottom-fixed">
                    <Portion>
                        <CodeBlock source={sampleCode5f} language="jsx" />
                    </Portion>
                </Row>
                <div className="side-padding-large">
                    <Row gutters="huge" bgColor="slate-20">
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">1</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">2</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">3</Text>
                        </Portion>
                        <Portion desktopSpan="6/24" bgColor="sky" className="padding-all-fixed-3x">
                            <Text className="text-centre no-margin-bottom">4</Text>
                        </Portion>
                    </Row>
                </div>
            </section>
        </LayoutStyled>
    );
};
