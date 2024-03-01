"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6, Divider, Portion, Row, Text, Article } from "fictoan-react";
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
        <Article id="page-theming">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1 marginBottom="micro">Theming</Heading1>
                    <Text size="large">
                        A comprehensive list of variables to change the look and feel of your app from a single
                        place.
                    </Text>
                </Portion>
            </Row>

            {/* GLOBALS ==================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading4 marginBottom="nano">Usage</Heading4>
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

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* GLOBALS ==================================================== */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading4 marginBottom="micro">Variables</Heading4>

                    <Text size="large" weight="700" textColour="white" marginBottom="nano">Globals</Text>

                    <CodeBlock source={sampleThemeGlobals} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <Divider kind="secondary" horizontalMargin="huge" verticalMargin="micro" />



            {/* COMPONENTS ================================================= */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" textColour="white" marginBottom="nano">Components</Text>

                    <SearchableCodeBlock source={sampleFictoanTheme} language="css" marginBottom="micro" />
                </Portion>
            </Row>
        </Article>
    );
};

export default ThemingDocs;
