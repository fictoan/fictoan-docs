"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Fuse from "fuse.js";

// INTERNAL DEPS =======================================================================================================
import {
    Badge,
    Div,
    Header,
    Heading5,
    Text,
    Span
} from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { SearchBar } from "./SearchBar/SearchBar";

// STYLES ==============================================================================================================
import "./header.css";

// ASSETS ==============================================================================================================
import GithubIcon from "../../assets/icons/github.svg";

// DATA ================================================================================================================

export const SiteHeader = ({ toggleSidebarOnMobile }) => {
    // Handle mobile menu toggle =======================================================================================
    const handleMenuToggleClick = (e) => {
        e.stopPropagation();
        toggleSidebarOnMobile();
    };

    return (
        <>
            <Header id="site-header" horizontalPadding="micro" verticalPadding="nano">
                {/* MENU TOGGLE ==================================================================================== */}
                <Div
                    id="menu-toggle"
                    showOnlyOnMobile showOnlyOnTabletPortrait
                    onClick={handleMenuToggleClick}
                >
                    <Heading5>&mdash;</Heading5>
                    <Heading5>&ndash;</Heading5>
                </Div>

                <Div id="links-wrapper">
                    {/* VERSION BADGE =============================================================================== */}
                    <Text weight="600" marginRight="micro">v1.8.0</Text>

                    {/* LOGO ======================================================================================== */}
                    <Link href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                        <Div id="github-link" verticallyCentreItems>
                            <GithubIcon />
                        </Div>
                    </Link>
                </Div>

                {/* SEARCH INPUT =================================================================================== */}
                <Div id="search-wrapper">
                    <SearchBar />
                </Div>

                {/* WIP BADGE ====================================================================================== */}
                <Badge
                    id="wip-badge"
                    bgColour="red" textColour="white" shape="rounded"
                >
                    These Docs are WIP
                </Badge>
            </Header>
        </>
    );
};
