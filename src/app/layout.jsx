// app/layout.tsx
import { RootLayoutClient } from "./layout.client";
import { metadata as metadataConfig } from "./metadata";

export const metadata = metadataConfig;

export default function RootLayout({ children }) {
    return <RootLayoutClient>{children}</RootLayoutClient>;
}
