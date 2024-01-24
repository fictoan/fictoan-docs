"use client";

import React from "react";

import { Div, Element, Header, Heading, InputField, Portion, Row, Text } from "fictoan-react";

import "./header.css";

export const SiteHeader = ({ toggleSidebarOnMobile }) => {
    const handleMenuToggleClick = (e) => {
        e.stopPropagation(); // Prevent event from propagating
        toggleSidebarOnMobile();
    };

    return (
        <Header id="site-header" horizontalPadding="micro" verticalPadding="nano">
            <Div
                id="menu-toggle"
                showOnlyOnMobile showOnlyOnTabletPortrait
                onClick={handleMenuToggleClick}
            >
                <Heading as="h5">&mdash;</Heading>
                <Heading as="h5">&ndash;</Heading>
            </Div>

            {/* <Portion desktopSpan="one-third"> */}
            {/*     <Element as="div" className="links-wrapper"> */}
            {/*         <Link href="https://github.com/fictoan/fictoan-react"> */}
            {/*             Github */}
            {/*         </Link> */}

            {/*         <Link href="https://github.com/fictoan/fictoan-react"> */}
            {/*             Storybook */}
            {/*         </Link> */}
            {/*     </Element> */}
            {/* </Portion> */}

            {/* <Portion desktopSpan="one-third"> */}
            {/*     <Element as="div" className="links-wrapper"> */}
            {/*         <Link href="https://github.com/fictoan/fictoan-react"> */}
            {/*             Boilerplate */}
            {/*         </Link> */}
            {/*     </Element> */}
            {/* </Portion> */}

            {/* <Portion desktopSpan="one-third"> */}
            {/*     <InputField */}
            {/*         type="search" */}
            {/*         placeholder="Search" */}
            {/*         bgColour="black" */}
            {/*         borderColour="slate-dark-60" */}
            {/*     /> */}
            {/* </Portion> */}
            {/* MOBILE HEADER ////////////////////////////////////////////// */}
        </Header>
    );
};
