import RFDocsLightTheme from "./RFDocs.LightTheme";
import RFDocsDarkTheme from "./RFDocs.DarkTheme";

export interface ThemeProps {
    theme?: typeof RFDocsLightTheme | typeof RFDocsDarkTheme;
}
