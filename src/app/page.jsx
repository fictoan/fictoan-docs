"use client";

// EXTERNAL DEPS ===============================================================
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Button,
    Div,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
} from "fictoan-react";

// COMPONENTS ==================================================================
import { ComponentGrid } from "../components/ComponentGrid/ComponentGrid";

// STYLES ======================================================================
import "../styles/home.css";

// ASSETS ======================================================================
import ManifestoIcon from "@/assets/icons/manifesto.svg";
import React from "react";

const Home = () => {
    const listOfUITools = [
        "Figma", "XD", "Sketch", "Invision", "Framer", "Principle", "Proto.io", "Marvel", "Axure", "Balsamiq", "Webflow",
    ];

    const randomUITool = listOfUITools[Math.floor(Math.random() * listOfUITools.length)];

    const sampleCodeFictoan = `<Row sidepadding="large" gutters="small">
    <Portion desktopSpan="one-third" mobileSpan="half">
        <Text weight="600" marginBottom="micro">Hello there.</Text>
        
        <Button bgColour="amber" textColor="white">
            Click me
        </Button>
    </Portion>
</Row>`;

    // VIDEO BACK AND FORWARD ==================================================
    document.addEventListener("DOMContentLoaded", () => {
        const video = document.getElementById("fictoan-bg");

        video.onended = () => {
            video.playbackRate = -1;
            video.play();
        };

        video.onplay = () => {
            if (video.currentTime === 0 && video.playbackRate === -1) {
                video.playbackRate = 1;
            }
        };
    });


    // VIDEO SCRUBBING BASED ON SCROLL =========================================
    // const videoRef = useRef(null);
    // const [scrollPosition, setScrollPosition] = useState(0);
    //
    // const handleScroll = () => {
    //     const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    //     const scrolled = window.scrollY;
    //     // Ensure scrollPosition is a number between 0 and 1
    //     setScrollPosition(Math.min(Math.max(scrolled / scrollable, 0), 1));
    // };

    // useEffect(() => {
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);
    //
    // useEffect(() => {
    //     const video = videoRef.current;
    //     if (video && !isNaN(video.duration)) {
    //         const videoTime = scrollPosition * video.duration;
    //         // Check if videoTime is a finite number before setting currentTime
    //         if (isFinite(videoTime)) {
    //             video.currentTime = videoTime;
    //         }
    //     }
    // }, [scrollPosition]);

    return (
        <article id="home-page">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* HEADER */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* HERO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="medium" marginTop="tiny" marginBottom="small">
                <Portion>

                </Portion>

                <Portion desktopSpan="two-third">
                    <Heading
                        id="intro-headline"
                        as="h2" textColour="indigo-light-20"
                        marginBottom="nano"
                    >
                        Designers, ditch {randomUITool}.
                    </Heading>

                    <Heading as="h4" weight="400" marginBottom="micro">
                        Build UI with code, using plain English syntax. Create ready-to-integrate UI in minutes.
                    </Heading>

                    <Heading as="h4" weight="400">
                        It’s time to take the next step.
                    </Heading>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* BULLET POINTS */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion desktopSpan="one-third" />

                <Portion desktopSpan="one-third">
                    <Heading as="h6" weight="400" opacity="80" marginBottom="nano">
                        Code the way you design
                    </Heading>

                    <Text marginBottom="tiny">
                        Plain-English props, attributes and values. No complex keywords or convoluted abbreviations to
                        remember.
                    </Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Heading as="h6" weight="400" opacity="80" marginBottom="nano">
                        As fast as you
                    </Heading>

                    <Text marginBottom="tiny">
                        Built for rapid iteration, so you can quickly create complex layouts and flows and still
                        customise every aspect of the UI.
                    </Text>
                </Portion>
            </Row>

            <HRule kind="tertiary" horizontalMargin="medium" verticalMargin="tiny" />

            <Row layout="grid" horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion desktopSpan="one-third">
                    <Heading as="h4" weight="400" marginBottom="nano">
                        It’s for devs too
                    </Heading>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Heading as="h6" weight="400" opacity="80" marginBottom="nano">
                        Performant
                    </Heading>

                    <Text marginBottom="tiny">
                        No JS, plain CSS styling. No dependencies. No bloat. As close to the metal as it
                        gets. How apps were meant to be built.
                    </Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Heading as="h6" weight="400" opacity="80" marginBottom="nano">
                        Scalable
                    </Heading>

                    <Text marginBottom="tiny">
                        Customise all aspects with a single theme file.
                    </Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* MANIFESTO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="medium" verticalMargin="large">
                <Portion>
                    <Div className="manifesto-card" shadow="soft">
                        <Div className="manifesto-card-content">
                            <Row layout="grid" marginBottom="none">
                                <Portion desktopSpan="half">
                                    <Heading as="h5" weight="400" textColour="blue">
                                        We want to blur the lines between designers and developers.
                                    </Heading>

                                    <Div marginTop="micro" showOnlyOnMobile />
                                </Portion>

                                <Portion desktopSpan="one-fourth" />

                                <Portion desktopSpan="one-fourth">
                                    <Link href="/manifesto">
                                        <Button kind="tertiary" isFullWidth>
                                            Read our manifesto&nbsp;&rarr;
                                        </Button>
                                    </Link>
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
