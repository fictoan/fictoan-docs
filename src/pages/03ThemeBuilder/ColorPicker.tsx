import { Element } from "fictoan-react";
import React, { FunctionComponent, useState } from "react";
import { PhotoshopPicker } from "react-color";
import { ColorPickerStyled, PalleteColorStyled } from "./Styled"

interface ColorPickerProps {
    color: string;
    onChange: Function;
}

export const ColorPicker: FunctionComponent<ColorPickerProps> = ({ color, onChange }) => {
    const [open, setOpen] = useState(false);
    const [__color, __setColor] = useState(color);
    return (
        <>
            <Element
                as={PalleteColorStyled}
                bgColor={color}
                onClick={() => setOpen(true)}
            >
            </Element>
            {open && (
                <ColorPickerStyled>
                        <Element as="div" className="colorpicker--container">
                            <PhotoshopPicker
                                color={__color}
                                onChange={(color: any, e: any) => __setColor(color.hex)}
                                onAccept={() => { setOpen(false); onChange(__color) }}
                                onCancel={() => setOpen(false)}
                            />
                        </Element>
                </ColorPickerStyled>
            )
            }
        </>
    )
}