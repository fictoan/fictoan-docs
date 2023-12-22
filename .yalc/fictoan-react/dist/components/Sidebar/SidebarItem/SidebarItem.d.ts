import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import "./sidebar-item.css";
export interface SidebarItemCustomProps {
    hasAlert?: boolean;
}
export type SidebarItemElementType = HTMLDivElement;
export type SidebarItemProps = Omit<CommonAndHTMLProps<SidebarItemElementType>, keyof SidebarItemCustomProps> & SidebarItemCustomProps;
export declare const SidebarItem: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "hasAlert"> & SidebarItemCustomProps & React.RefAttributes<HTMLDivElement>>;
