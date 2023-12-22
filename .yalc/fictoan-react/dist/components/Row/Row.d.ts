import React from "react";
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";
import "./row.css";
export interface RowCustomProps {
    sidePadding?: "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
    gutters?: SpacingTypes;
    retainLayoutOnTabletLandscape?: boolean;
    retainLayoutOnTabletPortrait?: boolean;
    retainLayoutOnMobile?: boolean;
    retainLayoutAlways?: boolean;
}
export type RowElementType = HTMLDivElement;
export type RowProps = Omit<CommonAndHTMLProps<RowElementType>, keyof RowCustomProps> & RowCustomProps;
export declare const Row: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof RowCustomProps> & RowCustomProps & React.RefAttributes<HTMLDivElement>>;
