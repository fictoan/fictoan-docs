"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    ContentWrapper,
    ThemeProvider,
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SiteHeader } from "../components/Header/Header";

// CONTEXTS ////////////////////////////////////////////////////////////////////
import { CustomThemeContext } from "./contexts/theme";

// STYLES //////////////////////////////////////////////////////////////////////
import "../styles/globals.css";
import { SiteFooter } from "../components/Footer/Footer";

// ASSETS //////////////////////////////////////////////////////////////////////

export const RootLayoutClient = ({ children }) => {
    const [sidebarState, setSidebarState] = useState("");
    const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false);
    const [customTheme, setCustomTheme] = useState({});

    const [currentTheme, setCurrentTheme] = useState(typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light");

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "theme-light" ? "theme-dark" : "theme-light");
    };

    const toggleSidebarOnMobile = () => {
        setShowSidebarOnMobile(isShowing => !isShowing);
    };

    return (
        <html lang="en">
        <head>
            <title>Fictoan framework</title>
        </head>

        <body>
        <CustomThemeContext.Provider value={{ customTheme, setCustomTheme }}>
            <ThemeProvider
                theme={customTheme}
                currentTheme={currentTheme === "theme-light" ? "theme-light" : "theme-dark"}
            >
                <Sidebar
                    sidebarState={sidebarState}
                    setSidebarState={setSidebarState}
                    toggleTheme={toggleTheme}
                    showSidebarOnMobile={showSidebarOnMobile}
                    setShowSidebarOnMobile={setShowSidebarOnMobile}
                />

                <ContentWrapper>
                    <SiteHeader toggleSidebarOnMobile={toggleSidebarOnMobile} />
                    {children}
                    <SiteFooter />
                </ContentWrapper>
            </ThemeProvider>
        </CustomThemeContext.Provider>
        </body>
        </html>
    );
}
