import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule
} from "fictoan-react";

import { snippetInstall } from "../../assets/code-samples/CodeSamples";
import { GettingStartedStyled } from "./GettingStarted.styled";


export const GettingStarted = () => {
    useEffect(() => {
        document.title = "Getting started — FICTOAN";
    }, []);

    return (
        <GettingStartedStyled>
            <Row sidePadding="huge" className="margin-top-small margin-bottom-small">
                <Portion>
                    <Heading as="h2" className="text-hue">Getting started</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  HEADINGS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="first-steps">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4">First steps</Heading>
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginBottom="none">
                    <Portion>
                        <Heading as="h5">Step 1 — Add FR to a React project</Heading>
                        <Text marginBottom="nano">To begin using FICTOAN, you first need a React project up and running. For that, you’d need to install a few things—</Text>

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" marginTop="micro" marginBottom="micro" bgColor="sky-20" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5">Step 2 — Edit the default theme</Heading>
                        <Text marginBottom="nano">FICTOAN comes with a extensive theme that lets you control all aspects of the UI. They all have default values, so go ahead and edit the ones that you want.</Text>

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" bgColor="sky-80" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMMON PATTERNS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="patterns">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Common patterns</Heading>
                    </Portion>
                </Row>

                {/*   NOMENCLATURE  //////////////////////////////////////////////////////////////////////////////  */}
                <Row id="nomenclature" sidePadding="huge" marginBottom="nano">
                    <Portion>
                        <Heading as="h5">Nomenclature</Heading>
                        <Text>Naming things in FICTOAN is all mostly straightforward and plain English. This is true for elements, components, attributes, props and also their values.</Text>

                        <Text>For example, a <code>Card</code> component has props such as <code>shape</code>, <code>shadow</code> and <code>padding</code>. Similarly, a <code>Table</code> has <code>bordersFor</code>, <code>isStriped</code> and so on. You don’t have to remember complex terminology, and FICTOAN tries to be as intuitive as possible.</Text>
                    </Portion>
                </Row>

                <HRule sideMargin="huge" marginTop="micro" marginBottom="micro" bgColor="sky-20" />

                {/*   ATTRIBUTE VALUES  //////////////////////////////////////////////////////////////////////////  */}
                <Row id="attributes" sidePadding="huge">
                    <Portion>
                        <Heading as="h5">Attribute values</Heading>
                        <Text>Keeping in line with the reduced terminology to remember, most elements and components have the same list of values for their props.</Text>

                        <Text>Since a vast majority of UI design revolves around relationships and position between elements, it makes sense to have a finite list of default values to manage these aspects.</Text>

                        <Text>The list of props on the left all take values from the right. Some props of certain elements don’t accept <code>nano</code> and <code>micro</code>, as their values would be too small to discern on the screen.</Text>
                    </Portion>

                    <Portion>
                        <Row marginBottom="none" retainLayoutAlways>
                            <Portion desktopSpan="half">
                                <Text weight="600" marginBottom="none">Prop</Text>
                                <Text><code>margin</code></Text>
                                <Text><code>marginTop</code></Text>
                                <Text><code>marginRight</code></Text>
                                <Text><code>marginBottom</code></Text>
                                <Text><code>marginLeft</code></Text>
                                <Text><code>padding</code></Text>
                                <Text><code>paddingTop</code></Text>
                                <Text><code>paddingRight</code></Text>
                                <Text><code>paddingBottom</code></Text>
                                <Text><code>paddingLeft</code></Text>
                                <Text><code>size</code></Text>
                                <Text><code>spacing</code></Text>
                                <Text><code>sidePadding</code></Text>
                                <Text><code>sideMargin</code></Text>
                                <Text><code>gutters</code></Text>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Text weight="600" marginBottom="none">Possible value</Text>
                                <Text><code>none</code></Text>
                                <Text><code>nano</code></Text>
                                <Text><code>micro</code></Text>
                                <Text><code>tiny</code></Text>
                                <Text><code>small</code></Text>
                                <Text><code>medium</code></Text>
                                <Text><code>large</code></Text>
                                <Text><code>huge</code></Text>
                            </Portion>
                        </Row>
                    </Portion>

                    <Portion>
                        <Text>Now, of these values, the <code>nano</code> and the <code>micro</code> are static, fixed unit values&mdash;8px and 24px respectively. The rest are dynamic, usually using the <code>vh</code> and <code>vw</code> units, and so change from screen to screen, so as to offer a manageable system across various screen densities.</Text>

                        <Text>Another thing to keep in mind is that they are also contextual. For example, <code>padding="small"</code> might mean different things to a <code>Card</code> component and a <code>Table</code> component. While this seems counter-intuitive, it takes into account the possible real-world use cases. It is unlikely you’d need a <code>Table</code> cell with <code>4vh</code> of padding, right?</Text>
                    </Portion>
                </Row>

            </Element>
        </GettingStartedStyled>
    );
}
