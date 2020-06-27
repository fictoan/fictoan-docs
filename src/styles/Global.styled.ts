import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    h1, h2, h3 { line-height : 1; }
    
    @media all and (max-width : 900px) {
        #root > main {
            width       : 100%;
            margin-left : 0;
        }
    }
`;
