import React, { useCallback, useEffect, useMemo } from "react";
import Color from "color";
import gsap from "gsap";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip);

import "./GlowCard.css";

const CONFIG = {
    movement               : 150,
    explode                : false,
    border                 : 2,
    radius                 : 12,
    saturation             : 100,
    lightness              : 50,
    size                   : 150,
    card                   : "rgb(153, 153, 153)",
    cardAlpha              : 0.15,
    cardBlur               : 4,
    "bg-spot-opacity"      : 0.1,
    "border-spot-opacity"  : 1,
    "border-light-opacity" : 1,
};

const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};


// Not using React? Jus' take this and drop it into a <script>
const useGlowPointer = () => {
    const UPDATE = React.useCallback(({ x, y }) => {
        document.documentElement.style.setProperty("--x", x.toFixed(2));
        document.documentElement.style.setProperty(
            "--xp",
            (
                x / window.innerWidth
            ).toFixed(2),
        );
        document.documentElement.style.setProperty("--y", y.toFixed(2));
        document.documentElement.style.setProperty(
            "--yp",
            (
                y / window.innerHeight
            ).toFixed(2),
        );
    }, []);
    React.useEffect(() => {
        document.body.addEventListener("pointermove", UPDATE);
        return () => {
            document.body.removeEventListener("pointermove", UPDATE);
        };
    }, []);
    return null;
};

export const GlowCard = ({ children }) => {
    useGlowPointer();

    const handlePointerMove = useCallback(({ x, y }) => {
        document.documentElement.style.setProperty("--x", x.toFixed(2));
        document.documentElement.style.setProperty("--y", y.toFixed(2));
        // ... other style updates
    }, []);

    const debouncedHandlePointerMove = useCallback(
        debounce(handlePointerMove, 50), // in milliseconds
        [handlePointerMove],
    );

    useEffect(() => {
        const eventListener = event => debouncedHandlePointerMove(event);
        document.body.addEventListener("pointermove", eventListener);
        return () => {
            document.body.removeEventListener("pointermove", eventListener);
        };
    }, [debouncedHandlePointerMove]);

    const SYNC_STYLES = React.useCallback(() => {
        for (const key of Object.keys(CONFIG)) {
            if (
                key !== "card" &&
                key !== "cardAlpha"
            ) {
                document.documentElement.style.setProperty(`--${key}`, CONFIG[key]);
            }
            if (key === "card") {
                const hsl = new Color(CONFIG.card).hsl();
                document.documentElement.style.setProperty(
                    "--backdrop",
                    `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${CONFIG.cardAlpha})`,
                );
                document.documentElement.style.setProperty(
                    "--backup-border",
                    `hsl(${hsl.color[0]} ${hsl.color[1]}% ${hsl.color[2]}% / ${Math.max(
                        CONFIG.cardAlpha,
                        0.2,
                    )})`,
                );
            }
        }
    }, []);

    React.useEffect(() => {
        SYNC_STYLES();
    }, [SYNC_STYLES]);

    const card = useMemo(() => (
        {
            id      : "random-id",
            spread  : gsap.utils.random(0, 1000),
            outer   : true,
            control : true,
            base    : gsap.utils.random(0, 359),
        }
    ), []);

    const cardStyle = useMemo(() => (
        {
            "--base"   : card.base,
            "--spread" : card.spread,
        }
    ), [card.base, card.spread]);

    return (
        <div
            className="glow-card"
            data-glow
            style={cardStyle}
        >
            {card?.outer ? <div data-glow></div> : null}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
};
