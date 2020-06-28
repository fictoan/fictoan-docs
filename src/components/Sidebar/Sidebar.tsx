// External deps
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Internal deps
import {
    Heading,
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarLink,
    SidebarNestedLinks,
    // SidebarItemsGroup,
    // SidebarItemsGroupHeader,
} from "fictoan-react";

// Local components
import { scrollWithOffset, scrollToTop } from "../../utils/scrollHelpers";
import FICTOANIcon from "../../assets/images/fictoan-icon.svg";


export const Sidebar = () => {
    const [ sidebarState, setSidebarState ] = useState("");

    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    }

    return (
        <SidebarWrapper className={`${sidebarState === "collapsed" ? "collapsed" : ""}`}>
            <SidebarHeader onClick={headerOnClick}
            >
                <div className="header-logo">
                    <Heading as="h5">FICTOAN</Heading>
                </div>
                <div className="header-icon">
                    <img src={FICTOANIcon} alt="FICTOAN logo" />
                </div>
            </SidebarHeader>

            {/*  HOME  ///////////////////////////////////////////////////  */}
            <NavLink exact to="/">
                <SidebarItem>
                    <SidebarItemIcon />
                    <SidebarItemText linkText="Home" />
                </SidebarItem>
            </NavLink>

            {/*  GETTING STARTED  ////////////////////////////////////////  */}
            <SidebarLink>
                <NavLink exact to="/philosophy">
                    <SidebarItem onClick={scrollToTop}>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Philosophy" />
                    </SidebarItem>
                </NavLink>
            </SidebarLink>

            {/*  GETTING STARTED  ////////////////////////////////////////  */}
            <SidebarLink>
                <NavLink exact to="/getting-started">
                    <SidebarItem onClick={scrollToTop}>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Getting started" />
                    </SidebarItem>
                </NavLink>

                <SidebarNestedLinks>
                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/getting-started#first-steps"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="First steps" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/getting-started#nomenclature"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Nomenclature" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/getting-started#attributes"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Attributes" />
                        </SidebarItem>
                    </HashLink>
                </SidebarNestedLinks>
            </SidebarLink>

            {/*  LAYOUT  /////////////////////////////////////////////////  */}
            <SidebarLink>
                <NavLink to="/layout">
                    <SidebarItem onClick={scrollToTop}>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Layout" />
                    </SidebarItem>
                </NavLink>

                <SidebarNestedLinks>
                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/layout#basics"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Basics" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/layout#add-content"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Add content" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/layout#responsiveness"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Responsiveness" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/layout#content-padding"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Content padding" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/layout#gutter-sizing"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Gutter sizing" />
                        </SidebarItem>
                    </HashLink>
                </SidebarNestedLinks>
            </SidebarLink>


            {/*  TYPOGRAPHY  /////////////////////////////////////////////  */}
            <SidebarLink>
                <NavLink to="/typography">
                    <SidebarItem onClick={scrollToTop}>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Typography" />
                    </SidebarItem>
                </NavLink>

                <SidebarNestedLinks>
                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/typography#basics"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Basics" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/typography#headings"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Headings" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/typography#text"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Text" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/typography#global-styling"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Global styling" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/typography#sizing"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Sizing" />
                        </SidebarItem>
                    </HashLink>
                </SidebarNestedLinks>
            </SidebarLink>

            {/*  COLOUR  /////////////////////////////////////////////////  */}
            <SidebarLink>
                <NavLink exact to="/colour">
                    <SidebarItem onClick={scrollToTop}>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Colour" />
                    </SidebarItem>
                </NavLink>

                <SidebarNestedLinks>
                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/colour#basics"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Adding colour" />
                        </SidebarItem>
                    </HashLink>

                    <HashLink
                        smooth
                        scroll={el => scrollWithOffset(el, 48)}
                        to="/colour#colour-list"
                    >
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="List of colours" />
                        </SidebarItem>
                    </HashLink>
                </SidebarNestedLinks>
            </SidebarLink>

            {/*  /////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////  */}
            {/*<SidebarItemsGroup>*/}
            {/*    <SidebarItemsGroupHeader>*/}
            {/*        <SidebarItem>*/}
            {/*            <SidebarItemIcon />*/}
            {/*            <SidebarItemText linkText="Components" />*/}
            {/*        </SidebarItem>*/}
            {/*    </SidebarItemsGroupHeader>*/}

            {/*    /!*  HRULE  //////////////////////////////////////////////  *!/*/}
            {/*    <SidebarLink>*/}
            {/*        <NavLink exact to="/components/hrule">*/}
            {/*            <SidebarItem onClick={scrollToTop}>*/}
            {/*                <SidebarItemIcon />*/}
            {/*                <SidebarItemText weight="400" linkText="HRule" />*/}
            {/*            </SidebarItem>*/}
            {/*        </NavLink>*/}

            {/*        <SidebarNestedLinks>*/}
            {/*            <HashLink*/}
            {/*                smooth*/}
            {/*                scroll={el => scrollWithOffset(el, 48)}*/}
            {/*                to="/components/hrule#basics"*/}
            {/*            >*/}
            {/*                <SidebarItem>*/}
            {/*                    <SidebarItemIcon />*/}
            {/*                    <SidebarItemText linkText="Basics" />*/}
            {/*                </SidebarItem>*/}
            {/*            </HashLink>*/}
            {/*        </SidebarNestedLinks>*/}
            {/*    </SidebarLink>*/}
            {/*</SidebarItemsGroup>*/}
        </SidebarWrapper>
    );
}
