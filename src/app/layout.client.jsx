"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useRef, useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Button,
    ContentWrapper,
    ThemeProvider,
    LoadingBar
} from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SiteHeader } from "../components/Header/Header";
import { SiteFooter } from "../components/Footer/Footer";

// CONTEXTS ============================================================================================================
import { useNavigationProgress } from "./slow/usePageLoadProgress";

// STYLES ==============================================================================================================
import "../styles/globals.css";

// ROOT LAYOUT /////////////////////////////////////////////////////////////////////////////////////////////////////////
export const RootLayoutClient = ({ children }) => {
    // SIDEBAR =========================================================================================================
    const [sidebarState, setSidebarState] = useState("");
    const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);


    const toggleSidebarOnMobile = () => {
        setShowSidebarOnMobile(isShowing => !isShowing);
    };

    const listOfThemes = ["theme-light", "theme-dark", "theme-test"];

    // LOADING BAR =====================================================================================================
    const loadingBarRef = useRef(null);
    useNavigationProgress(loadingBarRef);

    return (
        <html lang="en">
        <head>
            <title>Fictoan framework</title>
        </head>

        <body>
        <ThemeProvider themeList={listOfThemes} currentTheme="theme-dark">
            <LoadingBar
                ref={loadingBarRef}
                height="4px"
                bgColour="blue"
                minimum={10}
                position="top"
            />

            <Sidebar
                sidebarState={sidebarState}
                setSidebarState={setSidebarState}
                showSidebarOnMobile={showSidebarOnMobile}
                setShowSidebarOnMobile={setShowSidebarOnMobile}
            />

            <ContentWrapper>
                <SiteHeader toggleSidebarOnMobile={toggleSidebarOnMobile} />
                {children}
                <SiteFooter />
            </ContentWrapper>
        </ThemeProvider>
        </body>
        </html>
    );
}
