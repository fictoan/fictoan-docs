"use client";

import React from "react";

import { CodeBlock, Heading, HRule, Portion, Row, Text } from "fictoan-react";

import {
    sampleThemeBadge,
    sampleThemeBody,
    sampleThemeBottomDrawer,
    sampleThemeBreadcrumbs,
    sampleThemeButton,
    sampleThemeCallout,
    sampleThemeCard,
    sampleThemeCheckbox,
    sampleThemeExpandableContent,
    sampleThemeGlobals,
    sampleThemeHRule,
    sampleThemeInfoPanel,
    sampleThemeInput,
    sampleThemeNotification,
    sampleThemeProgressBar,
    sampleThemeRadioButton,
    sampleThemeSelectDropdown,
    sampleThemeSidebar, sampleThemeSpinner, sampleThemeSwitch,
    sampleThemeTable,
    sampleThemeTabs,
    sampleThemeText, sampleThemeToast,
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


                {/* BADGE ////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Badge</Text>

                        <CodeBlock source={sampleThemeBadge} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* BODY /////////////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Body</Text>

                        <CodeBlock source={sampleThemeBody} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* BottomDrawer /////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">BottomDrawer</Text>

                        <CodeBlock source={sampleThemeBottomDrawer} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* BREADCRUMBS //////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Breadcrumbs</Text>

                        <CodeBlock source={sampleThemeBreadcrumbs} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* BUTTON ///////////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Button</Text>

                        <CodeBlock source={sampleThemeButton} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* CALLOUT //////////////////////////////////////////////////////////////////////////////////////// */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Callout</Text>

                        <CodeBlock source={sampleThemeCallout} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* CARD */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Card</Text>

                        <CodeBlock source={sampleThemeCard} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* CHECKBOX */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Checkbox</Text>

                        <CodeBlock source={sampleThemeCheckbox} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* EXPANDABLE CONTENT */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">ExpandableContent</Text>

                        <CodeBlock source={sampleThemeExpandableContent} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* H-RULE */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Horizontal rule</Text>

                        <CodeBlock source={sampleThemeHRule} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* INFO PANEL */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Info panel</Text>

                        <CodeBlock source={sampleThemeInfoPanel} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* INPUT */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Input</Text>

                        <CodeBlock source={sampleThemeInput} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* NOTIFICATION */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Notification</Text>

                        <CodeBlock source={sampleThemeNotification} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* PROGRESS BAR */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Progress bar</Text>

                        <CodeBlock source={sampleThemeProgressBar} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* RADIO BUTTON */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Radio button</Text>

                        <CodeBlock source={sampleThemeRadioButton} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* SIDEBAR */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Sidebar</Text>

                        <CodeBlock source={sampleThemeSidebar} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* SELECT DROPDOWN */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Select dropdown</Text>

                        <CodeBlock source={sampleThemeSelectDropdown} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* SPINNER */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Spinner</Text>

                        <CodeBlock source={sampleThemeSpinner} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* TABLE */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Table</Text>

                        <CodeBlock source={sampleThemeTable} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* TABS */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Tabs</Text>

                        <CodeBlock source={sampleThemeTabs} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* TOAST */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Toast</Text>

                        <CodeBlock source={sampleThemeToast} language="css" marginBottom="micro" />
                    </Portion>
                </Row>

                <HRule kind="secondary" sideMargin="huge" />


                {/* TEXT */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Text</Text>

                        <CodeBlock source={sampleThemeText} language="css" marginBottom="micro" />
                    </Portion>
                </Row>


                {/* SWITCH */}
                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Switch</Text>

                        <CodeBlock source={sampleThemeSwitch} language="css" marginBottom="micro" />
                    </Portion>
                </Row>
            </article>
        </>
    );
};

export default ThemingDocs;
