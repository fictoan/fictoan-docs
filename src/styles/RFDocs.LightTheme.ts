import { baseColors, RFTheme } from "fictoan-react";
import merge from "lodash/merge";



const RFDocsLightTheme = {
    body: {
        bg: baseColors.white
    },
    text: {
        font: {
            sans: "Space Grotesk, sans-serif",
            mono: "Space Mono, monospace"
        },
        paras: {
            lineHeight: 1.56,
        },
        headings: {
            font: "Space Grotesk, sans-serif"
        }
    },
    button: {
        fontFamily: "Space Grotesk, sans-serif"
    },
    sidebar: {
        isCollapsed: {
            label: {
                text: baseColors.white,
            }
        },
        header: {
            bg: baseColors.white,
            borderBottom: baseColors.white
        },
        footer: {
            bg: baseColors.white,
            borderTop: baseColors.slate10
        },
    }
};


export default merge({}, RFTheme, RFDocsLightTheme);