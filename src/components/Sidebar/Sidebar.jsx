// EXTERNAL DEPS ///////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////////////////////////////////////////////
import {
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarFooter,
    Divider,
    Accordion,
    Div,
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////////////////////////////////////////////

// STYLES //////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ASSETS //////////////////////////////////////////////////////////////////////////////////////////////////////////////
import AccordionIcon from "@/assets/icons/accordion.svg";
import BadgeIcon from "@/assets/icons/badge.svg";
import BaseElementIcon from "@/assets/icons/building-block.svg";
import BreadcrumbsIcon from "@/assets/icons/breadcrumbs.svg";
import ButtonIcon from "@/assets/icons/button.svg";
import CalloutIcon from "@/assets/icons/callout.svg";
import CardIcon from "@/assets/icons/card.svg";
import CheckboxIcon from "@/assets/icons/checkbox.svg";
import CodeIcon from "@/assets/icons/braces.svg";
import ColourIcon from "@/assets/icons/water.svg";
import DividerIcon from "@/assets/icons/hrule.svg";
import FictoanIcon from "@/assets/images/fictoan-icon.svg";
import FictoanLogo from "@/assets/images/fictoan-logo.svg";
import FormWrapperIcon from "@/assets/icons/writing.svg";
import HomeIcon from "@/assets/icons/home.svg";
import InfoPanelIcon from "@/assets/icons/info-panel.svg";
import InputFieldIcon from "@/assets/icons/input.svg";
import LayoutIcon from "@/assets/icons/layout.svg";
import ManifestoIcon from "@/assets/icons/manifesto.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import ProgressBarIcon from "@/assets/icons/progress-bar.svg";
import RadioButtonIcon from "@/assets/icons/radio-button.svg";
import SelectIcon from "@/assets/icons/dropdown.svg";
import SidebarIcon from "@/assets/icons/sidebar.svg";
import TableIcon from "@/assets/icons/table.svg";
import TabsIcon from "@/assets/icons/tabs.svg";
import ThemeIcon from "@/assets/icons/paintbrush.svg";
import ThemeSwitchIcon from "@/assets/icons/theme.svg";
import ToastIcon from "@/assets/icons/toast.svg";
import ToolboxIcon from "@/assets/icons/toolbox.svg";
import TypographyIcon from "@/assets/icons/typography.svg";


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
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* HEADER */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <SidebarHeader isSticky onClick={headerOnClick}>
                <div className="header-logo">
                    <FictoanLogo />
                </div>

                <div className="header-icon">
                    <FictoanIcon />
                </div>
            </SidebarHeader>

            <Link href="/" className={`${pathname === "/" ? "active" : ""}`}>
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Home" />
                </SidebarItem>
            </Link>

            <Link href="/manifesto" className={`${pathname === "/manifesto" ? "active" : ""}`}>
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ManifestoIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Manifesto" />
                </SidebarItem>
            </Link>

            <Divider bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />


            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* OVERVIEW */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="OVERVIEW"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            {/* GETTING STARTED ==================================================================================== */}
            <Link href="/getting-started">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Getting started" />
                </SidebarItem>
            </Link>

            {/* BASE ELEMENT ======================================================================================= */}
            <Link href="/base-element">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <BaseElementIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Base element" />
                </SidebarItem>
            </Link>

            {/* THEME ============================================================================================== */}
            <Link href="/theme" className={`${pathname === "/theme" ? "active" : ""}`}>
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ThemeIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </Link>

            {/* LAYOUT ============================================================================================= */}
            <Link href="/layout">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <LayoutIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Layout" />
                </SidebarItem>
            </Link>

            {/* TYPOGRAPHY ========================================================================================= */}
            <Link href="/typography">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <TypographyIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Typography" />
                </SidebarItem>
            </Link>

            {/* COLOUR ============================================================================================= */}
            <Link href="/colour" className={`${pathname === "/colour" ? "active" : ""}`}>
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ColourIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Colour" />
                </SidebarItem>
            </Link>

            <Divider bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ELEMENTS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="COMPONENTS"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            {/* ACCORDION ========================================================================================== */}
            <Link href="/components/accordion">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <AccordionIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Accordion" />
                </SidebarItem>
            </Link>

            {/* BADGE ============================================================================================== */}
            <Link href="/components/badge">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <BadgeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Badge" />
                </SidebarItem>
            </Link>

            {/* BREADCRUMBS ======================================================================================== */}
            <Link href="/components/breadcrumbs">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <BreadcrumbsIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Breadcrumbs" />
                </SidebarItem>
            </Link>

            {/* BUTTON ============================================================================================= */}
            <Link href="/components/button">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ButtonIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Button" />
                </SidebarItem>
            </Link>

            {/* CALLOUT ============================================================================================ */}
            <Link href="/components/callout">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <CalloutIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Callout" />
                </SidebarItem>
            </Link>

            {/* CARD =============================================================================================== */}
            <Link href="/components/card">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <CardIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Card" />
                </SidebarItem>
            </Link>

            {/* CHECKBOX / SWITCH ================================================================================== */}
            <Link href="/components/checkbox">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <CheckboxIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Checkbox / Switch" />
                </SidebarItem>
            </Link>

            {/* CODE BLOCK ========================================================================================= */}
            <Link href="/components/code-block">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <CodeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Code block" />
                </SidebarItem>
            </Link>

            {/* DIVIDER ============================================================================================ */}
            <Link href="/components/divider">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <DividerIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Divider" />
                </SidebarItem>
            </Link>

            {/* DRAWER ============================================================================================= */}
            <Link href="/components/drawer">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <InfoPanelIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Drawer" />
                </SidebarItem>
            </Link>

            {/* FORM WRAPPER ======================================================================================= */}
            <Link href="/components/form-wrapper">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <FormWrapperIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Form wrapper" />
                </SidebarItem>
            </Link>

            {/* INPUT FIELD ======================================================================================== */}
            <Link href="/components/input-field">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <InputFieldIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Input field" />
                </SidebarItem>
            </Link>

            {/* NOTIFICATIONS ====================================================================================== */}
            <Link href="/components/notifications">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <NotificationIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Notifications" />
                </SidebarItem>
            </Link>

            {/* OPTION CARDS ======================================================================================= */}
            <Link href="/components/option-cards">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <NotificationIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Option cards" />
                </SidebarItem>
            </Link>

            {/* PIN INPUT FIELD ==================================================================================== */}
            <Link href="/components/pin-input-field">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <InputFieldIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Pin Input" />
                </SidebarItem>
            </Link>

            {/* PROGRESS BAR ======================================================================================= */}
            <Link href="/components/meter">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ProgressBarIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Meter" />
                </SidebarItem>
            </Link>

            {/* PROGRESS BAR ======================================================================================= */}
            <Link href="/components/progress-bar">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ProgressBarIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Progress bar" />
                </SidebarItem>
            </Link>

            {/* RADIO BUTTON ======================================================================================= */}
            <Link href="/components/radio-button">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <RadioButtonIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Radio button" />
                </SidebarItem>
            </Link>

            {/* RADIO TABS ========================================================================================= */}
            <Link href="/components/radio-tab-group">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <TabsIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Radio tab group" />
                </SidebarItem>
            </Link>

            {/* SELECT ============================================================================================= */}
            <Link href="/components/select">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <SelectIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Select" />
                </SidebarItem>
            </Link>

            {/* SIDEBAR ============================================================================================ */}
            <Accordion summary={(
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <SidebarIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Sidebar" />
                </SidebarItem>
            )}>
                <Link href="/components/sidebar">
                    <SidebarItem onClick={closeMobileSidebar}>
                        <SidebarItemIcon iconType="stroked">
                            <SidebarIcon />
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Sidebar" />
                    </SidebarItem>
                </Link>

                <Link href="/components/sidebar-wrapper">
                    <SidebarItem onClick={closeMobileSidebar}>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Wrapper" />
                    </SidebarItem>
                </Link>

                <Link href="/components/sidebar-item">
                    <SidebarItem onClick={closeMobileSidebar}>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Item" />
                    </SidebarItem>
                </Link>

                <Link href="/components/expandable-group">
                    <SidebarItem onClick={closeMobileSidebar}>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Expandable group" />
                    </SidebarItem>
                </Link>
            </Accordion>

            {/* TABLE ============================================================================================== */}
            <Link href="/components/table">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <TableIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Table" />
                </SidebarItem>
            </Link>

            {/* TABS =============================================================================================== */}
            <Link href="/components/tabs">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <TabsIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Tabs" />
                </SidebarItem>
            </Link>

            {/* TOAST ============================================================================================== */}
            <Link href="/components/toast">
                <SidebarItem onClick={closeMobileSidebar}>
                    <SidebarItemIcon iconType="stroked">
                        <ToastIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Toast" />
                </SidebarItem>
            </Link>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* FOOTER */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
