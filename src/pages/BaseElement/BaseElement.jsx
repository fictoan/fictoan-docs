import React, { useEffect } from "react";

import { Card, CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import { BaseElementDocsStyled } from "./BaseElement.styled";
import { sampleElement } from "./CodeSamples";


export const BaseElementDocs = () => {
    useEffect(() => {
        document.title = "Base element — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <BaseElementDocsStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue" marginBottom="small">Base element</Heading>
                    <Text>
                        This is a common element that lets you use the Fictoan props to any native HTML element. This
                        makes it easier to play with the rest of the components on page without having to write CSS.
                    </Text>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Table bordersFor="both" padding="tiny" isStriped>
                        <thead>
                            <tr>
                                <td className="weight-600">Prop</td>
                                <td className="weight-600">Description</td>
                                <td className="weight-600">Values</td>
                                <td className="weight-600">Default</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <code>as</code>
                                </td>

                                <td>
                                    <Text>Convert this into any possible native HTML element</Text>
                                </td>

                                <td>
                                    <Text>Seriously, anything from {" "}
                                        <Element
                                            as="a"
                                            href="https://www.w3.org/TR/2012/WD-html-markup-20121025/elements.html"
                                            rel="noopener noreferrer" target="_blank"
                                        >
                                            this list
                                        </Element>.</Text>
                                </td>

                                <td>
                                    &mdash;
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="nano">Default</Heading>

                        <Text marginBottom="micro">
                            The <code>Element</code> component is just a replacement for using the HTML element directly
                            to get access to Fictoan props. Usage is pretty simple, with the <code>as</code> prop.
                        </Text>

                        <CodeBlock source={sampleElement} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will render an <code>article</code>, but you can now use all Fictoan props to place and style it as you wish, without the need to write CSS. Nifty, eh?
                        </Text>
                    </Portion>
                </Row>
            </Element>
        </BaseElementDocsStyled>
    );
}
