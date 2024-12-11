"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "./loading-bar.css";
import { Div } from "fictoan-react";

const LoadingBar = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [complete, setComplete] = useState(false);

    useEffect(() => {
        setLoading(true);
        setComplete(false);

        // Start completion sequence
        const completeTimer = setTimeout(() => {
            setComplete(true);

            // Reset after fade out
            const resetTimer = setTimeout(() => {
                setLoading(false);
                setComplete(false);
            }, 300);

            return () => clearTimeout(resetTimer);
        }, 800); // Give more time for the loading animation

        return () => clearTimeout(completeTimer);
    }, [pathname, searchParams]);

    return (
        <Div
            data-loading-bar
            className={`${loading ? "active" : ""} ${complete ? "complete" : ""}`}
        />
    );
};

export default LoadingBar;
