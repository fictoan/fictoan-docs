import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./components/Page/Page";

class App extends Component {
    render() {
        return (
            <Router>
                <Content />
            </Router>
        );
    }
}

export default App;
