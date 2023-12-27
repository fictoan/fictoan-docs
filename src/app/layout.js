"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import { useEffect, useState } from "react";


// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    ContentWrapper,
    ThemeProvider,
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////
import Sidebar from "@/components/Sidebar/Sidebar";

// STYLES //////////////////////////////////////////////////////////////////////
import "../styles/globals.css";

// ASSETS //////////////////////////////////////////////////////////////////////

export default function RootLayout({ children }) {
    const [sidebarState, setSidebarState] = useState("");
    const [currentTheme, setCurrentTheme] = useState(typeof window !== "undefined" ? localStorage.getItem("theme") || "light" : "light");

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === "light" ? "theme-dark" : "light");
    };


    return (
        <html lang="en">
        <head>
            <title>Fictoan framework — Documentation</title>
        </head>

        <body>
        <ThemeProvider currentTheme={currentTheme === "light" ? "light" : "theme-dark"}>
            <Sidebar
                sidebarState={sidebarState}
                setSidebarState={setSidebarState}
                toggleTheme={toggleTheme}
            />

            <ContentWrapper>{children}</ContentWrapper>
        </ThemeProvider>
        </body>
        </html>
    );
}
