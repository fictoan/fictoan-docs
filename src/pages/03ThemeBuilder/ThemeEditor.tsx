import React, { useEffect, useRef, useState } from "react";
import {
    Element,
    Portion,
    Row,
    CodeBlock,
    Heading,
    Text, Card
} from "fictoan-react";

import { ThemeEditorStyled } from "./ThemeEditor.styled";
import { FictoanThemeOutputSample } from "./Result";
import { Editor } from "./Editor";
import {STRINGIFIED_FICTOAN_THEME} from "./Theme";
import { evaluateJS, performDiff } from "./CodeManipulation";


export const ThemeEditorDocs = () => {
    useEffect(() => {
        document.title = "Theme editor — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    const [json, setJson] = useState<any>(() => evaluateJS(STRINGIFIED_FICTOAN_THEME));
    const [min, setMin] = useState<string>("");

    return (
        <ThemeEditorStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue" marginBottom="small">Theme editor</Heading>
                    <Text>
                        Use this page to edit the default theme that comes with Fictoan to suit your needs.
                    </Text>
                </Portion>
            </Row>

            <Row sidePadding="tiny">
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Editor setTheme={setJson} setMinified={setMin}/>
                    </Card>
                    {/*<CodeBlock source={min} language="javascript" />*/}
                </Portion>

                <Portion desktopSpan="half">
                    <FictoanThemeOutputSample />
                </Portion>
            </Row>
        </ThemeEditorStyled>
    )
}
