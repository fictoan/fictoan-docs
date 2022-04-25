import styled from "styled-components";
import { defaultColours } from "fictoan-react";

export const MobileHeaderStyled = styled.div`
    position         : fixed;
    z-index          : 5000;
    width            : 100%;
    left             : 0;
    right            : 0;
    top              : 0;
    display          : none;
    height           : 48px;
    background-color : ${props => props.theme.body.bg};

    svg {
        display  : block;
        position : relative;
        width    : 100px;
        margin   : 0 auto;
    }

    .menu-toggle {
        display : none;
        cursor  : pointer;
    }

    @media (max-width : 900px) {
        & {
            display        : flex;
            flex-direction : row;
            align-items    : center;
            border-bottom  : 1px solid ${props => props.theme.card.border};
        }

        .menu-toggle {
            display  : block;
            position : fixed;
            padding  : 0 0 0 4vw;
        }

        .menu-toggle * {
            line-height : 8px;
            font-weight : 600;
        }
    }
`;
