"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Heading, HRule, Portion, Row, Text, Article } from "fictoan-react";


// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-callout.css";

// CODE SNIPPETS ===============================================================

// DATA ========================================================================
import { calloutProps } from "./config";

const CalloutDocs = () => {
    return (
        <Article id="page-callout">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Callout</Heading>
                    <Text size="large" marginBottom="small">
                        The card is a simple box that encloses content within, and is one of the oft-used components
                        in modern UI.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The card always takes up 100% width of its parent</Text>
                    <Text>&bull; It grows to take the height of its content</Text>
                    <Text>&bull; Border-radius values work only when <code>shape="rounded"</code> is present</Text>
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
                        component={calloutProps.component}
                        properties={calloutProps.properties}
                        variablesStructure={calloutProps.variables}
                    />
                </Portion>
            </Row>
        </Article>
    );
};

export default CalloutDocs;
