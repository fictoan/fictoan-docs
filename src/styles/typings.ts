import { ThemeProps as RFThemeProps } from "reactised-fictoan";
import { RFDocsTheme } from "./RFDocs.theme";

type Theme = RFThemeProps["theme"] & typeof RFDocsTheme;

export interface ThemeProps {
    theme: Theme;
}
