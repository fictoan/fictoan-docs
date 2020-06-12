/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { Row, Text,  Portion, HRule, Element, Heading, CodeBlock } from "reactised-fictoan";

// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
// {/*   SAMPLE CODES  */}
// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
//  Code sample 01 ========================================================================================
const sampleCode1 = `
<Row>
    <Portion desktopSpan="4/24">
        Some content
    </Portion>

    <Portion desktopSpan="8/24">
        Some content
    </Portion>

    <Portion desktopSpan="12/24">
        Some content
    </Portion>
</Row>
`;

//  Code sample 02 ========================================================================================
const sampleCode2 = `
<Row>
    <Portion desktopSpan="2" />

    <Portion desktopSpan="five-sixth" />

    <Portion desktopSpan="9" />

    <Portion desktopSpan="eleven-twelfth" />
</Row>
`;

//  Code sample 03a ========================================================================================
const sampleCode3a = `
<Row>
    <Portion desktopSpan="one-sixth" tabLSSpan="8/24" tabPTSpan="half" mobileSpan="24/24" />
</Row>
`;

//  Code sample 03b ========================================================================================
const sampleCode3b = `
// Portions don’t change on tablet landscape
<Row retainLayoutOnTabLS />

// Portions don’t change on tablet portrait
<Row retainLayoutOnTabPT />

// Portions don’t change on mobile
<Row retainLayoutOnMobile />

// Portions don’t change widths across devices
<Row retainLayoutAlways />
`;

// =========================================================================================================
// SIDE PADDING  ===========================================================================================
//  Code sample 04a ========================================================================================
const sampleCode4a = `
// Default behaviour
<Row />
`;

//  Code sample 04b ========================================================================================
const sampleCode4b = `
<Row sidePadding="tiny" />
`;

//  Code sample 04c ========================================================================================
const sampleCode4c = `
<Row sidePadding="small" />
`;

//  Code sample 04d ========================================================================================
const sampleCode4d = `
<Row sidePadding="medium" />
`;

//  Code sample 04e ========================================================================================
const sampleCode4e = `
<Row sidePadding="large" />
`;

//  Code sample 04f ========================================================================================
const sampleCode4f = `
<Row sidePadding="huge" />
`;

// =========================================================================================================
// GUTTER SIZING  ==========================================================================================
//  Code sample 05a ========================================================================================
const sampleCode5a = `
<Row gutters="none" />
`;

//  Code sample 05b ========================================================================================
const sampleCode5b = `
<Row gutters="tiny" />
`;

//  Code sample 05c ========================================================================================
const sampleCode5c = `
<Row gutters="small" />
`;

//  Code sample 05d ========================================================================================
const sampleCode5d = `
//  This is default
<Row gutters="medium" />
`;

//  Code sample 05e ========================================================================================
const sampleCode5e = `
<Row gutters="large" />
`;

//  Code sample 05f ========================================================================================
const sampleCode5f = `
<Row gutters="huge" />
`;

// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
// {/*   CONTENT  */}
// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
class Layout extends React.PureComponent {
    componentDidMount() {
        document.title = "Layout — Reactised-FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Element as="article" id="page-layout">
                <Row sidePadding="large" marginTop="small" marginBottom="small">
                    <Portion>
                        <Heading as="h2" textColor="hue">
                            Layout
                        </Heading>
                    </Portion>
                </Row>

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   SETTING IT UP  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                <section id="setup">
                    <Row sidePadding="large" marginTop="medium">
                        <Portion>
                            <h4>Setting it up</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="large">
                        <Portion>
                            <Text>
                                RF uses <code>Row</code> and <code>Portion</code> components as the basic building
                                blocks of displaying content. The <code>Row</code> is a simple parent block that is used
                                to separate discrete sections of content.
                            </Text>

                            <Text>
                                The <code>Row</code> has a 24-column CSS grid setup. Here is a sample <code>Row</code>{" "}
                                in grey, with the columns in blue. The gutters have a default width of 16px.
                            </Text>
                        </Portion>
                    </Row>

                    <div className="side-padding-tiny">
                        <Row bgColor="slate-20">
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">1</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">2</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">3</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">4</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">5</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">6</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">7</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">8</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">9</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">10</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">11</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">12</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">13</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">14</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">15</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">16</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">17</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">18</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">19</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">20</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">21</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">22</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">23</Text>
                            </Portion>
                            <Portion desktopSpan="1/24" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">24</Text>
                            </Portion>
                        </Row>
                    </div>
                </section>

                <HRule sideMargin="large" thick bgColor="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   ADDING CONTENT  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                <section id="add-content">
                    <Row sidePadding="large">
                        <Portion>
                            <h4>Adding content</h4>
                        </Portion>
                    </Row>

                    <Row sidePadding="large">
                        <Portion>
                            <Text>
                                Content is added with the <code>Portion</code> component within the <code>Row</code>.
                                They need to have specified widths so that they can occupy the column ranges on the{" "}
                                <code>Row</code> parent. This is done by adding custom <code>props</code>. For example—
                            </Text>

                            <CodeBlock source={sampleCode1} language="jsx" />
                        </Portion>
                    </Row>

                    <div className="side-padding-tiny">
                        <Row
                            bgColor="slate-20"
                            className="retain-layout-on-tab-ls retain-layout-on-tab-pt retain-layout-on-mobile"
                        >
                            <Portion desktopSpan="4" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">4/24</Text>
                            </Portion>

                            <Portion desktopSpan="8" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">8/24</Text>
                            </Portion>

                            <Portion desktopSpan="12" bgColor="sky" className="padding-top-small">
                                <Text className="text-centre">12/24</Text>
                            </Portion>
                        </Row>
                    </div>

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
                </section>

                <HRule sideMargin="large" thick bgColor="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   RESPONSIVENESS  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
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
                        slim
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

                <HRule sideMargin="large" thick bgColor="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   CONTENT PADDING  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
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

                <HRule sideMargin="large" thick bgColor="sky-20" />

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   GUTTER SIZING  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
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
            </Element>
        );
    }
}

export default Layout;
