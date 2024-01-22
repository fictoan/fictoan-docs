"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import Link from "next/link";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    Button,
    Element,
    Heading, HRule,
    Portion,
    Row,
    Text,
} from "fictoan-react";

import { CodeBlock } from "fictoan-react/components";

// COMPONENTS //////////////////////////////////////////////////////////////////
import { ComponentGrid } from "@/components/ComponentGrid/page";
import { SiteHeader } from "@/components/Header/Header";

// STYLES //////////////////////////////////////////////////////////////////////
import "../styles/home.css";

// ASSETS //////////////////////////////////////////////////////////////////////

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
            <SiteHeader />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* HERO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="medium" marginTop="tiny" marginBottom="small">
                <Portion>
                    <video autoPlay muted loop>
                        <source src="/ficotan-code.mp4 " />
                    </video>
                </Portion>

                <Portion desktopSpan="two-third">
                    <Text textColour="black" size="tiny">
                        *Fuck I Couldn’t Think Of A Name
                    </Text>

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
                    <Text size="huge" textColour="white" marginBottom="nano">
                        Code the way you design
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        Plain-English props, attributes and values. No complex keywords or convoluted abbreviations to
                        remember.
                    </Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Text size="huge" textColour="white" marginBottom="nano">
                        As fast as you
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        Built for rapid iteration, so you can quickly create complex layouts and flows and still
                        customise every aspect of the UI.
                    </Text>
                </Portion>
            </Row>

            <HRule kind="tertiary" horizontalMargin="medium" verticalMargin="tiny" />

            <Row layout="grid" horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion desktopSpan="one-third">
                    <Text size="huge" textColour="white" marginBottom="nano">
                        <Heading as="h4" weight="400">
                            It’s for devs too
                        </Heading>
                    </Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Text size="huge" textColour="white" marginBottom="nano">
                        Performant
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        No JS, plain CSS styling. No dependencies. No bloat. As close to the metal as it
                        gets. How apps were meant to be built.
                    </Text>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Text size="huge" textColour="white" marginBottom="nano">
                        Scalable
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        Customise all aspects with a single theme file.
                    </Text>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* MANIFESTO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="medium" marginBottom="medium">
                <Portion>
                    <Element as="div" className="manifesto-card" shadow="soft">
                        <Element as="div" className="manifesto-card-content" verticallyCentreItems pushItemsToEnds>
                            <Text size="large">
                                We want to blur the lines between designers and developers.
                            </Text>

                            <Link href="/manifesto">
                                <Button kind="tertiary" marginLeft="nano">
                                    Read our
                                    <wbr />
                                    manifesto&nbsp;&rarr;
                                </Button>
                            </Link>
                        </Element>

                        <div id="manifesto-card-bg" />
                    </Element>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* COMPONENT GRID */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <ComponentGrid />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* VIDEO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <video id="fictoan-bg" autoPlay muted loop>
                <source src="/logo-render.mp4" />
            </video>
        </article>
    );
};

export default Home;
