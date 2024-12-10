import FormWrapperDocs from "./page.client";

export const metadata = {
    title       : "Form wrapper component — Fictoan UI",
    description : "A parent wrapper for all form elements, used to space them evenly",
    openGraph   : {
        title       : "Form wrapper component — Fictoan UI",
        description : "A parent wrapper for all form elements, used to space them evenly",
        url         : "https://fictoan.io/components/form-wrapper",
        siteName    : "Fictoan UI",
        images      : [
            {
                url    : "https://fictoan.io/components/option-card/opengraph-image",
                width  : 1200,
                height : 630,
                alt    : "Form wrapper component — Fictoan UI",
            },
        ],
        locale      : "en_US",
        type        : "website",
    },
    twitter     : {
        card        : "summary_large_image",
        title       : "Form wrapper component — Fictoan UI",
        description : "A parent wrapper for all form elements, used to space them evenly",
        images      : ["https://fictoan.io/components/option-card/opengraph-image"],
    },
};

export default function Page() {
    return <FormWrapperDocs />;
}
