"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Heading, HRule, Portion, Row, Text, Article } from "fictoan-react";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-name.css";

// CODE SNIPPETS ===============================================================

// DATA ========================================================================
import { badgeProps } from "./config";


const BadgeDocs = () => {
    return (
        <Article id="page-badge">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Badge</Heading>
                    <Text size="large" marginBottom="small">
                        The badge is a small inline element that can be used to highlight a piece of information.
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
                        component={badgeProps.component}
                        properties={badgeProps.properties}
                        variablesStructure={badgeProps.variables}
                    />
                </Portion>
            </Row>
        </Article>
    );
};

export default BadgeDocs;
