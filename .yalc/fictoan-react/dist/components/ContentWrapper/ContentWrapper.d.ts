import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import "./content-wrapper.css";
export type ContentWrapperElementType = HTMLDivElement;
export type ContentWrapperProps = CommonAndHTMLProps<ContentWrapperElementType>;
export declare const ContentWrapper: React.ForwardRefExoticComponent<ContentWrapperProps & React.RefAttributes<HTMLDivElement>>;
