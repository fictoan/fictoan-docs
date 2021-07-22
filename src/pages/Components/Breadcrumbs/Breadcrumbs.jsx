import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import {
    BreadcrumbItem,
    BreadcrumbsWrapper,
    CodeBlock,
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text
} from "fictoan-react";

import { BreadcrumbsStyled } from "./Breadcrumbs.styled";
import { sampleBreadcrumb, sampleBreadcrumbTheme } from "./CodeSamples";

export const BreadcrumbsDocs = () => {
    useEffect(() => {
        document.title = "Breadcrumbs — Fictoan";

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
        <BreadcrumbsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Breadcrumbs</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Text>None</Text>

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
                        <Heading as="h3" marginBottom="tiny">Default breadcrumbs</Heading>

                        <Text marginBottom="micro">
                            The <code>Breadcrumbs</code> uses a native <code>nav</code> and <code>li</code> elements.
                        </Text>

                        <CodeBlock source={sampleBreadcrumb} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the default <code>Breadcrumbs</code>, which looks like
                            this&mdash;
                        </Text>

                        <BreadcrumbsWrapper>
                            <BreadcrumbItem>
                                <NavLink exact to="/">
                                    Home
                                </NavLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <NavLink exact to="/components">
                                    Components
                                </NavLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem>
                                <NavLink exact to="/components/breadcrumbs">
                                    Breadcrumbs
                                </NavLink>
                            </BreadcrumbItem>
                        </BreadcrumbsWrapper>

                        <Text marginTop="micro" marginBottom="micro">
                            The entire markup is wrapped in the <code>BreadcrumbsWrapper</code>, with
                            individual <code>BreadcrumbItem</code> children inside it.
                            The <code>BreadcrumbItem</code> also simply just acts as a wrapper element for what ever you
                            put inside of it—feel free to stuff anything there.
                        </Text>

                        <Text marginTop="micro" marginBottom="micro">
                            The logical and sane thing to do is obviously <code>NavLink</code> items, which can indicate
                            the current page you are on.
                        </Text>

                        <Text marginTop="micro" marginBottom="micro">
                            Each item is separated by a <code>/</code>, which, you can set in the theme to be any
                            Unicode character! Fancy, no?
                        </Text>
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
                        <Text>
                            Bubkis. Just use as is.
                        </Text>
                    </Portion>
                </Row>


                <HRule sideMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleBreadcrumbTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </BreadcrumbsStyled>
    );
}
