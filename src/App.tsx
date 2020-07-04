// External deps
import React, { useState } from "react";
import {
    Switch as RouteSwitch,
    Route,
    BrowserRouter,
    RouteProps
} from "react-router-dom";

// Internal deps
import {
    CreateThemeProvider,
    Button
} from "fictoan-react";

// Local components
import { AppWithSidebar } from "./AppWithSidebar";
import { Home } from "./pages/Home/Home";

import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";
import { RFDocsLightTheme, RFDocsDarkTheme } from "./styles/RFDocs.theme";

// Local assets


type Props = RouteProps;

export const ThemeProvider = CreateThemeProvider({
    light : RFDocsLightTheme as any,
    dark  : RFDocsDarkTheme as any
});

export const App = (props : Props) => {
    const { location } = props;

    let [ currentTheme, setCurrentTheme ] = useState("light");

    const toggleTheme = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark")
        } else {
            setCurrentTheme("light")
        }
    }



    return (
        <ThemeProvider
            // @ts-ignore
            theme={ RFDocsLightTheme }
        >
            <GlobalStyle />

            <GlobalFonts />

            <BrowserRouter>
                <Button
                    kind="secondary" size="small" shadow="mild"
                    onClick={toggleTheme}
                >
                    Other action
                </Button>

                <RouteSwitch location={ location }>
                    <Route
                        exact
                        path="/"
                        component={ Home }
                    />

                    <Route
                        path="*"
                        component={ AppWithSidebar }
                    />
                </RouteSwitch>
            </BrowserRouter>
        </ThemeProvider>
    );
}
