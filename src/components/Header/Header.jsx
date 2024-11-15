"use client";

import React from "react";
import Link from "next/link";

import { Badge, Div, Header, Heading5, useTheme } from "fictoan-react";

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

            <Div verticallyCentreItems>
                <Badge bgColour="black" textColour="white" shape="rounded" marginRight="micro">
                    v1.6.0
                </Badge>

                <Link href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                    Github ↗
                </Link>
            </Div>

            <Badge
                id="wip-badge"
                bgColour="red" textColour="white" shape="rounded"
            >
                These Docs are WIP
            </Badge>
        </Header>
    );
};
