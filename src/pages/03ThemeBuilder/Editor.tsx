import React, { FunctionComponent, useRef } from "react";
import AceEditor from "react-ace";
import { Button, Heading } from "fictoan-react";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import { STRINGIFIED_FICTOAN_THEME } from "./Theme";
import { evaluateJS, performDiff } from "./CodeManipulation";
interface EditorProps {
    setTheme: Function;
    setMinified: Function;
}

export const Editor: FunctionComponent<EditorProps> = ({ setTheme, setMinified }) => {
    const editorRef = useRef<any>();
    function handleClick() {
        if (editorRef.current) {
            const code = editorRef.current.editor.getValue();
            const theme = evaluateJS(code);
            setTheme(theme);
        }
    }
    function handleMinify() {
        if (editorRef.current) {
            const codeString = editorRef.current.editor.getValue();
            const minified = performDiff(codeString, STRINGIFIED_FICTOAN_THEME);
            setMinified(minified);
        }
    }

    return (
        <>
            <Flex>
                <Heading as="h5">Theme Editor</Heading>
                <div>
                    <Button onClick={handleClick}>Apply</Button>
                    <Button onClick={handleMinify}>Minifiy</Button>
                </div>
            </Flex>
            <AceEditor
                ref={editorRef}
                mode="javascript"
                theme="tomorrow"
                defaultValue={STRINGIFIED_FICTOAN_THEME}
                name="UNIQUE_ID_OF_DIV"
                width="100%"
                height="1080px"
                showPrintMargin={false}
                editorProps={{ $blockScrolling: true }}
            />
        </>
    )
}

const Flex: FunctionComponent<any> = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            {children}
        </div>
    )
}


