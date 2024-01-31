"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Heading, HRule, Portion, ProgressBar, Row, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { PropsList } from "../../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./page-progress-bar.css";

// CODE SNIPPETS ===============================================================
import {
    sampleProgressBarMaxAndValue1,
    sampleProgressBarMaxAndValue2,
    sampleProgressBarMaxAndValue3,
    sampleProgressBarMaxAndValue4,
    sampleProgressBarMaxAndValue5,
    sampleProgressBarHeight,
    sampleProgressBarLabel,
    sampleProgressBarShape,
    sampleProgressBarTheming
} from "./CodeSamples";

// DATA ========================================================================
import { listOfProgressBarProps } from "./propsList";



const ProgressBarDocs = () => {
    return (
        <Article id="page-progress-bar">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Progress bar</Heading>
                </Portion>
            </Row>

            <PropsList propData={listOfProgressBarProps} />

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* USAGE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* DEFAULT ==================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Default</Heading>

                    <Text marginBottom="micro">
                        The <code>ProgressBar</code> is a modified default <code>progress</code> element but with
                        super powers.
                    </Text>

                    <CodeBlock language="jsx" marginBottom="micro">
                        &lt;ProgressBar /&gt;
                    </CodeBlock>

                    <ProgressBar marginBottom="micro" />

                    <Text marginBottom="micro">
                        This is a browser default <code>progress</code> element. It’s indeterminate—let’s fix that.
                    </Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* MAX AND VALUE ============================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Max and value</Heading>

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

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* LABELS ===================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Labels and units</Heading>

                    <Text marginBottom="micro">
                        The <code>label</code> props lets you add a string to describe the progress bar. Once you
                        add the label, the <code>value</code> also shows up on the right hand side.
                    </Text>

                    <Text marginBottom="micro">
                        Here’s the cool part—just add a <code>unit</code> prop with the appropriate way to denote
                        progress units.
                    </Text>

                    <CodeBlock source={sampleProgressBarLabel} language="jsx" marginBottom="micro" />

                    <ProgressBar label="Loading..." max="100" value="40" suffix="%" marginBottom="micro" />

                    <ProgressBar label="Downloading" max="100" value="12" suffix="&nbsp;files done" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* LABELS ===================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Height</Heading>

                    <Text marginBottom="micro">
                        This one is pretty straight-forward—<code>height</code> takes a string value of any number
                        and CSS unit value, so go nuts.
                    </Text>

                    <CodeBlock source={sampleProgressBarHeight} language="jsx" marginBottom="micro" />

                    <ProgressBar max="100" value="40" height="80px" />
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* SHAPE ====================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Shape</Heading>

                    <Text marginBottom="micro">
                        The <code>shape</code> prop works in the same way it does for the Card component, using the
                        same <code>rounded</code> and <code>curved</code> values.
                    </Text>

                    <CodeBlock source={sampleProgressBarShape} language="jsx" marginBottom="micro" />

                    <ProgressBar max="100" value="40" height="10px" shape="rounded" marginBottom="micro" />

                    <ProgressBar max="100" value="40" height="100px" shape="curved" />
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* THEME */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="tiny">Theme</Heading>

                    <CodeBlock source={sampleProgressBarTheming} language="css" />
                </Portion>
            </Row>
        </Article>
    );
};

export default ProgressBarDocs;
