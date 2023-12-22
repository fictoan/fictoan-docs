import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import "./sidebar-item-text.css";
export interface SidebarItemTextCustomProps {
    linkText: string;
    weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
    size?: "tiny" | "small" | "medium" | "large" | "huge";
}
export type SidebarItemTextElementType = HTMLParagraphElement;
export type SidebarItemTextProps = Omit<CommonAndHTMLProps<SidebarItemTextElementType>, keyof SidebarItemTextCustomProps> & SidebarItemTextCustomProps;
export declare const SidebarItemText: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLParagraphElement>, keyof SidebarItemTextCustomProps> & SidebarItemTextCustomProps & React.RefAttributes<HTMLParagraphElement>>;
