import React, { PureComponent } from "react";

import { Row, Portion, HRule } from "reactised-fictoan";

class Home extends PureComponent {
    componentDidMount() {
        document.title = "Setu Web Project";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="home">
                <Row>
                    <Portion desktopWidth="one-third" className="padding-all-small">
                        <Row retainLayoutAlways>
                            <Portion desktopWidth="whole">
                                <h4>
                                    FICTOAN&mdash;
                                    <span className="text-hue">Reactised</span>.
                                </h4>
                                <h6 className="weight-400 margin-bottom-fixed-3x">
                                    Quickly build responsive interfaces with just JSX markup.
                                </h6>
                                <code className="text-medium">npm install reactised-fictoan</code>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule slim bgColor="slate-40" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <h6>It’s modular.</h6>
                                <p>Use only the components and styles you need, uncheck the rest.</p>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule slim bgColor="slate-40" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <h6>It’s performant.</h6>
                                <p>Build with the bare minimum of libraries and plugins. No code bloat.</p>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule bgColor="slate-40" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <h6>It’s intuitive.</h6>
                                <p>All props and classes are in plain English. No complex nomenclature to memorise.</p>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule bgColor="slate-40" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <h6>It’s open-source.</h6>
                                <p>Fork and raise PRs at will, and contribute to the project on Github. Have at it.</p>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule slim bgColor="slate" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <a
                                    className="text-shade"
                                    href="https://github.com/sujan-s/reactised-fictoan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p className="no-margin-bottom">reactised-fictoan ↗</p>
                                </a>
                                <code className="text-medium">0.4.51</code>
                            </Portion>

                            <Portion desktopWidth="half">
                                <HRule slim bgColor="slate" className="margin-top-fixed-3x margin-bottom-fixed-3x" />
                                <a
                                    className="text-shade"
                                    href="https://github.com/sujan-s/rf-docs"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p className="no-margin-bottom">rf-docs ↗</p>
                                </a>
                                <code className="text-medium">0.3.2</code>
                            </Portion>
                        </Row>
                    </Portion>

                    <Portion desktopWidth="two-third"></Portion>
                </Row>
            </section>
        );
    }
}

export default Home;
