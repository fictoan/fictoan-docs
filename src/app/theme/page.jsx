"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Heading, HRule, Portion, Row, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { SearchableCodeBlock } from "./SearchableCodeBlock";

// STYLES ======================================================================
import "./page-theming.css";

// CODE SNIPPETS ===============================================================
import {
    sampleThemeProviderSetup,
    sampleHeaderSetup,
    sampleCSSSetup,
    sampleThemeGlobals,
    sampleFictoanTheme,
} from "./CodeSamples";


const ThemingDocs = () => {
    return (
        <article id="page-theming">
            {/* //////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Theming</Heading>
                    <Text size="large">
                        A comprehensive list of variables to change the look and feel of your app from a single
                        place.
                    </Text>
                </Portion>
            </Row>

            {/* GLOBALS ==================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Usage</Heading>
                    <Text marginBottom="micro">
                        Here’s a typical setup for the <code>ThemeProvider</code> and a child component that controls
                        the toggle.
                    </Text>

                    <CodeBlock source={sampleThemeProviderSetup} language="jsx" marginBottom="micro" />
                    <CodeBlock source={sampleHeaderSetup} language="jsx" marginBottom="micro" />
                    <CodeBlock source={sampleCSSSetup} language="css" marginBottom="micro" />

                    <Text marginBottom="micro">
                        Here, the Fictoan theme is first loaded as the default theme. You can also create your own theme,
                        with a class, and put in all your custom variables there. This will over-ride the default values.
                    </Text>

                    <Text>Make sure you import the theme file globally.</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="micro" />

            {/* GLOBALS ==================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="micro">Variables</Heading>

                    <Text size="large" weight="700" textColour="white" marginBottom="nano">Globals</Text>

                    <CodeBlock source={sampleThemeGlobals} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" verticalMargin="micro" />



            {/* BADGE ====================================================== */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" textColour="white" marginBottom="nano">Components</Text>

                    <SearchableCodeBlock source={sampleFictoanTheme} language="css" marginBottom="micro" />
                </Portion>
            </Row>
        </article>
    );
};

export default ThemingDocs;
