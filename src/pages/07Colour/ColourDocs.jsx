import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule,
    Card
} from "fictoan-react";

import { ColourStyled } from "./Colour.styled";
import { sampleColourUsage } from "./CodeSamples";


export const ColourDocs = () => {
    useEffect(() => {
        document.title = "07Colour — Fictoan";

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
        <ColourStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" textColour="hue">Colour</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="basics">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">Adding colour</Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Fictoan comes with 223 different variables for adding colour to your elements. There are five props&mdash;<code>bgColour</code>, <code>textColour</code>, <code>borderColour</code>, <code>strokeColour</code> and <code>fillColour</code>&mdash;that accept any value from the list of colours below. Use them like so&mdash;
                        </Text>

                        <CodeBlock source={ sampleColourUsage } language="jsx"/>

                        <Text marginTop="micro" marginBottom="micro">
                            The last two props&mdash;<code>strokeColour</code> and <code>fillColour</code>&mdash;work only for SVG elements.
                        </Text>

                        <Text marginBottom="micro">
                            And oh, you can use both spellings of “colour”—<code>bgColour</code> or <code>bgColor</code> as props. This applies for all five props above.
                        </Text>
                    </Portion>
                </Row>
            </Element>

            <HRule sideMargin="huge" kind="primary" />

            <Element as="section" id="colour-list">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">List of colours</Heading>
                        <Text>Use any of these below values as variables with the above props.</Text>
                    </Portion>
                </Row>

                {/*  RED  ================================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red" borderColor="transparent" />
                        <Text margin="none" size="small">red</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-90" borderColor="transparent" />
                        <Text margin="none" size="small">red-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-80" borderColor="transparent" />
                        <Text margin="none" size="small">red-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-70" borderColor="transparent" />
                        <Text margin="none" size="small">red-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-60" borderColor="transparent" />
                        <Text margin="none" size="small">red-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-50" borderColor="transparent" />
                        <Text margin="none" size="small">red-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-40" borderColor="transparent" />
                        <Text margin="none" size="small">red-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-30" borderColor="transparent" />
                        <Text margin="none" size="small">red-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-20" borderColor="transparent" />
                        <Text margin="none" size="small">red-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="red-10" borderColor="transparent" />
                        <Text margin="none" size="small">red-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  ORANGE  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange" borderColor="transparent" />
                        <Text margin="none" size="small">orange</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-90" borderColor="transparent" />
                        <Text margin="none" size="small">orange-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-80" borderColor="transparent" />
                        <Text margin="none" size="small">orange-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-70" borderColor="transparent" />
                        <Text margin="none" size="small">orange-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-60" borderColor="transparent" />
                        <Text margin="none" size="small">orange-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-50" borderColor="transparent" />
                        <Text margin="none" size="small">orange-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-40" borderColor="transparent" />
                        <Text margin="none" size="small">orange-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-30" borderColor="transparent" />
                        <Text margin="none" size="small">orange-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-20" borderColor="transparent" />
                        <Text margin="none" size="small">orange-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="orange-10" borderColor="transparent" />
                        <Text margin="none" size="small">orange-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  AMBER  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber" borderColor="transparent" />
                        <Text margin="none" size="small">amber</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-90" borderColor="transparent" />
                        <Text margin="none" size="small">amber-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-80" borderColor="transparent" />
                        <Text margin="none" size="small">amber-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-70" borderColor="transparent" />
                        <Text margin="none" size="small">amber-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-60" borderColor="transparent" />
                        <Text margin="none" size="small">amber-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-50" borderColor="transparent" />
                        <Text margin="none" size="small">amber-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-40" borderColor="transparent" />
                        <Text margin="none" size="small">amber-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-30" borderColor="transparent" />
                        <Text margin="none" size="small">amber-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-20" borderColor="transparent" />
                        <Text margin="none" size="small">amber-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="amber-10" borderColor="transparent" />
                        <Text margin="none" size="small">amber-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  YELLOW  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow" borderColor="transparent" />
                        <Text margin="none" size="small">yellow</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-90" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-80" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-70" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-60" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-50" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-40" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-30" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-20" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="yellow-10" borderColor="transparent" />
                        <Text margin="none" size="small">yellow-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  SPRING  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring" borderColor="transparent" />
                        <Text margin="none" size="small">spring</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-90" borderColor="transparent" />
                        <Text margin="none" size="small">spring-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-80" borderColor="transparent" />
                        <Text margin="none" size="small">spring-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-70" borderColor="transparent" />
                        <Text margin="none" size="small">spring-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-60" borderColor="transparent" />
                        <Text margin="none" size="small">spring-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-50" borderColor="transparent" />
                        <Text margin="none" size="small">spring-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-40" borderColor="transparent" />
                        <Text margin="none" size="small">spring-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-30" borderColor="transparent" />
                        <Text margin="none" size="small">spring-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-20" borderColor="transparent" />
                        <Text margin="none" size="small">spring-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="spring-10" borderColor="transparent" />
                        <Text margin="none" size="small">spring-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  PISTACHIO  ==========================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-90" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-80" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-70" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-60" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-50" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-40" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-30" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-20" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="pistachio-10" borderColor="transparent" />
                        <Text margin="none" size="small">pistachio-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  GREEN  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green" borderColor="transparent" />
                        <Text margin="none" size="small">green</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-90" borderColor="transparent" />
                        <Text margin="none" size="small">green-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-80" borderColor="transparent" />
                        <Text margin="none" size="small">green-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-70" borderColor="transparent" />
                        <Text margin="none" size="small">green-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-60" borderColor="transparent" />
                        <Text margin="none" size="small">green-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-50" borderColor="transparent" />
                        <Text margin="none" size="small">green-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-40" borderColor="transparent" />
                        <Text margin="none" size="small">green-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-30" borderColor="transparent" />
                        <Text margin="none" size="small">green-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-20" borderColor="transparent" />
                        <Text margin="none" size="small">green-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="green-10" borderColor="transparent" />
                        <Text margin="none" size="small">green-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  TEAL  ===============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal" borderColor="transparent" />
                        <Text margin="none" size="small">teal</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-90" borderColor="transparent" />
                        <Text margin="none" size="small">teal-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-80" borderColor="transparent" />
                        <Text margin="none" size="small">teal-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-70" borderColor="transparent" />
                        <Text margin="none" size="small">teal-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-60" borderColor="transparent" />
                        <Text margin="none" size="small">teal-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-50" borderColor="transparent" />
                        <Text margin="none" size="small">teal-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-40" borderColor="transparent" />
                        <Text margin="none" size="small">teal-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-30" borderColor="transparent" />
                        <Text margin="none" size="small">teal-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-20" borderColor="transparent" />
                        <Text margin="none" size="small">teal-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="teal-10" borderColor="transparent" />
                        <Text margin="none" size="small">teal-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  GREEN  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan" borderColor="transparent" />
                        <Text margin="none" size="small">cyan</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-90" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-80" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-70" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-60" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-50" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-40" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-30" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-20" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColour="cyan-10" borderColor="transparent" />
                        <Text margin="none" size="small">cyan-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  SKY  ================================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky" borderColor="transparent" />
                        <Text margin="none" size="small">sky</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-90" borderColor="transparent" />
                        <Text margin="none" size="small">sky-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-80" borderColor="transparent" />
                        <Text margin="none" size="small">sky-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-70" borderColor="transparent" />
                        <Text margin="none" size="small">sky-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-60" borderColor="transparent" />
                        <Text margin="none" size="small">sky-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-50" borderColor="transparent" />
                        <Text margin="none" size="small">sky-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-40" borderColor="transparent" />
                        <Text margin="none" size="small">sky-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-30" borderColor="transparent" />
                        <Text margin="none" size="small">sky-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-20" borderColor="transparent" />
                        <Text margin="none" size="small">sky-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sky-10" borderColor="transparent" />
                        <Text margin="none" size="small">sky-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  BLUE  ===============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue" borderColor="transparent" />
                        <Text margin="none" size="small">blue</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-90" borderColor="transparent" />
                        <Text margin="none" size="small">blue-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-80" borderColor="transparent" />
                        <Text margin="none" size="small">blue-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-70" borderColor="transparent" />
                        <Text margin="none" size="small">blue-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-60" borderColor="transparent" />
                        <Text margin="none" size="small">blue-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-50" borderColor="transparent" />
                        <Text margin="none" size="small">blue-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-40" borderColor="transparent" />
                        <Text margin="none" size="small">blue-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-30" borderColor="transparent" />
                        <Text margin="none" size="small">blue-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-20" borderColor="transparent" />
                        <Text margin="none" size="small">blue-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="blue-10" borderColor="transparent" />
                        <Text margin="none" size="small">blue-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  INDIGO  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo" borderColor="transparent" />
                        <Text margin="none" size="small">indigo</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-90" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-80" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-70" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-60" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-50" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-40" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-30" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-20" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="indigo-10" borderColor="transparent" />
                        <Text margin="none" size="small">indigo-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  VIOLET  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet" borderColor="transparent" />
                        <Text margin="none" size="small">violet</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-90" borderColor="transparent" />
                        <Text margin="none" size="small">violet-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-80" borderColor="transparent" />
                        <Text margin="none" size="small">violet-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-70" borderColor="transparent" />
                        <Text margin="none" size="small">violet-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-60" borderColor="transparent" />
                        <Text margin="none" size="small">violet-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-50" borderColor="transparent" />
                        <Text margin="none" size="small">violet-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-40" borderColor="transparent" />
                        <Text margin="none" size="small">violet-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-30" borderColor="transparent" />
                        <Text margin="none" size="small">violet-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-20" borderColor="transparent" />
                        <Text margin="none" size="small">violet-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="violet-10" borderColor="transparent" />
                        <Text margin="none" size="small">violet-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  PURPLE  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple" borderColor="transparent" />
                        <Text margin="none" size="small">purple</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-90" borderColor="transparent" />
                        <Text margin="none" size="small">purple-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-80" borderColor="transparent" />
                        <Text margin="none" size="small">purple-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-70" borderColor="transparent" />
                        <Text margin="none" size="small">purple-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-60" borderColor="transparent" />
                        <Text margin="none" size="small">purple-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-50" borderColor="transparent" />
                        <Text margin="none" size="small">purple-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-40" borderColor="transparent" />
                        <Text margin="none" size="small">purple-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-30" borderColor="transparent" />
                        <Text margin="none" size="small">purple-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-20" borderColor="transparent" />
                        <Text margin="none" size="small">purple-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="purple-10" borderColor="transparent" />
                        <Text margin="none" size="small">purple-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  PINK  ===============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink" borderColor="transparent" />
                        <Text margin="none" size="small">pink</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-90" borderColor="transparent" />
                        <Text margin="none" size="small">pink-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-80" borderColor="transparent" />
                        <Text margin="none" size="small">pink-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-70" borderColor="transparent" />
                        <Text margin="none" size="small">pink-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-60" borderColor="transparent" />
                        <Text margin="none" size="small">pink-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-50" borderColor="transparent" />
                        <Text margin="none" size="small">pink-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-40" borderColor="transparent" />
                        <Text margin="none" size="small">pink-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-30" borderColor="transparent" />
                        <Text margin="none" size="small">pink-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-20" borderColor="transparent" />
                        <Text margin="none" size="small">pink-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="pink-10" borderColor="transparent" />
                        <Text margin="none" size="small">pink-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  SALMON  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon" borderColor="transparent" />
                        <Text margin="none" size="small">salmon</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-90" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-80" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-70" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-60" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-50" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-40" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-30" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-20" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="salmon-10" borderColor="transparent" />
                        <Text margin="none" size="small">salmon-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  CRIMSON  ============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson" borderColor="transparent" />
                        <Text margin="none" size="small">crimson</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-90" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-80" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-70" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-60" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-50" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-40" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-30" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-20" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="crimson-10" borderColor="transparent" />
                        <Text margin="none" size="small">crimson-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  BRICK  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick" borderColor="transparent" />
                        <Text margin="none" size="small">brick</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-90" borderColor="transparent" />
                        <Text margin="none" size="small">brick-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-80" borderColor="transparent" />
                        <Text margin="none" size="small">brick-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-70" borderColor="transparent" />
                        <Text margin="none" size="small">brick-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-60" borderColor="transparent" />
                        <Text margin="none" size="small">brick-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-50" borderColor="transparent" />
                        <Text margin="none" size="small">brick-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-40" borderColor="transparent" />
                        <Text margin="none" size="small">brick-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-30" borderColor="transparent" />
                        <Text margin="none" size="small">brick-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-20" borderColor="transparent" />
                        <Text margin="none" size="small">brick-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brick-10" borderColor="transparent" />
                        <Text margin="none" size="small">brick-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  SIENNA  =============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna" borderColor="transparent" />
                        <Text margin="none" size="small">sienna</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-90" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-80" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-70" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-60" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-50" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-40" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-30" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-20" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="sienna-10" borderColor="transparent" />
                        <Text margin="none" size="small">sienna-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  BROWN  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown" borderColor="transparent" />
                        <Text margin="none" size="small">brown</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-90" borderColor="transparent" />
                        <Text margin="none" size="small">brown-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-80" borderColor="transparent" />
                        <Text margin="none" size="small">brown-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-70" borderColor="transparent" />
                        <Text margin="none" size="small">brown-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-60" borderColor="transparent" />
                        <Text margin="none" size="small">brown-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-50" borderColor="transparent" />
                        <Text margin="none" size="small">brown-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-40" borderColor="transparent" />
                        <Text margin="none" size="small">brown-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-30" borderColor="transparent" />
                        <Text margin="none" size="small">brown-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-20" borderColor="transparent" />
                        <Text margin="none" size="small">brown-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="brown-10" borderColor="transparent" />
                        <Text margin="none" size="small">brown-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  SLATE  ==============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate" borderColor="transparent" />
                        <Text margin="none" size="small">slate</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-90" borderColor="transparent" />
                        <Text margin="none" size="small">slate-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-80" borderColor="transparent" />
                        <Text margin="none" size="small">slate-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-70" borderColor="transparent" />
                        <Text margin="none" size="small">slate-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-60" borderColor="transparent" />
                        <Text margin="none" size="small">slate-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-50" borderColor="transparent" />
                        <Text margin="none" size="small">slate-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-40" borderColor="transparent" />
                        <Text margin="none" size="small">slate-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-30" borderColor="transparent" />
                        <Text margin="none" size="small">slate-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-20" borderColor="transparent" />
                        <Text margin="none" size="small">slate-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="slate-10" borderColor="transparent" />
                        <Text margin="none" size="small">slate-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  GREY  ===============================================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey" borderColor="transparent" />
                        <Text margin="none" size="small">grey</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-90" borderColor="transparent" />
                        <Text margin="none" size="small">grey-90</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-80" borderColor="transparent" />
                        <Text margin="none" size="small">grey-80</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-70" borderColor="transparent" />
                        <Text margin="none" size="small">grey-70</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-60" borderColor="transparent" />
                        <Text margin="none" size="small">grey-60</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-50" borderColor="transparent" />
                        <Text margin="none" size="small">grey-50</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-40" borderColor="transparent" />
                        <Text margin="none" size="small">grey-40</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-30" borderColor="transparent" />
                        <Text margin="none" size="small">grey-30</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-20" borderColor="transparent" />
                        <Text margin="none" size="small">grey-20</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="grey-10" borderColor="transparent" />
                        <Text margin="none" size="small">grey-10</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>

                {/*  BLACK WHITE TRANSPARENT  ============================  */}
                <Row sidePadding="tiny" gutters="none">
                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="black" borderColor="transparent" />
                        <Text margin="none" size="small">black</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="white" />
                        <Text margin="none" size="small">white</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8">
                        <Card padding="tiny" bgColor="transparent" borderColor="transparent" id="transparent-card" />
                        <Text margin="none" size="small">transparent</Text>
                    </Portion>

                    <Portion desktopSpan="2" tabLSSpan="4" tabPTSpan="8" hideOnTabLS hideOnTabPT />
                </Row>
            </Element>
        </ColourStyled>
    );
}
