import React, { FunctionComponent, useEffect, useState } from "react";
import {
    Portion,
    Row,
    ThemeProvider,
    FictoanTheme,
    Card,
    Text
} from 'fictoan-react';
import { brandColors, makeTheme } from "./ThemeUtil";
import { ColorPicker } from "./ColorPicker";
import { ControlledJsonEditor } from "./JsonEditor";
import { Page } from "./Result";
import { LHSStyled } from "./Styled";
import "./Mobile.css";

function throttle(callback: Function, limit: number) {
    let waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(null, arguments);
            waiting = true;
            setTimeout(() => waiting = false, limit)
        }
    }
}


const MobileEmulator: FunctionComponent = ({ children }) => {
    return <div className="mobile">
        {children}
    </div>
}

const ThemeBuilderPage = () => {
    const [json, setJson] = useState<any>(FictoanTheme);
    const [hue, setHue] = useState(brandColors.hue);
    const [tint, setTint] = useState(brandColors.tint);
    const [shade, setShade] = useState(brandColors.shade);
    const [analogue, setAnalogue] = useState(brandColors.analogue);
    const [accent, setAccent] = useState(brandColors.accent);
    useEffect(() => {
        const customColours = { hue, tint, shade, analogue, accent };
        setJson(makeTheme(customColours));
    }, [hue, tint, shade, analogue, accent])
    return (
        <Row>
            <Portion desktopSpan="half" padding="micro">
                <LHSStyled>
                <Card padding="nano" shape="curved" shadow="mild" className="palette">
                    <Text>Palette</Text>
                    &nbsp;&nbsp;&nbsp;
                    <ColorPicker color={hue} onChange={setHue}/>
                    <ColorPicker color={tint} onChange={setTint}/>
                    <ColorPicker color={shade} onChange={setShade}/>
                    <ColorPicker color={analogue} onChange={setAnalogue}/>
                    <ColorPicker color={accent} onChange={setAccent}/>
                </Card>
                <details open>
                    <summary>Advanced</summary>
                    <ControlledJsonEditor
                        value={json}
                        onChange={throttle(setJson, 2000)}
                    />
                </details>
                </LHSStyled>
            </Portion>
            <Portion desktopSpan="half">
                <ThemeProvider theme={json}>
                    {Page}
                    <MobileEmulator>{Page}</MobileEmulator>
                </ThemeProvider>
            </Portion>
        </Row>
    )
}

export default ThemeBuilderPage;