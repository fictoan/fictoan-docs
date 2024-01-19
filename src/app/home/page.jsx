"use client";

import React from "react";

import { Button, Card, Element, Form, Heading, InputField, Portion, Row, Text } from "fictoan-react";

import "./page-home.css";

const HomePage = () => {
    return (
        <Element as="article" id="page-home">
            <Row layout="grid" marginTop="medium" horizontalPadding="medium">
                <Portion desktopSpan="two-third">
                    <Heading as="h1">Hello!</Heading>
                    <Heading as="h6" weight="400">Please login to continue</Heading>
                </Portion>

                <Portion desktopSpan="one-third">
                    <Card padding="micro" shape="rounded">
                        <Heading as="h6" marginBottom="micro">Login</Heading>

                        <Form>
                            <InputField label="Email" type="email" />
                            <InputField label="Password" type="password" />

                            <Button
                                bgColour="red"
                                shape="rounded"
                                textColour="white"
                            >
                                LOGIN
                            </Button>
                        </Form>
                    </Card>
                </Portion>
            </Row>
        </Element>
    );
};

export default HomePage;
