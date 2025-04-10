





"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Badge,
    Card,
    Form,
    Header,
    InputField,
    Select,
    Breadcrumbs,
    BreadcrumbItem, Div,
    CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-breadcrumbs.css";
import "../../../styles/fictoan-theme.css";

// HOOKS ===============================================================================================================
import { createPropsConfigurator } from "../../../utils/propsConfigurator";
import { createThemeConfigurator } from "../../../utils/themeConfigurator";

// ASSETS ==============================================================================================================

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import { breadcrumbsProps } from "./config";


const BreadcrumbsDocs = () => {
    // PROPS CONFIG ====================================================================================================
    const {
        propsConfigurator,
        componentProps: propsConfig,
    } = createPropsConfigurator(
        "Breadcrumbs", [
        ],
        colourOptions,
        { canHaveChildren: true }
    );

    // THEME CONFIG ====================================================================================================
    const BreadcrumbsComponent = (varName) => {
        return varName.startsWith("breadcrumb");
    };

    const {
        interactiveElementRef,
        componentProps: themeConfig,
        themeConfigurator,
    } = createThemeConfigurator("Breadcrumbs", BreadcrumbsComponent);



    const [selectedBgColour, setSelectedBgColour] = useState("");
    const [showCurrentPageMessage, setShowCurrentPageMessage] = useState(false);

    useEffect(() => {
        let timer;
        if (showCurrentPageMessage) {
            timer = setTimeout(() => {
                setShowCurrentPageMessage(false);
            }, 3000);
        }

        return () => clearTimeout(timer);
    }, [showCurrentPageMessage]);

    const {
        componentVariables,
        handleVariableChange,
        cssVariablesList,
    } = useThemeVariables(breadcrumbsProps.variables);

    return (
        <Article id="page-breadcrumbs">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Breadcrumbsss</Heading1>
                    <Text size="large" marginBottom="small">
                        A set of links to show the current page’s hierarchy
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>The BreadcrumbItem accepts React nodes</li>
                        <li>Use <code>current</code> prop to indicate active page</li>
                    </ul>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Div padding="small" shape="rounded" bgColour="slate-light80">
                        {showCurrentPageMessage && (
                            <Badge shape="rounded" id="current-page-message">That’s this page 🙂</Badge>
                        )}

                        <Breadcrumbs
                            id="interactive-component"
                            ref={interactiveElementRef}
                            {...propsConfig}
                            {...themeConfig}
                        >
                            <BreadcrumbItem>
                                <Link href="/">Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link href="/components">Components</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem current>
                                <Link
                                    href="/components/breadcrumbs"
                                    onClick={() => setShowCurrentPageMessage(true)}
                                >
                                    Breadcrumbs
                                </Link>
                            </BreadcrumbItem>
                        </Breadcrumbs>
                    </Div>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Configure props
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock withSyntaxHighlighting language="jsx" showCopyButton>
                                        {[
                                            `// Paste this in your content file`,
                                            `<Breadcrumbs>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/">Home</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/components">Components</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/components/breadcrumbs">Breadcrumbs</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `</Breadcrumbs>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                <Portion>
                                    <Text>Breadcrumbs doesn’t have any props to customise individual instances</Text>
                                </Portion>
                            </Row>
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Set global theme values
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock
                                        withSyntaxHighlighting
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        id="bg-colour"
                                        label="Wrapper BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumbs-wrapper-bg"].defaultValue || "select-a-colour"}
                                        onChange={(value) => handleVariableChange("breadcrumbs-wrapper-bg", value)}
                                        isFullWidth
                                    />
                                </Portion>

                                <Portion desktopSpan="half" />

                                {/* ITEM SEPARATOR ================================================================= */}
                                <Portion desktopSpan="half">
                                    <InputField
                                        label="Separator character"
                                        placeholder="Separator"
                                        defaultValue={componentVariables["breadcrumb-item-separator"]?.value}
                                        onChange={(value) => handleVariableChange("breadcrumb-item-separator", value)}
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        id="separator-colour"
                                        label="Separator colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-separator-colour"] || "select-a-colour"}
                                        onChange={(value) => handleVariableChange("breadcrumb-item-separator-colour", value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ITEM COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        id="item-colour"
                                        label="Item colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-text-colour"] || "select-a-colour"}
                                        onChange={(value) => handleVariableChange("breadcrumb-item-text-colour", value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ITEM ACTIVE COLOUR ============================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        id="item-active-colour"
                                        label="Active item colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-text-colour-active"] || "select-a-colour"}
                                        onChange={(value) => handleVariableChange("breadcrumb-item-text-colour-active", value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>

            <Row horizontalPadding="small">
                {/* PROPS CONFIGURATOR ///////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    {propsConfigurator()}
                </Portion>

                {/* THEME CONFIGURATOR ///////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    {themeConfigurator()}
                </Portion>
            </Row>
        </Article>
    );
};

export default BreadcrumbsDocs;
