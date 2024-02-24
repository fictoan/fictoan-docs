"use client";

import React from "react";

import { Button, Card, Form, Heading, InputField, Portion, Row, Article } from "fictoan-react";

import "./page-home.css";

const HomePage = () => {
    return (
        <Article id="page-home">
            <Row marginTop="medium" horizontalPadding="medium">
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
        </Article>
    );
};

export default HomePage;
