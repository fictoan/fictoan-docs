"use client";

import React from "react";

import { Badge, Div, Header, Heading } from "fictoan-react";

import "./header.css";

export const SiteHeader = ({ toggleSidebarOnMobile }) => {

    return (
        <Header id="site-header" horizontalPadding="micro" verticalPadding="nano">
            <Div
                id="menu-toggle"
                showOnlyOnMobile showOnlyOnTabletPortrait
                onClick={(e) => {
                    e.stopPropagation();
                    toggleSidebarOnMobile();
                }}
            >
                <Heading as="h5">&mdash;</Heading>
                <Heading as="h5">&ndash;</Heading>
            </Div>

            <Badge
                id="wip-badge"
                bgColour="red-light-70" textColour="red" shape="rounded"
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
