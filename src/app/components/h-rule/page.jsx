"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Heading, HRule, Portion, Row, Table, Text, Article } from "fictoan-react";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-h-rule.css";

// CODE SNIPPETS ===============================================================

// DATA ========================================================================
import { hRuleProps } from "./config";

const HRuleDocs = () => {
    return (
        <Article id="page-h-rule">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">H-Rule</Heading>
                    <Text size="large" marginBottom="small">
                        The line
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
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" marginTop="medium" marginBottom="small">
                <Portion>
                    <ComponentConfigurator
                        component={hRuleProps.component}
                        properties={hRuleProps.properties}
                        variablesStructure={hRuleProps.variables}
                    />
                </Portion>
            </Row>
        </Article>
    );
};

export default HRuleDocs;
