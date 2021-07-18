import { css } from "styled-components";

import UntitledSansRegular from "../assets/fonts/test-untitled-sans-regular.woff";
import UntitledSansBold from "../assets/fonts/test-untitled-sans-bold.woff";

export const FictoanFontsStyled = css`
    @font-face {
        font-family: "UntitledSans";
        src: url(${UntitledSansRegular}) format("woff");
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: "UntitledSans";
        src: url(${UntitledSansBold}) format("woff");
        font-weight: 600;
        font-style: normal;
    }
`;
