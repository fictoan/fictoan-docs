import { ThemeProps as RFThemeProps } from "fictoan-react";
import { RFDocsLightTheme, RFDocsDarkTheme } from "./RFDocs.theme";

type Theme = RFThemeProps["theme"] & typeof RFDocsLightTheme & typeof RFDocsDarkTheme;

export interface ThemeProps {
    theme: Theme;
}
