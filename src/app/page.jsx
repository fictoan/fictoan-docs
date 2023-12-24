"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Element,
    Row,
    Portion,
    Heading,
    Button,
    Text,
    HRule,
    Card,
    NotificationItem,
    Table,
    Callout,
    ProgressBar,
    BreadcrumbItem,
    BreadcrumbsWrapper,
    Badge,
} from "fictoan-react";

import "./home.css";


const Home = () => {
    return (
        <article id="home-page">
            <Row sidePadding="medium" marginTop="nano">
                <Portion desktopSpan="one-third">
                    <Link href="https://github.com/fictoan/fictoan-react">
                        <Text weight="400">Github</Text>
                    </Link>
                </Portion>
            </Row>

            <Row sidePadding="medium" marginBottom="medium">
                <Portion>
                    <Element as="header" marginTop="small">
                        <Element as="div" marginBottom="small">
                            <Image
                                src="/fictoan-logo.svg"
                                alt="Fictoan Framework Logo"
                                id="fictoan-logo"
                                width={120}
                                height={48}
                                priority
                            />
                        </Element>

                        <Heading as="h1" id="intro-headline">
                            The cleanest and most readable markup ever.
                        </Heading>
                    </Element>
                </Portion>
            </Row>

            <HRule kind="tertiary" sideMargin="medium" marginTop="medium" marginBottom="medium" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="medium" marginBottom="medium">
                <Portion>
                    <Heading as="h6">Components</Heading>
                </Portion>

                <Portion>
                    <Element as="div" id="grid-wrapper">
                        <Element as="div" className="grid-item">
                            <Card
                                id="button-card" className="component-card" bgColour="amber" borderColour="amber"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Button
                                    kind="primary" shape="rounded"
                                    bgColour="violet-40" textColour="violet"
                                    marginBottom="nano"
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
                                        Button docs &rarr;
                                    </Link>
                                </Element>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="type-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Heading as="h1" textColour="pistachio">Hi.</Heading>
                                <Text weight="600">I’m just your type.</Text>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="notification-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <NotificationItem
                                    show kind="info"
                                    onCloseCallback={() => setShowNotification1(false)}
                                >
                                    I am here to notify you that...um, wait, I forgot.
                                </NotificationItem>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="progress-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <ProgressBar
                                    value="60" max="100" unit="%"
                                    label="Loading..."
                                    barBg="green-20" barFill="green-90"
                                    height="8px" shape="rounded"
                                />
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="input-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                {/* <InputField */}
                                {/*     label="Enter" */}
                                {/*     placeholder="here" */}
                                {/* /> */}
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="select-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                {/* <Select */}
                                {/*     options={[ */}
                                {/*         { */}
                                {/*             name     : "What’s your pick?", */}
                                {/*             value    : "select-an-option", */}
                                {/*             disabled : true, */}
                                {/*             selected : true */}
                                {/*         }, */}
                                {/*         { */}
                                {/*             name  : "Pick me!", */}
                                {/*             value : "option-1" */}
                                {/*         }, */}
                                {/*         { */}
                                {/*             name  : "Mee!", */}
                                {/*             value : "option-2" */}
                                {/*         } */}
                                {/*     ]} */}
                                {/* /> */}
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="table-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
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
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="breadcrumbs-card">
                            <Card
                                id="" className="component-card"
                                shape="rounded" isFullHeight
                            >
                                <BreadcrumbsWrapper>
                                    <BreadcrumbItem>
                                        <Link exact href="/components/breadcrumbs">
                                            A
                                        </Link>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <Link exact href="/components/breadcrumbs">
                                            long
                                        </Link>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <Link exact href="/components/breadcrumbs">
                                            trail
                                        </Link>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <Link exact href="/components/breadcrumbs">
                                            of
                                        </Link>
                                    </BreadcrumbItem>

                                    <BreadcrumbItem>
                                        <Link exact href="/components/breadcrumbs">
                                            crumbs
                                        </Link>
                                    </BreadcrumbItem>
                                </BreadcrumbsWrapper>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="radio-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Element as="div" marginBottom="micro">
                                    {/* <RadioButton */}
                                    {/*     id="radio-1" */}
                                    {/*     name="choices-1" */}
                                    {/*     value="yes" */}
                                    {/*     label="This" */}
                                    {/* /> */}
                                </Element>

                                {/* <RadioButton */}
                                {/*     id="radio-2" */}
                                {/*     name="choices-1" */}
                                {/*     value="no" */}
                                {/*     label="That" */}
                                {/* /> */}
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="checkbox-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Element as="div" marginBottom="micro">
                                    {/* <CheckBox */}
                                    {/*     id="checkbox-1" */}
                                    {/*     value="checkbox-1" */}
                                    {/*     name="checkbox-1" */}
                                    {/*     label="Check me" */}
                                    {/* /> */}
                                </Element>

                                {/* <Switch */}
                                {/*     id="switch-1" */}
                                {/*     value="switch-1" */}
                                {/*     name="switch-1" */}
                                {/*     label="Toggle me" */}
                                {/* /> */}
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="code-card">
                            <Card
                                id="" className="component-card"
                                shape="rounded" isFullHeight
                            >
                                {/* <CodeBlock */}
                                {/*     source={cardComponentSample} language="jsx" */}
                                {/*     marginTop="micro" marginBottom="micro" */}
                                {/* /> */}
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="colour-card">
                            <Card
                                className="component-card"
                                shape="rounded" isFullHeight
                            >
                                <Link href="/colour">
                                    <Card
                                        id="gradient-card"
                                        shape="rounded" borderColour="transparent"
                                        isFullHeight
                                    >
                                        <Text textColour="white">Colour</Text>
                                    </Card>
                                </Link>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="badge-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Element as="div" id="badge-wrapper">
                                    <Badge
                                        bgColour="red-20" textColour="red-90"
                                        shape="curved"
                                        margin="nano"
                                    >
                                        A
                                    </Badge>

                                    <Badge
                                        bgColour="green-20" textColour="green"
                                        shape="curved" size="large"
                                        margin="nano"
                                    >
                                        BADGE
                                    </Badge>

                                    <Badge
                                        bgColour="amber-20" textColour="orange"
                                        shape="rounded"
                                        margin="nano"
                                    >
                                        of
                                    </Badge>

                                    <Badge
                                        bgColour="purple-20" textColour="purple"
                                        shape="rounded" size="medium"
                                        margin="nano"
                                    >
                                        HONOUR
                                    </Badge>
                                </Element>
                            </Card>
                        </Element>

                        <Element as="div" className="grid-item" id="callout-card">
                            <Card
                                className="component-card"
                                padding="micro" shape="rounded" isFullHeight
                            >
                                <Callout
                                    kind="success"
                                >
                                    I’d also just like to call out that FICTOAN is awesome.
                                </Callout>
                            </Card>
                        </Element>
                    </Element>
                </Portion>

                <Portion>
                    <Text>...and many more.</Text>
                </Portion>
            </Row>
        </article>
    );
};

export default Home;
