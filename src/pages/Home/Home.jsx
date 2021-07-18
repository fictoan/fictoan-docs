//  External deps
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//  Internal deps
import {
    Element,
    Row,
    Portion,
    Heading,
    Button,
    Text,
    HRule
} from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets


export const Home = () => {
    useEffect(() => {
        document.title = "Home — Fictoan";

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
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" gutters="large" marginTop="tiny" marginBottom="none">
                <Portion marginTop="small" marginBottom="small">
                    <Heading as="h1" textColour="black" marginBottom="nano">Fictoan</Heading>
                    <Text textColor="white" size="tiny" margin="none">*Fuck, I Couldn’t Think Of A Name</Text>
                </Portion>

                <Portion desktopSpan="one-third" className="with-top-border">
                    <Heading as="h4" textColour="grey-40" marginBottom="micro">v0.33.4</Heading>

                    <Element as="div" className="wrapping-list" marginBottom="micro">
                        <a
                            href="http://fictoan-storybook.s3-website.eu-central-1.amazonaws.com/"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Button kind="secondary" size="small" shape="rounded" shadow="mild" marginRight="nano" marginBottom="nano">
                                Storybook ↗
                            </Button>
                        </a>

                        <a href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                            <Button kind="secondary" size="small" shape="rounded" shadow="mild">
                                Github ↗
                            </Button>
                        </a>
                    </Element>
                </Portion>

                <Portion desktopSpan="two-third" className="with-top-border">
                    <Heading as="h5">
                        An intuitive framework for quickly iterating UI design with code
                    </Heading>


                    <HRule kind="primary" marginTop="micro" marginBottom="micro" />

                    <Link to="/manifesto">
                        Read the manifesto &rarr;
                    </Link>
                </Portion>

                <Portion desktopSpan="whole" className="with-top-border">
                <Heading as="h3" textColour="black" marginBottom="nano">Getting started</Heading>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
