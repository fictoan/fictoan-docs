import React, { PureComponent } from "react";

import { Row, Portion, HRule, Element, Heading, Text } from "reactised-fictoan";

class Home extends PureComponent {
    componentDidMount() {
        document.title = "Reactised FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Element as="article" id="page-home">
                <Row>
                    <Portion desktopSpan="half" padding="small">
                        <Row retainLayoutOnTabLS retainLayoutOnTabPT>
                            <Portion desktopSpan="whole">
                                <Heading as="h1">
                                    FICTOAN&mdash;<span className="text-hue">Reactised</span>.
                                </Heading>
                                <Heading as="h4" weight="400" marginBottom="tiny">
                                    Quickly build responsive interfaces with just JSX markup.
                                </Heading>
                                <code className="text-medium">npm install reactised-fictoan</code> or{" "}
                                <code className="text-medium">yarn add reactised-fictoan</code>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
                                <Heading as="h6">It’s modular.</Heading>
                                <Text>Use only the components and styles you need, uncheck the rest.</Text>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
                                <Heading as="h6">It’s performant.</Heading>
                                <Text>Build with the bare minimum of libraries and plugins. No code bloat.</Text>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule bgColor="slate-40" marginTop="tiny" marginBottom="tiny" />
                                <Heading as="h6">It’s intuitive.</Heading>
                                <Text>
                                    All props and classes are in plain English. No complex nomenclature to memorise.
                                </Text>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule bgColor="slate-40" marginTop="tiny" marginBottom="tiny" />
                                <Heading as="h6">It’s open-source.</Heading>
                                <Text>
                                    Fork and raise PRs at will, and contribute to the project on Github. Have at it.
                                </Text>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
                                <a
                                    className="text-shade"
                                    href="https://github.com/sujan-s/reactised-fictoan"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <p className="no-margin-bottom">reactised-fictoan ↗</p>
                                </a>
                                <code className="text-medium">0.17.2</code>
                            </Portion>

                            <Portion desktopSpan="half">
                                <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
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

                    <Portion desktopSpan="two-third" />
                </Row>
            </Element>
        );
    }
}

export default Home;
