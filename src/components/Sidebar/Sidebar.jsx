// External deps
import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// Internal deps
import {
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarLink,
    SidebarItemsGroup,
    SidebarItemsGroupHeader,
    SidebarNestedLinks, SidebarFooter
    // HRule
} from "fictoan-react";

// Local components
import { scrollWithOffset, scrollToTop } from "../../utils/scrollHelpers";

// Local assets
// import iconHome from "../../assets/icons/home.svg"


class Sidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    headerOnClick = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    };

    render() {
        return (
            <SidebarWrapper className={this.state.collapsed ? "collapsed" : ""}>
                <SidebarHeader onClick={this.headerOnClick}>
                    <h5 className="header-logo">FICTOAN&nbsp;UI</h5>
                    <h5 className="header-icon">FF</h5>
                </SidebarHeader>

                {/*  HOME  ///////////////////////////////////////////////  */}
                <NavLink exact to="/">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Home" />
                    </SidebarItem>
                </NavLink>

                {/*  GETTING STARTED  ////////////////////////////////////  */}
                <NavLink exact to="/getting-started">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Getting started" />
                    </SidebarItem>
                </NavLink>

                {/*  LAYOUT  /////////////////////////////////////////////  */}
                <SidebarItemsGroup>
                    <SidebarItemsGroupHeader>
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Layout" />
                        </SidebarItem>
                    </SidebarItemsGroupHeader>

                    <SidebarLink>
                        <NavLink to="/layout">
                            <SidebarItem onClick={scrollToTop()}>
                                <SidebarItemIcon />
                                <SidebarItemText weight="400" linkText="Setup" />
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
                                to="/layout#visibility"
                            >
                                <SidebarItem>
                                    <SidebarItemIcon />
                                    <SidebarItemText linkText="Visibility" />
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
                </SidebarItemsGroup>

                {/*<NavLink exact to="/typography">*/}
                {/*    <SidebarItem>*/}
                {/*        <SidebarItemIcon />*/}
                {/*        <SidebarItemText linkText="Typography" />*/}
                {/*    </SidebarItem>*/}
                {/*</NavLink>*/}

                {/*<NavLink exact to="/colour">*/}
                {/*    <SidebarItem>*/}
                {/*        <SidebarItemIcon />*/}
                {/*        <SidebarItemText linkText="Colour" />*/}
                {/*    </SidebarItem>*/}
                {/*</NavLink>*/}

                {/*<NavLink exact to="/form">*/}
                {/*    <SidebarItem>*/}
                {/*        <SidebarItemIcon />*/}
                {/*        <SidebarItemText linkText="Form" />*/}
                {/*    </SidebarItem>*/}
                {/*</NavLink>*/}

                {/*<SidebarItemsGroup>*/}
                {/*    <SidebarItemsGroupHeader>*/}
                {/*        <SidebarItem>*/}
                {/*            <SidebarItemIcon />*/}
                {/*            <SidebarItemText linkText="Components" />*/}
                {/*        </SidebarItem>*/}
                {/*    </SidebarItemsGroupHeader>*/}

                {/*    <SidebarLink>*/}
                {/*        <NavLink to="/components/notifications">*/}
                {/*            <SidebarItem onClick={scrollToTop()}>*/}
                {/*                <SidebarItemIcon />*/}
                {/*                <SidebarItemText weight="400" linkText="Notification" />*/}
                {/*            </SidebarItem>*/}
                {/*        </NavLink>*/}

                {/*        <SidebarNestedLinks>*/}
                {/*            <HashLink*/}
                {/*                smooth*/}
                {/*                scroll={el => scrollWithOffset(el, 48)}*/}
                {/*                to="/components/notifications#basics"*/}
                {/*            >*/}
                {/*                <SidebarItem>*/}
                {/*                    <SidebarItemIcon />*/}
                {/*                    <SidebarItemText linkText="Basics" />*/}
                {/*                </SidebarItem>*/}
                {/*            </HashLink>*/}

                {/*            <HashLink*/}
                {/*                smooth*/}
                {/*                scroll={el => scrollWithOffset(el, 48)}*/}
                {/*                to="/components/notifications#types"*/}
                {/*            >*/}
                {/*                <SidebarItem>*/}
                {/*                    <SidebarItemIcon />*/}
                {/*                    <SidebarItemText linkText="Types" />*/}
                {/*                </SidebarItem>*/}
                {/*            </HashLink>*/}

                {/*            <HashLink*/}
                {/*                smooth*/}
                {/*                scroll={el => scrollWithOffset(el, 48)}*/}
                {/*                to="/components/notifications#position"*/}
                {/*            >*/}
                {/*                <SidebarItem>*/}
                {/*                    <SidebarItemIcon />*/}
                {/*                    <SidebarItemText linkText="Positioning" />*/}
                {/*                </SidebarItem>*/}
                {/*            </HashLink>*/}
                {/*        </SidebarNestedLinks>*/}
                {/*    </SidebarLink>*/}
                {/*</SidebarItemsGroup>*/}

                <SidebarFooter>
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Username" />
                    </SidebarItem>
                </SidebarFooter>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;
