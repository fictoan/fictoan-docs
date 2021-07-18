//  External dependencies
import React, { useState } from "react";
import {
    BrowserRouter,
    Switch as RouteSwitch,
    Route
} from "react-router-dom";

//  Internal dependencies
import { Element, ContentWrapper, ThemeProvider } from "fictoan-react";

//  Local components
import { FictoanLightTheme } from "./styles/Fictoan.light.theme";
import { FictoanDarkTheme } from "./styles/Fictoan.dark.theme";
import { GlobalStyle } from "./styles/Global.styled";
import { Home } from "./pages/Home/Home";
import { Manifesto } from "./pages/Manifesto/Manifesto";

import { GettingStarted } from "./pages/GettingStarted/GettingStarted";
import { Layout } from "./pages/Layout/Layout";
import { Typography } from "./pages/Typography/Typography";
import { ColourDocs } from "./pages/Colour/ColourDocs";

import { CardComponent} from "./pages/Components/Card/Card";
import { HorizontalRule } from "./pages/Components/HRule/HorizontalRule";
import { ButtonDocs } from "./pages/Components/Button/Button";
import { TableDocs } from "./pages/Components/Table/Table";

//  Local assets
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Forms } from "./pages/Form/Form";

export const App = () => {
    let [currentTheme, setCurrentTheme] = useState("light");

    const toggleTheme = () => {
        if (currentTheme === "light") {
            setCurrentTheme("dark");
        } else {
            setCurrentTheme("light");
        }
    }

    return (
        <ThemeProvider
            theme={currentTheme === "light" ? FictoanLightTheme : FictoanDarkTheme}
        >
            <Element as="div" id="all-wrapper" className={`${currentTheme}-theme`}>
                <BrowserRouter>
                    <GlobalStyle />

                    <Sidebar toggleTheme={toggleTheme} />

                    <ContentWrapper>
                        <RouteSwitch>
                            <Route
                                exact
                                path="/"
                                component={ Home }
                            />

                            <Route
                                exact
                                path="/getting-started"
                                component={ GettingStarted }
                            />

                            <Route
                                exact
                                path="/manifesto"
                                component={ Manifesto }
                            />

                            <Route
                                exact
                                path="/layout"
                                component={ Layout }
                            />

                            <Route
                                exact
                                path="/typography"
                                component={ Typography }
                            />

                            <Route
                                exact
                                path="/colour"
                                component={ ColourDocs }
                            />

                            <Route
                                exact
                                path="/components/card"
                                component={ CardComponent }
                            />

                            <Route
                                exact
                                path="/components/hrule"
                                component={ HorizontalRule }
                            />

                            <Route
                                exact
                                path="/components/button"
                                component={ ButtonDocs }
                            />

                            <Route
                                exact
                                path="/components/form"
                                component={ Forms }
                            />

                            <Route
                                exact
                                path="/components/table"
                                component={ TableDocs }
                            />
                        </RouteSwitch>
                    </ContentWrapper>
                </BrowserRouter>
            </Element>
        </ThemeProvider>
);
}
