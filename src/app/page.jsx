"use client";

// EXTERNAL DEPS =======================================================================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Div,
    Divider,
    Portion,
    Row,
    Text, Heading6, Heading4, Heading5, Card, Section, Heading2, Span,
} from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { IntroCode } from "../components/IntroCode/IntroCode";
import { ComponentGrid } from "../components/ComponentGrid/ComponentGrid";

// STYLES ==============================================================================================================
import "../styles/home.css";

// ASSETS ==============================================================================================================
import ManifestoIcon from "../assets/icons/manifesto.svg";

const Home = () => {
    return (
        <article id="home-page">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* HERO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <IntroCode />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* BULLET POINTS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Section id="usp-section" verticalPadding="medium">
                {/* GROUP 1 //////////////////////////////////////////////////////////////////////////////////////// */}
                <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                    <Portion desktopSpan="two-third">
                        <Heading2 marginBottom="nano" textColour="grey">
                            <Span textColour="white">As simple as it gets.</Span>
                        </Heading2>
                    </Portion>

                    <Portion desktopSpan="one-third" />

                    <Portion desktopSpan="half">
                        <Card
                            id="usp-card-1" className="usp-card"
                            bgColour="blue-dark70" borderColour="blue-dark30"
                            padding="micro" shape="rounded" shadow="soft"
                        >
                            <Heading5 weight="400" opacity="80" marginBottom="micro">
                                Code the way you design
                            </Heading5>

                            <Text size="large">
                                Plain-English props, attributes and values. No complex keywords or convoluted
                                abbreviations
                                to
                                remember.
                            </Text>
                        </Card>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Card
                            id="usp-card-2" className="usp-card"
                            bgColour="green-dark70" borderColour="green-dark50"
                            padding="micro" shape="rounded" shadow="soft"
                        >
                            <Heading5 weight="400" opacity="80" marginBottom="nano">
                                0 – 1 in minutes
                            </Heading5>

                            <Text size="large">
                                Built for rapid iteration, so you can quickly create complex pages and layouts. Modular
                                too, so you can build on top for specific needs.
                            </Text>
                        </Card>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Card
                            id="usp-card-3" className="usp-card"
                            bgColour="salmon-dark70" borderColour="salmon-dark50"
                            padding="micro" shape="rounded" shadow="soft"
                        >
                            <Heading5 weight="400" opacity="80" marginBottom="nano">
                                One theme to rule them all
                            </Heading5>

                            <Text size="large">
                                Every single configurable aspect of the UI is controlled by a single theme file. Create
                                as
                                many as you need, and switch.
                            </Text>
                        </Card>
                    </Portion>
                </Row>

                <Divider kind="tertiary" horizontalMargin="medium" verticalMargin="tiny" />

                {/* GROUP 2 //////////////////////////////////////////////////////////////////////////////////////// */}
                <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                    <Portion desktopSpan="two-third">
                        <Heading4 marginBottom="nano">
                            But wait, there’s more!
                        </Heading4>
                    </Portion>

                    <Portion desktopSpan="one-third" />

                    <Portion desktopSpan="half">
                        <Card
                            id="usp-card-4" className="usp-card"
                            bgColour="violet-dark70" borderColour="violet-dark50"
                            padding="micro" shape="rounded" shadow="soft"
                        >
                            <Heading5 weight="400" opacity="80" marginBottom="nano">
                                Performant
                            </Heading5>

                            <Text size="large">
                                100 on Lighthouse performance, and Best Practices. No JS, plain CSS styling. No
                                dependency
                                bloat. As close to the metal as it gets. How apps were meant to be built.
                            </Text>
                        </Card>
                    </Portion>

                    <Portion desktopSpan="half">
                        <Card
                            id="usp-card-5" className="usp-card"
                            bgColour="teal-dark70" borderColour="teal-dark50"
                            padding="micro" shape="rounded" shadow="soft"
                        >
                            <Heading5 weight="400" opacity="80" marginBottom="nano">
                                Clear separation of concerns
                            </Heading5>

                            <Text size="large">
                                Leave the pixel-perfection to the designers, so you can focus on logic and
                                functionality.
                                Move
                                faster, eliminate the dreaded back-and-forth.
                            </Text>
                        </Card>
                    </Portion>
                </Row>
            </Section>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* MANIFESTO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="medium" verticalMargin="small">
                <Portion>
                    <Div className="manifesto-card" shadow="soft">
                        <Div className="manifesto-card-content">
                            <Row marginBottom="none">
                                <Portion desktopSpan="half">
                                    <Heading4 textColour="blue-light30" marginBottom="micro">
                                        We want to blur the lines between designers and developers.
                                    </Heading4>

                                    <Text size="large">
                                        <Link href="/manifesto">
                                            Read our manifesto&nbsp;&rarr;
                                        </Link>
                                    </Text>
                                </Portion>
                            </Row>

                            <ManifestoIcon />
                        </Div>

                        <Div id="manifesto-card-bg" />
                    </Div>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* COMPONENT GRID */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <ComponentGrid />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* VIDEO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* <video id="fictoan-bg" autoPlay muted loop> */}
            {/*     <source src="/logo-render.mp4" /> */}
            {/* </video> */}
        </article>
    );
};

export default Home;
