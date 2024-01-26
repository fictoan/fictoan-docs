// EXTERNAL DEPS ===============================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule, Card, RadioGroup, Select, Badge, InputField, SelectWithSearch, RadioTabGroup,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";
import { listOfColours, generateShades } from "../../../utils/colours";

// COMPONENTS ==================================================================


export const BadgeConfigurator = () => {
    const [label, setLabel] = useState("");
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedShape, setSelectedShape] = useState("");
    const [selectedShadow, setSelectedShadow] = useState("");
    const [selectedBgColour, setSelectedBgColour] = useState("white");
    const [selectedBorderColour, setSelectedBorderColour] = useState("slate");
    const [selectedTextColour, setSelectedTextColour] = useState("slate");

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

    const handleTextColourChange = (event) => {
        setSelectedTextColour(event.target.value !== "none" ? event.target.value : undefined);
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
        <Row layout="grid" horizontalPadding="large">
            <Portion>
                <Card padding="micro" shape="rounded">
                    <Row layout="grid" marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Label</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <InputField
                                type="text"
                                placeholder="Label"
                                onChange={(e) => setLabel(e.target.value)}
                            />
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row layout="grid" marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Padding</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioGroup
                                name="padding"
                                options={[
                                    { id : "padding-opt-0", value : "none", label : "none" },
                                    { id : "padding-opt-1", value : "nano", label : "nano" },
                                    { id : "padding-opt-2", value : "micro", label : "micro" },
                                    { id : "padding-opt-3", value : "tiny", label : "tiny" },
                                    { id : "padding-opt-4", value : "small", label : "small" },
                                    { id : "padding-opt-5", value : "medium", label : "medium" },
                                    { id : "padding-opt-6", value : "large", label : "large" },
                                    { id : "padding-opt-7", value : "huge", label : "huge" },
                                ]}
                                defaultValue={selectedPadding}
                                onChange={handlePaddingChange}
                            />
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row layout="grid" marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Shape</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioGroup
                                name="shape"
                                options={[
                                    { id : "shape-opt-0", value : "none", label : "none" },
                                    { id : "shape-opt-1", value : "rounded", label : "rounded" },
                                    { id : "shape-opt-2", value : "curved", label : "curved" },
                                ]}
                                defaultValue={selectedShape}
                                onChange={handleShapeChange}
                            />
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row layout="grid" marginBottom="none">
                        <Portion desktopSpan="one-fourth">
                            <Text marginBottom="none">Shadow</Text>
                        </Portion>

                        <Portion desktopSpan="three-fourth">
                            <RadioTabGroup
                                name="shadow"
                                options={[
                                    { id : "shadow-opt-0", value : "none", label : "none" },
                                    { id : "shadow-opt-1", value : "mild", label : "mild" },
                                    { id : "shadow-opt-3", value : "hard", label : "hard" },
                                    { id : "shadow-opt-2", value : "soft", label : "soft" },
                                ]}
                                defaultValue={selectedShadow}
                                onChange={handleShadowChange}
                            />
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

                    <Row layout="grid" marginBottom="none">
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
                                    label    : "Select an option",
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

                        <Portion desktopSpan="one-fourth">
                            <SelectWithSearch
                                label="Text colour"
                                options={[{
                                    label    : "Select an option",
                                    value    : "select-an-option",
                                    disabled : true,
                                    selected : true,
                                },
                                    ...colorOptions,
                                ]}
                                onChange={handleTextColourChange}
                                isFullWidth
                            />
                        </Portion>
                    </Row>
                </Card>
            </Portion>

            <Portion desktopSpan="half">
                <CodeBlock language="jsx" showCopyButton marginBottom="micro">{[
                    // Lol, hacky max pro
                    `<Badge`,
                    selectedPadding && `    padding="${selectedPadding}"`,
                    selectedShape && `    shape="${selectedShape}"`,
                    selectedShadow && `    shadow="${selectedShadow}"`,
                    selectedBgColour && `    bgColour="${selectedBgColour}"`,
                    selectedBorderColour && `    borderColor="${selectedBorderColour}"`,
                    selectedTextColour && `    textColour="${selectedTextColour}"`,
                    `>`,
                    `    {${label}}`,
                    `</Badge>`
                ].filter(Boolean).join("\n")}
                </CodeBlock>
            </Portion>

            <Portion desktopSpan="half">
                <Element as="div" padding="tiny" shape="rounded" bgColour="slate-light-80">
                    <Badge
                        id="interactive-badge"
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
                            selectedBorderColour !== undefined ? { borderColour : selectedBorderColour } : {}
                        )}
                        {...(
                            selectedTextColour !== undefined ? { textColour : selectedTextColour } : {}
                        )}
                    >
                        {label || "Label"}
                    </Badge>
                </Element>
            </Portion>
        </Row>
    );
};
