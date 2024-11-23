"use client";

// EXTERNAL DEPS =======================================================================================================
import React from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Heading1,
    Heading4,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Element,
    Card,
    Section,
} from "fictoan-react";

// STYLES ==============================================================================================================
import "./page-card.css";

// HOOKS ===============================================================================================================
import { createThemeConfigurator } from "../../../utils/themeConfigurator";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import "../../../styles/fictoan-theme.css";
import { createPropsConfigurator } from "../../../utils/propsConfigurator";

const CardDocs = () => {
    const {
        propsConfigurator,
        componentProps: propsConfig,
    } = createPropsConfigurator(
        "Card",
        [
            "padding",
            "shape",
            "bgColour",
            "borderColour",
        ],
        colourOptions,
    );

    const CardComponent = (varName) => {
        return varName.startsWith("card-");
    };

    const {
        interactiveElementRef,
        componentProps: themeConfig,
        themeConfigurator,
    } = createThemeConfigurator("Card", CardComponent);

    return (
        <Article id="page-card">
            <Section>
                <Row horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                    <Portion>
                        <Heading1 marginBottom="micro">Card</Heading1>
                        <Text size="large" marginBottom="small">
                            A box to put all sorts of content inside
                        </Text>
                    </Portion>

                    <Portion>
                        <Heading4 marginBottom="micro">Characteristics</Heading4>
                        <ul>
                            <li>Accepts any React node as a child</li>
                            <li>The card always takes up 100% width of its parent</li>
                            <li>It grows to take the height of its content</li>
                            <li>Border-radius values work only when <code>shape="rounded"</code> is present</li>
                        </ul>
                    </Portion>
                </Row>
            </Section>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                <Portion id="component-wrapper">
                    <Element
                        as="div"
                        padding="small"
                        shape="rounded"
                        bgColour="slate-light80"
                        data-centered-children
                    >
                        <Card
                            id="interactive-component"
                            ref={interactiveElementRef}
                            {...propsConfig}
                            {...themeConfig}
                        >
                            Content goes here
                        </Card>
                    </Element>
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

export default CardDocs;
