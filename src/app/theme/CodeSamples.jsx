// Code sample 01 //////////////////////////////////////////////////////////////
export const sampleThemeProviderSetup = `import React, { useState } from "react";
import { ThemeProvider } from "fictoan-react";
import { Header } from "../Header/Header";

import "fictoan-react/dist/index.css";
import "../styles/theme-dark.css";

export const RootClientSideLayout = ({ theme, setTheme, children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"theme-light" | "theme-dark">("theme-light");
    
    return (
        <ThemeProvider currentTheme={theme}>
            <Header theme={theme} setTheme={setTheme} />

            {children}
        </ThemeProvider>
    );
};`;

export const sampleHeaderSetup = `import { SetStateAction } from "react";
import { Element, Button } from "fictoan-react";

type HeaderProps = {
    theme    : string;
    setTheme : (theme: SetStateAction<"theme-light" | "theme-dark">) => void;
};

export const Header = ({ theme, setTheme }: HeaderProps) => {
    const toggleTheme = () => {
        if (theme === "theme-light") {
            setTheme("theme-dark");
        } else {
            setTheme("theme-light");
        }
    };

    return (
        <Element as="header">
            <Button onClick={toggleTheme}>
                Toggle theme
            </Button>
        </Element>
    );
};`;

export const sampleCSSSetup = `.theme-dark {
    --body-bg : var(--black)
};`;





// Code sample 01 //////////////////////////////////////////////////////////////
export const sampleThemeGlobals = `--global-border-radius : 8px;
--global-border-width  : 1px;

--nano   : 8px;
--micro  : 24px;
--tiny   : 2vmax;
--small  : 4vmax;
--medium : 8vmax;
--large  : 16vmax;
--huge   : 24vmax;`;


