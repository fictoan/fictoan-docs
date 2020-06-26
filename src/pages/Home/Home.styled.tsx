import styled from "styled-components";

import IntroImage from "../../assets/images/intro.png";

export const HomeStyled = styled.article`

    #hero-text {
        @media all and (max-width : 600px) {
            margin : 4vw;
        }
    }

    #hero {
        background-image      : url(${IntroImage});
        background-repeat     : no-repeat;
        background-size       : cover;
        /* background-attachment : fixed; */
        background-position   : bottom right;
        height                : 100vh;
    }

    #demo-section { position : relative; }

    #output {
        position : sticky;
        top      : 24px;
    }
`;
