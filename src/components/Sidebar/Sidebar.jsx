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
    SidebarLinksGroup,
    SidebarLinksGroupHeader,
    SidebarSublinksGroup
    // HRule
} from "reactised-fictoan";

// Local components
import { scrollWithOffset } from "../../utils/scrollOffset";

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

                <NavLink exact to="/">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Home" />
                    </SidebarItem>
                </NavLink>

                <NavLink exact to="/getting-started">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Getting started" />
                    </SidebarItem>
                </NavLink>

                <SidebarLinksGroup>
                    <SidebarLinksGroupHeader>
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Layout" />
                        </SidebarItem>
                    </SidebarLinksGroupHeader>

                    <NavLink to="/layout">
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Setup" />
                        </SidebarItem>
                    </NavLink>

                    <SidebarSublinksGroup>
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
                    </SidebarSublinksGroup>
                </SidebarLinksGroup>

                <NavLink exact to="/typography">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Typography" />
                    </SidebarItem>
                </NavLink>

                <NavLink exact to="/colour">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Colour" />
                    </SidebarItem>
                </NavLink>

                <NavLink exact to="/form">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Form" />
                    </SidebarItem>
                </NavLink>

                <details>
                    <summary>
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Components" />
                        </SidebarItem>
                    </summary>

                    <SidebarSublinksGroup>
                        <NavLink to="/components/notifications">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText linkText="Notification" />
                            </SidebarItem>
                        </NavLink>
                    </SidebarSublinksGroup>
                </details>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;
