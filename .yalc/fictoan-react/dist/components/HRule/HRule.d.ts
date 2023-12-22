import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import "./h-rule.css";
export interface HRCustomProps {
    kind?: "primary" | "secondary" | "tertiary";
    sideMargin?: "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}
export type HRElementType = HTMLHRElement;
export type HRProps = Omit<CommonAndHTMLProps<HRElementType>, keyof HRCustomProps> & HRCustomProps;
export declare const HRule: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLHRElement>, keyof HRCustomProps> & HRCustomProps & React.RefAttributes<HTMLHRElement>>;
