import React from "react";
import { CommonAndHTMLProps } from "../Element/constants";
import "./Card.css";
export type CardElementType = HTMLDivElement;
export type CardProps = CommonAndHTMLProps<CardElementType>;
export declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
