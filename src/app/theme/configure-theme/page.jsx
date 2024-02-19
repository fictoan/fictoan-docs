"use client";

// EXTERNAL DEPS ===============================================================
import React, { useEffect, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Heading,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Div,
    Button,
    InputField,
    Range,
    Card,
    Tabs,
    Badge,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { SearchableCodeBlock } from "../SearchableCodeBlock";

// STYLES ======================================================================
import "../page-theming.css";

// CODE SNIPPETS ===============================================================
import {
    sampleThemeProviderSetup,
    sampleHeaderSetup,
    sampleCSSSetup,
    sampleThemeGlobals,
    sampleFictoanTheme,
} from "../CodeSamples";


const ThemingDocs = () => {
    const [activeTab, setActiveTab] = useState("globals");

    // State to store the values of multiple CSS variables
    const [cssValues, setCssValues] = useState({
        "--global-border-radius"    : { value : 8, unit : "px" },
        "--global-border-width"     : { value : 1, unit : "px" },
        "--paragraph-font-size"     : { value : 1, unit : "rem" },
        "--heading-size-multiplier" : { value : 1.2, unit : "" },
    });

    useEffect(() => {
        const updateInitialValues = () => {
            const root = document.documentElement;
            const newValues = { ...cssValues };
            Object.keys(cssValues).forEach(varName => {
                const fullValue = getComputedStyle(root).getPropertyValue(varName).trim();
                const match = fullValue.match(/^(\d+(?:\.\d+)?)(.*)$/); // Separate value and unit
                if (match) {
                    newValues[varName] = { value : parseFloat(match[1]), unit : match[2] || "" };
                }
            });
            setCssValues(newValues);
        };

        updateInitialValues();
    }, []);

    const handleRangeChange = (varName, newValue) => {
        setCssValues(prevValues => (
            {
                ...prevValues,
                [varName] : { ...prevValues[varName], value : newValue },
            }
        ));
        document.documentElement.style.setProperty(varName, `${newValue}${cssValues[varName].unit}`);
    };

    return (
        <Article id="page-theming">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Configure theme</Heading>
                    <Text size="large">
                        A comprehensive list of variables to change the look and feel of your app from a single
                        place.
                    </Text>
                </Portion>

                <Portion>
                    <Button
                        kind={activeTab === "globals" ? "primary" : "tertiary"}
                        size="small"
                        onClick={() => setActiveTab("globals")}
                    >
                        Globals
                    </Button>

                    <Button
                        kind={activeTab === "text" ? "primary" : "tertiary"} size="small"
                        onClick={() => setActiveTab("text")}
                    >
                        Text
                    </Button>
                </Portion>
            </Row>


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* GLOBALS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {activeTab === "globals" && (
                <Row horizontalPadding="small">
                    <Portion desktopSpan="10">
                        <Card padding="micro" shape="rounded" marginBottom="micro">
                            <Row marginBottom="none">
                                <Portion>
                                    <Text size="large" weight="700">Global variables</Text>
                                </Portion>

                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={cssValues["--global-border-radius"].value}
                                        onChange={(e) => handleRangeChange("--global-border-radius", e.target.value)}
                                        suffix={cssValues["--global-border-radius"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border width"
                                        value={cssValues["--global-border-width"].value}
                                        onChange={(e) => handleRangeChange("--global-border-width", e.target.value)}
                                        suffix={cssValues["--global-border-width"].unit}
                                        min={0} max={50} step={1}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Portion>

                    <Portion desktopSpan="14">
                        <Card padding="micro" shape="rounded">
                            <Row marginBottom="none">
                                <Portion desktopSpan="one-fourth">
                                    <Button kind="primary" isFullWidth>Primary button</Button>
                                </Portion>

                                <Portion desktopSpan="one-fourth">
                                    <Button kind="primary" isFullWidth isLoading>Primary button</Button>
                                </Portion>

                                <Portion desktopSpan="one-fourth">
                                    <Button kind="secondary" isFullWidth>Secondary button</Button>
                                </Portion>

                                <Portion desktopSpan="one-fourth">
                                    <Button kind="secondary" isFullWidth isLoading>Secondary button</Button>
                                </Portion>

                                <Portion desktopSpan="one-fourth">
                                    <Button kind="tertiary" isFullWidth>Tertiary button</Button>
                                </Portion>

                                <Portion desktopSpan="one-fourth">
                                    <Button kind="tertiary" isFullWidth isLoading>Tertiary button</Button>
                                </Portion>
                            </Row>
                        </Card>
                    </Portion>
                </Row>
            )}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* TEXT */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {activeTab === "text" && (
                <Row horizontalPadding="small">
                    <Portion desktopSpan="10">
                        <Card padding="micro" shape="rounded" marginBottom="micro">
                            <Row marginBottom="none">
                                <Portion>
                                    <Text size="large" weight="700">Text</Text>
                                </Portion>

                                <Portion desktopSpan="half">
                                    <Range
                                        label="Text size"
                                        value={cssValues["--paragraph-font-size"].value}
                                        onChange={(e) => handleRangeChange("--paragraph-font-size", e.target.value)}
                                        suffix={cssValues["--paragraph-font-size"].unit}
                                        min={0.5} max={5} step={0.1}
                                    />
                                </Portion>

                                <Portion desktopSpan="half">
                                    <Range
                                        label="Heading size multiplier"
                                        value={cssValues["--heading-size-multiplier"].value}
                                        onChange={(e) => handleRangeChange("--heading-size-multiplier", e.target.value)}
                                        suffix={cssValues["--heading-size-multiplier"].unit}
                                        min={0} max={3} step={0.1}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Portion>

                    <Portion desktopSpan="14">
                        <Card padding="micro" shape="rounded">
                            <Row marginBottom="none">
                                <Portion>
                                    <Heading as="h1" marginBottom="nano">Heading 1</Heading>
                                    <Heading as="h2" marginBottom="nano">Heading 2</Heading>
                                    <Heading as="h3" marginBottom="nano">Heading 3</Heading>
                                    <Heading as="h4" marginBottom="nano">Heading 4</Heading>
                                    <Heading as="h5" marginBottom="nano">Heading 5</Heading>
                                    <Heading as="h6" marginBottom="nano">Heading 6</Heading>
                                    <Text>Text</Text>
                                    <Link href="/">Link</Link>
                                </Portion>
                            </Row>
                        </Card>
                    </Portion>
                </Row>
            )}
        </Article>
    );
};

export default ThemingDocs;
