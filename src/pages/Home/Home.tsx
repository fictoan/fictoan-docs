import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
    Element,
    Row,
    Portion,
    HRule,
    Heading,
    Text,
    CodeBlock,
    Card,
    Button
} from "reactised-fictoan";

import { HomeStyled } from "./Home.styled";
import { sampleSnippet } from "../../assets/code-samples/CodeSamples";

import HeroImage from "../../assets/images/intro.png";


export const Home = () => {
    useEffect(() => {
        document.title = "Home — FICTOAN UI";

        try {
            window.scroll({
                top: 0,
                left: 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <HomeStyled>
            <Row sidePadding="huge" marginTop="tiny" gutters="large">
                <Portion>
                    <Card shape="rounded" shadow="soft" borderColor="slate-40">
                        <picture>
                            <img src={HeroImage} alt="FICTOAN intro"/>
                        </picture>
                    </Card>
                </Portion>

                <Portion>
                    <Heading as="h2" textColor="hue">FICTOAN</Heading>
                    <Heading as="h4">An intuitive framework to quickly whip up interfaces in React</Heading>
                    <Text textColor="white" size="tiny" marginBottom="micro">*Fuck I Couldn’t Think Of A Name</Text>

                    <Element as="div" className="wrapping-list">
                        <Link to="/getting-started">
                            <Button kind="primary" shape="rounded" shadow="mild" marginRight="nano">
                                Get started
                            </Button>
                        </Link>

                        <Button kind="secondary" shape="rounded" shadow="mild">
                            Github ↗
                        </Button>
                    </Element>
                </Portion>
            </Row>

            <HRule sideMargin="huge" marginTop="micro" marginBottom="micro" />

            <Row sidePadding="huge" gutters="large" retainLayoutOnTabLS retainLayoutOnTabPT>
                <Portion>
                    <Heading as="h5" marginBottom="micro">No gibberish or gobbledygook</Heading>
                    <Text>Check out this example of a <code>Card</code>{" "}element—</Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Card padding="medium" bgColor="slate-10" shape="rounded" shadow="soft" borderColor="blue" marginBottom="tiny">
                        <Heading as="h4" textColor="hue">Hello.</Heading>
                        <Text marginTop="none" marginBottom="tiny">I’m a Card component, and can be customised in about 4 million different ways. Nice to meet you.</Text>

                        <Button kind="primary" size="small" shape="rounded" shadow="mild" marginRight="nano">
                            Main action
                        </Button>

                        <Button kind="secondary" size="small" shape="rounded" shadow="mild">
                            Other action
                        </Button>
                    </Card>

                    <Text>
                        Simple, straight-forward React custom <code>props</code>, exactly like settings properties in a design app. Notice that the attributes are all intuitive and in plain English. You’ll also see that many attributes are the same across different components.
                    </Text>
                </Portion>

                <Portion desktopSpan="half">
                    <CodeBlock source={sampleSnippet} language="jsx" />
                </Portion>
            </Row>
        </HomeStyled>
    );
}

export default Home;
