import React, { useEffect, useState } from "react";

import { Button, CodeBlock, Element, Heading, HRule, InfoPanel, Portion, Row, Table, Text } from "fictoan-react";

import { InfoPanelDocsStyled } from "./InfoPanel.styled";
import {
    sampleInfoPanelCallback,
    sampleInfoPanelIsOpen,
    sampleInfoPanelSetup,
    sampleInfoPanelTheme,
    sampleInfoPanelWidth
} from "./CodeSamples";


export const InfoPanelDocs = () => {
    useEffect(() => {
        document.title = "Info panel — Fictoan";

        // try {
        //     window.scroll({
        //         top  : 0,
        //         left : 0
        //     });
        // } catch (error) {
        //     window.scrollTo(0, 0);
        // }
    }, []);

    const [isSampleInfoPanelOpen, setIsSampleInfoPanelOpen] = useState(false);

    const [isTinyInfoPanelOpen, setIsTinyInfoPanelOpen] = useState(false);
    const [isSmallInfoPanelOpen, setIsSmallInfoPanelOpen] = useState(false);
    const [isMediumInfoPanelOpen, setIsMediumInfoPanelOpen] = useState(false);
    const [isLargeInfoPanelOpen, setIsLargeInfoPanelOpen] = useState(false);
    const [isHugeInfoPanelOpen, setIsHugeInfoPanelOpen] = useState(false);

    return (
        <InfoPanelDocsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Info panel</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Table bordersFor="both" padding="tiny">
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
                                    <code>width</code>
                                </td>

                                <td>
                                    What portion of the screen it should cover
                                </td>

                                <td>
                                    <code>tiny</code><br />
                                    <code>small</code><br />
                                    <code>medium</code><br />
                                    <code>large</code><br />
                                    <code>huge</code>
                                </td>

                                <td>
                                    <code>medium</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>isOpen</code>
                                </td>

                                <td>
                                    Toggle the open state
                                </td>

                                <td><Text>boolean</Text></td>

                                <td>&mdash;</td>
                            </tr>

                            <tr>
                                <td>
                                    <code>onCloseCallback</code>
                                </td>

                                <td>
                                    Callback for closing the info panel
                                </td>

                                <td>
                                    <code>rounded</code><br />
                                    <code>curved</code><br />
                                    <code>circular</code><br />
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
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default info panel</Heading>

                        <Text marginBottom="micro">
                            The <code>InfoPanel</code> needs a state to initialise and an trigger to open.
                        </Text>

                        <Button
                            kind="primary" shadow="hard" marginBottom="micro"
                            onClick={() => setIsSampleInfoPanelOpen(true)}
                        >
                            Open info panel
                        </Button>

                        <CodeBlock source={sampleInfoPanelSetup} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            To close, you can pass the <code>false</code> set state to
                            the <code>onCloseCallback</code> and this will cause the info panel to slide out on clicking
                            that cross mark inside.
                        </Text>

                        <InfoPanel
                            isOpen={isSampleInfoPanelOpen}
                            padding="tiny"
                            onCloseCallback={() => setIsSampleInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Hello</Heading>
                            <Text>You can add all sorts of content here inside the info panel.</Text>
                        </InfoPanel>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  KIND  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Width</Heading>

                        <Text marginBottom="micro">
                            The <code>width</code> prop lets you cap the max-width of the info panel with the usual five
                            different sizing values, from <code>tiny</code> to <code>huge</code>.
                        </Text>

                        <CodeBlock source={sampleInfoPanelWidth} language="markup" marginBottom="micro" />

                        <Button
                            kind="secondary" shadow="hard" marginBottom="nano" marginRight="nano"
                            onClick={() => setIsTinyInfoPanelOpen(true)}
                        >
                            Tiny info panel
                        </Button>

                        <Button
                            kind="secondary" shadow="hard" marginBottom="nano" marginRight="nano"
                            onClick={() => setIsSmallInfoPanelOpen(true)}
                        >
                            Small info panel
                        </Button>

                        <Button
                            kind="secondary" shadow="hard" marginBottom="nano" marginRight="nano"
                            onClick={() => setIsMediumInfoPanelOpen(true)}
                        >
                            Medium info panel
                        </Button>

                        <Button
                            kind="secondary" shadow="hard" marginBottom="nano" marginRight="nano"
                            onClick={() => setIsLargeInfoPanelOpen(true)}
                        >
                            Large info panel
                        </Button>

                        <Button
                            kind="secondary" shadow="hard" marginBottom="nano" marginRight="nano"
                            onClick={() => setIsHugeInfoPanelOpen(true)}
                        >
                            Huge info panel
                        </Button>


                        <InfoPanel
                            width="tiny"
                            isOpen={isTinyInfoPanelOpen}
                            onCloseCallback={() => setIsTinyInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Tiny info panel</Heading>
                        </InfoPanel>

                        <InfoPanel
                            width="small"
                            isOpen={isSmallInfoPanelOpen}
                            onCloseCallback={() => setIsSmallInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Small info panel</Heading>
                        </InfoPanel>

                        <InfoPanel
                            width="medium"
                            isOpen={isMediumInfoPanelOpen}
                            onCloseCallback={() => setIsMediumInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Medium info panel</Heading>
                        </InfoPanel>

                        <InfoPanel
                            width="large"
                            isOpen={isLargeInfoPanelOpen}
                            onCloseCallback={() => setIsLargeInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Large info panel</Heading>
                        </InfoPanel>

                        <InfoPanel
                            width="huge"
                            isOpen={isHugeInfoPanelOpen}
                            onCloseCallback={() => setIsHugeInfoPanelOpen(false)}
                        >
                            <Heading as="h5" marginBottom="nano">Huge info panel</Heading>
                        </InfoPanel>

                        <Text marginTop="micro">
                            All of these values come from the theme file, where you can set once for your entire project
                            globally.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  IS OPEN  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Open and close</Heading>

                        <Text marginBottom="micro">
                            Use the <code>isOpen</code> prop to switch between the open state. This is a boolean prop.
                        </Text>

                        <CodeBlock source={sampleInfoPanelIsOpen} language="markup" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CALLBACK  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Callback for closing</Heading>

                        <Text marginBottom="micro">
                            There’s also the <code>onCloseCallback</code> prop to close the panel using
                            the <code>useState</code> hook.
                        </Text>

                        <CodeBlock source={sampleInfoPanelCallback} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />

                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleInfoPanelTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </InfoPanelDocsStyled>
    );
}
