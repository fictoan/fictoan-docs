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


// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-breadcrumbs.css";

// CODE SNIPPETS ===============================================================
import { breadcrumbsProps } from "./config";

// DATA ========================================================================


const BreadcrumbsDocs = () => {
    return (
        <Article id="page-breadcrumbs">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Breadcrumbs</Heading>
                    <Text size="large" marginBottom="small">
                        A list of links that show the user’s current location in a website or app.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; <code>BreadcrumbItem</code> can accept links and simple text</Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/*  CONFIGURATOR ////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginBottom="micro">
                <Portion>
                    <Heading as="h4">Playground</Heading>
                </Portion>
            </Row>

            <Row horizontalPadding="small" marginBottom="small">
                <Portion>
                    <ComponentConfigurator
                        component={breadcrumbsProps.component}
                        properties={breadcrumbsProps.properties}
                        variablesStructure={breadcrumbsProps.variables}
                    />
                </Portion>
            </Row>
        </Article>
    );
};

export default BreadcrumbsDocs;
