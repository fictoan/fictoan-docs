//  External dependencies
import React from "react";

//  Internal dependencies
import {
    Element,
    Row,
    Portion,
    Text
} from "fictoan-react";

//  Local components
import { FooterStyled } from "./Footer.styled";

//  Local assets
import icon from "../../assets/images/icon-ft-on-dp.svg";


export const Footer = () => {
    return (
        <FooterStyled>
            <Row sidePadding="huge" marginTop="small">
                <Portion desktopSpan="one-third">
                    <Element as="img" src={icon} />
                </Portion>

                <Portion desktopSpan="two-third">
                    <Text>
                        Crucible is Setu’s internal design and development system that lays emphasis on rapidly
                        building, shipping and iterating over deliberating on assumptions.
                    </Text>
                </Portion>
            </Row>
        </FooterStyled>
    );
}
