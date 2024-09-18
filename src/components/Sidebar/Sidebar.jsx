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
  Divider,
  Accordion,
  Div,
} from "fictoan-react";

import { useTheme } from "fictoan-react";

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
import DividerIcon from "@/assets/icons/hrule.svg";
import InfoPanelIcon from "@/assets/icons/info-panel.svg";
import NotificationIcon from "@/assets/icons/notification.svg";
import SidebarIcon from "@/assets/icons/sidebar.svg";
import TableIcon from "@/assets/icons/table.svg";
import TabsIcon from "@/assets/icons/tabs.svg";
import ToastIcon from "@/assets/icons/toast.svg";

export const Sidebar = ({
  sidebarState,
  setSidebarState,
  showSidebarOnMobile,
  setShowSidebarOnMobile,
}) => {
  const ref = useRef(null);

  const { theme, setTheme } = useTheme();

  const openMobileSidebar = () => {
    setShowSidebarOnMobile(true);
  };

  const closeMobileSidebar = () => {
    setShowSidebarOnMobile(false);
  };

  const pathname = usePathname();

  const headerOnClick = () => {
    setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
  };

  const toggleTheme = () => {
    theme === "theme-light" ? setTheme("dark") : setTheme("light");
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
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <HomeIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Home" />
        </SidebarItem>
      </Link>

      <Link
        href="/manifesto"
        className={`${pathname === "/manifesto" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ManifestoIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Manifesto" />
        </SidebarItem>
      </Link>

      <Divider bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />

      {/* //////////////////////////////////////////////////////////// */}
      {/* OVERVIEW */}
      {/* //////////////////////////////////////////////////////////// */}
      <SidebarItem>
        <SidebarItemIcon iconType="stroked" />
        <SidebarItemText
          linkText="OVERVIEW"
          weight="600"
          textColour="slate-60"
          size="small"
        />
      </SidebarItem>

      <Link
        href="/getting-started"
        className={`${pathname === "/getting-started" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <HomeIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Getting started" />
        </SidebarItem>
      </Link>

      <Link
        href="/base-element"
        className={`${pathname === "/base-element" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <BaseElementIcon />
          </SidebarItemIcon>

          <SidebarItemText weight="400" linkText="Base element" />
        </SidebarItem>
      </Link>

      <Link
        href="/theme"
        className={`${pathname === "/theme" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ThemeIcon />
          </SidebarItemIcon>

          <SidebarItemText weight="400" linkText="Theme" />
        </SidebarItem>
      </Link>

      <Link
        href="/layout"
        className={`${pathname === "/layout" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <LayoutIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Layout" />
        </SidebarItem>
      </Link>

      <Link
        href="/typography"
        className={`${pathname === "/typography" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <TypographyIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Typography" />
        </SidebarItem>
      </Link>

      <Link
        href="/colour"
        className={`${pathname === "/colour" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ColourIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Colour" />
        </SidebarItem>
      </Link>

      <Divider bgColour="grey-dark-70" marginTop="micro" marginBottom="micro" />

      {/* //////////////////////////////////////////////////////////// */}
      {/* COMPONENTS */}
      {/* //////////////////////////////////////////////////////////// */}
      <SidebarItem>
        <SidebarItemIcon iconType="stroked" />
        <SidebarItemText
          linkText="COMPONENTS"
          weight="600"
          textColour="slate-60"
          size="small"
        />
      </SidebarItem>

      {/* ACCORDION ====================================================== */}
      <Link
        href="/components/accordion"
        className={`${pathname === "/components/accordion" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <BadgeIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Accordion" />
        </SidebarItem>
      </Link>

      {/* BADGE ====================================================== */}
      <Link
        href="/components/badge"
        className={`${pathname === "/components/badge" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <BadgeIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Badge" />
        </SidebarItem>
      </Link>

      {/* BREADCRUMBS ================================================ */}
      <Link
        href="/components/breadcrumbs"
        className={`${pathname === "/components/breadcrumbs" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <BreadcrumbsIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Breadcrumbs" />
        </SidebarItem>
      </Link>

      {/* BUTTON ===================================================== */}
      <Link
        href="/components/button"
        className={`${pathname === "/components/button" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ButtonIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Button" />
        </SidebarItem>
      </Link>

      {/* CALLOUT ==================================================== */}
      <Link
        href="/components/callout"
        className={`${pathname === "/components/callout" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <CalloutIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Callout" />
        </SidebarItem>
      </Link>

      {/* CARD ======================================================= */}
      <Link
        href="/components/card"
        className={`${pathname === "/components/card" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <CardIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Card" />
        </SidebarItem>
      </Link>

      {/* CHECKBOX / SWITCH ========================================== */}
      <Link
        href="/components/checkbox"
        className={`${pathname === "/components/checkbox" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <CheckboxIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Checkbox / Switch" />
        </SidebarItem>
      </Link>

      {/* CODE BLOCK ================================================= */}
      <Link
        href="/components/code-block"
        className={`${pathname === "/components/code-bloack" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <CodeIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Code block" />
        </SidebarItem>
      </Link>

      {/* DIVIDER ===================================================== */}
      <Link
        href="/components/divider"
        className={`${pathname === "/components/divider" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <DividerIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Divider" />
        </SidebarItem>
      </Link>

      {/* DRAWER ===================================================== */}
      <Link
        href="/components/drawer"
        className={`${pathname === "/components/drawer" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <InfoPanelIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Drawer" />
        </SidebarItem>
      </Link>

      {/* FORM WRAPPER =============================================== */}
      <Link
        href="/components/form-wrapper"
        className={`${pathname === "/components/form-wrapper" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <FormWrapperIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Form wrapper" />
        </SidebarItem>
      </Link>

      {/* INPUT FIELD ================================================ */}
      <Link
        href="/components/input-field"
        className={`${pathname === "/components/input-field" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <InputFieldIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Input field" />
        </SidebarItem>
      </Link>

      {/* PROGRESS BAR ============================================== */}
      <Link
        href="/components/meter"
        className={`${pathname === "/components/meter" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ProgressBarIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Meter" />
        </SidebarItem>
      </Link>

      {/* NOTIFICATIONS ============================================== */}
      <Link
        href="/components/notifications"
        className={`${
          pathname === "/components/notifications" ? "active" : ""
        }`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <NotificationIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Notifications" />
        </SidebarItem>
      </Link>

      {/* PIN INPUT FIELD ============================================ */}
      <Link
        href="/components/pin-input-field"
        className={`${
          pathname === "/components/pin-input-field" ? "active" : ""
        }`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <InputFieldIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Pin Input" />
        </SidebarItem>
      </Link>

      {/* PROGRESS BAR ============================================== */}
      <Link
        href="/components/progress-bar"
        className={`${pathname === "/components/progress-bar" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <ProgressBarIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Progress bar" />
        </SidebarItem>
      </Link>

      {/* RADIO BUTTON ============================================== */}
      <Link
        href="/components/radio-button"
        className={`${pathname === "/components/radio-button" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <RadioButtonIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Radio button" />
        </SidebarItem>
      </Link>

      {/* SELECT ===================================================== */}
      <Link
        href="/components/select"
        className={`${pathname === "/components/select" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <SelectIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Select" />
        </SidebarItem>
      </Link>

      {/* SIDEBAR ===================================================== */}
      {/* <Link href="/components/sidebar">
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <SidebarIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Sidebar" />
        </SidebarItem>
      </Link> */}

      {/* SIDEBAR ==================================================== */}
      {/* <Accordion
        summary={
          <SidebarItem>
            <SidebarItemIcon iconType="stroked">
              <SidebarIcon />
            </SidebarItemIcon>
            <SidebarItemText weight="400" linkText="Sidebar" />
          </SidebarItem>
        }
      >
        <Link
          href="/components/sidebar-wrapper"
          className={`${
            pathname === "/components/sidebar-wrapper" ? "active" : ""
          }`}
        >
          <SidebarItem onClick={closeMobileSidebar}>
            <SidebarItemIcon iconType="stroked"></SidebarItemIcon>
            <SidebarItemText weight="400" linkText="Wrapper" />
          </SidebarItem>
        </Link>

        <Link
          href="/components/sidebar-item"
          className={`${
            pathname === "/components/sidebar-items" ? "active" : ""
          }`}
        >
          <SidebarItem onClick={closeMobileSidebar}>
            <SidebarItemIcon iconType="stroked"></SidebarItemIcon>
            <SidebarItemText weight="400" linkText="Item" />
          </SidebarItem>
        </Link>

        <Link
          href="/components/expandable-group"
          className={`${
            pathname === "/components/expandable-group" ? "active" : ""
          }`}
        >
          <SidebarItem onClick={closeMobileSidebar}>
            <SidebarItemIcon iconType="stroked"></SidebarItemIcon>
            <SidebarItemText weight="400" linkText="Expandable group" />
          </SidebarItem>
        </Link>
      </Accordion> */}

      {/* TABLE ====================================================== */}
      <Link
        href="/components/table"
        className={`${pathname === "/components/table" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <TableIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Table" />
        </SidebarItem>
      </Link>

      {/* TABS ======================================================= */}
      <Link
        href="/components/tabs"
        className={`${pathname === "/components/tabs" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
          <SidebarItemIcon iconType="stroked">
            <TabsIcon />
          </SidebarItemIcon>
          <SidebarItemText weight="400" linkText="Tabs" />
        </SidebarItem>
      </Link>

      {/* TOAST ====================================================== */}
      <Link
        href="/components/toast"
        className={`${pathname === "/components/toast" ? "active" : ""}`}
      >
        <SidebarItem onClick={closeMobileSidebar}>
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
