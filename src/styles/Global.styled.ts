import { createGlobalStyle } from "styled-components";
import IntroImage from "../assets/images/intro.png";

// import { ThemeProps } from "./typings";

// import SpaceGroteskRegular from "../assets/fonts/SpaceGrotesk-Regular.woff";

export const GlobalStyle = createGlobalStyle`
    #page-app {
        padding-top           : 4vh;
        background-image      : url(${IntroImage});
        background-repeat     : no-repeat;
        background-size       : cover;
        background-attachment : fixed;
        height                : 100vh;
    }
`;
