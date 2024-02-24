"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Heading, Divider, Portion, Row, Text, Article } from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { PropsList } from "../../components/PropsList/PropsList";

// STYLES ======================================================================
import "./base-element.css";

// CODE SNIPPETS ===============================================================
import { sampleElement } from "./CodeSamples";

// DATA ========================================================================
import { listOfBaseElementProps } from "./propsList";

const BaseElementDocs = () => {
    return (
        <Article id="page-base-element">
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* INTRO */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="medium">
                <Portion>
                    <Heading as="h1" marginBottom="micro">Base element</Heading>
                    <Text size="large">
                        This is a common element that lets you use the Fictoan props to any native HTML element. This
                        makes it easier to play with the rest of the components on page without having to write CSS.
                    </Text>
                </Portion>
            </Row>

            <PropsList propData={listOfBaseElementProps} />

            <Divider kind="primary" horizontalMargin="huge" verticalMargin="tiny" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* USAGE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge">
                <Portion>
                    <Heading as="h4" marginBottom="nano">Usage</Heading>

                    <Text marginBottom="micro">
                        The <code>Element</code> component is just a replacement for using the HTML element directly
                        to get access to Fictoan props.
                    </Text>

                    <CodeBlock source={sampleElement} language="jsx" />

                    <Text marginTop="micro" marginBottom="micro">
                        Not adding the <code>as</code> prop will render a <code>div</code> element by default.
                    </Text>
                </Portion>
            </Row>
        </Article>
    );
};

export default BaseElementDocs;
