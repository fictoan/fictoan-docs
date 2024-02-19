"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
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
    BreadcrumbsWrapper,
    BreadcrumbItem,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-breadcrumbs.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { breadcrumbsProps } from "./config";


const BreadcrumbsDocs = () => {
    // SAMPLE ==========================================================================================================
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

    // CUSTOMISE =======================================================================================================
    const [selectedBgColour, setSelectedBgColour] = useState("");

    // THEME ===========================================================================================================
    const {
        componentVariables,
        handleVariableChange,
        cssVariablesList,
    } = useThemeVariables(breadcrumbsProps.variables);

    return (
        <Article id="page-breadcrumbs">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Breadcrumbs</Heading>
                    <Text size="large" marginBottom="small">
                        A set of links that show the user’s location within a website or application.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The <code>BreadcrumbsWrapper</code> is a <code>ul</code> element, and the <code>BreadcrumbItem</code> is a <code>li</code> element</Text>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        {showCurrentPageMessage && (
                            <Badge shape="rounded" id="current-page-message">That’s this page 🙂</Badge>
                        )}

                        <BreadcrumbsWrapper
                            id="interactive-component"
                            {...(
                                selectedBgColour !== undefined ? { bgColour : selectedBgColour } : {}
                            )}
                        >
                            <BreadcrumbItem>
                                <Link href="/">Home</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link href="/components">Components</Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link
                                    href="/components/breadcrumbs"
                                    onClick={() => setShowCurrentPageMessage(true)}
                                >
                                    Breadcrumbs
                                </Link>
                            </BreadcrumbItem>
                        </BreadcrumbsWrapper>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form>
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton>
                                        {[
                                            `// Paste this in your content file`,
                                            `<BreadcrumbsWrapper>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/">Home</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/components">Components</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `    <BreadcrumbItem>`,
                                            `        <Link href="/components/breadcrumbs">Breadcrumbs</Link>`,
                                            `    </BreadcrumbItem>`,
                                            `</BreadcrumbsWrapper>`,
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
                                    Set values globally
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                        marginBottom="micro"
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Wrapper BG colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumbs-wrapper-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumbs-wrapper-bg", e.target.value)}
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
                                        onChange={(e) => handleVariableChange("breadcrumb-item-separator", e.target.value)}
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Separator colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-separator-colour"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumb-item-separator-colour", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ITEM COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Item colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-text"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumb-item-text", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* ITEM ACTIVE COLOUR ============================================================= */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Active item colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["breadcrumb-item-text-active"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumb-item-text-active", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default BreadcrumbsDocs;
