"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";
import Link from "next/link";

// INTERNAL DEPS ===============================================================
import {
    Badge,
    BreadcrumbItem,
    BreadcrumbsWrapper,
    Button,
    Callout,
    CheckBox,
    Element,
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
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==================================================================
import { GlowCard } from "../GlowCard/GlowCard";

// STYLES ======================================================================
import "./component-grid.css";

export const ComponentGrid = () => {
    const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;

    return (
        <>
            <div id="component-grid">
                <Row layout="grid" horizontalPadding="medium" marginBottom="medium">
                    <Portion>
                        <Heading as="h6">Components</Heading>
                    </Portion>

                    <Portion>
                        <Element as="div" id="grid-wrapper">
                            <Element as="div" className="grid-item" id="button-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
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

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Button &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="type-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Heading as="h1" textColour="pistachio">Hi.</Heading>
                                        <Text weight="600">I’m just your type.</Text>

                                        <Element as="footer">
                                            <Link href="/components/typography">
                                                Typography &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="notification-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <NotificationItem
                                            show kind="info"
                                            onCloseCallback={() => setShowNotification1(false)}
                                        >
                                            I am here to notify you that...um, wait, I forgot.
                                        </NotificationItem>

                                        <Element as="footer">
                                            <Link href="/components/notifications">
                                                Notifiactions &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="progress-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <ProgressBar
                                            value="60" max="100" unit="%"
                                            label="Loading..."
                                            barBg="green-20" barFill="green-90"
                                            height="8px" shape="rounded"
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Progress bar &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="input-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <InputField
                                            label="Enter"
                                            placeholder="here"
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Input field &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="select-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Select
                                            options={[
                                                {
                                                    name     : "What’s your pick?",
                                                    value    : "select-an-option",
                                                    disabled : true,
                                                    selected : true,
                                                },
                                                {
                                                    name  : "Pick me!",
                                                    value : "option-1",
                                                },
                                                {
                                                    name  : "No, me!",
                                                    value : "option-2",
                                                },
                                            ]}
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Select &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="table-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
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

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Table &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="breadcrumbs-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
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

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Breadcrumbs &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="radio-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Element as="div" marginBottom="micro">
                                            <RadioButton
                                                id="radio-1"
                                                name="choices-1"
                                                value="yes"
                                                label="This"
                                            />
                                        </Element>

                                        <RadioButton
                                            id="radio-2"
                                            name="choices-1"
                                            value="no"
                                            label="That"
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Radio buttons &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="checkbox-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Element as="div" marginBottom="micro">
                                            <CheckBox
                                                id="checkbox-1"
                                                value="checkbox-1"
                                                name="checkbox-1"
                                                label="Check me"
                                            />
                                        </Element>

                                        <Switch
                                            id="switch-1"
                                            value="switch-1"
                                            name="switch-1"
                                            label="Toggle me"
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Switch &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="code-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <CodeBlock
                                            source={cardComponentSample} language="jsx"
                                            marginTop="micro" marginBottom="micro"
                                        />

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                CodeBlock &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="colour-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Element as="div"
                                                 id="gradient-card"
                                                 shape="rounded" borderColour="transparent"
                                        />

                                        <Element as="footer">
                                            <Link href="/colour/">
                                                Colour &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="badge-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Element as="div" id="badge-wrapper">
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
                                        </Element>

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Badge &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>

                            <Element as="div" className="grid-item" id="callout-card">
                                <GlowCard>
                                    <Element as="div" className="component-card">
                                        <Callout kind="success">
                                            <Text textColour="green-dark-60">I’d also just like to call out that FICTOAN is
                                                awesome.</Text>
                                        </Callout>

                                        <Element as="footer">
                                            <Link href="/components/button">
                                                Callout &rarr;
                                            </Link>
                                        </Element>
                                    </Element>
                                </GlowCard>
                            </Element>
                        </Element>
                    </Portion>

                    <Portion>
                        <Text>...and many more.</Text>
                    </Portion>
                </Row>
            </div>
        </>
    );
};
