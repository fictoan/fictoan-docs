"use client";

import React from "react";

import { HRule, Portion, Row, Text } from "fictoan-react";

import "./props-list.css";

export const PropsList = ({ props }) => {
    return (
        <>
            <Row layout="grid" gutters="huge" horizontalPadding="large" marginBottom="none">
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

            {props.map((props) => (
                <>
                    <Row
                        layout="grid"
                        key={props.name}
                        gutters="huge"
                        horizontalPadding="large"
                        marginBottom="none"
                    >
                        <Portion desktopSpan="5">
                            <code>{props.name}</code>
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
                            <code>{props.defaultValue}</code>
                        </Portion>
                    </Row>

                    <HRule kind="tertiary" horizontalMargin="large" verticalMargin="nano" />
                </>
            ))}
        </>
    );
};
