import { ThemeProps as RFThemeProps } from "fictoan-react";
import { RFDocsLightTheme } from "./RFDocs.LightTheme";
import { RFDocsDarkTheme } from "./RFDocs.DarkTheme";

type Theme = RFThemeProps["theme"] & typeof RFDocsLightTheme & typeof RFDocsDarkTheme;

export interface ThemeProps {
    theme: Theme;
}
