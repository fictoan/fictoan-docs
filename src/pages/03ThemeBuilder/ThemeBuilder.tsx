import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import { JsonEditor } from 'jsoneditor-react';
import { PhotoshopPicker } from 'react-color';
import {
    Button,
    Card,
    Element,
    FormWrapper,
    Heading,
    InputField,
    Portion,
    ProgressBar,
    Row,
    Text,
    ThemeProvider,
    FictoanTheme
} from 'fictoan-react';
import { ThemeBuilderStyled } from './ThemeBuilder.styled';
import 'jsoneditor-react/es/editor.min.css';
import GnuLogo from '../../assets/icons/gnu.svg';
import './Mobile.css';
import { brandColors, lightOrDark, makeTheme } from './ThemeUtil';

function throttle(callback: Function, limit: number) {
    let waiting = false;
    return function () {
        if (!waiting) {
            callback.apply(this, arguments);
            waiting = true;
            setTimeout(() => waiting = false, limit)

        }
    }
}
const Flowing: FunctionComponent = ({ children }) => {
    return <div style={{ display: 'flex', alignItems: 'center' }}>
        {children}
    </div>
}

const MobileEmulator: FunctionComponent = ({ children }) => {
    return <div className="mobile">
        {children}
    </div>
}
export const ControlledJsonEditor = ({ value, onChange }) => {
    const jsonEditorRef = useRef();
    useEffect(
        () => {
            const editor = jsonEditorRef && jsonEditorRef.current && jsonEditorRef.current.jsonEditor;
            if(editor && value){ editor.update(value); }
        },
        [jsonEditorRef, value]
    )

    return (    
        <JsonEditor
            ref={jsonEditorRef}
            value={value}
            onChange={onChange}
        />
    );
}
interface ColorPickerProps {
    title: string;
    color: string;
    onChange: Function;
}
const ColorPicker: FunctionComponent<ColorPickerProps> = ({ title, color, onChange }) => {
    const [open, setOpen] = useState(false);
    const [__color, __setColor] = useState(color);
    return (<>
        <Element
            as="div"
            padding="micro"
            style={{ background: color }}
            onClick={() => setOpen(!open)}
        >
            {title}
        </Element>
        {open && <div style={{ position: 'fixed', background: 'black', opacity: '0.9', left: '0', top: '0', zIndex:'1001', height:"100%", width:'100%' }}>
            <div style={{position:'fixed', left:'40%', top:'40%'}}>
                <PhotoshopPicker
                    color={__color}
                    onChange={(color,e) => __setColor(color.hex)}
                    onAccept={()=> {setOpen(false); onChange(__color)}}
                    onCancel={() => setOpen(false)}
                    />
            </div>
        </div>
        }
    </>
    )
}
const Page = (<ThemeBuilderStyled>
    <Flowing>
        <Element
            as="img"
            src={GnuLogo}
            width="100"
        />
        <Heading
            as="h2"
        >ACME CORP</Heading>
    </Flowing>
    <ProgressBar
        label="Loading..."
        value={30}
        max="100"
        shape="rounded" />
    <Card padding="micro" shape="rounded" marginTop="micro">
        <Heading as="h4"> This is a heading</Heading>
        <Text marginTop="nano">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <FormWrapper>
            <InputField
                placeholder="Random Text Input"
                marginTop="nano"
                marginBottom="nano"
            />
        </FormWrapper>
        <Button kind="primary">Primary Button</Button>
        <Button kind="secondary" marginLeft="nano">Secondary Button</Button>
        <Button kind="tertiary" marginLeft="nano">Tertiary Button</Button>
        <Button marginLeft="nano">Default Button</Button>
    </Card>
</ThemeBuilderStyled>
)
const ThemeBuilderPage = () => {
    const [json, setJson] = useState(FictoanTheme);
    const [hue, setHue] = useState(brandColors.hue);
    const [tint, setTint] = useState(brandColors.tint);
    const [shade, setShade] = useState(brandColors.shade);
    const [analogue, setAnalogue] = useState(brandColors.analogue);
    const [accent, setAccent] = useState(brandColors.accent);
    useEffect(() =>{
        const customColours = {hue, tint, shade, analogue, accent};
        setJson(makeTheme(customColours) as any);
    }, [hue, tint, shade, analogue, accent])
    useEffect(()=>{
        console.log(json)
    }, [json])
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
                <Element as="div" marginBottom="large">
                    <Flowing>
                        <ColorPicker title={"hue"} color={hue} onChange={(color: string, e: any) => setHue(color)} />
                        <ColorPicker title={"tint"} color={tint} onChange={(color: string, e: any) => setTint(color)} />
                        <ColorPicker title={"shade"} color={shade} onChange={(color: string, e: any) => setShade(color)} />
                        <ColorPicker title={"analogue"} color={analogue} onChange={(color: string, e: any) => setAnalogue(color)} />
                        <ColorPicker title={"accent"} color={accent} onChange={(color: string, e: any) => setAccent(color)} />
                    </Flowing>
                </Element>
                <details>
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
                    <MobileEmulator>
                        {Page}
                    </MobileEmulator>
                </ThemeProvider>
            </Portion>
        </Row>
    )
}

export default ThemeBuilderPage;