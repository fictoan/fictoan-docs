import React, { useState } from "react";
import {
    Portion,
    Row,
    ThemeProvider,
    Heading,
    CodeBlock
} from 'fictoan-react';
import { Page } from "./Result";
import { LHSStyled } from "./Styled";
import { DiffEditor, Editor } from "./Editor";
import {FictoanTheme} from './Theme';

const ThemeBuilderPage = () => {
    const [json, setJson] = useState<any>(FictoanTheme);
    const [js, setJs] = useState<string>('');
    const [min, setMin] = useState<string>('');
    return (<>
        <Row>
            <Portion desktopSpan="half">
                <LHSStyled>
                    <Editor setTheme={setJson} setJs={setJs} setMinified={setMin}/>
                </LHSStyled>
            </Portion>
            <Portion desktopSpan="half">
                <ThemeProvider theme={json}>
                    {Page}
                </ThemeProvider>
            </Portion>
        </Row>
        <CodeBlock source={min} language={'javascript'}/>
    </>
    )
}

export default ThemeBuilderPage;