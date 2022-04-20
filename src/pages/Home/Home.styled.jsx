import styled from "styled-components";


export const HomeStyled = styled.article`
    #grid-wrapper {
        display               : grid;
        grid-template-columns : repeat(4, 1fr);
        grid-template-rows    : repeat(4, 1fr);
        grid-gap              : 12px;
        grid-template-areas   : 
            "button  type  notification notification"
            "select  table table        progress    "
            ".       table table        .           "
            ".       code  code         .           ";

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
    }

    #notification-card { grid-area : notification; }

    #select-card { grid-area : select; }

    #table-card {
        grid-area : table;

        a { width : 100%; }
    }

    #code-card { grid-area : code; }

    #progress-card { grid-area : progress; }

    #progress-card progress { width : 160px; }
`;
