import styled from "styled-components";


export const HomeStyled = styled.article`
    #fictoan-full-form { color : ${props => props.theme.body.bg}; }

    #grid-wrapper {
        display               : grid;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : repeat(6, 1fr);
        grid-gap              : 12px;
        grid-template-areas   : 
            "button      type        notification notification"
            "input       table       table        progress    "
            "select      table       table        colour      "
            "breadcrumbs breadcrumbs radio        colour      "
            "checkbox    code        code         .           "
            ".           .           .            .           ";

        .grid-item {
            //aspect-ratio : 1;

            p,
            td,
            div { font-weight : 400 !important;}
        }

        .component-card {
            display       : grid;
            place-content : center;
        }

        @media all and (max-width : 1000px) {
            display        : flex;
            flex-direction : column;

            & > div {
                width : 100%;

                img { width : 90% }
            }
        }
    }

    #notification-card { grid-area : notification; }

    #input-card { grid-area : input; }

    #select-card { grid-area : select; }

    #checkbox-card { grid-area : checkbox; }

    #table-card {
        grid-area : table;

        a { width : 100%; }
    }

    #code-card { grid-area : code; }

    #breadcrumbs-card { grid-area : breadcrumbs; }

    #progress-card { grid-area : progress; }

    #progress-card progress { width : 160px; }

    #colour-card {
        grid-area : colour;

        a {
            width      : 100%;
            height     : 240px;
            display    : flex;
            align-self : stretch;
        }
    }

    #gradient-card {
        display       : grid;
        width         : 100px;
        height        : 200px;
        place-content : center;
        border        : none;

        background    :
            linear-gradient(180deg,
                rgba(255, 201,   0, 1) 0%,
                rgba(230,  65,  65, 1) 23%,
                rgba(241, 105, 236, 1) 50%,
                rgba( 87, 116, 255, 1) 77%,
                rgba( 95, 246, 247, 1) 100%);
    }
`;
