"use client";

// FRAMEWORK ===========================================================================================================
import React, { useState } from "react";

// INTERFACE ===========================================================================================================
import {
    Article,
    Div,
    Heading1,
    Heading4,
    Divider,
    Row,
    Portion,
    Text,
    Accordion,
} from "fictoan-react";

// STYLES ==============================================================================================================
import "./page-accordion.css";
import "../../../styles/fictoan-theme.css";

// HOOKS ===============================================================================================================
import { createPropsConfigurator } from "../../../utils/propsConfigurator";
import { createThemeConfigurator } from "../../../utils/themeConfigurator";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

const AccordionDocs = () => {
    // PROPS CONFIG ====================================================================================================
    const {
        propsConfigurator,
        componentProps : propsConfig,
    } = createPropsConfigurator(
        "Accordion", [
            "summary",
            "isFullWidth",
        ],
        colourOptions,
        { canHaveChildren : true },
    );

    // THEME CONFIG ====================================================================================================
    const AccordionComponent = (varName) => {
        return varName.startsWith("accordion-");
    };

    const {
        interactiveElementRef,
        componentProps : themeConfig,
        themeConfigurator,
    } = createThemeConfigurator("Accordion", AccordionComponent);

    return (
        <Article id="page-toast">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Accordion</Heading1>
                    <Text size="large" marginBottom="small">
                        A simple click to expand/collapse block element.
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <ul>
                        <li>
                            The <code>summary</code> accepts any React node as a child. Feel free to style it however
                            you want with any element.
                        </li>
                        <li>The component is typically used with the <code>isFullWidth</code> prop</li>
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
                    <Div
                        padding="small"
                        shape="rounded"
                        bgColour="slate-light80"
                        data-centered-children
                    >
                        <Accordion
                            id="interactive-component"
                            ref={interactiveElementRef}
                            {...propsConfig}
                            {...themeConfig}
                            summary={<Text>Click me</Text>}
                        >
                            <Text>Accordion content</Text>
                            {propsConfig.content}
                        </Accordion>
                    </Div>
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

export default AccordionDocs;
