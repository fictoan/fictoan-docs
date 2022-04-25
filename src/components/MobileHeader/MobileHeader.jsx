import React from "react";

import { MobileHeaderStyled } from "./MobileHeader.styled";

import { ReactComponent as FictoanLogo } from "../../assets/images/logo.svg";

export const MobileHeader = (props) => (
    <MobileHeaderStyled>
        <div className="menu-toggle" onClick={props.toggleSidebarVisibility}>
            <h5>&mdash;</h5>
            <h5>&ndash;</h5>
        </div>

        <FictoanLogo />
    </MobileHeaderStyled>
);
