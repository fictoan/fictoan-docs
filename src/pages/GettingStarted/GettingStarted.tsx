import React from "react";

import {
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock
} from "reactised-fictoan";

import { installSnippet, sampleSnippet } from "../../assets/code-samples/CodeSamples";

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

                        <CodeBlock source={installSnippet} language="bash" />
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h4" marginBottom="nano">Step 1 — Setting up a React project</Heading>
                        <Text marginBottom="nano">To begin using FICTOAN, you first need a React project up and running.</Text>

                        <CodeBlock source={installSnippet} language="bash" />
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Text marginBottom="nano">1. Add FICTOAN to your React project.</Text>
                        <CodeBlock source={sampleSnippet} language="jsx" />
                    </Portion>
                </Row>
            </article>
        );
    }
}

export default GettingStarted;
