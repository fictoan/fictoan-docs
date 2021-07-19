import styled from "styled-components";


export const ColourStyled = styled.article`
    #transparent-card {
        background-position : 0 0,0 11px,11px -11px,-11px 0;
        background-size     : 22px 22px;
        background-image    : linear-gradient( 45deg, #ccc 25%, transparent 0),
                              linear-gradient(-45deg, #ccc 25%, transparent 0),
                              linear-gradient( 45deg, transparent 75%, #ccc 0),
                              linear-gradient(-45deg, transparent 75%, #ccc 0);
    }
`;
