"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";
import Link from "next/link";

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
    Range,
    SidebarHeader,
    SidebarWrapper,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarFooter,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-sidebar.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";
import FictoanLogo from "@/assets/images/fictoan-logo.svg";
import FictoanIcon from "@/assets/images/fictoan-icon.svg";
import ThemeSwitchIcon from "@/assets/icons/theme.svg";
import HomeIcon from "@/assets/icons/home.svg";

const SidebarDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================

    // CUSTOMISE =======================================================================================================
    const [selectedPosition, setSelectedPosition] = useState("top");
    const [secondsToShowFor, setSecondsToShowFor] = useState(100);

    // THEME ===========================================================================================================


    return (
        <Article id="page-sidebar">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Sidebar</Heading>
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
                <Portion desktopSpan="half" id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children isFullHeight
                    >
                        <SidebarWrapper>
                            {/* HEADER ==================================== */}
                            <SidebarHeader>
                                <div className="header-logo">
                                    <FictoanLogo />
                                </div>

                                <div className="header-icon">
                                    <FictoanIcon />
                                </div>
                            </SidebarHeader>

                            {/* MAIN BODY ================================= */}
                            <Link href="/getting-started">
                                <SidebarItem>
                                    <SidebarItemIcon iconType="stroked">
                                        <HomeIcon />
                                    </SidebarItemIcon>
                                    <SidebarItemText weight="400" linkText="Home" />
                                </SidebarItem>
                            </Link>

                            {/* FOOTER ==================================== */}
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
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `<SidebarWrapper>`,
                                            `    {/* HEADER ==================================== */}`,
                                            `    <SidebarHeader>`,
                                            `        <div className="header-logo">`,
                                            `            <FictoanLogo />`,
                                            `        </div>`,
                                            ``,
                                            `        <div className="header-icon">`,
                                            `            <FictoanIcon />`,
                                            `        </div>`,
                                            `    </SidebarHeader>\n`,
                                            `    {/* MAIN BODY ================================= */}`,
                                            `    <Link href="/getting-started">`,
                                            `        <SidebarItem>`,
                                            `            <SidebarItemIcon iconType="stroked">`,
                                            `                <HomeIcon />`,
                                            `            </SidebarItemIcon>`,
                                            `            <SidebarItemText weight="400" linkText="Home" />`,
                                            `        </SidebarItem>`,
                                            `    </Link>\n`,
                                            `    {/* FOOTER ==================================== */}`,
                                            `    <SidebarFooter>`,
                                            `        <SidebarItem>`,
                                            `            <SidebarItemIcon iconType="stroked">`,
                                            `                <ThemeSwitchIcon />`,
                                            `            </SidebarItemIcon>`,
                                            `            <SidebarItemText weight="400" linkText="Theme" />`,
                                            `        </SidebarItem>`,
                                            `    </SidebarFooter>`,
                                            `</SidebarWrapper>`,
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
            </Row>

            <Row horizontalPadding="small">
                <Portion>
                    <Card padding="micro" shape="rounded">
                        <Header verticallyCentreItems pushItemsToEnds>
                            <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                Set values globally
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
                                {/* COMMON ///////////////////////////////////////////////////////////////////////// */}
                                <Row marginBottom="none">
                                    <Portion>
                                        <Text weight="700">Common</Text>
                                    </Portion>

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
                                            isFullWidth marginBottom="micro"
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
                                            value={componentVariables["sidebar-width-collapsed"].value}
                                            onChange={(e) => handleVariableChange("sidebar-width-collapsed", e.target.value)}
                                            min={32} max={80} step={1}
                                            suffix={componentVariables["sidebar-width-default"].unit}
                                        />
                                    </Portion>
                                </Row>

                                <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />

                                {/* HEADER ///////////////////////////////////////////////////////////////////////// */}
                                <Row marginBottom="none">
                                    <Portion>
                                        <Text weight="700">Header</Text>
                                    </Portion>

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
                                            defaultValue={componentVariables["sidebar-header-bg"].defaultValue || "select-a-colour"}
                                            onChange={(e) => handleVariableChange("sidebar-header-bg", e.target.value)}
                                            isFullWidth marginBottom="micro"
                                        />
                                    </Portion>

                                    {/* WIDTH ====================================================================== */}
                                    <Portion desktopSpan="half">
                                        <Select
                                            label="Border bottom"
                                            options={[{
                                                label    : "Select a colour",
                                                value    : "select-a-colour",
                                                disabled : true,
                                                selected : true,
                                            }, ...colourOptions]}
                                            defaultValue={componentVariables["sidebar-header-border-bottom"].defaultValue || "select-a-colour"}
                                            onChange={(e) => handleVariableChange("sidebar-header-border-bottom", e.target.value)}
                                            isFullWidth marginBottom="micro"
                                        />
                                    </Portion>

                                    {/* FULL LOGO ================================================================== */}
                                    <Portion desktopSpan="half">
                                        <Range
                                            label="Default logo width"
                                            value={componentVariables["sidebar-header-logo-width"].value}
                                            onChange={(e) => handleVariableChange("sidebar-header-logo-width", e.target.value)}
                                            suffix={componentVariables["sidebar-header-logo-width"].unit}
                                            min={32} max={80} step={1}
                                        />
                                    </Portion>

                                    {/* COLLAPSED ICON ============================================================= */}
                                    <Portion desktopSpan="half">
                                        <Range
                                            label="Collapsed icon width"
                                            value={componentVariables["sidebar-header-icon-width"].value}
                                            onChange={(e) => handleVariableChange("sidebar-header-icon-width", e.target.value)}
                                            suffix={componentVariables["sidebar-header-icon-width"].unit}
                                            min={32} max={80} step={1}
                                        />
                                    </Portion>
                                </Row>

                                <HRule kind="secondary" horizontalMargin="none" verticalMargin="micro" />
                            </Portion>
                        </Row>
                    </Card>
                </Portion>
            </Row>
        </Article>
    );
};

export default SidebarDocs;
