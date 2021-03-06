import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    HRule
} from "fictoan-react";

import { PhilosophyStyled } from "./Philosophy.styled";


export const Philosophy = () => {
    useEffect(() => {
        document.title = "Philosophy — FICTOAN";
    }, []);

    return (
        <PhilosophyStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Philosophy</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="philosophy">
                <Row sidePadding="huge">
                    <Portion>
                        <Text>
                            FICTOAN stems from the idea that true hand-off between the designer and developer must be in code, rather than a set of static images or artboards. The designer should be in complete control of the interface and the experience, rather than the developer trying to interpret the designer’s intentions via a document.
                        </Text>

                        <Text>
                            This framework basically aims to blur the lines between the designer and a dev. Why must there be a rift, this gaping chasm between the two roles? The goal must be to build and ship, and not bicker about the pixel-perfectness of a particular component or the hover colour of a element. These things are best left to the designer, so that the developer can spend their time on things like performance and deployments.
                        </Text>

                        <Text>
                            While design tools are getting better and powerful by the day, there’s nothing really quite the same as passing off working code. We think this will remain true for quite some time, and in the meanwhile, see how we can make both the designer’s and the developer’s lives easier.
                        </Text>
                    </Portion>
                </Row>

                <HRule kind="primary" sideMargin="huge" />

                <Row sidePadding="huge">
                    <Portion>
                        <Text>
                            The other principle FICTOAN is built around is simplicity and obviousness. This is best reflected in the naming conventions and the prop nomenclature.
                        </Text>

                        <Text>
                            The idea is to remove the entry barriers for people dipping their toes into code for the first time, especially for those from a design background. The easiest way to do this is to simply keep everything in plain English, and not introduce complexities and conditional hierarchies, that is most often the case with most other frameworks.
                        </Text>
                    </Portion>
                </Row>
            </Element>
        </PhilosophyStyled>
    );
};
