import React from "react";
import { Switch, Route, BrowserRouter as Router, withRouter, RouteProps } from "react-router-dom";

import { ThemeProvider, ContentWrapper } from "reactised-fictoan";

import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";

import { RFDocsTheme } from "./styles/RFDocs.theme";

import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./pages/Home/Home";
import GettingStarted from "./pages/GettingStarted/GettingStarted";
import Layout from "./pages/Layout/Layout";
import Typography from "./pages/Typography/Typography";
import Colour from "./pages/Colour/Colour";
import Form from "./pages/Form/Form";
import Notifications from "./pages/Components/Notifications";

type Props = RouteProps;

const Page = (props: Props) => {
    const { location } = props;
    return (
        <ThemeProvider theme={RFDocsTheme}>
            <GlobalStyle />
            <GlobalFonts />
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
                LEFT SIDEBAR
               ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Sidebar location={props.location} />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
                MAIN CONTENT
           ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <ContentWrapper>
                <Switch location={location}>
                    <Route exact component={Home} path="/" />
                    <Route exact component={GettingStarted} path="/getting-started" />
                    <Route exact component={Layout} path="/layout" />
                    <Route exact component={Typography} path="/typography" />
                    <Route exact component={Colour} path="/colour" />
                    <Route exact component={Form} path="/form" />
                    <Route exact component={Notifications} path="/notifications" />
                </Switch>
            </ContentWrapper>
        </ThemeProvider>
    );
};

const WithRouterPage = withRouter(Page);

class App extends React.PureComponent {
    render() {
        return (
            <Router>
                <WithRouterPage />
            </Router>
        );
    }
}

export default App;
