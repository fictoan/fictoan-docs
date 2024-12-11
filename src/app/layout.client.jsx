"use client";

// EXTERNAL DEPS =======================================================================================================
import { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    ContentWrapper,
    ThemeProvider,
} from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SiteHeader } from "../components/Header/Header";
import { SiteFooter } from "../components/Footer/Footer";

// CONTEXTS ============================================================================================================

// STYLES ==============================================================================================================
import "../styles/globals.css";
import LoadingBar from "../components/LoadingBar/LoadingBar";

// ASSETS ==============================================================================================================

export const RootLayoutClient = ({ children }) => {
    const [sidebarState, setSidebarState] = useState("");
    const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);

    const toggleSidebarOnMobile = () => {
        setShowSidebarOnMobile(isShowing => !isShowing);
    };

    return (
        <html lang="en">
        <head>
            <title>Fictoan framework</title>
        </head>

        <body>
            <ThemeProvider currentTheme="theme-dark">
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

                <LoadingBar />
            </ThemeProvider>
        </body>
        </html>
    );
}
