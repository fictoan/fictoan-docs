"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    HRule,
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

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    };
    return (
        <Article id="page-breadcrumbs">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Breadcrumbs</Heading>
                    <Text size="large" marginBottom="small">
                        The badge is a small inline element that can be used to highlight a piece of information.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The badge is a simple, styled <code>mark</code> element</Text>
                    <Text>&bull; You have to manually align it with its sibling</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion>
                    <Element
                        id="component-wrapper"
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
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton>
                                        {[
                                            `// Paste this in your content file`,
                                            `<BreadcrumbsWrapper>`,
                                            `    <BreadcrumbsItem>`,
                                            `        <Link href="/">Home</Link>`,
                                            `    </BreadcrumbsItem>`,
                                            `    <BreadcrumbsItem>`,
                                            `        <Link href="/components">Components</Link>`,
                                            `    </BreadcrumbsItem>`,
                                            `    <BreadcrumbsItem>`,
                                            `        <Link href="/components/breadcrumbs">Breadcrumbs</Link>`,
                                            `    </BreadcrumbsItem>`,
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
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
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
                                        defaultValue={componentVariables["breadcrumb-item-separator-colour"] || "select-a-colour"}
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
                                        defaultValue={componentVariables["breadcrumb-item-text-colour"] || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumb-item-text-colour", e.target.value)}
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
                                        defaultValue={componentVariables["breadcrumb-item-text-colour-active"] || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("breadcrumb-item-text-colour-active", e.target.value)}
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
