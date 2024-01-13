"use client";

import React from "react";

import { Button, Card, Element, Heading, InputField, Portion, Row, Text } from "fictoan-react";

import "./page-name.css";

const HomePage = () => {
    return (
        <>
            <Row
                layout="grid" bgColour="blue-light-10" padding="small" gutters="huge"
            >
                <Portion>
                    <Heading as="h1" textColour="white">Hello there!</Heading>
                </Portion>

                <Portion desktopSpan="one-fourth">
                    <Card padding="micro" shape="rounded" shadow="hard">
                        <Text textColour="red">[Magna, Luctus, Quam, Vel][ram, josephine, matthew]</Text>
                    </Card>
                </Portion>
                <Portion desktopSpan="one-fourth">
                    <Card padding="micro" shape="rounded" shadow="hard">
                        <Text weight="700" size="huge">Some text</Text>

                        <InputField placeholder="ss" id="ss" label="sds" />

                        <Button
                            bgColour="orange-dark-10" shadow="hard" shape="rounded"
                            textColour="white" borderColour="white"
                        >
                            Click me!
                        </Button>
                    </Card>
                </Portion>
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded" shadow="hard" bgColour="pistachio-light-10">
                        <Text marginBottom="tiny">Some text</Text>
                    </Card>
                </Portion>
            </Row>
        </>
    );
};

export default HomePage;
