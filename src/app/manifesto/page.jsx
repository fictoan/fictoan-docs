"use client";

import React from "react";

import "./page-manifesto.css";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule, Button, Tooltip,
} from "fictoan-react";


const Manifesto = () => {
    return (
        <article id="page-manifesto">

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" marginTop="medium">
                <Row sidePadding="small" marginBottom="medium">
                    <Portion desktopSpan="one-third">
                        <Text weight="600" marginBottom="small">MANIFESTO</Text>

                        <Heading as="h3" weight="400" textColour="white" marginBottom="micro">
                            The hand-off process is broken
                        </Heading>

                        <Text size="large" marginBottom="micro">
                            Hand-offs are treated akin to passing baton, and a its-your-problem-now attitude.
                        </Text>

                        <Text size="large" marginBottom="micro" title="hello">
                            We want it to be a lot more collaborative and iterative, and a lot less of a one-way street
                            paved with Jira tickets.
                        </Text>
                    </Portion>

                    <Portion desktopSpan="one-sixth" />

                    <Portion desktopSpan="one-fourth">
                        <video id="handoff-video" autoPlay muted loop>
                            <source src="/handoff.mp4" />
                        </video>
                    </Portion>
                </Row>

                <Row sidePadding="small">
                    <Portion desktopSpan="one-sixth" />

                    <Portion desktopSpan="one-third">
                        <Heading as="h3" weight="400" textColour="white" marginBottom="micro">
                            The designer is responsible for pixel perfection
                        </Heading>

                        <Text size="large" marginBottom="micro">
                            It’s the designer who understands the design best—shouldn’t they be in charge of the final
                            output?
                        </Text>

                        <Text size="large" marginBottom="micro">
                            A meticulously-crafted Figma file should not be the end of the line. A designer should
                            translate that to reality—and not let other interpret it as they see fit.
                        </Text>
                    </Portion>

                    <Portion desktopSpan="one-sixth" />

                    <Portion desktopSpan="one-fourth">
                    </Portion>
                </Row>

                <Row sidePadding="huge" marginTop="huge">
                <Text marginBottom="micro">
                        Fictoan stems from the idea that true hand-off between the designer and developer must be in
                        code, rather than a set of static images or artboards. The designer should be in complete
                        control of the interface and the experience, rather than the developer trying to interpret the
                        designer’s intentions via a document.
                    </Text>

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
            </Element>
        </article>
    );
};

export default Manifesto;
