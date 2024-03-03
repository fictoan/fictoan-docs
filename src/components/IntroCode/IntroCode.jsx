"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// INTERNAL DEPS =======================================================================================================
import {
    Button,
    Div,
    Heading1,
    Heading5,
    Portion,
    Row,
    Section, Switch,
    Text,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./intro-code.css";

// HOOKS ===============================================================================================================

// UTILS ===============================================================================================================

// DATA ================================================================================================================

export const IntroCode = () => {
    const [rowProps, setRowProps] = useState({
        horizontalPadding : "medium",
        marginTop         : "tiny",
        marginBottom      : "tiny",
    });

    const [portion1Props, setPortion1Props] = useState({
        desktopSpan : "half",
    });

    const [portion2Props, setPortion2Props] = useState({
        desktopSpan : "half",
    });

    const [mainHeadingProps, setMainHeadingProps] = useState({
        as           : "h1",
        textColour   : "blue",
        marginBottom : "micro",
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
            Row      : {},
            Portion  : [],
            Heading1 : {},
            Heading5 : [],
            Button   : {},
        };

        let tagMatch;
        while ((
            tagMatch = propRegex.exec(codeContent)
        ) !== null) {
            const tagName = tagMatch[1];
            const tagProperties = tagMatch[2];
            let tagProps = {};

            let propsMatch;
            while ((
                propsMatch = propertiesRegex.exec(tagProperties)
            ) !== null) {
                const propName = propsMatch[1];
                const propValue = propsMatch[2];
                tagProps[propName] = propValue;
            }

            if (tagName === "Portion" || tagName === "Heading5") {
                newProps[tagName].push(tagProps);
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

                // Row
                setRowProps(prevProps => (
                    { ...prevProps, ...newProps.Row }
                ));

                newProps.Portion.forEach((props, index) => {
                    if (index === 0) setPortion1Props(props);
                    else if (index === 1) setPortion2Props(props);
                });

                // Heading1
                setMainHeadingProps(prevProps => (
                    { ...prevProps, ...newProps.Heading1 }
                ));

                // Heading5
                if (newProps.Heading5.length > 0) {
                    setSubHeading1Props(prevProps => (
                        { ...prevProps, ...newProps.Heading5[0] }
                    ));
                    if (newProps.Heading5.length > 1) {
                        setSubHeading2Props(prevProps => (
                            { ...prevProps, ...newProps.Heading5[1] }
                        ));
                    }
                }

                // Button
                setButtonProps(prevProps => (
                    { ...prevProps, ...newProps.Button }
                ));
            };

            codeBlockElement.addEventListener("input", handleInput);

            return () => {
                codeBlockElement.removeEventListener("input", handleInput);
            };
        }
    }, []);

    // FOR VIZ ROW =====================================================================================================
    const [vizMode, setVizMode] = useState(false);
    const numberOfPortions = 24;

    return (
        <Section id="intro-code">
            <Div id="intro-section">
                {vizMode && (
                    <Row id="viz-row" horizontalPadding={rowProps.horizontalPadding} retainLayoutAlways>
                        {Array.from({ length : numberOfPortions }, (_, index) => (
                            <Portion key={index} desktopSpan="1">
                                <Text align="centre">{index + 1}</Text>
                            </Portion>
                        ))}
                    </Row>
                )}

                <Row {...rowProps}>
                    <Portion {...portion1Props} className={`demo-portion ${vizMode ? "border-red" : ""}`}>
                        <Heading1 {...mainHeadingProps}>
                            Ship UI in half the time.
                        </Heading1>

                        <Link href="/getting-started">
                            <Button {...buttonProps}>
                                Get started &rarr;
                            </Button>
                        </Link>

                        {vizMode && (
                            <Text className="portion-width-indicator">
                                {portion1Props.desktopSpan}
                            </Text>
                        )}
                    </Portion>

                    <Portion {...portion2Props} className={`demo-portion ${vizMode ? "border-red" : ""}`}>
                        <Heading5 {...subHeading1Props}>
                            Create ready-to-integrate UI in minutes with designer-friendly, plain-English syntax.
                        </Heading5>

                        <Heading5 {...subHeading2Props}>
                            Hand-off responsive, performant React code to your dev team.
                        </Heading5>

                        {vizMode && (
                            <Text className="portion-width-indicator">
                                {portion2Props.desktopSpan}
                            </Text>
                        )}
                    </Portion>
                </Row>
            </Div>

            <Row horizontalPadding="medium" gutters="large" marginBottom="tiny">
                <Portion>
                    <Div verticallyCentreItems pushItemsToEnds>
                        <Text marginBottom="nano">Try editing some of the props and values here—</Text>

                        <Switch
                            id="viz-switch"
                            name="viz-switch"
                            label="Visualise the Row"
                            checked={vizMode}
                            onChange={() => setVizMode(!vizMode)}
                        />
                    </Div>

                    <Div id="intro-code-block" ref={codeBlockRef}>
                        <CodeBlock
                            language="jsx"
                            showCopyButton
                            contentEditable
                            suppressContentEditableWarning={true}
                            marginBottom="micro"
                            theme="custom"
                        >
                            {[
                                `<Row horizontalPadding="medium" marginTop="tiny" marginBottom="small">`,
                                `    <Portion desktopSpan="half">`,
                                `        <Heading1 textColour="blue-light-20" marginBottom="micro" weight="700">`,
                                `            Ship UI in half the time.`,
                                `        </Heading1> \n`,
                                `        <Link href="/getting-started">`,
                                `            <Button kind="primary">`,
                                `                Get started &rarr;`,
                                `            </Button>`,
                                `        </Link>`,
                                `    </Portion> \n`,
                                `    <Portion desktopSpan="half">`,
                                `        <Heading5 weight="400" marginBottom="micro">`,
                                `            Create ready-to-integrate UI in minutes with designer-friendly, plain-English syntax.`,
                                `        </Heading5>\n`,
                                `        <Heading5 weight="400" marginBottom="micro">`,
                                `            Hand-off responsive, performant React code to your dev team.`,
                                `        </Heading5>`,
                                `    </Portion>`,
                                `</Row>`,
                            ].filter(Boolean).join("\n")}
                        </CodeBlock>
                    </Div>
                </Portion>
            </Row>
        </Section>
    );
};
