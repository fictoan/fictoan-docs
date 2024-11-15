"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading1,
    Heading4,
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
    Range, SidebarHeader, SidebarWrapper, SidebarItem, SidebarItemIcon, SidebarItemText, SidebarFooter,
    CodeBlock
} from "fictoan-react";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-sidebar.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../colour/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";
import FictoanLogo from "@/assets/images/fictoan-logo.svg";
import FictoanIcon from "@/assets/images/fictoan-icon.svg";
import ThemeSwitchIcon from "@/assets/icons/theme.svg";
import HomeIcon from "@/assets/icons/home.svg";

const ToastDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================
    const [showSampleToast, setShowSampleToast] = useState(false);

    // CUSTOMISE =======================================================================================================
    const [selectedPosition, setSelectedPosition] = useState("top");
    const [secondsToShowFor, setSecondsToShowFor] = useState(100);

    // THEME ===========================================================================================================


    return (
        <Article id="page-sidebar">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading1>Sidebar</Heading1>
                    <Text size="large" marginBottom="small">
                        A list of links inside a vertical container
                    </Text>
                </Portion>

                <Portion>
                    <Heading4 marginBottom="micro">Characteristics</Heading4>
                    <Text>&bull; </Text>
                </Portion>
            </Row>

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half" id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light80"
                        data-centered-children isFullHeight
                    >
                        <SidebarWrapper>
                            {/* HEADER */}
                            <SidebarHeader>
                                <div className="header-logo">
                                    <FictoanLogo />
                                </div>

                                <div className="header-icon">
                                    <FictoanIcon />
                                </div>
                            </SidebarHeader>

                            <Link href="/getting-started">
                                <SidebarItem>
                                    <SidebarItemIcon iconType="stroked">
                                        <HomeIcon />
                                    </SidebarItemIcon>
                                    <SidebarItemText weight="400" linkText="Home" />
                                </SidebarItem>
                            </Link>

                            <SidebarFooter>
                                <SidebarItem>
                                    <SidebarItemIcon iconType="stroked">
                                        <ThemeSwitchIcon />
                                    </SidebarItemIcon>
                                    <SidebarItemText weight="400" linkText="Theme" />
                                </SidebarItem>
                            </SidebarFooter>
                        </SidebarWrapper>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds marginBottom="micro">
                                <Text size="large" weight="700" textColour="white">
                                    Configure props
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
            </Row>

            <Row horizontalPadding="small">
                <Portion>
                    <Card padding="micro" shape="rounded">
                        <Header verticallyCentreItems pushItemsToEnds>
                            <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                Set global theme values
                            </Text>
                        </Header>

                        <Row marginBottom="none">
                            <Portion desktopSpan="half">
                                <CodeBlock
                                    source={cssVariablesList}
                                    language="css"
                                    showCopyButton
                                    marginBottom="micro"
                                />
                            </Portion>

                            <Portion desktopSpan="half">
                                <Row marginBottom="none">
                                    {/* BG COLOUR ================================================================== */}
                                    <Portion desktopSpan="half">
                                        <Select
                                            label="Background"
                                            options={[{
                                                label    : "Select a colour",
                                                value    : "select-a-colour",
                                                disabled : true,
                                                selected : true,
                                            }, ...colourOptions]}
                                            defaultValue={componentVariables["sidebar-bg"].defaultValue || "select-a-colour"}
                                            onChange={(e) => handleVariableChange("sidebar-bg", e.target.value)}
                                            isFullWidth
                                        />
                                    </Portion>

                                    <Portion desktopSpan="half" />

                                    {/* WIDTH ====================================================================== */}
                                    <Portion desktopSpan="half">
                                        <Range
                                            label="Width — default"
                                            value={componentVariables["sidebar-width-default"].value}
                                            onChange={(e) => handleVariableChange("sidebar-width-default", e.target.value)}
                                            suffix={componentVariables["sidebar-width-default"].unit}
                                            min={48} max={320} step={1}
                                        />
                                    </Portion>

                                    {/* WIDTH ====================================================================== */}
                                    <Portion desktopSpan="half">
                                        <Range
                                            label="Width — collapsed"
                                            value={componentVariables["sidebar-width-default"].value}
                                            onChange={(e) => handleVariableChange("sidebar-width-default", e.target.value)}
                                            min={0} max={50} step={1}
                                            suffix={componentVariables["sidebar-width-default"].unit}
                                        />
                                    </Portion>
                                </Row>
                            </Portion>
                        </Row>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default ToastDocs;
