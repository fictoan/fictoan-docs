"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    Badge,
    Button,
    Card,
    Callout,
    CheckBox,
    Element,
    Heading,
    Portion,
    Row,
    Text,
} from "fictoan-react";

import { CodeBlock } from "fictoan-react/components";

// COMPONENTS //////////////////////////////////////////////////////////////////
import { ComponentGrid } from "@/components/ComponentGrid/page";
import { SiteHeader } from "@/components/Header/Header";

// STYLES //////////////////////////////////////////////////////////////////////
import "./home.css";

// ASSETS //////////////////////////////////////////////////////////////////////


const debounce = (func, delay) => {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const Home = () => {
    const sampleCodeFictoan = `<Row sidepadding="large" gutters="small">
    <Portion desktopSpan="one-third" mobileSpan="half">
        <Text weight="600" marginBottom="micro">Hello there.</Text>
        
        <Button bgColour="amber" textColor="white">
            Click me
        </Button>
    </Portion>
</Row>`;

    // VIDEO SCRUBBING BASED ON SCROLL =========================================
    const videoRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        // Ensure scrollPosition is a number between 0 and 1
        setScrollPosition(Math.min(Math.max(scrolled / scrollable, 0), 1));
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video && !isNaN(video.duration)) {
            const videoTime = scrollPosition * video.duration;
            // Check if videoTime is a finite number before setting currentTime
            if (isFinite(videoTime)) {
                video.currentTime = videoTime;
            }
        }
    }, [scrollPosition]);

    return (
        <article id="home-page">
            <SiteHeader />

            <Row layout="grid" sidePadding="medium" marginTop="medium" marginBottom="tiny">
                <Portion desktopSpan="one-sixth" />

                <Portion desktopSpan="two-third">
                    <Element
                        as="div"
                        id="code-block-wrapper"
                    >
                        <CodeBlock source={sampleCodeFictoan} language="jsx" />
                    </Element>
                </Portion>

                <Portion desktopSpan="half">
                    <Element as="div">
                        <Image
                            src="/fictoan-logo.svg"
                            alt="Fictoan Framework Logo"
                            id="fictoan-logo"
                            width={120}
                            height={32}
                            priority
                        />
                    </Element>

                    <Text textColour="black" size="tiny">
                        *Fuck I Couldn’t Think Of A Name
                    </Text>

                    <Heading
                        id="intro-headline"
                        as="h1" textColour="indigo-light-20"
                        marginBottom="nano"
                    >
                        Dead-simple UI component system
                    </Heading>
                </Portion>


            </Row>

            <Row layout="grid" sidePadding="medium" gutters="large" marginBottom="small">
                <Portion desktopSpan="one-third">
                    <Text size="huge" textColour="white" marginBottom="nano">
                        Intuitive markup
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        Plain-English props, attributes and values. No complex keywords or convoluted abbreviations to
                        remember.
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
                        As fast as you
                    </Text>

                    <Text marginBottom="tiny" textColour="white" opacity="60">
                        Built for rapid iteration, so you can quickly create complex layouts and flows and still
                        customise every aspect of the UI.
                    </Text>
                </Portion>
            </Row>

            <Row layout="grid" sidePadding="medium" marginBottom="medium">
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

            <video id="fictoan-bg" ref={videoRef}>
                <source src="/logo-render.mp4" />
            </video>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <ComponentGrid />
        </article>
    );
};

export default Home;
