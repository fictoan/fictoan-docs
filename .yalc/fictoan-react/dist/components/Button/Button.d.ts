import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import "./Button.css";
export interface ButtonCustomProps {
    kind?: "primary" | "secondary" | "tertiary" | "custom";
    size?: "tiny" | "small" | "medium" | "large" | "huge";
    shape?: "rounded" | "curved" | "circular";
    isLoading?: boolean;
    hasDelete?: boolean;
}
export type ButtonElementType = HTMLButtonElement;
export type ButtonProps = Omit<CommonAndHTMLProps<ButtonElementType>, keyof ButtonCustomProps> & ButtonCustomProps;
export declare const Button: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLButtonElement>, keyof ButtonCustomProps> & ButtonCustomProps & React.RefAttributes<HTMLButtonElement>>;