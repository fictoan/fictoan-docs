"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule,
    Drawer,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { InteractiveCardExample } from "./InteractiveCardExample";

// CODE SAMPLES ================================================================
import {
    snippetInstall,
    snippetPageSetupJSX,
    snippetPageSetupCSS,
    snippetStructure,
    snippetUsage,
} from "../../assets/code-samples/CodeSamples";


const GettingStarted = () => {
    useEffect(() => {
        document.title = "Getting started — Fictoan";
    }, []);

    const [isComplexSetupDrawerOpen, setIsComplexSetupDrawerOpen] = useState(false);

    return (
        <article id="page-getting-started">
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" className="text-hue">Getting started</Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* FIRST STEPS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="first-steps">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4">First steps</Heading>
                    </Portion>

                    <Portion>
                        <Text weight="700" size="large" textColour="white" marginBottom="nano">
                            Installation
                        </Text>

                        <Text marginBottom="micro">
                            If you’re starting a new project from scratch, consider using the <a
                            href="https://fictoan.io/boilerplate" target="_blank" rel="noreferrer">Fictoan
                            boilerplate &#8599;</a>. It’s a simple, bare-bones NextJS app with Fictoan already
                            installed, and a few basics already setup.
                        </Text>

                        <Text marginBottom="micro">
                            Or, you can install it in your existing project—
                        </Text>

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>

                    <Portion>
                        <HRule kind="tertiary" verticalMargin="micro" />
                    </Portion>

                    <Portion>
                        <Text weight="700" size="large" textColour="white" marginBottom="nano">
                            Boilerplate structure
                        </Text>

                        <Text marginBottom="micro">
                            The <a
                            href="https://fictoan.io/boilerplate" target="_blank" rel="noreferrer">Fictoan
                            boilerplate &#8599;</a> is a NextJS project and uses the latest <a
                            href="https://nextjs.org/docs/app" target="_blank" rel="noreferrer">App
                            router &#8599;</a> setup. The folder structure looks like this—
                        </Text>

                        <CodeBlock
                            id="boilerplate-structure"
                            source={snippetStructure} language="bash" marginBottom="micro"
                        />

                        <Text marginBottom="micro">
                            There are four main folders—<code>app</code>, <code>components</code>, <code>styles</code>,
                            and <code>assets</code>.
                        </Text>

                        <HRule kind="tertiary" verticalMargin="nano" />

                        {/* /app =========================================== */}
                        <Text weight="700" marginBottom="nano">/app</Text>

                        <Text marginBottom="nano">
                            <code>page.tsx</code> is where you can start adding your content.
                        </Text>

                        <Text marginBottom="micro">
                            <code>layout.tsx</code> is the main entry point for the app. We have
                            a <code>RootClientSideLayout</code> component which contains
                            the <code>ThemeProvider</code> and
                        </Text>

                        <Text marginBottom="micro">
                            Why such a roundabout setup, you ask? Click
                            <Element as="span" textColour="blue"
                                     onClick={() => setIsComplexSetupDrawerOpen(true)}> here </Element>
                            for a rant.
                        </Text>

                        <Drawer
                            position="right"
                            openWhen={isComplexSetupDrawerOpen}
                            closeWhen={() => setIsComplexSetupDrawerOpen(false)}
                            width="large"
                            showOverlay
                            closeOnClickOutside
                            padding="micro"
                        >
                            <Text>NextJS sucks</Text>
                        </Drawer>

                        <HRule kind="tertiary" verticalMargin="nano" />

                        {/* /app/About =========================================== */}
                        <Text weight="700" marginBottom="nano">/app/about</Text>

                        <Text marginBottom="nano">
                            This is a sample sub-page that you can use as a reference for creating your own pages.
                            Routing is based on the folder structure, so this one is available at <code>/about</code>.
                        </Text>

                        <CodeBlock
                            id="boilerplate-structure"
                            source={snippetPageSetupJSX} language="jsx" marginBottom="micro"
                        />

                        <CodeBlock
                            id="boilerplate-structure"
                            source={snippetPageSetupCSS} language="css" marginBottom="micro"
                        />

                        <Text marginBottom="micro">
                            We’re using a simple method to scope the CSS to the page—the <code>id</code> of the page is
                            used as the parent-most selector, and the CSS is written inside it. This way, the CSS is
                            scoped to the page, and doesn’t leak to other pages.
                        </Text>

                        <Text>
                            THe components also follow a similar structure.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* COMMON PATTERNS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="patterns">
                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4">Using components</Heading>
                    </Portion>
                </Row>

                {/* NOMENCLATURE =========================================== */}
                <Row
                    id="nomenclature"
                    layout="grid"
                    horizontalPadding="huge" marginBottom="nano"
                >
                    <Portion>
                        <Text weight="700" size="large" textColour="white" marginBottom="nano">Importing</Text>

                        <Text marginBottom="micro">
                            In your content files, just import the components you need at the top, and use them inside
                            the return function like so—
                        </Text>

                        <CodeBlock source={snippetUsage} language="javascript" marginBottom="micro" />

                        <Text marginBottom="micro">Now you’re ready to use Fictoan components in your project.</Text>
                    </Portion>

                    <Portion>
                        <Text weight="700" size="large" textColour="white" marginBottom="nano">Usage</Text>

                        <Text marginBottom="micro">
                            Fictoan components are just simple wrappers around HTML elements. You can extend their look
                            and feel by passing props to them.
                        </Text>

                        <Text marginBottom="micro">
                            For example, a <code>Card</code> component has props such
                            as <code>shape</code>, <code>shadow</code> and <code>padding</code>. Similarly,
                            a <code>Table</code> has <code>bordersFor</code>, <code>isStriped</code> and so on. You
                            don’t have to remember complex terminology, and Fictoan tries to be as intuitive as
                            possible.
                        </Text>

                        <Text marginBottom="micro">
                            Here’s an interactive example. Here we have a default <code>Card</code> component. It looks
                            like just a line because all you’re seeing is the border. Start by adding some padding to
                            it.
                        </Text>
                    </Portion>
                </Row>

                <InteractiveCardExample />

                <Row layout="grid" horizontalPadding="huge">
                    <Portion>
                        <Text marginBottom="micro">
                            It’s that easy. The markup is clean, easy to understand, and no complex nomenclature or
                            cryptic notation to remember.
                        </Text>

                        <Text>
                            The global default values for the background colour, border colour and width, and the
                            border-radius value are set via the theme file. You can change them by creating your own
                            theme file and over-riding the values. <Link href="/theming">Read more about theming
                            here</Link>.
                        </Text>
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

                {/*   ATTRIBUTE VALUES  //////////////////////////////////////////////////////////////////////////  */}
                <Row layout="grid" id="attributes" horizontalPadding="huge">
                    <Portion>
                        <Text weight="700" size="large" marginBotto textColour="white" m="nano">Attribute values</Text>

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
                        <Row layout="grid" marginBottom="none" retainLayoutAlways>
                            <Portion desktopSpan="half">
                                <Text weight="700" size="large" marginBottom="none">Prop</Text>

                                <HRule kind="tertiary" verticalMargin="nano" />

                                <Element as="div" marginBottom="micro">
                                    <Text marginBottom="nano"><code>margin</code></Text>
                                    <Text marginBottom="nano"><code>marginTop</code></Text>
                                    <Text marginBottom="nano"><code>marginRight</code></Text>
                                    <Text marginBottom="nano"><code>marginBottom</code></Text>
                                    <Text marginBottom="nano"><code>marginLeft</code></Text>
                                    <Text marginBottom="nano"><code>horizontalMargin</code></Text>
                                    <Text marginBottom="nano"><code>verticalMargin</code></Text>
                                </Element>

                                <Element as="div" marginBottom="micro">
                                    <Text marginBottom="nano"><code>padding</code></Text>
                                    <Text marginBottom="nano"><code>paddingTop</code></Text>
                                    <Text marginBottom="nano"><code>paddingRight</code></Text>
                                    <Text marginBottom="nano"><code>paddingBottom</code></Text>
                                    <Text marginBottom="nano"><code>paddingLeft</code></Text>
                                    <Text marginBottom="nano"><code>horizontalPadding</code></Text>
                                    <Text marginBottom="nano"><code>verticalPadding</code></Text>
                                </Element>

                                <Element as="div" marginBottom="micro">
                                    <Text marginBottom="nano"><code>size</code></Text>
                                    <Text marginBottom="nano"><code>gutters</code></Text>
                                </Element>
                            </Portion>

                            <Portion desktopSpan="half">
                                <Text weight="700" size="large">Possible value</Text>

                                <HRule kind="tertiary" verticalMargin="nano" />

                                <Text marginBottom="nano"><code>none</code> — 0</Text>
                                <Text marginBottom="nano"><code>nano</code> — 8px</Text>
                                <Text marginBottom="nano"><code>micro</code> — 24px</Text>
                                <Text marginBottom="nano"><code>tiny</code> — 2vmax</Text>
                                <Text marginBottom="nano"><code>small</code> — 4vmax</Text>
                                <Text marginBottom="nano"><code>medium</code> — 8vmax</Text>
                                <Text marginBottom="nano"><code>large</code> — 16vmax</Text>
                                <Text marginBottom="nano"><code>huge</code> — 24vmax</Text>
                            </Portion>
                        </Row>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Each of these values can be again changed in the theme file.
                        </Text>

                        <HRule kind="secondary" verticalMargin="micro" />

                        <Text weight="700" size="large" marginBotto textColour="white" m="nano">Contextual values</Text>

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
