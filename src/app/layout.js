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

// ASSETS //////////////////////////////////////////////////////////////////////


export default function RootLayout({ children }) {
    const [sidebarState, setSidebarState] = useState("");
    const [showSidebarOnMobile, setShowSidebarOnMobile] = useState(false)

    const toggleSidebarOnMobile = () => {
        setShowSidebarOnMobile(isShowing => !isShowing);
    };

    return (
        <html lang="en">
        <head>
            <title>Fictoan framework</title>
        </head>

        <body>
                <ThemeProvider currentTheme="theme-light">
                    <Sidebar
                        sidebarState={sidebarState}
                        setSidebarState={setSidebarState}
                        showSidebarOnMobile={showSidebarOnMobile}
                        setShowSidebarOnMobile={setShowSidebarOnMobile}
                    />

                    <ContentWrapper>
                        <SiteHeader toggleSidebarOnMobile={toggleSidebarOnMobile} />
                        {children}
                    </ContentWrapper>
                </ThemeProvider>
        </body>
        </html>
    );
}
