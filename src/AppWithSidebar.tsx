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
            {/*  //////////////////////////////////////////////////////////  */}
            {/*  LEFT SIDEBAR  */}
            {/*  //////////////////////////////////////////////////////////  */}
            <Sidebar location={props.location} />

            {/* ///////////////////////////////////////////////////////////  */}
            {/*  MAIN CONTENT  */}
            {/*  //////////////////////////////////////////////////////////  */}
            <ContentWrapper>
                <Switch location={location}>

                    <Route
                        component={ GettingStarted }
                        exact
                        path="/getting-started"
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
                        component={ Colour }
                    />

                    <Route
                        exact
                        path="/form"
                        component={ Form }
                    />

                    <Route
                        exact
                        path="/components/notifications"
                        component={ Notifications }
                    />
                </Switch>
            </ContentWrapper>
        </>
    );
};
