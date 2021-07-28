import React, { useEffect } from "react";

import { CodeBlock, Heading, HRule, Portion, Row, Text } from "fictoan-react";

import { ThemeStyled } from "./Theme.styled";
import {
    sampleThemeBasics,
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


export const ThemeDocs = () => {
    useEffect(() => {
        document.title = "Theme — Fictoan";

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
        <ThemeStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue" marginBottom="small">Theme reference</Heading>
                    <Text>
                        The Fictoan theme is a comprehensive list of values you can edit to change the look of almost
                        any element on screen.
                    </Text>
                </Portion>
            </Row>

            {/*  =============================================================================================  */}
            {/*  GLOBALS  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Globals</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeGlobals} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  BODY  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Body</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeBasics} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  BREADCRUMBS  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Breadcrumbs</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeBreadcrumbs} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  BUTTON  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Button</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeButton} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  CARD  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Card</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeCard} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  H-RULE  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Horizontal rule</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeHRule} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  INPUT  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Input</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeInput} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  INFO PANEL  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Info panel</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeInfoPanel} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  NOTIFICATION  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Notification</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeNotification} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  PROGRESS BAR  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Progress bar</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeProgressBar} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  SIDEBAR  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Sidebar</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeSidebar} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  TABLE  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Table</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeTable} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  TABS  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Tabs</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeTabs} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />


            {/*  =============================================================================================  */}
            {/*  TEXT  */}
            {/*  =============================================================================================  */}
            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h5" marginBottom="nano">Text</Heading>

                    <Text marginBottom="micro">
                        Sizing uses the standard values ranging from <code>tiny</code> to <code>huge</code>.
                    </Text>

                    <CodeBlock source={sampleThemeText} language="jsx" marginBottom="micro" />
                </Portion>
            </Row>

            <HRule kind="secondary" sideMargin="huge" />
        </ThemeStyled>
    );
}
