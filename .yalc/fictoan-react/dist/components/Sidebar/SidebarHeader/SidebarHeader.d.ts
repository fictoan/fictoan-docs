import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import "./sidebar-header.css";
export interface SidebarHeaderCustomProps {
    isSticky?: boolean;
}
export type SidebarHeaderElementType = HTMLDivElement;
export type SidebarHeaderProps = Omit<CommonAndHTMLProps<SidebarHeaderElementType>, keyof SidebarHeaderCustomProps> & SidebarHeaderCustomProps;
export declare const SidebarHeader: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "isSticky"> & SidebarHeaderCustomProps & React.RefAttributes<HTMLDivElement>>;
