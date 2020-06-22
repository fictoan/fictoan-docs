// External deps
import React from "react";
import { Switch, Route, RouteProps } from "react-router-dom";

// Internal deps
import { ContentWrapper } from "fictoan-react";

// Local components
import { Sidebar } from "components/Sidebar/Sidebar";
import { Philosophy } from "./pages/Philosophy/Philosophy";
import { GettingStarted } from "./pages/GettingStarted/GettingStarted";
import { Layout } from "pages/Layout/Layout";
import { Typography } from "pages/Typography/Typography";
import Colour from "pages/Colour/Colour";
import Notifications from "pages/Components/Notifications";
import Form from "./pages/Form/Form";

// Local assets


type Props = RouteProps;


export const AppWithSidebar = (props : Props) => {
    const { location } = props;

    return (
        <>
            {/*  LEFT SIDEBAR    ///////////////////////////////////////    */}
            {/*
            // @ts-ignore*/}
            <Sidebar location={ props.location } />

            {/*  MAIN CONTENT    ///////////////////////////////////////    */}
            <ContentWrapper>
                <Switch location={ location }>
                    <Route
                        exact
                        path="/philosophy"
                        component={ Philosophy }
                    />

                    <Route
                        exact
                        path="/getting-started"
                        component={ GettingStarted }
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
