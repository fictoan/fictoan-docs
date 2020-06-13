// External deps
import React from "react";
import {
    Switch,
    Route,
    BrowserRouter,
    RouteProps
} from "react-router-dom";

// Internal deps
import {
    ThemeProvider,
    ContentWrapper
} from "reactised-fictoan";

// Local components
import { AppWithSidebar } from "./AppWithSidebar";
import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";
import { RFDocsTheme } from "./styles/RFDocs.theme";
import { Home } from "./pages/Home/Home";

// Local assets


type Props = RouteProps;


export const App = (props : Props) => {
    const { location } = props;

    return (
        // @ts-ignore
        <ThemeProvider theme={ RFDocsTheme }>
            <GlobalStyle />

            <GlobalFonts />

            <BrowserRouter>
                <ContentWrapper>
                    <Switch location={ location }>
                        <Route
                            exact
                            path="/"
                            component={ Home }
                        />

                        <Route
                            path="*"
                            component={ AppWithSidebar }
                        />
                    </Switch>
                </ContentWrapper>
            </BrowserRouter>
        </ThemeProvider>
    );
}
