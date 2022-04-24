//  External deps
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//  Internal deps
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
    Select,
    Table,
    CodeBlock,
    ProgressBar
} from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets
import { ReactComponent as FictoanLogo } from "../../assets/images/logo.svg";

export const Home = () => {
    useEffect(() => {
        document.title = "Home — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    const sampleCode = `<Row gutters="large">
    <Portion desktopSpan="half" mobileSpan="two-third">
        <Heading as="h4" marginBottom="micro">Profile</Heading>
        
        <Card
            shape="rounded" padding="micro"
            bgColour="slate-10" borderColour="red-90"
        >
            <Text weight="600">{user.name}</Text>
            <Text marginBottom="nano">{user.location.city}</Text>
            
            <Button
                kind="primary" shadow="soft"
                onClick={() => setShowUserDetails(true)}
            >
                Open profile
            </Button>
        </Card>
    </Portion>
</Row>`;

    const [, setShowNotification1] = useState(true);

    const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;


    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" marginTop="small" marginBottom="none">
                <Portion desktopSpan="half">
                    <FictoanLogo />
                    <Text
                        id="fictoan-full-form"
                        size="tiny"
                    >
                        *Fuck, I Couldn’t Think Of A Name
                    </Text>

                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h4" marginBottom="micro">
                        A performant and intuitive framework for quickly iterating UI design with code
                    </Heading>
                    <Heading as="h4" textColour="grey-40" marginBottom="micro">v0.37.1</Heading>

                    <Element as="div" className="wrapping-list" marginBottom="micro">
                        <a href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                            <Button
                                kind="secondary" size="small" shape="rounded" shadow="hard"
                                marginRight="nano" marginBottom="nano"
                            >
                                Github ↗
                            </Button>
                        </a>

                        <a
                            href="http://fictoan-storybook.s3-website.eu-central-1.amazonaws.com/"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Button
                                kind="secondary"
                                size="small" shape="rounded" shadow="hard"
                            >
                                Storybook ↗
                            </Button>
                        </a>
                    </Element>
                </Portion>
            </Row>

            <HRule kind="primary" sideMargin="large" />

            <Row sidePadding="large" marginTop="small" marginBottom="none">
                <Portion>
                    <Portion>
                        <Heading as="h4" marginBottom="nano">The idea</Heading>
                    </Portion>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h6" weight="400" marginBottom="nano">
                        Fictoan focuses on code readability, and is primed for ease and speed of iteration.
                    </Heading>

                    <Heading as="h6" weight="400" marginBottom="nano">
                        Props, attributes and values are all plain English.
                    </Heading>
                </Portion>

                <Portion desktopSpan="half">
                    <Heading as="h6" weight="400" marginBottom="nano">
                        We want designers also to be able to contribute in code&mdash;they can focus on layout, theming and
                        pixel-perfection while engineers can focus on the integration&mdash;this saves time and
                        headaches.
                    </Heading>

                    <Link to="/manifesto">
                        Read the manifesto &rarr;
                    </Link>
                </Portion>

                <Portion>
                    <CodeBlock
                        source={sampleCode} language="jsx"
                        marginTop="micro" marginBottom="micro"
                    />
                </Portion>
            </Row>

            <HRule kind="primary" sideMargin="large" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" marginBottom="medium">
                <Portion>
                    <Heading as="h4">Components</Heading>
                </Portion>

                <Portion>
                    <Element as="div" id="grid-wrapper" marginBottom="medium">
                        <Element as="div" className="grid-item">
                            <Link to="/components/button">
                                <Card
                                    id="button-card" className="component-card"
                                    padding="micro" shape="rounded" isFullHeight
                                >
                                    <Button
                                        kind="custom" shape="rounded"
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
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="type-card">
                            <Link to="/typography">
                                <Card
                                    className="component-card"
                                    padding="micro" shape="rounded" isFullHeight
                                >
                                    <Heading as="h1">Hi.</Heading>
                                    <Text weight="600">I’m just your type</Text>
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="notification-card">
                            <Link to="/components/notification">
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
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="progress-card">
                            <Link to="/components/progress-bar">
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
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="select-card">
                            <Link to="/components/select">
                                <Card
                                    className="component-card"
                                    padding="micro" shape="rounded" isFullHeight
                                >
                                    <Select
                                        options={[
                                            {
                                                name     : "What’s your pick?",
                                                value    : "select-an-option",
                                                disabled : true,
                                                selected : true
                                            },
                                            {
                                                name  : "Pick me!",
                                                value : "option-1"
                                            },
                                            {
                                                name  : "Mee!",
                                                value : "option-2"
                                            }
                                        ]}
                                    />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="table-card">
                            <Link to="/components/table">
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
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="code-card">
                            <Link to="/components/code-block">
                                <Card
                                    id="" className="component-card"
                                    shape="rounded" isFullHeight
                                >
                                    <CodeBlock source={cardComponentSample} language="jsx" marginTop="micro"
                                               marginBottom="micro" />
                                </Card>
                            </Link>
                        </Element>

                        <Element as="div" className="grid-item" id="colour-card">
                            <Card
                                className="component-card"
                                shape="rounded" isFullHeight
                            >
                                <Link to="/colour">
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
                    </Element>
                </Portion>
            </Row>

            <HRule sideMargin="large" bgColour="black" marginTop="micro" marginBottom="micro" />

            <Row sidePadding="large">
                <Portion>
                    <Text>&copy; 2022 Fictoan</Text>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
