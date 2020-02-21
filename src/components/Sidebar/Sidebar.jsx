import React from "react";
import { NavLink } from "react-router-dom";

import {
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SidebarSublinkGroup
    // HRule
} from "reactised-fictoan";

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
        // const scrollWithOffset = (el, offset) => {
        //     const elementPosition = el.offsetTop - offset;
        //     window.scroll({
        //         top: elementPosition,
        //         left: 0,
        //         behavior: "smooth"
        //     });
        // };

        return (
            <SidebarWrapper className={this.state.collapsed ? "collapsed" : ""}>
                <SidebarHeader onClick={this.headerOnClick}>
                    <h4 className="header-logo">FICTOAN UI</h4>
                    <h5 className="header-icon">FUI</h5>
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

                <details>
                    <summary>
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Layout" />
                        </SidebarItem>
                    </summary>

                    <SidebarSublinkGroup>
                        <NavLink to="/layout">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Setup" />
                            </SidebarItem>
                        </NavLink>

                        <NavLink to="/layout#add-content">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Add content" />
                            </SidebarItem>
                        </NavLink>

                        <NavLink to="/layout#responsiveness">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Responsiveness" />
                            </SidebarItem>
                        </NavLink>

                        <NavLink to="/layout#visibility">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Visibility" />
                            </SidebarItem>
                        </NavLink>

                        <NavLink to="/layout#content-padding">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Content padding" />
                            </SidebarItem>
                        </NavLink>

                        <NavLink to="/layout#gutter-sizing">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Gutter sizing" />
                            </SidebarItem>
                        </NavLink>
                    </SidebarSublinkGroup>
                </details>

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

                    <SidebarSublinkGroup>
                        <NavLink to="/components">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Notification" />
                            </SidebarItem>
                        </NavLink>
                    </SidebarSublinkGroup>
                </details>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;
