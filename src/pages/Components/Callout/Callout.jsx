import React, { useEffect, useState } from "react";

import {
    Button,
    CodeBlock,
    Callout,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Table,
    Text,
    Tag
} from "fictoan-react";

import { CalloutDocsStyled } from "./Callout.styled";

import {
    sampleCalloutTheme,
    sampleCodeInsideCallout
} from "./CodeSamples";

export const CalloutDocs = () => {
    useEffect(() => {
        document.title = "Callout — Fictoan";

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
        <CalloutDocsStyled>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props — Callout</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth>
                        <thead className="bg-slate-10">
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
                                    <code>kind</code>
                                </td>

                                <td>
                                    <Text>Callouts for various scenarios.</Text>
                                </td>

                                <td>
                                    <code>info</code><br />
                                    <code>success</code><br />
                                    <code>warning</code><br />
                                    <code>error</code><br />
                                </td>

                                <td>
                                    <Callout>This.</Callout>
                                </td>
                            </tr>


                            <tr>
                                <td>
                                    <code>children</code>
                                </td>

                                <td>
                                    <Text>Accepts any other markup as part of the callout.</Text>
                                </td>

                                <td>
                                    <Text>&mdash;</Text>
                                </td>

                                <td>
                                    <Text>&mdash;</Text>
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
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default</Heading>
                        <Row>
                            <Portion>
                                <Text>The <code>Callout</code> lets you highlight messages with these easy defaults.</Text>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Callout kind="info" marginBottom="nano">This works. Just FYI.</Callout>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Callout kind="success" marginBottom="nano">Successfully displaying callout.</Callout>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Callout kind="warning" marginBottom="nano">Don’t wear me out. I am warning you.</Callout>
                            </Portion>
                            <Portion desktopSpan="half">
                                <Callout kind="error" marginBottom="nano">Successful display, but <code>kind="error"</code>. Wow.</Callout>
                            </Portion>
                        </Row>

                        <Text marginTop="micro" marginBottom="micro">
                            Feel free to modify this. Wrap any markup inside
                            the <code>Callout</code>.
                        </Text>
                        <Callout kind="info" marginBottom="nano">
                            <Element as="div" className="vertically-centre-items push-to-ends">
                                <Element as="div">
                                    <Heading as="h3" marginBottom="nano">Add headings.</Heading>
                                    <Text marginBottom="nano">Type regular text or insert some <code>code</code>.</Text>
                                </Element>
                                <Tag shape="rounded" bgColor="grey-20" borderColor="grey-80" textColor="grey-80" marginBottom="tiny">Or a status tag</Tag>
                            </Element>
                            <Text>Seriously, anything.</Text>
                            <CodeBlock source={sampleCodeInsideCallout} language="css" marginBottom="tiny"/>

                            <Button kind="primary">End with a button?</Button>
                        </Callout>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="item-props">

                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>
                            <CodeBlock source={sampleCalloutTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </CalloutDocsStyled>
    );
}
