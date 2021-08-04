import { createGlobalStyle } from "styled-components";
import { FictoanFontsStyled } from "./Fonts";
import { defaultColours } from "fictoan-react";

export const GlobalStyle = createGlobalStyle`
    ${FictoanFontsStyled}

    h1, h2, h3 { line-height : 1; }
    
    article { min-height : 100vh; }
    
    p { margin : 0; }

    .with-top-border  {
        border-top  : 2px solid ${defaultColours.black};
        padding-top : 32px;
    }
`;
