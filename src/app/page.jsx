"use client";

// EXTERNAL DEPS ///////////////////////////////////////////////////////////////
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

// INTERNAL DEPS ///////////////////////////////////////////////////////////////
import {
    Badge,
    BreadcrumbItem,
    BreadcrumbsWrapper,
    Button,
    Callout,
    CheckBox,
    CodeBlock,
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

// COMPONENTS //////////////////////////////////////////////////////////////////
import { GlowCard } from "@/components/GlowCard/GlowCard";

// STYLES //////////////////////////////////////////////////////////////////////
import "./home.css";

// ASSETS //////////////////////////////////////////////////////////////////////


const debounce = (func, delay) => {
    let timer;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

const Home = () => {
    const sampleCodeFictoan = `<Row sidepadding="large" gutters="small">
    <Portion desktopSpan="one-third" mobileSpan="half">
        <Text weight="600" marginBottom="micro">Hello there.</Text>
        
        <Button
            bgColour="amber" textColor="white">
            Click me
        </Button>
    </Portion>
</Row>`;

    const cardComponentSample = `const clickHere = () => {
    window.load("/components/card");
}`;

    const videoRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        // Ensure scrollPosition is a number between 0 and 1
        setScrollPosition(Math.min(Math.max(scrolled / scrollable, 0), 1));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video && !isNaN(video.duration)) {
            const videoTime = scrollPosition * video.duration;
            // Check if videoTime is a finite number before setting currentTime
            if (isFinite(videoTime)) {
                video.currentTime = videoTime;
            }
        }
    }, [scrollPosition]);

    return (
        <article id="home-page">
            {/* <Row sidePadding="medium" marginTop="nano"> */}
            {/*     <Portion desktopSpan="one-third"> */}
            {/*         <Link href="https://github.com/fictoan/fictoan-react"> */}
            {/*             <Text weight="400">Github</Text> */}
            {/*         </Link> */}
            {/*     </Portion> */}
            {/* </Row> */}

            <Row sidePadding="medium" padding="small">
                <Portion desktopSpan="half">
                    <Element as="header" marginTop="small">
                        <Element as="div" opacity="60">
                            <Image
                                src="/fictoan-logo.svg"
                                alt="Fictoan Framework Logo"
                                id="fictoan-logo"
                                width={120}
                                height={32}
                                priority
                            />
                        </Element>

                        <Text textColour="black" size="tiny">
                            *Fuck I Couldn’t Think Of A Name
                        </Text>

                        <Heading as="h2" textColour="white" id="intro-headline">
                            A dead-simple UI component library
                        </Heading>
                    </Element>
                </Portion>

                <Portion desktopSpan="one-third">
                </Portion>

                <Portion desktopSpan="half">
                    {/* <CodeBlock source={sampleCodeFictoan} language="jsx" /> */}
                </Portion>
            </Row>

            <video id="fictoan-bg" ref={videoRef}>
                <source src="/logo-render.mp4" />
            </video>
            {/* <Image */}
            {/*     src="/ff-logo.jpg" */}
            {/*     alt="Fictoan Framework Logo" */}
            {/*     id="fictoan-bg" */}
            {/*     width={120} */}
            {/*     height={32} */}
            {/*     priority */}
            {/* /> */}

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  COMPONENTS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Row sidePadding="medium" marginBottom="medium">
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
        </article>
    );
};

export default Home;
