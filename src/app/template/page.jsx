"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
// import "./page-breadcrumbs.css";

// HOOKS ===============================================================================================================
// import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
// import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
// import { breadcrumbsProps } from "./config";


const ComponentDocs = () => {
    // const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(badgeProps.variables);

    const [label, setLabel] = useState("Text");
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("");
    const [selectedBorderColour, setSelectedBorderColour] = useState("");

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Component</Heading>
                    <Text size="large" marginBottom="small">
                        The component is
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; </Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >

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
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<Card`,
                                            selectedShape ? `    shape="${selectedShape}"` : null,
                                            selectedBgColour ? `    bgColour="${selectedBgColour}"` : null,
                                            selectedBorderColour ? `    borderColour="${selectedBorderColour}"` : null,
                                            `>${label ? `\n    ${label}\n` : ""}</Card>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                <Portion>

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

                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default ComponentDocs;
