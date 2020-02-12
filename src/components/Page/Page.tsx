import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { ThemeProvider, ContentWrapper } from "reactised-fictoan";

import { RFDocsTheme } from "../../constants/theme";

import Sidebar from "../Sidebar/Sidebar";

import Home from "../../pages/Home/Home";
import GettingStarted from "../../pages/GettingStarted/GettingStarted";
import Layout from "../../pages/Layout/Layout";
import Typography from "../../pages/Typography/Typography";
import Colour from "../../pages/Colour/Colour";
import Form from "../../pages/Form/Form";
import Notifications from "../../pages/Components/Notifications";

const Page = () => {
    return (
        <ThemeProvider theme={RFDocsTheme}>
            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
                LEFT SIDEBAR
               ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Sidebar />

            {/* ////////////////////////////////////////////////////////////////////////////////////////////////////
                MAIN CONTENT
           ////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <ContentWrapper className="bg-pearly-coke">
                <TransitionGroup>
                    <CSSTransition timeout={{ enter: 800, exit: 800 }} classNames="fade">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/getting-started" component={GettingStarted} />
                            <Route exact path="/layout" component={Layout} />
                            <Route exact path="/typography" component={Typography} />
                            <Route exact path="/colour" component={Colour} />
                            <Route exact path="/form" component={Form} />
                            <Route exact path="/notifications" component={Notifications} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </ContentWrapper>
        </ThemeProvider>
    );
};

export default withRouter(Page);
