import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    ExpandableContent,
    HRule,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarWrapper,
    Text
} from "fictoan-react";


import { ReactComponent as FictoanLogo } from "../../assets/images/logo.svg";
import { ReactComponent as FictoanIcon } from "../../assets/images/logomark.svg";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ManifestoIcon } from "../../assets/icons/manifesto.svg";

import { ReactComponent as BaseElementIcon } from "../../assets/icons/building-block.svg";
import { ReactComponent as ThemeIcon } from "../../assets/icons/paintbrush.svg";
import { ReactComponent as ToolboxIcon } from "../../assets/icons/toolbox.svg";
import { ReactComponent as LayoutIcon } from "../../assets/icons/layout.svg";
import { ReactComponent as TypographyIcon } from "../../assets/icons/typography.svg";
import { ReactComponent as ColourIcon } from "../../assets/icons/water.svg";

import { ReactComponent as FormWrapperIcon } from "../../assets/icons/writing.svg";

import { ReactComponent as ThemeSwitchIcon } from "../../assets/icons/theme.svg";
import { ReactComponent as CheckboxIcon } from "../../assets/icons/checkbox.svg";
import { ReactComponent as RadioButtonIcon } from "../../assets/icons/radio-button.svg";
import { ReactComponent as InputFieldIcon } from "../../assets/icons/input.svg";
import { ReactComponent as ProgressBarIcon } from "../../assets/icons/progress-bar.svg";
import { ReactComponent as SelectIcon } from "../../assets/icons/dropdown.svg";

import { ReactComponent as BadgeIcon } from "../../assets/icons/badge.svg";
import { ReactComponent as BreadcrumbsIcon } from "../../assets/icons/breadcrumbs.svg";
import { ReactComponent as ButtonIcon } from "../../assets/icons/button.svg";
import { ReactComponent as CardIcon } from "../../assets/icons/card.svg";
import { ReactComponent as HRuleIcon } from "../../assets/icons/hrule.svg";
import { ReactComponent as CodeIcon } from "../../assets/icons/braces.svg";
import { ReactComponent as InfoPanelIcon } from "../../assets/icons/info-panel.svg";
import { ReactComponent as NotificationIcon } from "../../assets/icons/notification.svg";
import { ReactComponent as SidebarIcon } from "../../assets/icons/sidebar.svg";
import { ReactComponent as TableIcon } from "../../assets/icons/table.svg";
import { ReactComponent as TabsIcon } from "../../assets/icons/tabs.svg";
import { ReactComponent as ToastIcon } from "../../assets/icons/toast.svg";


export const Sidebar = ({toggleTheme}) => {
    const [sidebarState, setSidebarState] = useState("");
    // const themeContext = React.useContext(ThemeContext);

    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    }

    return (
        <SidebarWrapper className={`${sidebarState === "collapsed" ? "collapsed" : ""}`}>
            <SidebarHeader isSticky onClick={headerOnClick}>
                <div className="header-logo">
                    <FictoanLogo />
                </div>

                <div className="header-icon">
                    <FictoanIcon />
                </div>
            </SidebarHeader>

            {/*  COMPONENTS  =============================================  */}
            <NavLink exact to="/">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Home" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/manifesto">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ManifestoIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Manifesto" />
                </SidebarItem>
            </NavLink>

            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />


            {/*  BASICS  =================================================  */}

            {/*  /////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////  */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="OVERVIEW"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            <NavLink exact to="/getting-started">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HomeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Getting started" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/base-element">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BaseElementIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Base element" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/theme">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ThemeIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/utilities">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ToolboxIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Utilities" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/layout">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <LayoutIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Layout" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/typography">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TypographyIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Typography" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/colour">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ColourIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Colour" />
                </SidebarItem>
            </NavLink>

            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

            {/*  /////////////////////////////////////////////////////////  */}
            {/*  FORM  */}
            {/*  /////////////////////////////////////////////////////////  */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="FORM"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            <NavLink exact to="/components/form">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <FormWrapperIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Form wrapper" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/input-field">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <InputFieldIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Input field" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/checkbox">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CheckboxIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="CheckBox / Switch" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/radio-button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <RadioButtonIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Radio button" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/progress-bar">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ProgressBarIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Progress bar" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/select">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <SelectIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Select" />
                </SidebarItem>
            </NavLink>

            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

            {/*  /////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////  */}
            <SidebarItem>
                <SidebarItemIcon iconType="stroked" />
                <SidebarItemText
                    linkText="COMPONENTS"
                    weight="600" textColour="slate-60" size="small"
                />
            </SidebarItem>

            {/*  BADGE  ==================================================  */}
            <NavLink exact to="/components/badge">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BadgeIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Badge" />
                </SidebarItem>
            </NavLink>

            {/*  BREADCRUMBS  ============================================  */}
            <NavLink exact to="/components/breadcrumbs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <BreadcrumbsIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Breadcrumbs" />
                </SidebarItem>
            </NavLink>

            {/*  BUTTON  =================================================  */}
            <NavLink exact to="/components/button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ButtonIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Button" />
                </SidebarItem>
            </NavLink>

            {/*  CARD  ===================================================  */}
            <NavLink exact to="/components/card">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CardIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Card" />
                </SidebarItem>
            </NavLink>

            {/*  CODE BLOCK  =============================================  */}
            <NavLink exact to="/components/code-block">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <CodeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Code block" />
                </SidebarItem>
            </NavLink>

            {/*  H-RULE  =================================================  */}
            <NavLink exact to="/components/hrule">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <HRuleIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="H-Rule" />
                </SidebarItem>
            </NavLink>

            {/*  INFO PANEL  =============================================  */}
            <NavLink exact to="/components/info-panel">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <InfoPanelIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Info panel" />
                </SidebarItem>
            </NavLink>

            {/*  NOTIFICATIONS  ==========================================  */}
            <NavLink exact to="/components/notification">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <NotificationIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Notifications" />
                </SidebarItem>
            </NavLink>

            {/*  SIDEBAR  ================================================  */}
            <ExpandableContent summary={(
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <SidebarIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Sidebar" />
                </SidebarItem>
            )}>

                <NavLink exact to="/components/sidebar-wrapper">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Wrapper" />
                    </SidebarItem>
                </NavLink>

                <NavLink exact to="/components/sidebar-item">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Item" />
                    </SidebarItem>
                </NavLink>

                <NavLink exact to="/components/expandable-group">
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Expandable group" />
                    </SidebarItem>
                </NavLink>
            </ExpandableContent>

            {/*  TABLE  ==================================================  */}
            <NavLink exact to="/components/table">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TableIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Table" />
                </SidebarItem>
            </NavLink>

            {/*  TABS  ===================================================  */}
            <NavLink exact to="/components/tabs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <TabsIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Tabs" />
                </SidebarItem>
            </NavLink>

            {/*  TOAST  ==================================================  */}
            <NavLink exact to="/components/toast">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ToastIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Toast" />
                </SidebarItem>
            </NavLink>

            {/*  FOOTER  =================================================  */}
            <SidebarFooter>
                <SidebarItem
                    onClick={toggleTheme}
                >
                    <SidebarItemIcon iconType="stroked">
                        <ThemeSwitchIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </SidebarFooter>
        </SidebarWrapper>
    )
}
