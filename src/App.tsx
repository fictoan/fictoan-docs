import React from "react";
import { Switch, Route, BrowserRouter, RouteProps } from "react-router-dom";

import { ThemeProvider, ContentWrapper } from "reactised-fictoan";

import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";

import { RFDocsTheme } from "./styles/RFDocs.theme";

import Home from "./pages/Home/Home";
import { AppWithSidebar } from "AppWithSidebar";

type Props = RouteProps;

export const App = (props: Props) => {
    const { location } = props;

    return (
        // @ts-ignore
        <ThemeProvider theme={RFDocsTheme}>
            <GlobalStyle />

            <GlobalFonts />

            {/* /////////////////////////////////////////////////////////////////
                MAIN CONTENT
           ////////////////////////////////////////////////////////////////////// */}
           <BrowserRouter>
                <ContentWrapper>
                    <Switch location={location}>
                        <Route exact component={Home} path="/" />
                        <Route component={AppWithSidebar} path="*" />
                    </Switch>
                </ContentWrapper>
            </BrowserRouter>
        </ThemeProvider>
    );
};
