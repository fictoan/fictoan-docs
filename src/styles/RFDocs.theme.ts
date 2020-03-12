import { baseColors } from "reactised-fictoan";

export const RFDocsTheme = {
    mainColors: {
        hue: baseColors.yellow
    },

    text: {
        font: {
            sans: "Space Grotesk, sans-serif",
            serif: "serif",
            mono: "Space Mono, monospace"
        },
        headings: {
            font: "Space Grotesk, sans-serif"
        },
        code: {
            inline: {
                bg: baseColors.amber10,
                text: baseColors.red,
                scale: 90
            },
            block: {
                scale: 90
            }
        }
    },
    button: {
        fontFamily: "Space Grotesk, sans-serif"
    }
};
