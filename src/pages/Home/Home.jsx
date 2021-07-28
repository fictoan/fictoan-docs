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
    HRule, Card, NotificationItem, Select, Table, CodeBlock, ProgressBar
} from "fictoan-react";

//  Local components
import { HomeStyled } from "./Home.styled";

//  Local assets


export const Home = () => {
    useEffect(() => {
        document.title = "Home — Fictoan";

        try {
            window.scroll({
                top: 0,
                left: 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    const [, setShowNotification1] = useState(true);

    const sampleCode = `const clickHere = () => {
    window.load("/components/card");
}`;

    return (
        <HomeStyled>
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  INTRO  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large" marginTop="tiny" marginBottom="none">
                <Portion marginTop="small" marginBottom="small">
                    <Heading as="h1" textColour="black" marginBottom="nano">Fictoan</Heading>
                    <Text textColor="white" size="tiny" margin="none">*Fuck, I Couldn’t Think Of A Name</Text>
                </Portion>

                <Portion desktopSpan="half" className="with-top-border">
                    <Heading as="h4" textColour="grey-40" marginBottom="micro">v0.33.4</Heading>

                    <Element as="div" className="wrapping-list" marginBottom="micro">
                        <a
                            href="http://fictoan-storybook.s3-website.eu-central-1.amazonaws.com/"
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Button kind="secondary" size="small" shape="rounded" shadow="hard" marginRight="nano" marginBottom="nano">
                                Storybook ↗
                            </Button>
                        </a>

                        <a href="https://github.com/fictoan/fictoan-react" target="_blank" rel="noopener noreferrer">
                            <Button kind="secondary" size="small" shape="rounded" shadow="hard">
                                Github ↗
                            </Button>
                        </a>
                    </Element>
                </Portion>

                <Portion desktopSpan="half" className="with-top-border">
                    <Heading as="h5">
                        An intuitive framework for quickly iterating UI design with code
                    </Heading>


                    <HRule kind="primary" marginTop="micro" marginBottom="micro" />

                    <Link to="/manifesto">
                        Read the manifesto &rarr;
                    </Link>
                </Portion>

                <Portion desktopSpan="whole" className="with-top-border" />
            </Row>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="large">
                <Portion>
                    <Element as="div" id="grid-wrapper">
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
                                    <Table padding="small" isStriped bordersFor="both">
                                        <thead>
                                            <tr>
                                                <th>Yes,</th>
                                                <th>I</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>would</td>
                                                <td>like</td>
                                            </tr>

                                            <tr>
                                                <td>a</td>
                                                <td>table</td>
                                            </tr>

                                            <tr>
                                                <td>by</td>
                                                <td>the</td>
                                            </tr>

                                            <tr>
                                                <td>window</td>
                                                <td>please</td>
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
                                    <CodeBlock source={sampleCode} language="jsx" marginTop="micro" marginBottom="micro" />
                                </Card>
                            </Link>
                        </Element>
                    </Element>
                </Portion>
            </Row>
        </HomeStyled>
    );
}
