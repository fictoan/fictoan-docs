"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import { useEffect, useRef, useState } from "react";


// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    ContentWrapper,
    ThemeProvider,
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////
import { Sidebar } from "../components/Sidebar/Sidebar";
import { SiteHeader } from "../components/Header/Header";

// STYLES //////////////////////////////////////////////////////////////////////
import "../styles/globals.css";

// ASSETS //////////////////////////////////////////////////////////////////////


export default function RootLayout({ children }) {
    const sidebarRef = useRef(null);

    const [sidebarState, setSidebarState] = useState("");
    const [currentTheme, setCurrentTheme] = useState(typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light");

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "theme-light" ? "theme-dark" : "theme-light");
    };

    return (
        <html lang="en">
        <head>
            <title>Fictoan framework</title>
        </head>

        <body>
        <ThemeProvider currentTheme={currentTheme === "theme-light" ? "theme-light" : "theme-dark"}>
            <Sidebar
                sidebarState={sidebarState}
                setSidebarState={setSidebarState}
                toggleTheme={toggleTheme}
                ref={sidebarRef}
            />

            <ContentWrapper>
                <SiteHeader />
                {children}
            </ContentWrapper>
        </ThemeProvider>
        </body>
        </html>
    );
}
