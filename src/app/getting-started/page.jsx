"use client";

import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule, CodeBlock,
} from "fictoan-react";

import { snippetInstall } from "../../assets/code-samples/CodeSamples";


const GettingStarted = () => {
    useEffect(() => {
        document.title = "Getting started — Fictoan";
    }, []);

    return (
        <article>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h4" className="text-hue">Getting started</Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  FIRST STEPS  */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="first-steps">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h6">First steps</Heading>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="none">
                    <Portion>
                        <Text weight="700" size="large" marginBottom="nano">
                            Step 1 — Add Fictoan to a React project
                        </Text>
                        <Text marginBottom="micro">
                            To begin using Fictoan, you first need a React project up and
                            running. For that, you’d need to install a few things—
                        </Text>

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                <Row sidePadding="huge">
                    <Portion>
                        <Text weight="700" size="large" marginBottom="nano">Step 2 — Edit the default theme</Text>
                        <Text marginBottom="nano">
                            Fictoan comes with a extensive theme, which you can see <a
                            href="https://github.com/fictoan/fictoan-react/blob/master/src/styles/theme.ts"
                            target="_blank" rel="noreferrer">here</a>. It lets you control all aspects of the UI. They
                            all have default values, so go ahead and edit the ones that you want.</Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="primary" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMMON PATTERNS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="patterns">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h6">Common patterns</Heading>
                    </Portion>
                </Row>

                {/*   NOMENCLATURE  //////////////////////////////////////////////////////////////////////////////  */}
                <Row id="nomenclature" sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Text weight="700" size="large" marginBottom="nano">Nomenclature</Text>
                        <Text marginBottom="micro">
                            Naming things in Fictoan is all mostly straightforward and plain English. This is true for
                            elements, components, attributes, props and also their values.
                        </Text>

                        <Text marginBottom="micro">
                            For example, a <code>Card</code> component has props such
                            as <code>shape</code>, <code>shadow</code> and <code>padding</code>. Similarly,
                            a <code>Table</code> has <code>bordersFor</code>, <code>isStriped</code> and so on. You
                            don’t have to remember complex terminology, and Fictoan tries to be as intuitive as
                            possible.
                        </Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" marginTop="micro" marginBottom="micro" />

                {/*   ATTRIBUTE VALUES  //////////////////////////////////////////////////////////////////////////  */}
                <Row id="attributes" sidePadding="huge">
                    <Portion>
                        <Text weight="700" size="large" marginBottom="nano">Attribute values</Text>
                        <Text marginBottom="micro">
                            Keeping in line with the reduced terminology to remember, most elements and components have
                            the same list of values for their props.
                        </Text>

                        <Text marginBottom="micro">
                            Since a vast majority of UI design revolves around relationships and position between
                            elements, it makes sense to have a finite list of default values to manage these aspects.
                        </Text>

                        <Text marginBottom="micro">
                            The list of props on the left all take values from the right. Some props of certain elements
                            don’t accept <code>nano</code> and <code>micro</code>, as their values would be too small to
                            discern on the screen.
                        </Text>
                    </Portion>

                    <Portion>
                        <Row marginBottom="none" retainLayoutAlways>
                            <Portion desktopSpan="half">
                                <Text weight="600" marginBottom="none">Prop</Text>
                                <Text marginBottom="nano"><code>margin</code></Text>
                                <Text marginBottom="nano"><code>marginTop</code></Text>
                                <Text marginBottom="nano"><code>marginRight</code></Text>
                                <Text marginBottom="nano"><code>marginBottom</code></Text>
                                <Text marginBottom="nano"><code>marginLeft</code></Text>
                                <Text marginBottom="nano"><code>padding</code></Text>
                                <Text marginBottom="nano"><code>paddingTop</code></Text>
                                <Text marginBottom="nano"><code>paddingRight</code></Text>
                                <Text marginBottom="nano"><code>paddingBottom</code></Text>
                                <Text marginBottom="nano"><code>paddingLeft</code></Text>
                                <Text marginBottom="nano"><code>size</code></Text>
                                <Text marginBottom="nano"><code>spacing</code></Text>
                                <Text marginBottom="nano"><code>sidePadding</code></Text>
                                <Text marginBottom="nano"><code>sideMargin</code></Text>
                                <Text marginBottom="nano"><code>gutters</code></Text>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Text weight="600" marginBottom="none">Possible value</Text>
                                <Text marginBottom="nano"><code>none</code></Text>
                                <Text marginBottom="nano"><code>nano</code></Text>
                                <Text marginBottom="nano"><code>micro</code></Text>
                                <Text marginBottom="nano"><code>tiny</code></Text>
                                <Text marginBottom="nano"><code>small</code></Text>
                                <Text marginBottom="nano"><code>medium</code></Text>
                                <Text marginBottom="nano"><code>large</code></Text>
                                <Text marginBottom="nano"><code>huge</code></Text>
                            </Portion>
                        </Row>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Now, of these values, the <code>nano</code> and the <code>micro</code> are static, fixed
                            unit values&mdash;8px and 24px respectively. The rest are dynamic, usually using
                            the <code>vh</code> and <code>vw</code> units, and so change from screen to screen, so as to
                            offer a manageable system across various screen densities.
                        </Text>

                        <Text marginBottom="micro">
                            Another thing to keep in mind is that they are also contextual. For
                            example, <code>padding="small"</code> might mean different things to
                            a <code>Card</code> component and a <code>Table</code> component. While this seems
                            counter-intuitive, it takes into account the possible real-world use cases. It is unlikely
                            you’d need a <code>Table</code> cell with <code>4vh</code> of padding, right?
                        </Text>
                    </Portion>
                </Row>

            </Element>
        </article>
    );
};

export default GettingStarted;
