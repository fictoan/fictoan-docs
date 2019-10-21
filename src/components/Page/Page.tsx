import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from "../../pages/Home/Home";

const Page = () => {
    return (
        <TransitionGroup>
            <CSSTransition
                timeout={{ enter: 800, exit: 800 }}
                classNames="fade"
            >
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(Page);
