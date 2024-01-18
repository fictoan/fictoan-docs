import React from "react";
import { usePointerGlow } from "../../utils/usePointerGlow";

import "./GlowCard.css";

export const GlowCard = ({children}) => {
    const [status] = usePointerGlow();

    return (
        <div className="glow-card" data-glow>
            <span data-glow />
            {children}
        </div>
    );
};
