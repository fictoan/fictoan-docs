//  External deps
import React, { useEffect, useState, useRef } from "react";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule
} from "fictoan-react";

//  Local components
import { SiteHeaderStyled } from "./SiteHeader.styled";

//  Local assets
import { CrucibleLogo } from "../CrucibleLogo/CrucibleLogo";
import { NavLink } from "react-router-dom";


export const SiteHeader = () => {
    const node = useRef();
    const [showMobileHeader, setShowMobileHeader] = useState(false);

    const handleClickOutside = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setShowMobileHeader(false);
    };

    useEffect(() => {
        if (showMobileHeader) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [showMobileHeader]);


    return (
        <SiteHeaderStyled ref={node}>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge" gutters="large" marginBottom="none" showOnlyOnMobile>
                <Portion>
                    <Element as="div" className="vertically-centre-items push-to-ends">
                        {/*  LOGO  =======================================  */}
                        <Element as="div" id="site-logo">
                            <NavLink exact to="/">
                                <CrucibleLogo />
                            </NavLink>
                        </Element>

                        {/*  NAV  ========================================  */}
                        <Element as="nav" id="site-nav" hideOnMobile>

                        </Element>

                        <Element
                            as="div"
                            id="menu-toggle"
                            onClick={() =>
                                setShowMobileHeader(!showMobileHeader)
                            }
                        >
                            <Heading as="h5" weight="600" align="right">&mdash;</Heading>
                            <Heading as="h5" weight="600" align="right">&ndash;</Heading>
                        </Element>
                    </Element>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  MOBILE MENU  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="nav" className={`mobile-menu ${showMobileHeader ? "open" : ""}`} showOnlyOnMobile>
                <Element
                    as="div" className="menu-close"
                    onClick={() => setShowMobileHeader(false)}
                >
                    &times;
                </Element>

                {/*  INTRO  ==================================================  */}
                <NavLink exact to="/">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Home
                    </Text>
                </NavLink>

                <NavLink exact to="/principles">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Principles
                    </Text>
                </NavLink>

                <NavLink exact to="/manifesto">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Manifesto
                    </Text>
                </NavLink>

                <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                {/*  BRANDING  ===============================================  */}
                <Text weight="600" textColour="slate-60">BRANDING</Text>

                <NavLink exact to="/branding/logo">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Logo
                    </Text>
                </NavLink>

                <NavLink exact to="/branding/colour-scheme">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Colour scheme
                    </Text>
                </NavLink>

                <NavLink exact to="/branding/typography">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Typography
                    </Text>
                </NavLink>

                <HRule kind="tertiary" marginTop="micro" marginBottom="micro" />

                {/*  INTERFACE  ==============================================  */}
                <Text weight="600" textColour="slate-60">INTERFACE</Text>

                <NavLink exact to="/interface/layout">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Layout
                    </Text>
                </NavLink>

                <NavLink exact to="/interface/imagery">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Imagery
                    </Text>
                </NavLink>

                <NavLink exact to="/interface/icons">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Icons
                    </Text>
                </NavLink>

                <NavLink exact to="/interface/animation">
                    <Text
                        weight="400"
                        onClick={() => {setShowMobileHeader(false);}}
                        marginTop="nano"
                        marginBottom="nano"
                    >
                        Animation
                    </Text>
                </NavLink>
            </Element>
        </SiteHeaderStyled>
    );
}
