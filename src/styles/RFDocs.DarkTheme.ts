import { baseColors, RFTheme } from "fictoan-react";
import { darken } from "polished";
import merge from "lodash/merge";


const RFDocsDarkTheme = {
    //  BASICS  ///////////////////////////////////////////////////////////////
    body: {
        bg: `${darken(0.24, baseColors.indigo)}`,
    },

    text: {
        font: {
            sans: "Space Grotesk, sans-serif",
            mono: "Space Mono, monospace"
        },
        headings: {
            font: "Space Grotesk, sans-serif",
        },
        paras: {
            lineHeight: 1.56,
        },
    },

    button: {
        fontFamily: "Space Grotesk, sans-serif"
    },
}

export default merge({}, RFTheme, RFDocsDarkTheme);
