"use client";

import React, { useMemo, useState } from "react";

import {
    Element,
    Card,
    HRule,
    InputField,
    Portion,
    RadioGroup,
    Row,
    Select,
    SelectWithSearch,
    RadioTabGroup,
    Text,
    Badge,
} from "fictoan-react";

import "./configurator.css";
import { generateShades, listOfColours } from "../../utils/colours";
import { CodeBlock } from "fictoan-react/components";

export const ComponentConfigurator = ({ component, properties }) => {
    const [label, setLabel] = useState("Text");
    const [selectedPadding, setSelectedPadding] = useState("");
    const [selectedSize, setSelectedSize] = useState("medium");
    const [selectedShape, setSelectedShape] = useState("none");
    const [selectedShadow, setSelectedShadow] = useState("none");
    const [selectedBgColour, setSelectedBgColour] = useState("white");
    const [selectedBorderColour, setSelectedBorderColour] = useState("slate");
    const [selectedTextColour, setSelectedTextColour] = useState("slate");

    const handlePaddingChange = (event) => {
        setSelectedPadding(event.target.value !== "none" ? event.target.value : undefined);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value !== "none" ? event.target.value : undefined);
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
        console.log(event.target.value);
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

    const Component = useMemo(() => {
        switch (component) {
            case "Badge":
                return (Badge);
            default:
                return (Badge);
        }
    }, [component]);

    return (
        <Card id="component-configurator" padding="micro" shape="rounded">
            <Row className="demo-row" layout="grid" marginBottom="micro">
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* CODE BLOCK */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">{[
                        // Lol, hacky max pro
                        `<${component}`,
                        selectedPadding && `    padding="${selectedPadding}"`,
                        selectedShape && `    shape="${selectedShape}"`,
                        selectedSize && `    size="${selectedSize}"`,
                        selectedShadow && `    shadow="${selectedShadow}"`,
                        selectedBgColour && `    bgColour="${selectedBgColour}"`,
                        selectedBorderColour && `    borderColor="${selectedBorderColour}"`,
                        selectedTextColour && `    textColour="${selectedTextColour}"`,
                        `>`,
                        `    ${label}`,
                        `</${component}>`,
                    ].filter(Boolean).join("\n")}
                    </CodeBlock>
                </Portion>

                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* RENDERED COMPONENT */}
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Element
                        className="rendered-component"
                        as="div" padding="tiny" shape="rounded" bgColour="slate-light-80"
                    >
                        <Component
                            id="interactive-card"
                            {...(
                                selectedPadding !== undefined ? { padding : selectedPadding } : {}
                            )}
                            {...(
                                selectedShape !== undefined ? { shape : selectedShape } : {}
                            )}
                            {...(
                                selectedSize !== undefined ? { size : selectedSize } : {}
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
                            {...(
                                selectedTextColour !== undefined ? { textColour : selectedTextColour } : {}
                            )}
                        >
                            {label || "Label"}
                        </Component>
                    </Element>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* LABEL */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {properties.includes("label") ? (
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
            ) : null}

            <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* PADDING */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {properties.includes("padding") ? (
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
            ) : null}

            <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* SIZE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {properties.includes("size") ? (
                <Row layout="grid" marginBottom="none">
                    <Portion desktopSpan="one-fourth">
                        <Text marginBottom="none">Size</Text>
                    </Portion>

                    <Portion desktopSpan="three-fourth">
                        <RadioTabGroup
                            name="size"
                            options={[
                                { id : "size-opt-0", value : "none", label : "none" },
                                { id : "size-opt-1", value : "nano", label : "nano" },
                                { id : "size-opt-2", value : "micro", label : "micro" },
                                { id : "size-opt-3", value : "tiny", label : "tiny" },
                                { id : "size-opt-4", value : "small", label : "small" },
                                { id : "size-opt-5", value : "medium", label : "medium" },
                                { id : "size-opt-6", value : "large", label : "large" },
                                { id : "size-opt-7", value : "huge", label : "huge" },
                            ]}
                            defaultValue={selectedSize}
                            onChange={handleSizeChange}
                        />
                    </Portion>
                </Row>
            ) : null}

            <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* SHAPE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {properties.includes("shape") ? (
                <Row layout="grid" marginBottom="none">
                    <Portion desktopSpan="one-fourth">
                        <Text marginBottom="none">Shape</Text>
                    </Portion>

                    <Portion desktopSpan="three-fourth">
                        <RadioTabGroup
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
            ) : null}

            <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* SHADOW */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {properties.includes("shadow") ? (
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
            ) : null}

            <HRule kind="tertiary" horizontalMargin="none" verticalMargin="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* COLOURS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" marginBottom="none">
                <Portion desktopSpan="one-fourth">
                    <Text marginBottom="none">Colours</Text>
                </Portion>

                {/* BG COLOUR ============================================== */}
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
                        defaultValue={selectedBgColour}
                        onChange={handleBgColourChange}
                        isFullWidth
                    />
                </Portion>

                {/* BORDER COLOUR ========================================== */}
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
                        defaultValue={selectedBorderColour}
                        onChange={handleBorderColourChange}
                        isFullWidth
                    />
                </Portion>

                {/* TEXT COLOUR ============================================ */}
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
                        defaultValue={selectedTextColour}
                        onChange={handleTextColourChange}
                        isFullWidth
                    />
                </Portion>
            </Row>
        </Card>
    );
};
