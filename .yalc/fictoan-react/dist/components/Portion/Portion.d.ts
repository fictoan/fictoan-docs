import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import "./portion.css";
import { SpanTypes } from "./types";
export interface PortionCustomProps {
    desktopSpan?: SpanTypes;
    tabletLandscapeSpan?: SpanTypes;
    tabletPortraitSpan?: SpanTypes;
    mobileSpan?: SpanTypes;
    isHorizontal?: boolean;
}
export type PortionElementType = HTMLDivElement;
export type PortionProps = Omit<CommonAndHTMLProps<PortionElementType>, keyof PortionCustomProps> & PortionCustomProps;
export declare const Portion: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof PortionCustomProps> & PortionCustomProps & React.RefAttributes<HTMLDivElement>>;
