"use client";

// EXTERNAL DEPS ===============================================================
import React from "react";

// INTERNAL DEPS ===============================================================
import { Element, Article, Div } from "fictoan-react";

// COMPONENTS ==================================================================

// STYLES ======================================================================
import "./page-progress-bar.css";

// CODE SNIPPETS ===============================================================

// DATA ========================================================================


const ProgressBarDocs = () => {
    const style = {};

    if (gridContainer) {
        style.display = "grid";
        style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
        style.gap = gap;
    }

    if (desktopSpan) {
        if (desktopSpan === "half") {
            style.gridColumn = `span ${Math.floor(columns / 2)}`;
        } else {
            style.gridColumn = `span ${desktopSpan}`;
        }
    }

    return (
        <Article id="page-progress-bar">
            <Div gridContainer columns="8" gap="small">
                <Div desktopSpan="half">
                    <Div>Content</Div>
                </Div>

                <Div desktopSpan="3">
                    <Div>Content</Div>
                </Div>
            </Div>
        </Article>
    );
};

export default ProgressBarDocs;
