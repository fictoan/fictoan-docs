import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { CodeBlock, Element, Heading, HRule, Portion, ProgressBar, Row, Table, Text } from "fictoan-react";

import { ProgressbarDocsStyled } from "./ProgressBar.styled";
import {
    sampleProgressBar,
    sampleProgressBarHeight, sampleProgressBarLabel,
    sampleProgressBarMaxAndValue1,
    sampleProgressBarMaxAndValue2,
    sampleProgressBarMaxAndValue3,
    sampleProgressBarMaxAndValue4,
    sampleProgressBarMaxAndValue5,
    sampleProgressBarShape,
    sampleProgressBarTheming
} from "./CodeSamples";

export const ProgressbarDocs = () => {
    useEffect(() => {
        document.title = "Progress bar — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <ProgressbarDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Progress bar</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth>
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
                                    <code>max</code>
                                </td>

                                <td>
                                    Maximum value to reach 100% fill
                                </td>

                                <td>
                                    Scalar integer
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>value</code>
                                </td>

                                <td>
                                    Current value of the fill
                                </td>

                                <td>
                                    Scalar integer
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>unit</code>
                                </td>

                                <td>
                                    Suffix for the <code>value</code>
                                </td>

                                <td>
                                    string
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>shape</code>
                                </td>

                                <td>
                                    Corner radius of the progress bar and the fill
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
                                    <code>height</code>
                                </td>

                                <td>
                                    Height of the progress element.
                                </td>

                                <td>
                                    Any CSS unit value
                                </td>

                                <td>
                                    1em
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>barBg</code>
                                </td>

                                <td>
                                    Background colour of the progress element.
                                </td>

                                <td>
                                    Any <code>defaultColour</code> value.
                                </td>

                                <td>
                                    <code>defaultColours.slate20</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>barFill</code>
                                </td>

                                <td>
                                    Fill colour of the progress element.
                                </td>

                                <td>
                                    Any <code>defaultColour</code> value.
                                </td>

                                <td>
                                    <code>defaultColours.slate20</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT CHECKBOX */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default progress bar</Heading>

                        <Text marginBottom="micro">
                            The <code>ProgressBar</code> is a modified default <code>progress</code> element but with
                            super powers.
                        </Text>

                        <CodeBlock source={sampleProgressBar} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            Obviously, we don’t want this indeterminate shiz (or do you?). This varies from browser to
                            browser, based on the UA stylesheet. Let’s jazz this up with custom props.
                        </Text>

                        <ProgressBar />
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  Props  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  HEIGHT  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Max and value</Heading>

                        <Text marginBottom="micro">
                            The <code>max</code> and the <code>value</code> work together to make the progress bar look
                            and behave like a progress bar.
                        </Text>

                        <CodeBlock source={sampleProgressBarMaxAndValue1} language="jsx" marginBottom="micro" />
                        <ProgressBar max="100" value="40" marginBottom="small" />

                        <CodeBlock source={sampleProgressBarMaxAndValue2} language="jsx" marginBottom="micro" />
                        <ProgressBar max="10" value="8" marginBottom="small" />

                        <CodeBlock source={sampleProgressBarMaxAndValue3} language="jsx" marginBottom="micro" />
                        <ProgressBar max="19874" value="13027" marginBottom="small" />

                        <CodeBlock source={sampleProgressBarMaxAndValue4} language="jsx" marginBottom="micro" />
                        <ProgressBar max="1" value="0.36" marginBottom="small" />

                        <CodeBlock source={sampleProgressBarMaxAndValue5} language="jsx" marginBottom="micro" />
                        <ProgressBar max="100" value="200" />

                        <Text marginTop="micro">
                            As you can see, just feed the props any unit-less value, and you’re golden. It also
                            gracefully handles scenarios where the <code>value</code> exceeds
                            the <code>max</code> amount.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  LABEL  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Labels and units</Heading>

                        <Text marginBottom="micro">
                            The <code>label</code> props lets you add a string to describe the progress bar. Once you
                            add the label, the <code>value</code> also shows up on the right hand side.
                        </Text>

                        <Text marginBottom="micro">
                            Here’s the cool part—just add a <code>unit</code> prop with the appropriate way to denote
                            progress units.
                        </Text>

                        <CodeBlock source={sampleProgressBarLabel} language="jsx" marginBottom="micro" />

                        <ProgressBar label="Loading..." max="100" value="40" unit="%" marginBottom="micro" />

                        <ProgressBar label="Downloading" max="100" value="12" unit="&nbsp;files done" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  HEIGHT  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Height</Heading>

                        <Text marginBottom="micro">
                            This one is pretty straight-forward—<code>height</code> takes a string value of any number
                            and CSS unit value, so go nuts.
                        </Text>

                        <CodeBlock source={sampleProgressBarHeight} language="jsx" marginBottom="micro" />

                        <ProgressBar max="100" value="40" height="80px" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  SHAPE  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Shape</Heading>

                        <Text marginBottom="micro">
                            The <code>shape</code> prop works in the same way it does for the <Link
                            to="/components/card">Card</Link> component, using the
                            same <code>rounded</code> and <code>curved</code> values.
                        </Text>

                        <CodeBlock source={sampleProgressBarShape} language="jsx" marginBottom="micro" />

                        <ProgressBar max="100" value="40" shape="rounded" marginBottom="micro" />

                        <ProgressBar max="100" value="40" shape="curved" />
                    </Portion>
                </Row>
            </Element>


            <HRule kind="secondary" sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <CodeBlock source={sampleProgressBarTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </ProgressbarDocsStyled>
    );
}