// Code sample 01 //////////////////////////////////////////////////////////////
export const sampleFictoanTheme = `/* BADGE ////////////////////////////////////////////////////////// */
:root {
    --badge-font          : var(--paragraph-font);
    --badge-border-radius : var(--global-border-radius);
    --badge-border-width  : var(--global-border-width);
}

/* BODY /////////////////////////////////////////////////////////// */
:root {
    --body-bg : var(--white);
}

/* BOTTOM DRAWER ////////////////////////////////////////////////// */
:root {
    --drawer-bg              : var(--white);
    --drawer-border          : var(--slate-light-20);
    --drawer-border-radius   : var(--global-border-radius);

    --drawer-overlay-bg      : var(--black);
    --drawer-overlay-opacity : 0.4;
    --drawer-overlay-blur    : 4px;

    --drawer-dismiss-button  : var(--slate-light-40);
}

/* BREADCRUMBS //////////////////////////////////////////////////// */
:root {
    --breadcrumbs-wrapper-bg             : var(--transparent);

    --breadcrumb-item-separator          : "/";
    --breadcrumb-item-separator-colour   : var(--slate-light-10);

    --breadcrumb-item-text-colour        : var(--paragraph-text-colour);
    --breadcrumb-item-text-colour-active : var(--paragraph-text-colour);
}

/* BUTTON ///////////////////////////////////////////////////////// */
:root {
    /* PRIMARY BUTTON ============================================= */
    --button-primary-default-bg               : var(--blue);
    --button-primary-default-text             : var(--white);
    --button-primary-default-border-colour    : var(--blue);
    --button-primary-default-border-width     : var(--global-border-width);
    --button-primary-default-border-radius    : var(--global-border-radius);

    --button-primary-hover-bg                 : var(--blue-light-10);
    --button-primary-hover-text               : var(--white);
    --button-primary-hover-border-colour      : var(--blue-dark-30);
    --button-primary-hover-border-width       : var(--global-border-width);
    --button-primary-hover-border-radius      : var(--global-border-radius);

    --button-primary-loading-spinner-colour   : var(--white);

    --button-primary-disabled-bg              : var(--blue-light-10);
    --button-primary-disabled-text            : var(--white);
    --button-primary-disabled-border-colour   : var(--blue-light-10);
    --button-primary-disabled-border-width    : var(--global-border-width);
    --button-primary-disabled-border-radius   : var(--global-border-radius);


    /* SECONDARY BUTTON =========================================== */
    --button-secondary-default-bg             : var(--blue-light-50);
    --button-secondary-default-text           : var(--blue);
    --button-secondary-default-border-colour  : var(--blue-light-50);
    --button-secondary-default-border-width   : var(--global-border-width);
    --button-secondary-default-border-radius  : var(--global-border-radius);

    --button-secondary-hover-bg               : var(--blue-light-40);
    --button-secondary-hover-text             : var(--blue);
    --button-secondary-hover-border-colour    : var(--blue-light-40);
    --button-secondary-hover-border-width     : var(--global-border-width);
    --button-secondary-hover-border-radius    : var(--global-border-radius);

    --button-secondary-loading-spinner-colour : var(--blue);

    --button-secondary-disabled-bg            : var(--blue-light-10);
    --button-secondary-disabled-text          : var(--white);
    --button-secondary-disabled-border-colour : var(--blue-light-10);
    --button-secondary-disabled-border-width  : var(--global-border-width);
    --button-secondary-disabled-border-radius : var(--global-border-radius);


    /* TERTIARY BUTTON ============================================ */
    --button-tertiary-default-bg              : var(--transparent);
    --button-tertiary-default-text            : var(--blue);
    --button-tertiary-default-border-colour   : var(--blue);
    --button-tertiary-default-border-width    : var(--global-border-width);
    --button-tertiary-default-border-radius   : var(--global-border-radius);

    --button-tertiary-hover-bg                : var(--blue-light-80);
    --button-tertiary-hover-text              : var(--blue);
    --button-tertiary-hover-border-colour     : var(--blue-light-20);
    --button-tertiary-hover-border-width      : var(--global-border-width);
    --button-tertiary-hover-border-radius     : var(--global-border-radius);

    --button-tertiary-loading-spinner-colour  : var(--blue);

    --button-tertiary-disabled-bg             : var(--blue-light-10);
    --button-tertiary-disabled-text           : var(--white);
    --button-tertiary-disabled-border-colour  : var(--blue-light-10);
    --button-tertiary-disabled-border-width   : var(--global-border-width);
    --button-tertiary-disabled-border-radius  : var(--global-border-radius);


    /* ROUND BUTTON =============================================== */
    --button-round-size-tiny                  : 24px;
    --button-round-size-small                 : 32px;
    --button-round-size-medium                : 64px;
    --button-round-size-large                 : 80px;
    --button-round-size-huge                  : 128px;
}

/* CALLOUT //////////////////////////////////////////////////////// */
:root {
    --callout-border-radius  : var(--global-border-radius);
    --callout-border-width   : var(--nano);

    --callout-info-bg        : var(--blue-light-40);
    --callout-info-border    : var(--blue-dark-40);

    --callout-success-bg     : var(--green-light-40);
    --callout-success-border : var(--green-dark-40);

    --callout-warning-bg     : var(--amber-light-40);
    --callout-warning-border : var(--amber-dark-40);

    --callout-error-bg       : var(--red-light-40);
    --callout-error-border   : var(--red-dark-40);
}

/* CARD /////////////////////////////////////////////////////////// */
:root {
    --card-bg            : var(--white);
    --card-border        : var(--slate);
    --card-border-radius : var(--global-border-radius);
    --card-border-width  : var(--global-border-width);
}

/* CHECKBOX ////////////////////////////////////////////////////// */
:root {
    --checkbox-square-border-radius : var(--global-border-radius);

    --checkbox-square-bg-default    : var(--slate-light-60);
    --checkbox-square-bg-hover      : var(--slate-light-40);
    --checkbox-square-bg-checked    : var(--hue);
    --checkbox-square-bg-disabled   : var(--slate-light-90);

    --checkbox-tick                 : var(--white);
}

/* EXPANDABLE CONTENT ///////////////////////////////////////////// */
:root {
    --expandable-content-chevron : var(--slate);
}

/* H-RULE ///////////////////////////////////////////////////////// */
:root {
    --hr-default-height   : 1px;
    --hr-default-bg       : var(--slate);

    --hr-primary-height   : 4px;
    --hr-primary-bg       : var(--slate);

    --hr-secondary-height : 2px;
    --hr-secondary-bg     : var(--slate-light-60);

    --hr-tertiary-height  : 1px;
    --hr-tertiary-bg      : var(--slate-light-20);
}

/* INPUT FIELD //////////////////////////////////////////////////// */
:root {
    --input-bg-default            : var(--white);
    --input-border-default        : var(--slate-light-40);
    --input-border-radius-default : var(--global-border-radius);
    --input-label-default         : var(--paragraph-text-colour);
    --input-placeholder-default   : var(--slate-light-40);
    --input-text-default          : var(--shade);

    --input-bg-focus              : var(--white);
    --input-border-focus          : var(--slate-light-40);
    --input-text-focus            : var(--shade);

    --input-bg-valid              : var(--white);
    --input-border-valid          : var(--green-dark-30);
    --input-label-valid           : var(--shade);

    --input-bg-invalid            : var(--red-light-60);
    --input-border-invalid        : var(--red-dark-30);
    --input-label-invalid         : var(--red);
    --input-text-invalid          : var(--red);
    --input-error-text-invalid    : var(--red);

    --input-bg-disabled           : var(--slate-light-40);
    --input-border-disabled       : var(--slate-light-40);
    --input-label-disabled        : var(--slate-dark-40);
    --input-text-disabled         : var(--slate-dark-60);

    --input-bg-read-only          : var(--slate-light-40);
    --input-border-read-only      : var(--slate-light-40);
    --input-label-read-only       : var(--slate-dark-40);
    --input-text-read-only        : var(--slate-dark-60);

    --input-required-indicator    : var(--red);

    --input-helptext              : var(--slate-dark-40);
    --input-helptext-scale        : 92%;

    --input-icon-default          : var(--slate-light-40);
    --input-icon-focus            : var(--hue);
    --input-icon-valid            : var(--green-dark-30);
}

/* NOTIFICATIONS ////////////////////////////////////////////////// */
:root {
    --notification-item-border-radius           : var(--global-border-radius);

    --notification-item-generic-bg              : var(--white);
    --notification-item-generic-border          : var(--slate-light-40);
    --notification-item-generic-text            : var(--shade);

    --notification-item-info-bg                 : var(--blue-light-40);
    --notification-item-info-border             : var(--blue);

    --notification-item-error-bg                : var(--red-light-40);
    --notification-item-error-border            : var(--red);

    --notification-item-success-bg              : var(--green-light-40);
    --notification-item-success-border          : var(--green);

    --notification-item-warning-bg              : var(--amber-light-40);
    --notification-item-warning-border          : var(--amber);

    --notification-dismiss-button               : var(--slate-dark-90);
    --notification-dismiss-button-border-radius : var(--slate-dark-90);
}

/* PROGRESS BAR /////////////////////////////////////////////////// */
:root {
    --progress-bar-bg            : var(--slate-light-20);
    --progress-bar-fill          : var(--hue);
    --progress-bar-label         : var(--shade);
    --progress-bar-value         : var(--shade);
    --progress-bar-border-radius : var(--global-border-radius);
    --progress-bar-height        : 8px;
}

/* RADIO BUTTON /////////////////////////////////////////////////// */
:root {
    --radio-button-circle-bg-default  : var(--slate-light-60);
    --radio-button-circle-bg-hover    : var(--slate-light-40);
    --radio-button-circle-bg-checked  : var(--hue);
    --radio-button-circle-bg-disabled : var(--slate-light-90);

    --radio-button-dot                : var(--white);
}

/* RANGE ////////////////////////////////////////////////////// */
:root {
    --range-slider-bg            : var(--blue-light-20);
    --range-slider-border-focus  : var(--blue);
    --range-slider-outline-focus : var(--blue);
}

/* SIDEBAR + CONTENT WRAPPER ////////////////////////////////////// */
:root {
    --sidebar-bg                             : var(--white);
    --sidebar-width-default                  : 240px;
    --sidebar-width-collapsed                : 48px;

    --sidebar-header-bg                      : var(--white);
    --sidebar-header-border-bottom           : var(--slate-dark-80);
    --sidebar-header-logo-width              : 50%;
    --sidebar-header-icon-width              : 40px;

    --sidebar-item-icon-width                : 24px;
    --sidebar-item-icon-stroke-default       : var(--slate-dark-40);
    --sidebar-item-icon-stroke-width-default : 2px;
    --sidebar-item-icon-fill-default         : var(--slate-light-40);

    --sidebar-item-bg-hover                  : var(--grey-dark-70);
    --sidebar-item-text-hover                : var(--hue);
    --sidebar-item-icon-stroke-hover         : var(--slate-dark-30);
    --sidebar-item-icon-fill-hover           : var(--slate-dark-30);

    --sidebar-item-bg-active                 : var(--grey-dark-60);
    --sidebar-item-text-active               : var(--grey-light-40);
    --sidebar-item-border-active             : var(--blue);
    --sidebar-item-icon-fill-active          : var(--slate);
    --sidebar-item-icon-stroke-active        : var(--slate);
    --sidebar-item-active-indicator-width    : 2px;

    --sidebar-item-default-link-bg           : var(--white);
    --sidebar-item-default-link-text         : var(--shade);
    --sidebar-item-text-scale                : 100%;
    --sidebar-item-text-weight               : 600;

    --sidebar-item-has-alert-bg              : var(--red-dark-70);

    --sidebar-footer-height                  : 32px;
    --sidebar-footer-bg                      : var(--white);
    --sidebar-footer-border-top              : var(--slate-light-10);

    --sidebar-collapsed-item-link-text       : var(--white);
    --sidebar-collapsed-item-bg              : var(--hue);
    --sidebar-collapsed-item-border-radius   : var(--global-border-radius);
}

/* SELECT DROPDOWN //////////////////////////////////////////////// */
:root {
    --dropdown-chevron : var(--slate-light-40);
}

/* SPINNER //////////////////////////////////////////////////////// */
:root {
    --spinner-border : var(--hue);
}

/* TABLE ////////////////////////////////////////////////////////// */
:root {
    --table-bg                           : var(--white);
    --table-border                       : var(--slate-light-10);
    --table-font                         : var(--paragraph-font);
    --table-text                         : var(--paragraph-text-colour);

    --table-striped-header-bg            : var(--blue-light-40);
    --table-striped-cell-bg              : var(--slate-light-20);

    --table-bg-hover                     : var(--amber-light-20);
    --table-text-hover                   : var(--paragraph-text-colour);

    --table-pagination-bg                : var(--white);
    --table-pagination-border-radius     : var(--global-border-radius);
    --table-pagination-text              : var(--paragraph-text-colour);
    --table-pagination-nav-icon-bg-hover : var(--slate-dark-60);
}

/* TABS /////////////////////////////////////////////////////////// */
:root {
    --tabs-bg                     : var(--transparent);

    --tab-default-label           : var(--shade);
    --tab-hover-label             : var(--blue-light-40);
    --tab-active-label            : var(--blue);
    --tab-active-border           : var(--blue);
    --tab-disabled-label          : var(--slate-light-40);

    --tab-with-alert-badge-bg     : var(--red-dark-70);
    --tab-with-alert-badge-border : var(--red-dark-70);
}

/* TOAST ////////////////////////////////////////////////////////// */
:root {
    --toast-bg            : var(--slate-light-10);
    --toast-text          : var(--black);
    --toast-border-radius : var(--global-border-radius);
}

/* TEXT /////////////////////////////////////////////////////////// */
:root {
    /* GENERICS ============================================= */
    --font-sans-serif           : sans-serif;
    --font-serif                : serif;
    --font-mono                 : monospace;

    /* PARAGRAPHS =========================================== */
    --paragraph-font            : var(--font-sans-serif);
    --paragraph-font-size       : 1rem;
    --paragraph-line-height     : 1.2;
    --paragraph-font-weight     : 400;
    --paragraph-text-colour     : var(--grey);

    --paragraph-subtext-colour  : var(--slate-dark-30);
    --paragraph-subtext-size    : 0.8rem;

    /* HEADINGS ============================================= */
    --heading-font              : var(--font-sans-serif);
    --heading-font-size         : 1.5rem;
    --heading-size-multiplier   : 1.2;
    --heading-line-height       : 1;
    --heading-font-weight       : 700;
    --heading-text-colour       : var(--slate);

    /* LINKS ================================================ */
    --link-font                 : var(--paragraph-font);
    --link-text-default         : var(--blue);
    --link-text-hover           : var(--blue);

    /* SELECTION ============================================ */
    --text-selected             : var(--white);
    --text-bg-selected          : var(--hue);

    /* CODE ================================================= */
    --code-font                 : var(--font-mono);
    --code-inline-font-size     : 0.8rem;
    --code-inline-bg            : var(--blue-light-80);
    --code-inline-text          : var(--blue-dark-40);
    --code-inline-border-radius : var(--global-border-radius);

    --code-block-font-size      : 0.92rem;
    --code-block-bg             : var(--slate-dark-80);
    --code-block-text           : var(--blue-dark-40);
    --code-block-line-height    : 1.8;
    --code-block-border-radius  : var(--global-border-radius);

    /*  KBD ================================================= */
    --kbd-font                  : var(--font-mono);
    --kbd-bg                    : var(--grey-light-10);
    --kbd-text                  : var(--grey);
    --kbd-border-radius         : var(--global-border-radius);

    /* TOKENS =============================================== */
    --token-tag                 : var(--violet);
    --token-atrule              : var(--teal);
    --token-attrName            : var(--orange);
    --token-attrValue           : var(--green);
    --token-boolean             : var(--green);
    --token-cdata               : var(--grey);
    --token-className           : var(--red);
    --token-comment             : var(--grey);
    --token-constant            : var(--green);
    --token-deleted             : var(--slate);
    --token-delimiter           : var(--grey);
    --token-doctype             : var(--grey);
    --token-entity              : var(--green);
    --token-function            : var(--orange);
    --token-hexcode             : var(--green);
    --token-inserted            : var(--green);
    --token-italic              : var(--green);
    --token-keyword             : var(--orange);
    --token-namespace           : var(--green);
    --token-number              : var(--green);
    --token-operator            : var(--pistachio);
    --token-plain               : var(--grey);
    --token-prolog              : var(--grey);
    --token-property            : var(--red);
    --token-punctuation         : var(--grey);
    --token-regex               : var(--green);
    --token-selector            : var(--violet);
    --token-string              : var(--crimson);
    --token-symbol              : var(--green);
    --token-url                 : var(--green);
    --token-variable            : var(--orange);
    --token-css-fallback        : var(--red);
    --token-html-fallback       : var(--red);
    --token-js-fallback         : var(--red);
    --token-json-token-string   : var(--red);
}

/* SWITCH ///////////////////////////////////////////////////////// */
:root {
    --switch-bg-default         : var(--slate-light-60);
    --switch-bg-hover           : var(--slate-light-40);
    --switch-bg-checked         : var(--hue);
    --switch-bg-disabled        : var(--slate-light-90);

    --switch-slider-bg-default  : var(--white);
    --switch-slider-bg-hover    : var(--white);
    --switch-slider-bg-checked  : var(--white);
    --switch-slider-bg-disabled : var(--slate-light-40);
}`;
