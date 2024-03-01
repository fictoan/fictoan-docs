"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useRef, useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Badge, Button,
    Callout,
    Div,
    Element,
    Header,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    InputField,
    Portion,
    RadioTabGroup,
    Row,
    Text,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================
import "./header.css";
import Link from "next/link";

// STYLES ==============================================================================================================
// HOOKS ===============================================================================================================
// UTILS ===============================================================================================================
// DATA ================================================================================================================

export const IntroCode = () => {
    const [rowProps, setRowProps] = useState({
        horizontalPadding : "medium",
        marginTop         : "tiny",
        marginBottom      : "tiny",
    });

    const [portionProps, setPortionProps] = useState({
        desktopSpan : "two-third",
    });

    const [mainHeadingProps, setMainHeadingProps] = useState({
        as           : "h1",
        textColour   : "blue",
        marginBottom : "nano",
        weight       : "700",
    });

    const [subHeading1Props, setSubHeading1Props] = useState({
        as           : "h5",
        weight       : "400",
        marginBottom : "micro",
    });

    const [subHeading2Props, setSubHeading2Props] = useState({
        as           : "h5",
        weight       : "400",
        marginBottom : "micro",
    });

    const [buttonProps, setButtonProps] = useState({
        kind : "primary",
    });

    const codeBlockRef = useRef(null);

    const parseCodeToProperties = (codeContent) => {
        const propRegex = /<(Heading1|Heading5|Row|Portion|Button)\s+(.*?)>/gs;
        const propertiesRegex = /(\w+)="([^"]+)"/g;
        const newProps = {
            Row: {},
            Portion: {},
            Heading1: {},
            Heading5: [], // Assuming there might be more than one Heading5
            Button: {},
        };

        let tagMatch;
        while ((tagMatch = propRegex.exec(codeContent)) !== null) {
            const tagName = tagMatch[1];
            const tagProperties = tagMatch[2];
            let tagProps = {};

            let propsMatch;
            while ((propsMatch = propertiesRegex.exec(tagProperties)) !== null) {
                const propName = propsMatch[1];
                const propValue = propsMatch[2];
                tagProps[propName] = propValue;
            }

            if (tagName === 'Heading5') {
                newProps[tagName].push(tagProps); // Support multiple Heading5s
            } else {
                newProps[tagName] = tagProps;
            }
        }

        return newProps;
    };


    useEffect(() => {
        const codeBlockElement = codeBlockRef.current;

        if (codeBlockElement) {
            const handleInput = () => {
                const codeContent = codeBlockElement.textContent;
                const newProps = parseCodeToProperties(codeContent);

                // Directly updating state based on tag names
                setRowProps(prevProps => ({ ...prevProps, ...newProps.Row }));
                setPortionProps(prevProps => ({ ...prevProps, ...newProps.Portion }));
                setMainHeadingProps(prevProps => ({ ...prevProps, ...newProps.Heading1 }));
                // For Heading5, assuming you want to apply the first Heading5 props for simplicity
                if (newProps.Heading5.length > 0) {
                    setSubHeading1Props(prevProps => ({ ...prevProps, ...newProps.Heading5[0] }));
                    if (newProps.Heading5.length > 1) {
                        setSubHeading2Props(prevProps => ({ ...prevProps, ...newProps.Heading5[1] }));
                    }
                }
                setButtonProps(prevProps => ({ ...prevProps, ...newProps.Button }));
            };

            codeBlockElement.addEventListener("input", handleInput);
            return () => {
                codeBlockElement.removeEventListener("input", handleInput);
            };
        }
    }, []);

    return (
        <>
            <Row {...rowProps}>
                <Portion {...portionProps}>
                    <Heading1 {...mainHeadingProps}>
                        Ship UI in half the time.
                    </Heading1>

                    <Heading5 {...subHeading1Props}>
                        Create ready-to-integrate UI in minutes with designer-friendly, plain-English syntax.
                    </Heading5>

                    <Heading5 {...subHeading2Props}>
                        Hand-off responsive, performant React code to your dev team.
                    </Heading5>

                    <Link href="/getting-started">
                        <Button {...buttonProps}>
                            Get started &rarr;
                        </Button>
                    </Link>
                </Portion>
            </Row>

            <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion>
                    <Div id="intro-code" ref={codeBlockRef}>
                        <CodeBlock
                            language="jsx"
                            showCopyButton
                            marginBottom="micro"
                            contentEditable
                            suppressContentEditableWarning={true}
                        >
                            {[
                                `<Row horizontalPadding="medium" marginTop="tiny" marginBottom="small">`,
                                `    <Portion desktopSpan="two-third">`,
                                `        <Heading1 textColour="blue-light-20" marginBottom="nano" weight="700">`,
                                `            Ship UI in half the time.`,
                                `        </Heading1> \n`,
                                `        <Heading5 weight="400" marginBottom="micro">`,
                                `            Create ready-to-integrate UI in minutes with designer-friendly, plain-English syntax.`,
                                `        </Heading5>\n`,
                                `        <Heading5 weight="400" marginBottom="micro">`,
                                `            Hand-off responsive, performant React code to your dev team.`,
                                `        </Heading5>`,
                                `        <Link href="/getting-started">`,
                                `            <Button kind="primary">`,
                                `                Get started &rarr;`,
                                `            </Button>`,
                                `        </Link>`,
                                `    </Portion>`,
                                `</Row>`,
                            ].filter(Boolean).join("\n")}
                        </CodeBlock>
                    </Div>
                </Portion>
            </Row>
        </>
    );
};
