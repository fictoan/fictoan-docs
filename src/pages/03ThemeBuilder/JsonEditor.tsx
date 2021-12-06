import React , {FunctionComponent, useEffect, useRef} from "react";
import { JsonEditor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

interface JsonEditorType{
    jsonEditor:{
        update:(value: object) => void
    }
}
interface Props{
    value: object;
    onChange: Function;
}
export const ControlledJsonEditor:FunctionComponent<Props> = ({ value, onChange }) => {
    const jsonEditorRef = useRef<JsonEditorType>();
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