"use client";

import React from "react";

import { Heading, HRule, Portion, Row, Text } from "fictoan-react";

import "./props-list.css";

export const PropsList = ({ propData }) => {
    return (
        <>
            <Row layout="grid" gutters="huge" horizontalPadding="large" marginBottom="none">
                <Portion>
                    <Heading as="h6">{propData.elementName}</Heading>
                </Portion>

                <Portion desktopSpan="5">
                    <Text weight="700">Name</Text>
                </Portion>

                <Portion desktopSpan="9">
                    <Text weight="700">Description</Text>
                </Portion>

                <Portion desktopSpan="5">
                    <Text weight="700">Values</Text>
                </Portion>

                <Portion desktopSpan="5">
                    <Text weight="700">Default</Text>
                </Portion>
            </Row>

            <HRule kind="secondary" horizontalMargin="large" verticalMargin="nano" />

            {propData?.props.map((props) => (
                <>
                    <Row
                        layout="grid"
                        key={props.name}
                        gutters="huge"
                        horizontalPadding="large"
                        marginBottom="none"
                    >
                        <Portion desktopSpan="5">
                            <Text>
                                {
                                    <span dangerouslySetInnerHTML={{ __html: props.name }} />
                                }
                            </Text>
                        </Portion>

                        <Portion desktopSpan="9">
                            <Text>
                                {
                                    <span dangerouslySetInnerHTML={{ __html: props.description }} />
                                }
                            </Text>
                        </Portion>

                        <Portion desktopSpan="5" className="props-values-list">
                            {props.values.map((value) => (
                                <code>{value}</code>
                            ))}
                        </Portion>

                        <Portion desktopSpan="5">
                            {props.defaultValue
                                ? <code>{props.defaultValue}</code>
                                : <Text>—</Text>
                            }
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="large" verticalMargin="nano" />
                </>
            ))}
        </>
    );
};
