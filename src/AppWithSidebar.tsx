import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

import { ContentWrapper } from "reactised-fictoan";

import Layout from "pages/Layout/Layout";
import Typography from "pages/Typography/Typography";
import Colour from "pages/Colour/Colour";
import Notifications from "pages/Components/Notifications";
import Sidebar from "components/Sidebar/Sidebar";

import GettingStarted from "./pages/GettingStarted/GettingStarted";
import Form from "./pages/Form/Form";

type Props = RouteProps;

export const AppWithSidebar = (props: Props) => {
    const { location } = props;

    return (
        <>
            {/* /////////////////////////////////////////////////////////////////
                LEFT SIDEBAR
               ////////////////////////////////////////////////////////////////// */}
            <Sidebar location={props.location} />

            {/* /////////////////////////////////////////////////////////////////
                MAIN CONTENT
           ////////////////////////////////////////////////////////////////////// */}
            <ContentWrapper>
                <Switch location={location}>
                    <Route exact component={GettingStarted} path="/getting-started" />
                    <Route exact component={Layout} path="/layout" />
                    <Route exact component={Typography} path="/typography" />
                    <Route exact component={Colour} path="/colour" />
                    <Route exact component={Form} path="/form" />
                    <Route exact component={Notifications} path="/notifications" />
                </Switch>
            </ContentWrapper>
        </>
    );
};
