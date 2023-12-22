import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import "./sidebar-item-icon.css";
export interface SidebarItemIconCustomProps {
    iconType?: "stroked" | "filled";
}
export type SidebarItemIconElementType = HTMLDivElement;
export type SidebarItemIconProps = Omit<CommonAndHTMLProps<SidebarItemIconElementType>, keyof SidebarItemIconCustomProps> & SidebarItemIconCustomProps;
export declare const SidebarItemIcon: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "iconType"> & SidebarItemIconCustomProps & React.RefAttributes<HTMLDivElement>>;
