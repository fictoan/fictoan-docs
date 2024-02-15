"use client";

import React from "react";

import { Badge, Div, Footer, Header, Heading, Portion, Row } from "fictoan-react";

import "./footer.css";

import FictoanLogo from "@/assets/images/fictoan-logo.svg";

export const SiteFooter = () => {

    return (
        <Footer id="site-footer">
            <Row marginBottom="none" marginTop="tiny" paddingTop="medium">
                <Portion>
                    <FictoanLogo id="fictoan-logo" />
                </Portion>
            </Row>
        </Footer>
    );
};
