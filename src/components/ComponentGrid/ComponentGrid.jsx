"use client";

// EXTERNAL DEPS ===============================================================
import React, { useState } from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Element,
    Badge,
    BreadcrumbItem,
    BreadcrumbsWrapper,
    Button,
    Callout,
    Card,
    Checkbox,
    Div,
    Heading,
    InputField,
    NotificationItem,
    Portion,
    ProgressBar,
    RadioButton,
    Row,
    Select,
    Switch,
    Table,
    Text,
    Accordion,
    Divider,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./component-grid.css";

export const ComponentGrid = () => {
    const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;

    return (
        <Div id="component-grid">
            <Row horizontalPadding="medium">
                <Portion>
                    <Heading as="h6">Some components</Heading>
                </Portion>

                <Portion>
                    <Div id="grid-wrapper">
                        {/* BUTTON ================================================================================= */}
                        <Div id="button-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Button
                                        kind="primary" shape="rounded"
                                        bgColour="violet-40" textColour="violet"
                                        marginBottom="nano"
                                        isFullWidth
                                    >
                                        Click me
                                    </Button>

                                    <Button
                                        kind="custom" shape="rounded"
                                        bgColour="amber-40" textColour="amber"
                                        isLoading isFullWidth
                                    >
                                        Load
                                    </Button>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/button">
                                            Button &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* TYPOGRAPHY ============================================================================= */}
                        <Div id="type-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Heading as="h1" textColour="pistachio">Hi.</Heading>
                                    <Text weight="600">I’m just your type.</Text>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/typography">
                                            Typography &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* ACCORDION ============================================================================== */}
                        <Div id="accordion-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Accordion summary="But wait!" padding="nano" borderColour="slate-dark-40"
                                               shape="rounded">
                                        <Divider kind="tertiary" verticalMargin="nano" />
                                        <Text>There’s more!</Text>
                                    </Accordion>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/accordion">
                                            Accordion &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* PROGRESS BAR =========================================================================== */}
                        <Div id="progress-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <ProgressBar
                                        value="60" max="100" unit="%"
                                        label="Loading..."
                                        barBg="green-20" barFill="green-90"
                                        height="8px" shape="rounded"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/progress-bar">
                                            Progress bar &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* INPUT FIELD ============================================================================ */}
                        <Div id="input-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <InputField
                                        label="Enter"
                                        placeholder="here"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/input-field">
                                            Input field &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* SELECT ================================================================================= */}
                        <Div id="select-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Select
                                        label="Pick one"
                                        options={[
                                            {
                                                label    : "What’s your pick?",
                                                value    : "select-an-option",
                                                disabled : true,
                                                selected : true,
                                            },
                                            {
                                                label : "Pick me!",
                                                value : "option-1",
                                            },
                                            {
                                                label : "No, me!",
                                                value : "option-2",
                                            },
                                        ]}
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/select">
                                            Select &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* TABLE ================================================================================== */}
                        <Div id="table-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Table padding="small" isStriped bordersFor="both" isfullWidth>
                                        <thead>
                                            <tr>
                                                <th>Yes,</th>
                                                <th>I</th>
                                                <th>would</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>very</td>
                                                <td>much</td>
                                                <td>like</td>
                                            </tr>

                                            <tr>
                                                <td>a</td>
                                                <td>table</td>
                                                <td>with</td>
                                            </tr>

                                            <tr>
                                                <td>the</td>
                                                <td>ocean</td>
                                                <td>view</td>
                                            </tr>

                                            <tr>
                                                <td>please.</td>
                                                <td>Thank</td>
                                                <td>you.</td>
                                            </tr>
                                        </tbody>
                                    </Table>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/table">
                                            Table &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* BREADCRUMBS ============================================================================ */}
                        <Div id="breadcrumbs-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <BreadcrumbsWrapper>
                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">
                                                A
                                            </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">
                                                long
                                            </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">
                                                trail
                                            </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">
                                                of
                                            </Link>
                                        </BreadcrumbItem>

                                        <BreadcrumbItem>
                                            <Link href="/components/breadcrumbs">
                                                crumbs
                                            </Link>
                                        </BreadcrumbItem>
                                    </BreadcrumbsWrapper>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/breadcrumbs">
                                            Breadcrumbs &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* RADIO BUTTONS ========================================================================== */}
                        <Div id="radio-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Div marginBottom="micro">
                                        <RadioButton
                                            id="radio-1"
                                            name="choices-1"
                                            value="yes"
                                            label="This"
                                        />
                                    </Div>

                                    <RadioButton
                                        id="radio-2"
                                        name="choices-1"
                                        value="no"
                                        label="That"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/radio-button">
                                            Radio buttons &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* CHECKBOX =============================================================================== */}
                        <Div id="checkbox-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Div marginBottom="micro">
                                        <Checkbox
                                            id="checkbox-1"
                                            value="checkbox-1"
                                            name="checkbox-1"
                                            label="Check me"
                                        />
                                    </Div>

                                    <Switch
                                        id="switch-1"
                                        value="switch-1"
                                        name="switch-1"
                                        label="Toggle me"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/checkbox">
                                            Checkbox / switch &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* CODE BLOCK ============================================================================= */}
                        <Div id="code-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <CodeBlock
                                        source={cardComponentSample} language="jsx"
                                        marginTop="micro" marginBottom="micro"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/codeblock">
                                            CodeBlock &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* COLOURS ================================================================================ */}
                        <Div id="colour-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Div
                                        id="gradient-card"
                                        shape="rounded" borderColour="transparent"
                                    />

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/colour">
                                            Colour &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* BADGE ================================================================================== */}
                        <Div id="badge-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Div id="badge-wrapper">
                                        <Badge
                                            bgColour="red-light-40" textColour="red-dark-10"
                                            shape="curved"
                                            margin="nano"
                                        >
                                            A
                                        </Badge>

                                        <Badge
                                            bgColour="green-light-40" textColour="green-dark-20"
                                            shape="curved" size="large"
                                            margin="nano"
                                        >
                                            BADGE
                                        </Badge>

                                        <Badge
                                            bgColour="amber-light-20" textColour="orange-dark-10"
                                            shape="rounded"
                                            margin="nano"
                                        >
                                            of
                                        </Badge>

                                        <Badge
                                            bgColour="violet" textColour="white"
                                            shape="rounded" size="medium"
                                            margin="nano"
                                        >
                                            HONOUR
                                        </Badge>
                                    </Div>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/badge">
                                            Badge &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>

                        {/* CALLOUT ================================================================================ */}
                        <Div id="callout-card" className="grid-item">
                            <Card shape="rounded" className="component-wrapper" isFullHeight>
                                <Div className="component-card">
                                    <Callout kind="success">
                                        <Text textColour="green-dark-60">
                                            I’d also just like to call out that FICTOAN is awesome.
                                        </Text>
                                    </Callout>

                                    <Element as="footer" className="footer-bottom">
                                        <Link href="/components/callout">
                                            Callout &rarr;
                                        </Link>
                                    </Element>
                                </Div>
                            </Card>
                        </Div>
                    </Div>
                </Portion>

                <Portion>
                    <Text>...and many more.</Text>
                </Portion>
            </Row>
        </Div>
    );
};
