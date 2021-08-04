import { css } from "styled-components";

import SFProRegular from "../assets/fonts/sf-pro/sf-pro-text-regular.woff";
import SFProBold from "../assets/fonts/sf-pro/sf-pro-text-bold.woff";
import JetBrainsMonoRegular from "../assets/fonts/jetbrains-mono/JetBrainsMono-Regular.woff";
import JetBrainsMonoBold from "../assets/fonts/jetbrains-mono/JetBrainsMono-Bold.woff";

export const FictoanFontsStyled = css`
    @font-face {
        font-family: "SF Pro Text";
        src: url(${SFProRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "SF Pro Text";
        src: url(${SFProBold}) format("woff");
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: "JetBrains Mono";
        src: url(${JetBrainsMonoRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "JetBrains Mono";
        src: url(${JetBrainsMonoBold}) format("woff");
        font-weight: 600;
        font-style: normal;
    }
`;
