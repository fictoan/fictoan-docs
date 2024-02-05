import { Div, Text } from "fictoan-react";

export const listOfColours = [
    "red",
    "salmon",
    "orange",
    "amber",
    "yellow",
    "spring",
    "pistachio",
    "green",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "crimson",
    "brick",
    "sienna",
    "brown",
    "slate",
    "grey",
];

export const generateShades = (color) => [
    `${color}-dark-90`,
    `${color}-dark-80`,
    `${color}-dark-70`,
    `${color}-dark-60`,
    `${color}-dark-50`,
    `${color}-dark-40`,
    `${color}-dark-30`,
    `${color}-dark-20`,
    `${color}-dark-10`,
    color,
    `${color}-light-10`,
    `${color}-light-20`,
    `${color}-light-30`,
    `${color}-light-40`,
    `${color}-light-50`,
    `${color}-light-60`,
    `${color}-light-70`,
    `${color}-light-80`,
    `${color}-light-90`,
];

// Generate shades for the colors in listOfColours
export const colourOptionsWithShades = listOfColours.flatMap(color =>
    generateShades(color).map(shade => (
        {
            customLabel : (
                <Div verticallyCentreItems>
                    <Div
                        className="color-option"
                        bgColour={shade}
                        padding="nano" shape="rounded"
                    />
                    <Text marginLeft="nano">{shade}</Text>
                </Div>
            ),
            label       : shade,
            value       : shade,
        }
    )),
);

// Separate black, white, and transparent
export const basicColourOptions = [
    { label : "black", value : "black" },
    { label : "white", value : "white" },
    { label : "transparent", value : "transparent" },
].map(color => (
    {
        customLabel : (
            <Div verticallyCentreItems>
                <Div
                    className="color-option"
                    bgColour={color.value}
                    padding="nano"
                    shape="rounded"
                    style={{
                        backgroundColor : color.value === "transparent" ? "rgba(0,0,0,0)" : color.value,
                        border          : color.value === "transparent" ? "1px dashed rgba(0,0,0,0.3)" : "",
                    }}
                />
                <Text marginLeft="nano">{color.label}</Text>
            </Div>
        ),
        label       : color.label,
        value       : color.value,
    }
));

// Combine both sets of options
export const colourOptions = [...colourOptionsWithShades, ...basicColourOptions];
