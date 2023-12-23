import { Inter } from "next/font/google";
import { ContentWrapper, SidebarWrapper } from "fictoan-react";
import "./styles/theme-dark.css";
import "./styles/common.css";

const inter = Inter({ subsets : ["latin"] });

export const metadata = {
    title       : "FICTOAN docs",
    description : "Documentation for the FICTOAN Framework",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body>
        <SidebarWrapper></SidebarWrapper>
        <ContentWrapper>
            {children}
        </ContentWrapper>
        </body>
        </html>
    );
}
