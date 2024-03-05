"use client";

// EXTERNAL DEPS ===============================================================
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Button,
    Div,
    Element,
    Heading1,
    Heading2,
    Heading3,
    Divider,
    Portion,
    Row,
    Text, Heading6, Heading4, Heading5,
} from "fictoan-react";

// COMPONENTS ==================================================================
import { IntroCode } from "../components/IntroCode/IntroCode";
import { ComponentGrid } from "../components/ComponentGrid/ComponentGrid";

// STYLES ======================================================================
import "../styles/home.css";

// ASSETS ======================================================================
import ManifestoIcon from "@/assets/icons/manifesto.svg";

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
            <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion desktopSpan="half">
                    <Heading6 weight="400" opacity="80" marginBottom="nano">
                        Code the way you design
                    </Heading6>

                    <Text marginBottom="tiny">
                        Plain-English props, attributes and values. No complex keywords or convoluted abbreviations to
                        remember.
                    </Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading6 weight="400" opacity="80" marginBottom="nano">
                        0–1 in minutes
                    </Heading6>

                    <Text marginBottom="tiny">
                        Built for rapid iteration, so you can quickly create complex pages and layouts. Modular too, so
                        you can build on top for specific needs.
                    </Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading6 weight="400" opacity="80" marginBottom="nano">
                        One theme to rule them all
                    </Heading6>

                    <Text marginBottom="tiny">
                        Every single configurable aspect of the UI is controlled by a single theme file. Create as many
                        as you need, and switch.
                    </Text>
                </Portion>
            </Row>

            <Divider kind="tertiary" horizontalMargin="medium" verticalMargin="tiny" />

            <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion desktopSpan="two-third">
                    <Heading4 weight="400" marginBottom="nano">
                        Devs love it, too
                    </Heading4>
                </Portion>

                <Portion desktopSpan="one-third" />

                <Portion desktopSpan="half">
                    <Heading6 weight="400" opacity="80" marginBottom="nano">
                        Performant
                    </Heading6>

                    <Text marginBottom="tiny">
                        100 on Lighthouse performance, and Best Practices. No JS, plain CSS styling. No dependency
                        bloat. As close to the metal as it gets. How apps were meant to be built.
                    </Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading6 weight="400" opacity="80" marginBottom="nano">
                        Clear separation of concerns
                    </Heading6>

                    <Text marginBottom="tiny">
                        Leave the pixel-perfection to the designers, so you can focus on logic and functionality. Move
                        faster, eliminate the dreaded back-and-forth.
                    </Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* MANIFESTO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="medium" verticalMargin="small">
                <Portion>
                    <Div className="manifesto-card" shadow="soft">
                        <Div className="manifesto-card-content">
                            <Row marginBottom="none">
                                <Portion desktopSpan="half">
                                    <Heading5 weight="400" textColour="blue-light-30" marginBottom="micro">
                                        We want to blur the lines between designers and developers.
                                    </Heading5>

                                    <Link href="/manifesto">
                                        Read our manifesto&nbsp;&rarr;
                                    </Link>
                                </Portion>
                            </Row>

                            <ManifestoIcon />
                        </Div>

                        <Div id="manifesto-card-bg" />
                    </Div>
                </Portion>
            </Row>

            <Divider kind="secondary" horizontalMargin="medium" verticalMargin="small" />

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
