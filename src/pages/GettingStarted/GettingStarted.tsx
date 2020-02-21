import React from "react";

import { Row, Portion, Text, CodeBlock } from "reactised-fictoan";

import { installSnippet, sampleSnippet } from "../../assets/code-samples/CodeSamples";

class GettingStarted extends React.PureComponent {
    componentDidMount() {
        document.title = "Getting started — FICTOAN-UI";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article id="getting-started">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Getting started.</h2>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <Text>1. Add FICTOAN to your React project.</Text>
                        <CodeBlock source={installSnippet} language="bash" />
                    </Portion>

                    <Portion>
                        <Text>1. Add FICTOAN to your React project.</Text>
                        <CodeBlock source={sampleSnippet} language="jsx" />
                    </Portion>
                </Row>
            </article>
        );
    }
}

export default GettingStarted;
