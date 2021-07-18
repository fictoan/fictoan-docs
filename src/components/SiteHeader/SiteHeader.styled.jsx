import styled from "styled-components";
import { darken } from "polished";

import { setuColours } from "../../styles/SetuColours";


export const SiteHeaderStyled = styled.header`
    position : relative;
    z-index  : 50000;

    #site-logo {
        width      : 64px;
        height     : 64px;
        margin-top : 8px;

        #top-shape,
        #left-shape,
        #bottom-shape {
            width  : 64px;
            height : 64px;
        }
        
        #top-shape    { transform : rotateX(60deg) rotateY(0deg) rotateZ(-45deg) translateX(-48px); }
        #bottom-shape { transform : rotateX(60deg) rotateY(0deg) rotateZ(-45deg) translateZ(-54px) translateX(-46px); }
        
        
        &:hover { cursor : pointer; }

        @media all and (max-width : 600px) {
            width : 64px;
        }
    }
    
    #menu-toggle h5 {
        line-height : 6px;
        user-select : none;
    }
    
    .mobile-menu {
        position         : fixed;
        display          : flex;
        flex-direction   : column;
        width            : 72vw;
        height           : 100vh;
        top              : 0;
        right            : 0;
        transition       : all 0.2s;
        transform        : translateX(100vw);
        background-color : white;
        padding          : 24px;
        overflow-y       : scroll;
        border-left      : 1px solid ${darken(0.08, setuColours.pearlyCoke)};
        box-shadow       : -4px 0 12px -2px hsla(0, 0%, 0%, 0.16);

        &.open { transform : translateX(0); }

        .menu-close {
            position    : absolute;
            top         : -4px;
            right       : 2px;
            padding     : 8px 16px;
            font-size   : 32px;
            line-height : 32px;
            cursor      : pointer;
        }
    }
`;
