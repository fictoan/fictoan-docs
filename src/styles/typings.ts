import { ThemeProps as RFThemeProps } from "fictoan-react";
import { RFDocsTheme } from "./RFDocs.theme";

type Theme = RFThemeProps["theme"] & typeof RFDocsTheme;

export interface ThemeProps {
    theme: Theme;
}
