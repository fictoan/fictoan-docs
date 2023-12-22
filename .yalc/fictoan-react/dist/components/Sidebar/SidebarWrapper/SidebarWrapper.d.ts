import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
import "./sidebar-wrapper.css";
export interface SidebarWrapperCustomProps {
    collapsed?: boolean;
}
export type SidebarWrapperElementType = HTMLDivElement;
export type SidebarWrapperProps = Omit<CommonAndHTMLProps<SidebarWrapperElementType>, keyof SidebarWrapperCustomProps> & SidebarWrapperCustomProps;
export declare const SidebarWrapper: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, "collapsed"> & SidebarWrapperCustomProps & React.RefAttributes<HTMLDivElement>>;
