"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    BreadcrumbItem,
    BreadcrumbsWrapper,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";


// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-breadcrumbs.css";

// CODE SNIPPETS ===============================================================
import { sampleBreadcrumb, sampleBreadcrumbTheme } from "./CodeSamples";

// DATA ========================================================================


const BreadcrumbsDocs = () => {
    return (
        <Article id="page-breadcrumbs">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" className="text-hue">Breadcrumbs</Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* DEFAULT */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Element as="section" id="default">
                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Usage</Heading>

                        <Text marginBottom="micro">
                            The <code>Breadcrumbs</code> uses native <code>nav</code> and <code>li</code> elements.
                        </Text>

                        <CodeBlock source={sampleBreadcrumb} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Breadcrumbs</code>, which looks like
                            this&mdash;
                        </Text>

                        <BreadcrumbsWrapper marginBottom="micro">
                            <BreadcrumbItem>
                                <Link href="/">
                                    Home
                                </Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link href="/components">
                                    Components
                                </Link>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <Link href="/components/breadcrumbs">
                                    Breadcrumbs
                                </Link>
                            </BreadcrumbItem>
                        </BreadcrumbsWrapper>
                    </Portion>
                </Row>

                <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

                <Row horizontalPadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="micro">Separator</Heading>
                        <Text>
                            Each item is separated by a <code>/</code>. You can set this in the theme to be any Unicode
                            character! Fancy, no? For example, you can set it to be a <code>❯</code> like this&mdash;
                        </Text>
                    </Portion>

                    <Portion>
                        <CodeBlock language="css">
                            --breadcrumb-item-separator : "❯";
                        </CodeBlock>
                    </Portion>
                </Row>
            </Element>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row horizontalPadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h4" marginBottom="tiny">Theme</Heading>

                        <CodeBlock source={sampleBreadcrumbTheme} language="css" />
                    </Portion>
                </Row>
            </Element>
        </Article>
    );
};

export default BreadcrumbsDocs;
