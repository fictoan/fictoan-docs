import React from "react";
import { Switch, Route, BrowserRouter as Router, withRouter, RouteProps } from "react-router-dom";

import { ThemeProvider, ContentWrapper } from "reactised-fictoan";

import Layout from "pages/Layout/Layout";
import Typography from "pages/Typography/Typography";
import Colour from "pages/Colour/Colour";
import Notifications from "pages/Components/Notifications";
import Sidebar from "components/Sidebar/Sidebar";
import { GlobalStyle } from "./styles/Global.styled";
import { GlobalFonts } from "./assets/fonts/fonts";

import { RFDocsTheme } from "./styles/RFDocs.theme";

import Home from "./pages/Home/Home";
import GettingStarted from "./pages/GettingStarted/GettingStarted";
import Form from "./pages/Form/Form";

type Props = RouteProps;

const Page = (props: Props) => {
    const { location } = props;

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        <ThemeProvider theme={RFDocsTheme}>
            <GlobalStyle />

            <GlobalFonts />
            {/* /////////////////////////////////////////////////////////////////
                LEFT SIDEBAR
               ////////////////////////////////////////////////////////////////// */}
            {location && location.pathname !== "/" && <Sidebar location={props.location} />}

            {/* /////////////////////////////////////////////////////////////////
                MAIN CONTENT
           ////////////////////////////////////////////////////////////////////// */}
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

class Landing extends React.PureComponent {
    render() {
        return (
            <Router>
                <WithRouterPage />
            </Router>
        );
    }
}

export default Landing;
