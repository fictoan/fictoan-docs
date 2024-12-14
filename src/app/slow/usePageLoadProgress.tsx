"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, usePathname } from "next/navigation";

export function useNavigationProgress() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(false);

    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const startLoading = () => {
            console.log("🚀 Navigation started");
            setIsLoading(true);
            setProgress(0);

            // Simulate progress
            const simulateProgress = () => {
                setProgress(prev => {
                    if (prev < 90) {
                        // Schedule next increment
                        timeoutId = setTimeout(simulateProgress, 200);
                        // Gradually slow down progress
                        const increment = Math.max(1, (90 - prev) / 10);
                        return Math.min(90, prev + increment);
                    }
                    return prev;
                });
            };

            // Start progress simulation
            simulateProgress();
        };

        const completeLoading = () => {
            clearTimeout(timeoutId);
            setProgress(100);

            // Wait for completion animation
            setTimeout(() => {
                setIsLoading(false);
                setProgress(0);
            }, 500);
        };

        // Start loading on any navigation change
        if (!isLoading) {
            startLoading();

            // Simulate navigation completion
            // In a real app, you might want to detect actual content load
            setTimeout(completeLoading, 1000);
        }

        return () => {
            clearTimeout(timeoutId);
        };
    }, [pathname, searchParams, params]);

    return { progress, isLoading };
}
