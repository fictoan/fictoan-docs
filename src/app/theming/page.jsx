"use client";

import React from "react";

import { CodeBlock, Heading, HRule, Portion, Row, Text } from "fictoan-react";

import {
    sampleThemeBody,
    sampleThemeBreadcrumbs,
    sampleThemeButton,
    sampleThemeCard,
    sampleThemeGlobals,
    sampleThemeHRule,
    sampleThemeInfoPanel,
    sampleThemeInput,
    sampleThemeNotification,
    sampleThemeProgressBar, sampleThemeSidebar, sampleThemeTable, sampleThemeTabs,
    sampleThemeText
} from "./CodeSamples";

import "./page-theming.css";

const ThemingDocs = () => {
    return (
        <>
            <head>
                <title>Theming — Fictoan documentation</title>
            </head>

            <article id="page-theming">
                <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" marginBottom="small">Theme reference</Heading>
                        <Text marginBottom="micro">
                            The Fictoan theme is a comprehensive list of values you can edit to change the look of almost
                            any element on screen.
                        </Text>

                        <Text>
                            Here’s the latest version of the theme file: <a href="https://github.com/fictoan/fictoan-react/blob/master/src/styles/theme.ts">Fictoan theme</a>
                        </Text>
                    </Portion>
                </Row>

                {/* GLOBALS //////////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Globals</Text>

                        <CodeBlock source={sampleThemeGlobals} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  BODY  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Body</Text>

                        <CodeBlock source={sampleThemeBody} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  BREADCRUMBS  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Breadcrumbs</Text>

                        <CodeBlock source={sampleThemeBreadcrumbs} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  BUTTON  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Button</Text>

                        <CodeBlock source={sampleThemeButton} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  CARD  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Card</Text>

                        <CodeBlock source={sampleThemeCard} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  H-RULE  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Horizontal rule</Text>

                        <CodeBlock source={sampleThemeHRule} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  INPUT  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Input</Text>

                        <CodeBlock source={sampleThemeInput} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  INFO PANEL  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Info panel</Text>

                        <CodeBlock source={sampleThemeInfoPanel} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  NOTIFICATION  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Notification</Text>

                        <CodeBlock source={sampleThemeNotification} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  PROGRESS BAR  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Progress bar</Text>

                        <CodeBlock source={sampleThemeProgressBar} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  SIDEBAR  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Sidebar</Text>

                        <CodeBlock source={sampleThemeSidebar} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  TABLE  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Table</Text>

                        <CodeBlock source={sampleThemeTable} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  TABS  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Tabs</Text>

                        <CodeBlock source={sampleThemeTabs} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/*  TEXT  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Text</Text>

                        <CodeBlock source={sampleThemeText} language="css" marginBottom="micro" />
                    </Portion>
                </Row>
            </article>
        </>
    );
};

export default ThemingDocs;
