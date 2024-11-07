// EXTERNAL DEPS ===============================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Row,
    Portion,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Text,
    Divider, Card, RadioGroup, Select,
CodeBlock
} from "fictoan-react";
import { listOfColours, generateShades } from "../colour/colours";

// COMPONENTS ==================================================================


export const InteractiveCardExample = () => {
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedShadow, setSelectedShadow] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("white");
    const [selectedBorderColour, setSelectedBorderColour] = useState("slate");

    // Function to handle radio button change
    const handlePaddingChange = (event) => {
        setSelectedPadding(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShapeChange = (event) => {
        setSelectedShape(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleShadowChange = (event) => {
        setSelectedShadow(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleBorderColourChange = (event) => {
        setSelectedBorderColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    const colorOptions = listOfColours.flatMap(color =>
        generateShades(color).map(shade => (
            {
                label : shade,
                value : shade,
            }
        )),
    );

    return (
        <Row horizontalPadding="large">
            <Portion>
                <Card padding="micro" shape="rounded">
                    <Row marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Padding</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioGroup
                                options={[
                                    { id : "padding-opt-0", name : "padding", value : "none", label : "none" },
                                    { id : "padding-opt-1", name : "padding", value : "nano", label : "nano" },
                                    { id : "padding-opt-2", name : "padding", value : "micro", label : "micro" },
                                    { id : "padding-opt-3", name : "padding", value : "tiny", label : "tiny" },
                                    { id : "padding-opt-4", name : "padding", value : "small", label : "small" },
                                    { id : "padding-opt-5", name : "padding", value : "medium", label : "medium" },
                                    { id : "padding-opt-6", name : "padding", value : "large", label : "large" },
                                    { id : "padding-opt-7", name : "padding", value : "huge", label : "huge" },
                                ]}
                                defaultValue={selectedPadding}
                                onChange={handlePaddingChange}
                            />
                        </Portion>
                    </Row>

                    <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Shape</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioGroup
                                options={[
                                    { id : "shape-opt-0", name : "shape", value : "none", label : "none" },
                                    { id : "shape-opt-1", name : "shape", value : "rounded", label : "rounded" },
                                    { id : "shape-opt-2", name : "shape", value : "curved", label : "curved" },
                                ]}
                                defaultValue={selectedShape}
                                onChange={handleShapeChange}
                            />
                        </Portion>
                    </Row>

                    <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Shadow</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioGroup
                                options={[
                                    { id : "shadow-opt-0", name : "shadow", value : "none", label : "none" },
                                    { id : "shadow-opt-1", name : "shadow", value : "mild", label : "mild" },
                                    { id : "shadow-opt-3", name : "shadow", value : "hard", label : "hard" },
                                    { id : "shadow-opt-2", name : "shadow", value : "soft", label : "soft" },
                                ]}
                                defaultValue={selectedShadow}
                                onChange={handleShadowChange}
                            />
                        </Portion>
                    </Row>

                    <Divider kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Colours</Text>
                        </Portion>

                        <Portion desktopSpan="one-fourth">
                            <Select
                                label="Background colour"
                                options={[{
                                    label    : "Select an option",
                                    value    : "select-an-option",
                                    disabled : true,
                                    selected : true,
                                },
                                    ...colorOptions,
                                ]}
                                onChange={handleBgColourChange}
                                isFullWidth
                            />
                        </Portion>

                        <Portion desktopSpan="one-fourth">
                            <Select
                                label="Border colour"
                                options={[{
                                    name     : "Select an option",
                                    value    : "select-an-option",
                                    disabled : true,
                                    selected : true,
                                },
                                    ...colorOptions,
                                ]}
                                onChange={handleBorderColourChange}
                                isFullWidth
                            />
                        </Portion>
                    </Row>
                </Card>
            </Portion>

            <Portion desktopSpan="half">
                <CodeBlock language="jsx" marginBottom="micro">{[
                    // Lol, hacky max pro
                    `<Card`,
                    selectedPadding && `    padding="${selectedPadding}"`,
                    selectedShape && `    shape="${selectedShape}"`,
                    selectedShadow && `    shadow="${selectedShadow}"`,
                    selectedBgColour && `    bgColour="${selectedBgColour}"`,
                    selectedBorderColour && `    borderColor="${selectedBorderColour}"`,
                    `>`,
                    `    {/* Add any content here */}`,
                    `</Card>`
                ].filter(Boolean).join("\n")}
                </CodeBlock>
            </Portion>

            <Portion desktopSpan="half">
                <Element as="div" padding="tiny" shape="rounded" bgColour="slate-light-80">
                    <Card
                        id="interactive-card"
                        {...(
                            selectedPadding !== undefined ? { padding : selectedPadding } : {}
                        )}
                        {...(
                            selectedShape !== undefined ? { shape : selectedShape } : {}
                        )}
                        {...(
                            selectedShadow !== undefined ? { shadow : selectedShadow } : {}
                        )}
                        {...(
                            selectedBgColour !== undefined ? { bgColour : selectedBgColour } : {}
                        )}
                        {...(
                            selectedBorderColour !== undefined ? { borderColor : selectedBorderColour } : {}
                        )}
                    >
                    </Card>
                </Element>
            </Portion>
        </Row>
    );
};
