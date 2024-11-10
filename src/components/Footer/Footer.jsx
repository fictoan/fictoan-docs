// Footer.tsx
import React, { useEffect, useRef, useState } from "react";
import { Footer, Portion, Row, Text } from "fictoan-react";
import "./footer.css";

export const SiteFooter = () => {
    const [isVisible, setIsVisible] = useState(false);
    const footerRef = useRef(null);

    let currentYear = new Date().getFullYear();

    useEffect(() => {
        let lastScrollTop = 0;
        const OVERSCROLL_THRESHOLD = 50; // Amount of overscroll needed to show footer

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const isAtBottom = windowHeight + scrollTop >= documentHeight - 1;

            // Only check for overscroll when we're at the bottom
            if (isAtBottom) {
                // Calculate how much we're trying to scroll past the bottom
                const overscrollAmount = scrollTop - lastScrollTop;

                if (overscrollAmount > 0 && !isVisible) {
                    setIsVisible(true);
                }
            } else if (isVisible) {
                setIsVisible(false);
            }

            lastScrollTop = scrollTop;
        };

        window.addEventListener("scroll", handleScroll, { passive : true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible]);

    return (
        <div
            ref={footerRef}
            className={`sliding-footer ${isVisible ? "visible" : ""}`}
        >
            <Footer verticalPadding="small">
                <Row horizontalPadding="medium" marginBottom="none">
                    <Portion>
                        <Text textColour="white">&copy;{currentYear} Fictoan</Text>
                    </Portion>
                </Row>
            </Footer>
        </div>
    );
};
