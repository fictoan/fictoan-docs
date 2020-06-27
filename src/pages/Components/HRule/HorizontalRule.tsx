import React, { useEffect } from "react";

import {
    Element,
    Row,
    Portion,
    Heading,
    Text,
    CodeBlock,
    HRule
} from "fictoan-react";

import { HRuleStyled } from "./HRule.styled";
import { sampleHRule } from "./CodeSamples";


export const HorizontalRule = () => {
    useEffect(() => {
        document.title = "HRule — FICTOAN";
    }, []);

    return (
        <HRuleStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Horizontal rule</Heading>
                </Portion>
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  BASICS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="usage">
                <Row sidePadding="huge" marginBottom="micro">
                    <Portion>
                        <Heading as="h4">Usage</Heading>
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Text>
                            The <code>HRule</code> element is used to separate sections of content on your page. It’s a self-closing element, and doesn’t accept any children.
                        </Text>

                        <CodeBlock source={ sampleHRule } language="jsx" />

                        <Text>
                            The above code will display the default <code>HRule</code>, which looks like this&mdash;
                        </Text>

                        <HRule />

                        <Text>
                            It has a <code>marginTop</code> and <code>marginBottom</code> of <code>4vmax</code>, which you can over ride
                        </Text>
                    </Portion>
                </Row>
            </Element>
        </HRuleStyled>
    );
}
