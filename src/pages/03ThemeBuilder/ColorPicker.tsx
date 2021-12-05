import { Element } from 'fictoan-react';
import React , {FunctionComponent, useState} from 'react';
import { PhotoshopPicker } from 'react-color';

interface ColorPickerProps {
    title: string;
    color: string;
    onChange: Function;
}

export const ColorPicker: FunctionComponent<ColorPickerProps> = ({ title, color, onChange }) => {
    const [open, setOpen] = useState(false);
    const [__color, __setColor] = useState(color);
    return (<>
        <Element
            as="div"
            padding="micro"
            style={{ background: color }}
            onClick={() => setOpen(!open)}
        >
            {title}
        </Element>
        {open && <div style={{ position: 'fixed', background: 'black', opacity: '0.9', left: '0', top: '0', zIndex:'1001', height:"100%", width:'100%' }}>
            <div style={{position:'fixed', left:'40%', top:'40%'}}>
                <PhotoshopPicker
                    color={__color}
                    onChange={(color,e) => __setColor(color.hex)}
                    onAccept={()=> {setOpen(false); onChange(__color)}}
                    onCancel={() => setOpen(false)}
                    />
            </div>
        </div>
        }
    </>
    )
}