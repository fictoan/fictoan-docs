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
    // @ts-ignore
    ThemeProvider,
    Button
    // Button
} from "fictoan-react";

// Local components
import { AppWithSidebar } from "./AppWithSidebar";
import { Home } from "./pages/Home/Home";

import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";
import RFDocsLightTheme from "./styles/RFDocs.LightTheme";
import RFDocsDarkTheme from "./styles/RFDocs.DarkTheme";

// Local assets

type Props = RouteProps;

export const App = (props: Props) => {
    const { location } = props;

    let [currentTheme, setCurrentTheme] = useState("light");


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
            theme={currentTheme == "light" ? RFDocsLightTheme : RFDocsDarkTheme}
            localStyled={() => <> <GlobalStyle /><GlobalFonts /></>}
        >
            <BrowserRouter>
                <Button
                    kind="secondary" size="small" shadow="mild"
                    onClick={toggleTheme}
                >
                    Toggle theme
                </Button>

                <RouteSwitch location={location}>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />

                    <Route
                        path="*"
                        component={AppWithSidebar}
                    />
                </RouteSwitch>

            </BrowserRouter>
        </ThemeProvider>
    );
}
