import { baseColors } from "reactised-fictoan/dist";

export const RFDocsTheme = {
    text : {
        font : {
            sans  : "Space Grotesk, sans-serif",
            serif : "serif",
            mono  : "Space Mono, monospace"
        },
        size : {
            multiplier : 1.24
        },
        headings : {
            font : "Space Grotesk, sans-serif"
        },
        paras: {
            lineHeight : 1.56,
        },
    },
    button : {
        fontFamily : "Space Grotesk, sans-serif"
    },
    sidebar : {
        isCollapsed : {
            label : {
                text : baseColors.white,
            }
        },
        header: {
            bg          : baseColors.white,
            borderBottom: baseColors.white
        },
        footer: {
            bg        : baseColors.white,
            borderTop : baseColors.slate10
        },
    }
}
