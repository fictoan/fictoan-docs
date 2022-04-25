import React, { useEffect } from "react";

import { CodeBlock, Element, Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import { SidebarStyled } from "./Sidebar.styled";
import {
    sampleSidebar,
    sampleSidebarCollapse,
    sampleSidebarFooter,
    sampleSidebarHeader, sampleSidebarTheming,
    sampleSidebarWrapper
} from "./CodeSamples";

export const SidebarDocs = () => {
    useEffect(() => {
        document.title = "Sidebar — Fictoan";

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
        <SidebarStyled>
            <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Sidebar — Wrapper</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
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
                                    <code>isCollapsed</code>
                                </td>

                                <td>
                                    An array of the individual tab objects
                                </td>

                                <td>
                                    object
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
                        <Heading as="h3" marginBottom="tiny">Default Sidebar</Heading>

                        <Text marginBottom="micro">
                            The <code>Sidebar</code> is a <code>aside</code> element that sits on the left of the
                            window, and is used primarily as a navigation section. Below is the markup for setting up
                            your page.
                        </Text>

                        <CodeBlock source={sampleSidebar} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display a layout similar to what you are seeing on this page.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Basic setup</Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarWrapper</code> acts as a parent for the other sidebar components inside of
                            it.
                            The <code>SidebarHeader</code>, <code>SidebarLinksWrapper</code> and <code>SidebarFooter</code> form
                            the immediate children of the wrapper.
                        </Text>

                        <CodeBlock source={sampleSidebarWrapper} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">Header</Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarHeader</code> sits at the top of the wrapper and this is where you add your
                            logo or site name etc. It also accepts an optional prop called <code>isSticky</code>, which
                            makes it stick to the top once scrolling becomes available inside the sidebar.
                        </Text>

                        <CodeBlock source={sampleSidebarHeader} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">Links wrapper</Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarLinksWrapper</code> is a sibling of the header, and this is where you can
                            drop all your nav links and other content in the many body of the sidebar.
                        </Text>

                        <Text marginBottom="micro">
                            If the <code>SidebarHeader</code> and the <code>SidebarFooter</code> are sticky, you will
                            need to set the top and bottom margin of the links wrapper in the theme file, so that they
                            don’t disappear underneath.
                        </Text>

                        <CodeBlock source={sampleSidebarHeader} language="jsx" />
                    </Portion>
                </Row>

                <HRule sideMargin="huge" kind="secondary" />

                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="tiny">Footer</Heading>

                        <Text marginBottom="micro">
                            The <code>SidebarFooter</code> is a sibling of the header and the links wrapper, and sits at
                            the bottom. It also accepts the optional <code>isSticky</code> prop, to have it consistently
                            at the bottom.
                        </Text>

                        <CodeBlock source={sampleSidebarFooter} language="jsx" />
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
                        <Heading as="h3">Collapsing the sidebar</Heading>
                    </Portion>

                    <Portion>
                        <Text marginBottom="micro">
                            Clicking on the header makes the sidebar collapse to just the icons, and makes way for more
                            content width. Here’s how it’s setup—
                        </Text>

                        <CodeBlock source={sampleSidebarCollapse} language="jsx" marginBottom="micro" />

                        <Text>
                            With <code>useState</code> and <code>onClick</code>, you can easily switch between the
                            default and collapsed states of the sidebar. In the collapsed state, only the icons are
                            visible, and the label is displayed on hover.
                        </Text>
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />
            </Element>


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <CodeBlock source={sampleSidebarTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </SidebarStyled>
    );
}
