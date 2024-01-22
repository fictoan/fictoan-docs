"use client";
// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import React, { useEffect } from "react";

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    Element,
    Row,
    Portion,
    Heading,
    Text, HRule, Article
} from "fictoan-react";

// COMPONENTS //////////////////////////////////////////////////////////////////

// STYLES //////////////////////////////////////////////////////////////////////
import "./page-manifesto.css";

// ASSETS //////////////////////////////////////////////////////////////////////


const Manifesto = () => {
    useEffect(() => {
        document.title = "Manifesto — Fictoan";
    }, []);

    return (
        <article id="page-manifesto">
            {/* INTRO ////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="large" marginTop="medium" marginBottom="medium">
                {/* PROBLEM ================================================ */}
                <Portion>
                    <Text weight="700" marginBottom="small">MANIFESTO</Text>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h1" weight="400" textColour="white" marginBottom="micro">
                        The hand-off process is broken
                    </Heading>

                    <Text size="large" marginBottom="micro">
                        Hand-offs are treated akin to passing baton, and a its-your-problem-now attitude.
                    </Text>

                    <Text size="large" marginBottom="micro">
                        Designers and developers bickering over details is a common sight.
                    </Text>

                    <Text size="large" marginBottom="micro">
                        Back and forth over specifics is a massive time-sponge.
                    </Text>

                    <Text size="large" marginBottom="micro">
                        It shouldn’t be this way.
                    </Text>
                </Portion>

                <Portion desktopSpan="4" tabletPortraitSpan="one-third" />

                {/* VIDEO ================================================== */}
                <Portion desktopSpan="one-third" tabletPortraitSpan="one-third">
                    <video id="handoff-video" autoPlay muted loop>
                        <source src="/handoff.mp4" />
                    </video>
                </Portion>
            </Row>

            {/* IDEOLOGY /////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="large" marginTop="medium" marginBottom="medium">
                <Portion desktopSpan="half">
                    <Heading as="h1" weight="400" textColour="white" marginBottom="micro">
                        Pixel perfection is a designer’s job
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Text size="large" marginBottom="micro">
                        A meticulously-crafted Figma file should not be the end of the line. A designer should be
                        able to translate that to reality—and not let other interpret it as they see fit.
                    </Text>

                    <Text size="large" marginBottom="micro">
                        Instead of constant back and forth with the dev about specifics, why not made the changes in
                        code directly, and save time and headaches?
                    </Text>
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="large" marginTop="medium" marginBottom="medium" />

            {/* APPROACH /////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row layout="grid" horizontalPadding="small">
                <Portion desktopSpan="one-sixth" />

                <Portion desktopSpan="two-third">
                    <Heading as="h1" weight="400" marginBottom="small">
                        The margin’s off? The hover state is the wrong tint? The font weight feels wrong?
                    </Heading>

                    <Heading as="h1" weight="400" textColour="white" marginBottom="small">
                        Sacrilege, yes. But wait—don’t raise tickets.
                    </Heading>

                    <Heading as="h1" weight="400" textColour="white" marginBottom="small">
                        Fix it in code.
                    </Heading>

                    <Heading as="h1" weight="400" textColour="white" marginBottom="small">
                        It’s not that scary.
                    </Heading>

                    <Heading
                        id="down-arrow"
                        as="h1" weight="400" textColour="white" align="centre"
                    >
                        🡐
                    </Heading>
                </Portion>
            </Row>

            <Row layout="grid" horizontalPadding="small" marginBottom="large">
                <Portion desktopSpan="one-sixth" />

                <Portion desktopSpan="two-third">
                    <Heading as="h1" weight="400" textColour="white" marginBottom="micro">
                        Enter FICTOAN
                    </Heading>

                    <Text size="huge" marginBottom="micro">
                        Fictoan stems from the idea that true hand-off between the designer and developer must be in
                        code, rather than a set of static images or art-boards.
                    </Text>

                    <Text size="huge" marginBottom="micro">
                        The designer should be in complete control of the interface and the experience, rather than the
                        developer trying to interpret the designer’s intentions via a document.
                    </Text>
                </Portion>
            </Row>

            {/* APPROACH /////////////////////////////////////////////////////////////////////////////////////////// */}


            <Row layout="grid" horizontalPadding="huge" marginTop="huge">
                <Text marginBottom="micro">
                    This framework basically aims to blur the lines between the designer and a developer. Why must
                    there be a rift, this gaping chasm between the two roles? The goal must be to build and ship,
                    and not bicker about the pixel-perfectness of a particular component or the hover colour of a
                    element. These things are best left to the designer, so that the developer can spend their time
                    on things like performance and deployments.
                </Text>

                <Text>
                    While design tools are getting better and powerful by the day, there’s nothing really quite the
                    same as passing off working code. We think this will remain true for quite some time, and in the
                    meanwhile, see how we can make the lives of a designer and a developer easier.
                </Text>

                <Portion>
                    <Text marginBottom="micro">
                        The other principle Fictoan is built around is simplicity and obviousness. This is best
                        reflected in the naming conventions and the prop nomenclature.
                    </Text>

                    <Text>
                        The idea is to remove the entry barriers for people dipping their toes into code for the
                        first time, especially for those from a design background. The easiest way to do this is to
                        simply keep everything in plain English, and not introduce complexities and conditional
                        hierarchies, that is most often the case with most other frameworks.
                    </Text>
                </Portion>
            </Row>
        </article>
    );
};

export default Manifesto;
