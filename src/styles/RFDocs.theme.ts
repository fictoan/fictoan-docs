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
        code: {
            inline: {
                bg: baseColors.amber10,
                text: baseColors.red,
                scale: 90
            },
            block: {
                scale: 100
            }
        }
    }
};
