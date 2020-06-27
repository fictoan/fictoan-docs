//  External deps
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//  Internal deps
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
} from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets
import { snippetCardSample } from "../../assets/code-samples/CodeSamples";
// import HeroImage from "../../assets/images/intro.png";


export const Home = () => {
    useEffect(() => {
        document.title = "Home — FICTOAN UI";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge" gutters="large" marginTop="tiny" marginBottom="none">
                <Portion>
                    {/*<Card shape="rounded" shadow="soft" borderColor="slate-40">*/}
                    {/*    <picture>*/}
                    {/*        <img src={HeroImage} alt="FICTOAN intro" />*/}
                    {/*    </picture>*/}
                    {/*</Card>*/}
                </Portion>

                <Portion>
                    <Heading as="h2" textColor="hue">FICTOAN<Element as="span" textColour="white">*</Element></Heading>
                    <Text textColor="white" size="tiny" margin="none">*Fuck I Couldn’t Think Of A Name</Text>
                    <Heading as="h4">v0.29.0</Heading>
                    <Heading as="h4" marginBottom="micro">An intuitive framework for designers looking to code interfaces</Heading>

                    <Element as="div" className="wrapping-list">
                        <Link to="/getting-started">
                            <Button kind="primary" shape="rounded" shadow="mild" marginRight="nano">
                                Get started
                            </Button>
                        </Link>

                        <a href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                            <Button kind="secondary" shape="rounded" shadow="mild">
                                Github ↗
                            </Button>
                        </a>
                    </Element>
                    <Text>Note: This documentation is still WIP, so hang tight till we add all the pages.</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" marginTop="small" marginBottom="small" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  USPs  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="huge" gutters="large" retainLayoutOnTabLS>
                <Portion desktopSpan="one-third">
                    <Heading as="h5" marginBottom="micro">Hand-off production code</Heading>
                    <Text>Why pass around XD and Sketch files when you can hand-off production-ready React code?</Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Heading as="h5" marginBottom="micro">Pixel-perfect by default</Heading>
                    <Text>You’re in control of the UI, so you don’t have to worry about missed nuances during hand-off.</Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Heading as="h5" marginBottom="micro">Easy to use</Heading>
                    <Text>No convoluted nomenclature, no complex structures to learn, just simple styling, all in plain English.</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" marginTop="tiny" marginBottom="tiny" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEMO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row id="demo-section" sidePadding="huge" gutters="large" retainLayoutOnTabLS retainLayoutOnTabPT>
                <Portion>
                    <Heading as="h5" marginBottom="micro">“Design” it in code</Heading>
                    <Text>Check out this example of a <code>Card</code> element—</Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Element as="div" id="output">
                        <Card padding="medium" bgColour="slate-10" shape="rounded" shadow="soft" borderColor="blue" marginBottom="tiny">
                            <Heading as="h4" textColor="hue">Hello.</Heading>
                            <Text marginTop="none" marginBottom="micro">
                                I’m a Card component, and can be customised in about 4 million different ways.
                            </Text>

                            <Text marginTop="none" marginBottom="tiny">
                                Nice to meet you.
                            </Text>

                            <Button kind="primary" size="small" shadow="mild" marginRight="nano">
                                Main action
                            </Button>

                            <Button kind="secondary" size="small" shadow="mild">
                                Other action
                            </Button>
                        </Card>

                        <Text>Simple, straight-forward React custom props, exactly like settings properties in a design app. Notice that the attributes are all intuitive and in plain English. You’ll also see that many attributes are the same across different components.</Text>
                    </Element>
                </Portion>

                <Portion desktopSpan="half" id="input">
                    <CodeBlock source={snippetCardSample} language="jsx" />
                </Portion>
            </Row>

            <HRule sideMargin="huge" marginTop="micro" marginBottom="micro" />
        </HomeStyled>
    );
};
