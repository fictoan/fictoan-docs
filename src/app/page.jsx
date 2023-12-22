import Image from "next/image";
import "./home.css";
import { Element, Card, Button, Row, Portion, HRule } from "fictoan-react";
import Link from "next/link";

const Home = () => {
    return (
        <article id="home-page">
            <Row sidePadding="tiny">
                <Portion>
                    <Element as="header" marginTop="small">
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
