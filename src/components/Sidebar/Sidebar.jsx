import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import {
    HRule,
    SidebarFooter,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemsGroup,
    SidebarItemsGroupHeader,
    SidebarItemText,
    SidebarNestedLinks,
    SidebarWrapper,
    Text
} from "fictoan-react";


import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as ManifestoIcon } from "../../assets/icons/manifesto.svg";
import { ReactComponent as LayoutIcon } from "../../assets/icons/layout.svg";
import { ReactComponent as TypographyIcon } from "../../assets/icons/typography.svg";
import { ReactComponent as ColourIcon } from "../../assets/icons/colours.svg";
import { ReactComponent as CardIcon } from "../../assets/icons/card.svg";
import { ReactComponent as HRuleIcon } from "../../assets/icons/hrule.svg";
import { ReactComponent as ThemeIcon } from "../../assets/icons/theme.svg";


export const Sidebar = ({toggleTheme}) => {
    const [sidebarState, setSidebarState] = useState("");
    // const themeContext = React.useContext(ThemeContext);

    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    }

    return (
        <SidebarWrapper className={`${sidebarState === "collapsed" ? "collapsed" : ""}`}>
            <SidebarHeader onClick={headerOnClick}>
                <div className="header-logo">
                    <Text>Fictoan</Text>
                </div>
            </SidebarHeader>

            {/*  =========================================================  */}
            {/*  INTRO  ==================================================  */}
            {/*  =========================================================  */}
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
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Base element" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/theme">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                        <ColourIcon />
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/utilities">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
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
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Form wrapper" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/input-field">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Input field" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/checkbox">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="CheckBox / Switch" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/radio-button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Radio button" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/dropdown">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Dropdown" />
                </SidebarItem>
            </NavLink>

            <NavLink exact to="/components/progress-bar">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>

                    <SidebarItemText weight="400" linkText="Progress bar" />
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

            {/*  BREADCRUMBS  ============================================  */}
            <NavLink exact to="/components/breadcrumbs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Breadcrumbs" />
                </SidebarItem>
            </NavLink>

            {/*  BUTTON  =================================================  */}
            <NavLink exact to="/components/button">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Button" />
                </SidebarItem>
            </NavLink>

            {/*  CARD  ===================================================  */}
            <NavLink exact to="/components/card">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Card" />
                </SidebarItem>
            </NavLink>

            {/*  CODE BLOCK  =============================================  */}
            <NavLink exact to="/components/code-block">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
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
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Info panel" />
                </SidebarItem>
            </NavLink>

            {/*  NOTIFICATIONS  ==========================================  */}
            <NavLink exact to="/components/notification">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Notification" />
                </SidebarItem>
            </NavLink>

            {/*  SIDEBAR  ================================================  */}
            <SidebarItemsGroup>
                <SidebarItemsGroupHeader open>
                    <SidebarItem>
                        <SidebarItemIcon iconType="stroked">
                        </SidebarItemIcon>
                        <SidebarItemText weight="400" linkText="Sidebar" />
                    </SidebarItem>
                </SidebarItemsGroupHeader>

                <SidebarNestedLinks>
                    <NavLink exact to="/components/sidebar-wrapper">
                        <SidebarItem>
                            <SidebarItemIcon iconType="stroked">
                            </SidebarItemIcon>
                            <SidebarItemText weight="400" linkText="Overview" />
                        </SidebarItem>
                    </NavLink>

                    <NavLink exact to="/components/sidebar-header">
                        <SidebarItem>
                            <SidebarItemIcon iconType="stroked">
                            </SidebarItemIcon>
                            <SidebarItemText weight="400" linkText="Item" />
                        </SidebarItem>
                    </NavLink>

                    <NavLink exact to="/components/sidebar-header">
                        <SidebarItem>
                            <SidebarItemIcon iconType="stroked">
                            </SidebarItemIcon>
                            <SidebarItemText weight="400" linkText="Expandable group" />
                        </SidebarItem>
                    </NavLink>
                </SidebarNestedLinks>
            </SidebarItemsGroup>

            {/*  TABS  ===================================================  */}
            <NavLink exact to="/components/tabs">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Tabs" />
                </SidebarItem>
            </NavLink>

            {/*  TABLE  ==================================================  */}
            <NavLink exact to="/components/table">
                <SidebarItem>
                    <SidebarItemIcon iconType="stroked">
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Table" />
                </SidebarItem>
            </NavLink>

            <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

            {/*  COMPONENTS  =============================================  */}



            {/*  FOOTER  =================================================  */}
            <SidebarFooter>
                <SidebarItem
                    onClick={toggleTheme}
                >
                    <SidebarItemIcon iconType="stroked">
                        <ThemeIcon />
                    </SidebarItemIcon>
                    <SidebarItemText weight="400" linkText="Theme" />
                </SidebarItem>
            </SidebarFooter>
        </SidebarWrapper>
    )
}
