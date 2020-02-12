import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { ThemeProvider } from "reactised-fictoan";

import Content from "./components/Page/Page";

class App extends React.PureComponent {
    render() {
        return (
            <ThemeProvider theme={{ card: { bg: "red" } }}>
                <Router>
                    <Content />
                </Router>
            </ThemeProvider>
        );
    }
}

export default App;
