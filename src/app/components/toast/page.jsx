"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

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
    RadioTabGroup,
    Select,
    ToastItem,
    ToastsWrapper,
    Button,
    Range,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-toast.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";

const ToastDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================
    const [showSampleToast, setShowSampleToast] = useState(false);

    // CUSTOMISE =======================================================================================================
    const [selectedPosition, setSelectedPosition] = useState("top");
    const [secondsToShowFor, setSecondsToShowFor] = useState(100);

    // THEME ===========================================================================================================


    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Toast</Heading>
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

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion desktopSpan="half">
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

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
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

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["toast-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("toast-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["toast-text"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("toast-text", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["toast-border-radius"].value}
                                        onChange={(e) => handleVariableChange("toast-border-radius", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["toast-border-radius"].unit}
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
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

export default ToastDocs;
