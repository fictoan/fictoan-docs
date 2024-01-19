"use client";

import React from "react";
import Link from "next/link";

import { Element, InputField, Portion, Row, Text } from "fictoan-react";

import "./header.css";

export const SiteHeader = () => {
    return (
        <>
            <Row
                layout="grid"
                id="site-header"
                horizontalPadding="medium"
                marginTop="micro"
            >
                <Portion desktopSpan="one-third">
                    <Element as="div" className="links-wrapper">
                        <Link href="https://github.com/fictoan/fictoan-react">
                            Github
                        </Link>

                        <Link href="https://github.com/fictoan/fictoan-react">
                            Storybook
                        </Link>
                    </Element>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Element as="div" className="links-wrapper">
                        <Link href="https://github.com/fictoan/fictoan-react">
                            Boilerplate
                        </Link>
                    </Element>
                </Portion>

                <Portion desktopSpan="one-third">
                    <InputField
                        type="search"
                        placeholder="Search"
                        bgColour="black"
                        borderColour="slate-dark-60"
                    />
                </Portion>
            </Row>
        </>
    );
};
