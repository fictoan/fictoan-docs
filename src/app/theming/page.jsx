"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Heading, HRule, Portion, Row, Text } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-theming.css";

// CODE SNIPPETS ===============================================================
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
    sampleThemeSidebar,
    sampleThemeSpinner,
    sampleThemeSwitch,
    sampleThemeTable,
    sampleThemeTabs,
    sampleThemeText,
    sampleThemeToast,
} from "./CodeSamples";


const ThemingDocs = () => {
    return (
        <article id="page-theming">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge" marginTop="medium">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Theming</Heading>
                    <Text size="large">
                        A comprehensive list of variables to change the look and feel of your app from a single
                        place.
                    </Text>
                </Portion>
            </Row>

            {/* GLOBALS //////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Globals</Text>

                    <CodeBlock source={sampleThemeGlobals} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* BADGE ////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Badge</Text>

                    <CodeBlock source={sampleThemeBadge} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* BODY /////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Body</Text>

                    <CodeBlock source={sampleThemeBody} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* BottomDrawer /////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">BottomDrawer</Text>

                    <CodeBlock source={sampleThemeBottomDrawer} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* BREADCRUMBS //////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Breadcrumbs</Text>

                    <CodeBlock source={sampleThemeBreadcrumbs} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* BUTTON ///////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Button</Text>

                    <CodeBlock source={sampleThemeButton} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* CALLOUT //////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Callout</Text>

                    <CodeBlock source={sampleThemeCallout} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* CARD */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Card</Text>

                    <CodeBlock source={sampleThemeCard} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* CHECKBOX */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Checkbox</Text>

                    <CodeBlock source={sampleThemeCheckbox} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* EXPANDABLE CONTENT */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">ExpandableContent</Text>

                    <CodeBlock source={sampleThemeExpandableContent} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* H-RULE */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Horizontal rule</Text>

                    <CodeBlock source={sampleThemeHRule} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* INFO PANEL */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Info panel</Text>

                    <CodeBlock source={sampleThemeInfoPanel} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* INPUT */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Input</Text>

                    <CodeBlock source={sampleThemeInput} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* NOTIFICATION */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Notification</Text>

                    <CodeBlock source={sampleThemeNotification} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* PROGRESS BAR */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Progress bar</Text>

                    <CodeBlock source={sampleThemeProgressBar} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* RADIO BUTTON */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Radio button</Text>

                    <CodeBlock source={sampleThemeRadioButton} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* SIDEBAR */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Sidebar</Text>

                    <CodeBlock source={sampleThemeSidebar} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* SELECT DROPDOWN */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Select dropdown</Text>

                    <CodeBlock source={sampleThemeSelectDropdown} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* SPINNER */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Spinner</Text>

                    <CodeBlock source={sampleThemeSpinner} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* TABLE */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Table</Text>

                    <CodeBlock source={sampleThemeTable} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* TABS */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Tabs</Text>

                    <CodeBlock source={sampleThemeTabs} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* TOAST */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Toast</Text>

                    <CodeBlock source={sampleThemeToast} language="css" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="huge" />


            {/* TEXT */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Text</Text>

                    <CodeBlock source={sampleThemeText} language="css" marginBottom="micro" />
                </Portion>
            </Row>


            {/* SWITCH */}
            <Row layout="grid" horizontalPadding="huge">
                <Portion>
                    <Text size="large" weight="700" marginBottom="micro">Switch</Text>

                    <CodeBlock source={sampleThemeSwitch} language="css" marginBottom="micro" />
                </Portion>
            </Row>
        </article>
    );
};

export default ThemingDocs;
