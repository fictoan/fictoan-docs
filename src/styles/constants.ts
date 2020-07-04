import { RFDocsLightTheme, RFDocsDarkTheme } from "./RFDocs.theme";

export interface ThemeProps {
    theme?: typeof RFDocsLightTheme | typeof RFDocsDarkTheme;
}
