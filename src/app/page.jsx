import Image from "next/image";
import "./home.css";
import { Element, Card, Button, Row, Portion, HRule, Heading, Text, ProgressBar } from "fictoan-react";
import Link from "next/link";

const Home = () => {
    return (
        <article id="home-page">
            <Row sidePadding="tiny" marginTop="nano">
                <Portion desktopSpan="one-third">
                    <Link href="https://github.com/fictoan/fictoan-react">
                        <Text weight="400">Github</Text>
                    </Link>
                </Portion>
            </Row>

            <Row sidePadding="tiny">
                <Portion>
                    <Element as="header" marginTop="small">
                        <Heading as="h2">The cleanest and most readable markup ever.</Heading>

                        <ProgressBar height="12px" shape="rounded" value="90" max="799" />

                        <Image
                            src="/fictoan-logo.svg"
                            alt="Fictoan Framework Logo"
                            id="fictoan-logo"
                            width={240}
                            height={64}
                            priority
                        />
                    </Element>
                </Portion>
            </Row>
        </article>
    );
}

export default Home;
