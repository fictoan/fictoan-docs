import { DeepDiff } from "deep-diff";
import dep2 from "polished/lib/color/lighten";
import dep3 from "polished/lib/color/darken";
import { defaultColours as dep1 } from "fictoan-react";
import { ThemeVisitor, JSVisitor } from "./Visitor";

interface DiffType {
    kind: "E" | "N" | "D" | "A";
    path: string[];
    lhs: any;
    rhs: any;
    index?: number;
    item?: any;
}

function templatize(val: string): string {
    return `{{${val}}}`;
}

function unTemplatize(val: string): string {
    return val.replaceAll(/\'\{\{([^\{\}]+)\}\}\'/g, "$1");
}

function setDeepValue(obj: any, path: string[], value: string) {
    const key = path.shift();
    if (!key) {
        return value;
    }
    obj[key] = setDeepValue(obj[key] ? obj[key] : {}, path, value);
    return obj;
}

export function evaluateJS(javascriptCode: string) {
    const defaultColours = dep1;
    const lighten        = dep2;
    const darken         = dep3;
    return eval(`(
        function () {
            ${javascriptCode}
            return Theme;
        }
    )();`);
}

export function performDiff(newJavascriptCode: string, oldJavascriptCode: string) {
    const newCode        = evaluateJS(newJavascriptCode);
    const newCodeVisitor = new ThemeVisitor(newJavascriptCode);
    const oldCode        = evaluateJS(oldJavascriptCode);
    const oldCodeVisitor = new ThemeVisitor(oldJavascriptCode);
    const deepDiffs      = DeepDiff(oldCode, newCode);

    const diffs = deepDiffs
        ? DeepDiff(oldCode, newCode)
            .filter((diff: DiffType) => diff.path[0] != "customColours")
            .map((diff: DiffType) => {
                const _newVal = newCodeVisitor.getValueAtPath([ "Theme", ...diff.path ]);
                const _oldVal = oldCodeVisitor.getValueAtPath([ "Theme", ...diff.path ]);
                if (_newVal.trim() !== _oldVal.trim())
                    return {path : diff.path, val : _newVal}
                return undefined;
            }).filter(Boolean)
        : [];

    const minifiedTheme = diffs.reduce((acc: object, curr: { path: string[], val: string }) => {
        return setDeepValue(acc, curr.path.map(templatize), templatize(curr.val))
    }, {[templatize("customColours")] : templatize("customColours")});

    const v = new JSVisitor(newJavascriptCode);
    return (
        `${v.getAllVariableDeclarations()}
        \nconst Theme = ${unTemplatize(JSON.stringify(minifiedTheme, null, "\t"))}`
    )
}
