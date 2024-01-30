"use client";

// EXTERNAL DEPS ===============================================================
import React, { useState } from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Card,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Table,
    Text,
    Article,
    SelectWithSearch,
    Div,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { ComponentConfigurator } from "../../../components/Configurator/Configurator";

// STYLES ======================================================================
import "./page-card.css";

// CODE SNIPPETS ===============================================================
import {
    sampleCard,
    sampleCardCustomStyling,
    sampleCardShadow,
    sampleCardTheme,
} from "./CodeSamples";

// DATA ========================================================================
import { cardProps } from "./config";
import { generateShades, listOfColours } from "../../../utils/colours";


const CardDocs = () => {
    const [selectedBgColour, setSelectedBgColour] = useState("");

    const handleBgColourChange = (event) => {
        setSelectedBgColour(event.target.value !== "none" ? event.target.value : undefined);
    };

    const cardTheme = `// Paste this in your theme file
--card-bg            : --var(--${selectedBgColour}),
--card-border        : var(--slate-dark-60),
--card-border-radius : 8px,
--card-border-width  : var(--global-border-width)`;

    const colorOptions = listOfColours.flatMap(color =>
        generateShades(color).map(shade => (
            {
                label     : (
                    <Div verticallyCentreItems>
                        <Div
                            className="color-option"
                            bgColour={shade}
                            padding="nano" shape="rounded"
                        />
                        <Text marginLeft="nano">{shade}</Text>
                    </Div>
                ),
                searchKey : shade,
                value     : shade,
            }
        )),
    );

    return (
        <Article id="page-card">
            <Row layout="grid" horizontalPadding="huge" marginTop="medium" marginBottom="tiny">
                <Portion>
                    <Heading as="h2" marginBottom="micro">Card</Heading>
                    <Text size="large">
                        The card is a simple box that encloses content within, and is one of the oft-used components
                        in modern UI.
                    </Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="small" marginBottom="small">
                <Portion>
                    <ComponentConfigurator
                        component={cardProps.component}
                        properties={cardProps.properties}
                    />
                </Portion>
            </Row>

            {/* <HRule kind="primary" horizontalMargin="small" verticalMargin="small" /> */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  //////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row layout="grid" horizontalPadding="huge" marginBottom="micro">
                <Portion>
                    <Heading as="h4">Theme</Heading>
                </Portion>
            </Row>

            <Row layout="grid" horizontalPadding="small" marginBottom="small">
                <Portion>
                    <Card padding="micro" shape="rounded">
                        <Row layout="grid" marginBottom="none">
                            <Portion desktopSpan="half">
                                <CodeBlock source={cardTheme} language="css" showCopyButton />
                            </Portion>

                            <Portion desktopSpan="one-fourth">
                                <SelectWithSearch
                                    label="Background colour"
                                    options={[{
                                        label     : "Select an option",
                                        searchKey : "Select an option",
                                        value     : "select-an-option",
                                        disabled  : true,
                                        selected  : true,
                                    },
                                        ...colorOptions,
                                    ]}
                                    defaultValue={selectedBgColour}
                                    onChange={handleBgColourChange}
                                    isFullWidth
                                />
                            </Portion>

                            <Portion desktopSpan="one-fourth">
                                <SelectWithSearch
                                    label="Border colour"
                                    options={[{
                                        label     : "Select an option",
                                        searchKey : "Select an option",
                                        value     : "select-an-option",
                                        disabled  : true,
                                        selected  : true,
                                    },
                                        ...colorOptions,
                                    ]}
                                    defaultValue={selectedBgColour}
                                    onChange={handleBgColourChange}
                                    isFullWidth
                                />
                            </Portion>
                        </Row>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default CardDocs;
