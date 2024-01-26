// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import React, { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarFooter,
    HRule,
    ExpandableContent,
    Div,
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////

// STYLES //////////////////////////////////////////////////////////////////////

// ASSETS //////////////////////////////////////////////////////////////////////
import FictoanLogo from "@/assets/images/fictoan-logo.svg";
import FictoanIcon from "@/assets/images/fictoan-icon.svg";
import HomeIcon from "@/assets/icons/home.svg";
import ManifestoIcon from "@/assets/icons/manifesto.svg";
import BaseElementIcon from "@/assets/icons/building-block.svg";
import ThemeIcon from "@/assets/icons/paintbrush.svg";
import ToolboxIcon from "@/assets/icons/toolbox.svg";
import LayoutIcon from "@/assets/icons/layout.svg";
import TypographyIcon from "@/assets/icons/typography.svg";
import ColourIcon from "@/assets/icons/water.svg";
import ThemeSwitchIcon from "@/assets/icons/theme.svg";
import FormWrapperIcon from "@/assets/icons/writing.svg";
import InputFieldIcon from "@/assets/icons/input.svg";
import CheckboxIcon from "@/assets/icons/checkbox.svg";
import RadioButtonIcon from "@/assets/icons/radio-button.svg";
import ProgressBarIcon from "@/assets/icons/progress-bar.svg";
import SelectIcon from "@/assets/icons/dropdown.svg";
import BadgeIcon from "@/assets/icons/badge.svg";
import BreadcrumbsIcon from "@/assets/icons/breadcrumbs.svg";
import ButtonIcon from "@/assets/icons/button.svg";
import CalloutIcon from "@/assets/icons/callout.svg";
import CardIcon from "@/assets/icons/card.svg";
import CodeIcon from "@/assets/icons/braces.svg";
import HRuleIcon from "@/assets/icons/hrule.svg";
import InfoPanelIcon from "@/assets/icons/info-panel.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import SidebarIcon from "@/assets/icons/sidebar.svg";
import TableIcon from "@/assets/icons/table.svg";
import TabsIcon from "@/assets/icons/tabs.svg";
import ToastIcon from "@/assets/icons/toast.svg";


