import React, { FunctionComponent, useEffect, useState } from 'react';
import {
    Element,
    Heading,
    Portion,
    Row,
    ThemeProvider,
    FictoanTheme
} from 'fictoan-react';
import { brandColors, makeTheme } from './ThemeUtil';
import './Mobile.css';
import { ColorPicker } from './ColorPicker';
import { ControlledJsonEditor } from './JsonEditor';
import { Page } from './Result';

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
                <Row>
                    <Portion>
                        <Heading as="h3">
                            Color Customization
                        </Heading>
                    </Portion>
                </Row>
                <Element as="div">
                    <ColorPicker title={"hue"} color={hue} onChange={(color: string, e: any) => setHue(color)} />
                    <ColorPicker title={"tint"} color={tint} onChange={(color: string, e: any) => setTint(color)} />
                    <ColorPicker title={"shade"} color={shade} onChange={(color: string, e: any) => setShade(color)} />
                    <ColorPicker title={"analogue"} color={analogue} onChange={(color: string, e: any) => setAnalogue(color)} />
                    <ColorPicker title={"accent"} color={accent} onChange={(color: string, e: any) => setAccent(color)} />
                </Element>
                <details open>
                    <summary>Advanced</summary>
                    <ControlledJsonEditor
                        value={json}
                        onChange={throttle(setJson, 2000)}
                    />
                </details>
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