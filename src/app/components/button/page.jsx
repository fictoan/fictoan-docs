"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import {
    Heading,
    Portion,
    Row,
    Text,
    Article,
    Tabs,
} from "fictoan-react";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-button.css";

// CODE SNIPPETS ===============================================================

// DATA ========================================================================
import { buttonProps } from "./config";


const ButtonDocs = () => {
    const primaryButtonConfigurator = () => (
        <ComponentConfigurator
            component={buttonProps.component}
            properties={buttonProps.properties}
            variablesStructure={buttonProps.variables}
        />
    )

    return (
        <Article id="page-button">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Button</Heading>
                    <Text size="large" marginBottom="small">
                        Comes in various shapes and sizes, and can be used to trigger an action.
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; The card always takes up 100% width of its parent</Text>
                    <Text>&bull; It grows to take the height of its content</Text>
                    <Text>&bull; Border-radius values work only when <code>shape="rounded"</code> is present</Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" marginBottom="small">
                <Portion>
                    <Tabs
                        tabs={[
                            {
                                label   : "Primary",
                                key     : "primary",
                                content : primaryButtonConfigurator()
                            },
                        ]}
                    />
                </Portion>
            </Row>

        </Article>

    );
};

export default ButtonDocs;
