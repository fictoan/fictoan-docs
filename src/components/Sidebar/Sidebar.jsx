import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import {
    SidebarWrapper,
    SidebarHeader,
    SidebarItem,
    SidebarItemIcon,
    SidebarItemText,
    SublinkGroup
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
        const scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };

        return (
            <SidebarWrapper className={this.state.collapsed ? "collapsed" : ""}>
                <SidebarHeader onClick={this.headerOnClick}>
                    <h4 className="header-logo">FICTOAN</h4>
                    <h5 className="header-icon">RF</h5>
                </SidebarHeader>

                <Link exact to="/">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Home" />
                    </SidebarItem>
                </Link>

                <Link exact to="/getting-started">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Getting started" />
                    </SidebarItem>
                </Link>

                <details open>
                    <summary>
                        <SidebarItem>
                            <SidebarItemIcon />
                            <SidebarItemText linkText="Layout" />
                        </SidebarItem>
                    </summary>

                    <SublinkGroup>
                        <Link scroll={el => scrollWithOffset(el, 80)} smooth to="/layout">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Setup" />
                            </SidebarItem>
                        </Link>

                        <Link scroll={el => scrollWithOffset(el, 80)} smooth to="/layout#add-content">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Add content" />
                            </SidebarItem>
                        </Link>

                        <Link scroll={el => scrollWithOffset(el, 20)} smooth to="/layout#responsiveness">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Responsiveness" />
                            </SidebarItem>
                        </Link>

                        <Link scroll={el => scrollWithOffset(el, 80)} smooth to="/layout#visibility">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Visibility" />
                            </SidebarItem>
                        </Link>

                        <Link scroll={el => scrollWithOffset(el, 80)} smooth to="/layout#content-padding">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Content padding" />
                            </SidebarItem>
                        </Link>

                        <Link scroll={el => scrollWithOffset(el, 80)} smooth to="/layout#gutter-sizing">
                            <SidebarItem>
                                <SidebarItemIcon />
                                <SidebarItemText className="sidebar-sublink" linkText="Gutter sizing" />
                            </SidebarItem>
                        </Link>
                    </SublinkGroup>
                </details>

                <Link exact to="/typography">
                    <SidebarItem>
                        <SidebarItemIcon />
                        <SidebarItemText linkText="Typography" />
                    </SidebarItem>
                </Link>
            </SidebarWrapper>
        );
    }
}

export default Sidebar;
