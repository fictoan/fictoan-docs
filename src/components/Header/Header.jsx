"use client";

import React from "react";

import { Badge, Callout, Div, Element, Header, Heading5, InputField, Portion, Row, Text } from "fictoan-react";

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
                <Heading5>&mdash;</Heading5>
                <Heading5>&ndash;</Heading5>
            </Div>

            <Text weight="700" textColour="white">A designer-focused React/CSS UI library</Text>

            <Badge
                id="wip-badge"
                bgColour="red-light-70" textColour="red-dark-40" shape="rounded"
            >
                These Docs are WIP
            </Badge>

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
