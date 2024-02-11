export const drawerProps = {
    component  : "Drawer",
    properties : [
        "position",
        "width",
        "openWhen",
        "closeWhen",
        "showOverlay",
        "isDismissible",
        "closeOnClickOutside",
    ],
    variables  : {
        "drawer-bg"              : {
            type         : "reference",
            defaultValue : "white",
        },
        "drawer-border"          : {
            type         : "reference",
            defaultValue : "slate-light-20",
        },
        "drawer-border-radius"   : {
            type         : "reference",
            defaultValue : "global-border-radius",
        },
        "drawer-overlay-opacity" : {
            type         : "value-unit",
            defaultValue : 0.4,
            unit         : "",
        },
        "drawer-overlay-blur"    : {
            type         : "value-unit",
            defaultValue : 4,
            unit         : "px",
        },
        "drawer-dismiss-button"  : {
            type         : "reference",
            defaultValue : "slate-light-40",
        },
    },
};