export const Sidebar = ({ sidebarState, setSidebarState, toggleTheme, showSidebarOnMobile, setShowSidebarOnMobile }) => {
    const ref = useRef(null);

    const openMobileSidebar = () => {
        setShowSidebarOnMobile(true);
    };

    const closeMobileSidebar = () => {
        setShowSidebarOnMobile(false);
    }

    const pathname = usePathname();

    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    };

    return (
        <SidebarWrapper
            ref={ref}
            showMobileSidebar={showSidebarOnMobile}
            closeOnClickOutside={closeMobileSidebar}
            className={`${sidebarState === "collapsed" ? "collapsed" : ""}`}
        >
            {/* //////////////////////////////////////////////////////////// */}
            {/* HEADER */}
            {/* //////////////////////////////////////////////////////////// */}
            <SidebarHeader isSticky onClick={headerOnClick}>
                <div className="header-logo">
                    <FictoanLogo />
                </div>

                <div className="header-icon">
                    <FictoanIcon />
                </div>
            </SidebarHeader>

            <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Home" />
                </SidebarItem>
            </Link>

            <Link href="/manifesto" className={`${pathname === "/manifesto" ? "active" : ""}`}>
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ManifestoIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Manifesto" />
                </SidebarItem>
            </Link>

            <HRule bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />


            {/* //////////////////////////////////////////////////////////// */}
            {/* OVERVIEW */}
            {/* //////////////////////////////////////////////////////////// */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="OVERVIEW"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            <Link href="/getting-started">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Getting started" />
                </SidebarItem>
            </Link>

            <Link href="/base-element">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BaseElementIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Base element" />
                </SidebarItem>
            </Link>

            <Link href="/theme" className={`${pathname === "/theme" ? "active" : ""}`}>
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ThemeIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </Link>

            <Link href="/layout">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <LayoutIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Layout" />
                </SidebarItem>
            </Link>

            <Link href="/typography">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TypographyIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Typography" />
                </SidebarItem>
            </Link>

            <Link href="/colour" className={`${pathname === "/colour" ? "active" : ""}`}>
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ColourIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Colour" />
                </SidebarItem>
            </Link>

            <HRule bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />

            {/* //////////////////////////////////////////////////////////// */}
            {/* FORM */}
            {/* //////////////////////////////////////////////////////////// */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="FORM"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            <Link href="/components/form/form-wrapper">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <FormWrapperIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Form wrapper" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/input-field">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <InputFieldIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Input field" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/pin-input-field">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <InputFieldIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Pin Input" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/checkbox">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CheckboxIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Checkbox / Switch" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/radio-button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <RadioButtonIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Radio button" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/progress-bar">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ProgressBarIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Progress bar" />
                </SidebarItem>
            </Link>

            <Link href="/components/form/select">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <SelectIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Select" />
                </SidebarItem>
            </Link>

            <HRule bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />

            {/* //////////////////////////////////////////////////////////// */}
            {/* COMPONENTS */}
            {/* //////////////////////////////////////////////////////////// */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="COMPONENTS"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            {/* BADGE ====================================================== */}
            <Link href="/components/badge">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BadgeIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Badge" />
                </SidebarItem>
            </Link>

            {/* BREADCRUMBS ================================================ */}
            <Link href="/components/breadcrumbs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BreadcrumbsIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Breadcrumbs" />
                </SidebarItem>
            </Link>

            {/* BUTTON ===================================================== */}
            <Link href="/components/button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ButtonIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Button" />
                </SidebarItem>
            </Link>

            {/* CALLOUT ==================================================== */}
            <Link href="/components/callout">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CalloutIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Callout" />
                </SidebarItem>
            </Link>

            {/* CARD ======================================================= */}
            <Link href="/components/card">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CardIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Card" />
                </SidebarItem>
            </Link>

            {/* CODE BLOCK ================================================= */}
            <Link href="/components/code-block">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CodeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Code block" />
                </SidebarItem>
            </Link>

            {/* DRAWER ===================================================== */}
            <Link href="/components/drawer">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <InfoPanelIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Drawer" />
                </SidebarItem>
            </Link>

            {/* H-RULE ===================================================== */}
            <Link href="/components/h-rule">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HRuleIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="H-Rule" />
                </SidebarItem>
            </Link>

            {/* NOTIFICATIONS ============================================== */}
            <Link href="/components/notifications">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <NotificationIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Notifications" />
                </SidebarItem>
            </Link>

            {/* SIDEBAR ==================================================== */}
            <ExpandableContent summary={(
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <SidebarIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Sidebar" />
                </SidebarItem>
            )}>

                <Link href="/components/sidebar-wrapper">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Wrapper" />
                    </SidebarItem>
                </Link>

                <Link href="/components/sidebar-item">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Item" />
                    </SidebarItem>
                </Link>

                <Link href="/components/expandable-group">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Expandable group" />
                    </SidebarItem>
                </Link>
            </ExpandableContent>

            {/* TABLE ====================================================== */}
            <Link href="/components/table">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TableIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Table" />
                </SidebarItem>
            </Link>

            {/* TABS ======================================================= */}
            <Link href="/components/tabs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TabsIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Tabs" />
                </SidebarItem>
            </Link>

            {/* TOAST ====================================================== */}
            <Link href="/components/toast">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ToastIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Toast" />
                </SidebarItem>
            </Link>

            {/* //////////////////////////////////////////////////////////// */}
            {/* FOOTER */}
            {/* //////////////////////////////////////////////////////////// */}
            <SidebarFooter>
                <SidebarItem onClick={toggleTheme}>
                    <SidebarItemIcon iconType="stroked">
                        <ThemeSwitchIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </SidebarFooter>
        </SidebarWrapper>
    );
};
