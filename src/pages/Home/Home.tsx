import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

import { Row, Portion, HRule, Element, Heading, Text, CodeBlock, Card, Button } from "reactised-fictoan";

import { sampleSnippet } from "../../assets/code-samples/CodeSamples";

class Home extends PureComponent {
    componentDidMount() {
        document.title = "Reactised FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Element as="article" id="page-home">
                <Row sidePadding="large" marginTop="tiny" gutters="large" retainLayoutOnTabLS retainLayoutOnTabPT>
                    <Portion desktopSpan="whole">
                        <Heading as="h1">
                            FICTOAN<span className="text-hue">UI</span>.
                        </Heading>
                        <Heading as="h3" weight="400" marginBottom="tiny">
                            Quickly build responsive interfaces with React markup.
                        </Heading>

                        <Heading as="h5" weight="400">
                            FICTOAN UI is aimed at designers looking to begin coding UI on their own, straight into
                            React, instead of an inefficient dev hand-off process. But all you front-end geeks, go ahead
                            and take it for a spin!
                        </Heading>
                    </Portion>

                    <Portion desktopSpan="whole" isHorizontal>
                        <div className="margin-right-tiny">
                            <a
                                href="https://github.com/sujan-s/reactised-fictoan"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <p className="no-margin-bottom">Souce code on Github ↗</p>
                            </a>
                            <code className="text-medium">0.21.31</code>
                        </div>

                        <div>
                            <a href="https://github.com/sujan-s/rf-docs" target="_blank" rel="noopener noreferrer">
                                <p className="no-margin-bottom">Read the docs</p>
                            </a>
                            <code className="text-medium">0.3.2</code>
                        </div>
                    </Portion>
                </Row>

                <HRule sideMargin="large" bgColor="slate-60" marginTop="tiny" marginBottom="tiny" />

                <Row sidePadding="large" marginTop="tiny" gutters="large" retainLayoutOnTabLS retainLayoutOnTabPT>
                    <Portion desktopSpan="whole">
                        <Text>
                            The idea is to code the UI the same way a designer designs the UI, with simple attributes
                            for each styling aspect of the element. Check out this example of a <code>Card</code>{" "}
                            element—
                        </Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Card padding="medium" bgColor="white" shape="rounded" shadow="soft" marginBottom="tiny">
                            <Heading as="h2" textColor="amber">
                                Hello.
                            </Heading>
                            <Text marginBottom="tiny">I am FICTOAN UI. Nice to meet you.</Text>

                            <Link to="/layout">
                                <Button kind="primary" size="small" shape="rounded" shadow="mild" marginRight="fixed">
                                    Main action
                                </Button>
                            </Link>
                            <Button kind="secondary" size="small" shape="rounded" shadow="mild">
                                Other action
                            </Button>
                        </Card>

                        <Text>
                            Super simple, right? Notice that the attributes are all intuitive and in plain English.
                            You’ll also see that many attributes are the same across different components.
                        </Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <CodeBlock source={sampleSnippet} language="jsx" />
                    </Portion>
                </Row>

                <Row sidePadding="large" marginTop="tiny" gutters="large" retainLayoutOnTabLS retainLayoutOnTabPT>
                    <Portion desktopSpan="half">
                        <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
                        <Heading as="h6">It’s modular.</Heading>
                        <Text>Use only the components and styles you need, uncheck the rest.</Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <HRule slim bgColor="slate" marginTop="tiny" marginBottom="tiny" />
                        <Heading as="h6">It’s themeable.</Heading>
                        <Text>Quickly change the look and feel of your app with simple variables.</Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <HRule bgColor="slate-40" marginTop="tiny" marginBottom="tiny" />
                        <Heading as="h6">It’s intuitive.</Heading>
                        <Text>All props and classes are in plain English. No complex nomenclature to memorise.</Text>
                    </Portion>

                    <Portion desktopSpan="half">
                        <HRule bgColor="slate-40" marginTop="tiny" marginBottom="tiny" />
                        <Heading as="h6">It’s open-source.</Heading>
                        <Text>Fork and raise PRs at will, and contribute to the project on Github. Have at it.</Text>
                    </Portion>
                </Row>
            </Element>
        );
    }
}

export default Home;
