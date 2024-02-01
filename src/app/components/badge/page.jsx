"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Badge, Element, Heading, HRule, Portion, Row, Table, Text, Article, Section } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";
import { PropsList } from "../../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./page-name.css";

// CODE SNIPPETS ===============================================================
import { sampleBadge, sampleBadgeSibling, sampleBadgeTheming } from "./CodeSamples";

// DATA ========================================================================
import { listOfBadgeProps } from "./propsList";
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
