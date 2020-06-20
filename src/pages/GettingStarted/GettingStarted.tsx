import React from "react";

import {
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    CheckBox,
    HRule,
    ProgressBar,
    Button
} from "reactised-fictoan";

import { snippetInstall } from "../../assets/code-samples/CodeSamples";

class GettingStarted extends React.PureComponent {
    componentDidMount() {
        document.title = "Getting started — FICTOAN-UI";

        window.scrollTo(0, 0);
    }

    render() {

        return (
            <article id="getting-started">
                <Row sidePadding="huge" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <Heading as="h2" className="text-hue">Getting started</Heading>
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Step 1 — Setting up a React project</Heading>
                        <Text marginBottom="nano">To begin using FICTOAN, you first need a React project up and running. For that, you’d need to install a few things—</Text>
                        <Text marginBottom="nano">NodeJS</Text>

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" className="goyya" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Step 1 — Setting up a React project</Heading>
                        <Text marginBottom="nano">To begin using FICTOAN, you first need a React project up and running.</Text>

                        <ProgressBar isThin label="Completion" value="75" max="100" unit="%" marginBottom="tiny" />

                        <CodeBlock source={snippetInstall} language="bash" />
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <CheckBox id="something" label="Anything" name="Other thing" as="input" />
                        <Text marginBottom="micro">1. Add FICTOAN to your React project.</Text>
                        {/*<CodeBlock source={sampleSnippet} language="jsx" />*/}


                        {/*<ProgressBar isThin label="What" value="40" max="100" />*/}

                        <Button kind="primary" shape="rounded" shadow="mild" marginBottom="nano" isLoading>
                            Get started
                        </Button>

                        <Button kind="secondary" shape="rounded" shadow="mild" isLoading>
                            Github ↗
                        </Button>
                    </Portion>
                </Row>
            </article>
        );
    }
}

export default GettingStarted;
