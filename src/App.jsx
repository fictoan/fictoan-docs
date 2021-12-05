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
import { Manifesto } from "./pages/02Manifesto/Manifesto";

import { GettingStarted } from "./pages/01GettingStarted/GettingStarted";
import { Layout } from "./pages/05Layout/Layout";
import { Typography } from "./pages/06Typography/Typography";
import { ColourDocs } from "./pages/07Colour/ColourDocs";

import { FormDocs } from "./pages/Form/FormWrapper/Form";

import { ButtonDocs } from "./pages/Components/Button/Button";
import { CardDocs } from "./pages/Components/Card/Card";
import { HRuleDocs } from "./pages/Components/HRule/HRule";
import { TableDocs } from "./pages/Components/Table/Table";

//  Local assets
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ThemeDocs } from "./pages/03Theme/Theme";
import { CodeBlockDocs } from "./pages/Components/CodeBlock/CodeBlock";
import { BaseElementDocs } from "./pages/BaseElement/BaseElement";
import { InfoPanelDocs } from "./pages/Components/InfoPanel/InfoPanel";
import { TabsDocs } from "./pages/Components/Tabs/Tabs";
import { BreadcrumbsDocs } from "./pages/Components/Breadcrumbs/Breadcrumbs";
import { NotificationDocs } from "./pages/Components/Notifications/Notifications";
import { CheckBoxDocs } from "./pages/Form/CheckBox/CheckBox";
import { RadioButtonDocs } from "./pages/Form/RadioButton/RadioButton";
import { SelectDocs } from "./pages/Form/Select/Select";
import { ProgressbarDocs } from "./pages/Form/ProgressBar/ProgressBar";
import { SidebarDocs } from "./pages/Components/Sidebar/Sidebar";
import  ThemeBuilderPage from "./pages/03ThemeBuilder/ThemeBuilder";

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
                                path="/manifesto"
                                component={ Manifesto }
                            />

                            <Route
                                exact
                                path="/getting-started"
                                component={ GettingStarted }
                            />

                            <Route
                                exact
                                path="/theme"
                                component={ ThemeDocs }
                            />

                            <Route
                                exact
                                path="/themebuilder"
                                component={ ThemeBuilderPage }
                            />

                            <Route
                                exact
                                path="/base-element"
                                component={ BaseElementDocs }
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
                                component={ CardDocs }
                            />

                            <Route
                                exact
                                path="/components/breadcrumbs"
                                component={ BreadcrumbsDocs }
                            />

                            <Route
                                exact
                                path="/components/code-block"
                                component={ CodeBlockDocs }
                            />

                            <Route
                                exact
                                path="/components/hrule"
                                component={ HRuleDocs }
                            />

                            <Route
                                exact
                                path="/components/info-panel"
                                component={ InfoPanelDocs }
                            />

                            <Route
                                exact
                                path="/components/button"
                                component={ ButtonDocs }
                            />

                            <Route
                                exact
                                path="/components/form"
                                component={ FormDocs }
                            />

                            <Route
                                exact
                                path="/components/checkbox"
                                component={ CheckBoxDocs }
                            />

                            <Route
                                exact
                                path="/components/radio-button"
                                component={ RadioButtonDocs }
                            />

                            <Route
                                exact
                                path="/components/select"
                                component={ SelectDocs }
                            />

                            <Route
                                exact
                                path="/components/progress-bar"
                                component={ ProgressbarDocs }
                            />

                            <Route
                                exact
                                path="/components/notification"
                                component={ NotificationDocs }
                            />

                            <Route
                                exact
                                path="/components/sidebar-wrapper"
                                component={ SidebarDocs }
                            />

                            <Route
                                exact
                                path="/components/table"
                                component={ TableDocs }
                            />

                            <Route
                                exact
                                path="/components/tabs"
                                component={ TabsDocs }
                            />
                        </RouteSwitch>
                    </ContentWrapper>
                </BrowserRouter>
            </Element>
        </ThemeProvider>
);
}
