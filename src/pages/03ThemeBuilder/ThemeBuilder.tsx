import React, { useState } from "react";
import {
    Portion,
    Row,
    ThemeProvider,
    CodeBlock
} from "fictoan-react";
import { Page } from "./Result";
import { LHSStyled } from "./Styled";
import { Editor } from "./Editor";
import {STRINGIFIED_FICTOAN_THEME} from "./Theme";
import { evaluateJS } from "./CodeManipulation";

const ThemeBuilderPage = () => {
    const [json, setJson] = useState<any>(() => evaluateJS(STRINGIFIED_FICTOAN_THEME));
    const [min, setMin] = useState<string>('');
    return (<>
        <Row>
            <Portion desktopSpan="half">
                <LHSStyled>
                    <Editor setTheme={setJson} setMinified={setMin}/>
                </LHSStyled>
            </Portion>
            <Portion desktopSpan="half">
                <ThemeProvider theme={json}>
                    {Page}
                </ThemeProvider>
            </Portion>
        </Row>
        <h2>Copy Paste the following into your project</h2>
        <CodeBlock source={min} language={'javascript'}/>
    </>
    )
}

export default ThemeBuilderPage;