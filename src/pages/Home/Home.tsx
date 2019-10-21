import React, { PureComponent } from "react";

// @ts-ignore
import { Row, Portion } from "reactised-fictoan";

class Home extends PureComponent {
    componentDidMount() {
        document.title = "Setu Web Project";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="home">
                <Row>
                    <Portion>
                        <h3 className="text-flash-turk weight-400">
                            Setu Web Project
                        </h3>
                    </Portion>
                </Row>
            </section>
        );
    }
}

export default Home;
