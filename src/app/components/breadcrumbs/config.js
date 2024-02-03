export const breadcrumbsProps = {
    component  : "Breadcrumbs",
    properties : [
        "label",
        "padding",
        "bgColour",
    ],
    variables  : {
        "breadcrumbs-wrapper-bg"            : {
            type         : "reference",
            defaultValue : "transparent",
        },
        "breadcrumb-item-separator"        : {
            type         : "string",
            defaultValue : "/",
        },
        "breadcrumb-item-separator-colour"  : {
            type         : "reference",
            defaultValue : "slate-light-10",
        },
        "breadcrumb-item-text-colour"  : {
            type         : "reference",
            defaultValue : "paragraph-text-colour",
        },
        "breadcrumb-item-text-colour-active"  : {
            type         : "reference",
            defaultValue : "paragraph-text-colour",
        },
    }
};
