import React, { FunctionComponent, useRef } from 'react';
import { DeepDiff } from 'deep-diff';
import AceEditor, { diff as Diff } from "react-ace";
import { Button, Heading, defaultColours as dep1 } from 'fictoan-react';
import dep2 from "polished/lib/color/lighten";
import dep3 from "polished/lib/color/darken";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow";
import "./diff.css"
import { ThemeVisitor, JSVisitor } from './Visitor';
import { FictoanTheme, DEFAULT_SRC_CODE } from './Theme';

interface DiffType {
    kind: 'E' | 'N' | 'D' | 'A';
    path: string[];
    lhs: any;
    rhs: any;
    index?: number;
    item?: any;
}
function templatize(val:string):string{
    return `{{${val}}}`;
}
function setDeepValue(obj: any, path: string[], value: string) {
    const key = path.shift();
    if(!key){
        return value;
    }
    obj[key] = setDeepValue(obj[key]?obj[key]:{}, path, value);
    return obj;
}
function evaluateJS(javascriptCode: string) {
    const defaultColours = dep1;
    const lighten = dep2;
    const darken = dep3;
    return eval(`(function(){
        ${javascriptCode}
        return Theme;
    })();`);
}
function performDiff(newJavascriptCode: string, oldJavascriptCode: string) {
    const newCode = evaluateJS(newJavascriptCode);
    const newCodeVisitor = new ThemeVisitor(newJavascriptCode);
    const oldCode = evaluateJS(oldJavascriptCode);
    const oldCodeVisitor = new ThemeVisitor(oldJavascriptCode);


    const diffs = DeepDiff(oldCode, newCode)
        .filter((diff: DiffType) => diff.path[0] != 'customColours')
        .map((diff: DiffType) => {
            const _newVal = newCodeVisitor.getValueAtPath(['Theme', ...diff.path]);
            const _oldVal = oldCodeVisitor.getValueAtPath(['Theme', ...diff.path]);
            if (_newVal.trim() !== _oldVal.trim())
                return { path: diff.path, val: _newVal }
            return undefined;
        }).filter(Boolean)
        console.log(diffs);
    const final = diffs.reduce((acc, curr) => {
        return setDeepValue(acc, curr.path.map(templatize), templatize(curr.val))
    }, {[templatize('customColours')]:templatize('customColours')});
    const v = new JSVisitor(newJavascriptCode);
    return `${v.getAllVariableDeclarations()}
    \nconst Theme = ${JSON.stringify(final, null, '\t').replaceAll(/\"\{\{([^\{\}]+)\}\}\"/g,'$1')}
    `
}

interface EditorProps {
    setTheme: Function;
    setJs: Function;
    setMinified: Function;
}

export const Editor: FunctionComponent<EditorProps> = ({ setTheme, setJs, setMinified }) => {
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
            const minified = performDiff(codeString, DEFAULT_SRC_CODE);
            setMinified(minified);
            setJs(codeString);
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
                defaultValue={DEFAULT_SRC_CODE}
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


