import styled from "styled-components";


export const RHSStyled = styled.div`
padding:14px;
img{
    height:50px;
    width:100px;
}
`;
export const LHSStyled = styled.article`
.palette{
    display:flex;
    width:min-content;
}
`

export const PalleteColorStyled = styled.span`
background: ${props => props["bgColor"]};
margin-left:2px;
height:30px;
width:30px;
border-radius:50%;
`

export const ColorPickerStyled = styled.div`
position: fixed;
background: black;
opacity:0.9;
left:0;
top:0;
height:100%;
width:100%;
z-index:1001;
div.colorpicker--container{
    position:absolute;
    left:40%;
    top:30%;
}
`

