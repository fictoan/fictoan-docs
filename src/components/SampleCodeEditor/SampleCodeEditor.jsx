"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    Select,
    ToastItem,
    ToastsWrapper,
    Button,
    Range,
CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-toast.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../app/colour/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";

export const SampleCodeEditor = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================
    const [showSampleToast, setShowSampleToast] = useState(false);

    // CUSTOMISE =======================================================================================================
    const [selectedPosition, setSelectedPosition] = useState("top");
    const [secondsToShowFor, setSecondsToShowFor] = useState(100);

    // THEME ===========================================================================================================


    return (
        <Article id="page-toast">
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
                        <Button
                            onClick={() => setShowSampleToast(true)}
                            kind="primary"
                        >
                            Show a toast
                        </Button>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `const [showSampleToast, setShowSampleToast] = useState(false); \n`,
                                            `<ToastsWrapper`,
                                            selectedPosition ? `    position="${selectedPosition}"` : null,
                                            `>`,
                                            `    <ToastItem`,
                                            `        showWhen={showSampleToast}`,
                                            `        secondsToShowFor={${secondsToShowFor}}`,
                                            `        closeWhen={() => setShowSampleToast(false)}`,
                                            `    >`,
                                            `        <Text>Hello there, folks!</Text>`,
                                            `    </ToastItem>`,
                                            `</ToastsWrapper>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* POSITION ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="position" label="Position" name="position"
                                        options={[
                                            { id : "position-opt-0", value : "top", label : "top" },
                                            { id : "position-opt-1", value : "bottom", label : "bottom" },
                                        ]}
                                        defaultValue={selectedPosition || "right"}
                                        onChange={() => setSelectedPosition(event.target.value)}
                                    />

                                    <Divider kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion>
                                    <Range
                                        label="Show toast for"
                                        value={secondsToShowFor}
                                        onChange={(e) => setSecondsToShowFor(e.target.value)}
                                        min={1} max={50} step={1}
                                        suffix={secondsToShowFor > 1 ? " seconds" : " second"}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Form>
                </Portion>
            </Row>

            <ToastsWrapper
                position={selectedPosition}
            >
                <ToastItem
                    showWhen={showSampleToast}
                    secondsToShowFor={secondsToShowFor}
                    closeWhen={() => setShowSampleToast(false)}
                >
                    <Text>Hello there, folks!</Text>
                </ToastItem>
            </ToastsWrapper>
        </Article>
    );
};
