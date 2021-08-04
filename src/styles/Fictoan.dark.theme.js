import { defaultColours } from "fictoan-react";
import { darken, lighten } from "polished";


export const FictoanDarkTheme = {
    themeName : "FictoanDark",

    body : {
        bg : defaultColours.red
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "SF Pro Text",
            mono  : "JetBrains Mono",
            serif : "FF Franziska"
        },
        paras     : {
            font       : "UntitledSans",
            color      : defaultColours.grey20,
            lineHeight : 1.44,
            size       : 1,
            subtext    : defaultColours.slate80
        },
        headings  : {
            font       : "UntitledSans",
            weight     : 600,
            lineHeight : 1.2,
            color      : defaultColours.grey90,
            multiplier : 1.24
        },
        links     : {
            default : {
                color : defaultColours.blue90
            },
            onHover : {
                color : defaultColours.blue60
            }
        },
        selection : {
            bg   : defaultColours.red,
            text : defaultColours.red
        },
        code      : {
            inline : {
                bg    : `${lighten(0.16, defaultColours.red)}`,
                text  : defaultColours.red,
                scale : 88
            },
            block  : {
                scale : 92,
                bg    : `${lighten(0.16, defaultColours.red)}`
            },
            prism  : {
                tokens : {
                    plain : `${lighten(0.56, defaultColours.red)}`
                }
            }
        }
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : `${lighten(0.08, defaultColours.red)}`,
        border : `${lighten(0.16, defaultColours.red)}`
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default     : {
            bg     : `${lighten(0.16, defaultColours.red)}`,
            border : `${lighten(0.32, defaultColours.red)}`,
            label  : `${lighten(0.48, defaultColours.red)}`,
            text   : defaultColours.white
        },
        onFocus     : {
            bg       : `${lighten(0.16, defaultColours.red)}`,
            border   : defaultColours.red,
            text     : defaultColours.white,
            helpText : defaultColours.slate20
        },
        isValid     : {
            bg     : defaultColours.white,
            border : defaultColours.green80,
            label  : defaultColours.red
        },
        isInvalid   : {
            bg       : defaultColours.red10,
            border   : defaultColours.red80,
            label    : defaultColours.red,
            helpText : defaultColours.red
        },
        isReadOnly  : {
            bg     : defaultColours.grey50,
            border : defaultColours.grey50,
            label  : defaultColours.red
        },
        required    : {
            text : defaultColours.red
        },
        icons       : {
            default : {
                fill : defaultColours.slate30
            },
            onFocus : {
                fill : defaultColours.red
            },
            isValid : {
                bg     : defaultColours.grey50,
                border : defaultColours.red30
            }
        },
        select      : {
            chevron : defaultColours.red
        },
        radioButton : {
            default : {}
        }
    },

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        font      : "Matter",
        primary   : {
            default   : {
                bg           : `${darken(0.08, defaultColours.red)}`,
                border       : `${darken(0.08, defaultColours.red)}`,
                text         : defaultColours.white,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.08, defaultColours.red)}`,
                border : `${lighten(0.08, defaultColours.red)}`,
                text   : defaultColours.white
            },
            isActive  : {
                bg     : defaultColours.red,
                border : defaultColours.red,
                text   : defaultColours.white
            },
            isLoading : {
                bg            : defaultColours.red,
                spinnerBorder : defaultColours.black
            }
        },
        secondary : {
            default   : {
                bg           : `${darken(0.24, defaultColours.red)}`,
                border       : defaultColours.red,
                text         : `${lighten(0.08, defaultColours.red)}`,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${darken(0.24, defaultColours.red)}`,
                border : defaultColours.red,
                text   : defaultColours.red
            },
            isActive  : {
                bg     : `${darken(0.32, defaultColours.red)}`,
                border : defaultColours.red,
                text   : defaultColours.red
            },
            isLoading : {
                bg            : defaultColours.white,
                spinnerBorder : defaultColours.black
            }
        }
    },

    //  PROGRESS BAR  /////////////////////////////////////////////////////////
    progressBar : {
        height : 8,
        bg     : defaultColours.slate20,
        fill   : defaultColours.green80
    },

    //  TABLE  ////////////////////////////////////////////////////////////////
    table : {
        bg      : `${lighten(0.16, defaultColours.red)}`,
        text    : defaultColours.white,
        border  : `${lighten(0.32, defaultColours.red)}`,
        striped : {
            header : {
                bg : `${lighten(0.40, defaultColours.red)}`
            },
            cell   : {
                bg : `${lighten(0.24, defaultColours.red)}`
            }
        },
        onHover : {
            bg   : defaultColours.amber20,
            text : defaultColours.red
        }
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary   : {
            bg     : `${lighten(0.48, defaultColours.red)}`,
            height : "1px"
        },
        secondary : {
            bg     : `${lighten(0.32, defaultColours.red)}`,
            height : "1px"
        },
        tertiary  : {
            bg     : `${lighten(0.16, defaultColours.red)}`,
            height : "1px"
        }
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg            : `${lighten(0.08, defaultColours.red)}`,
        border        : `${lighten(0.16, defaultColours.red)}`,
        dismissButton : {
            bg      : `${lighten(0.04, defaultColours.red)}`,
            color   : defaultColours.slate90,
            content : "×"
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        isCollapsed : {
            label : {
                text : defaultColours.white,
                bg   : defaultColours.red
            }
        },

        header : {
            bg           : defaultColours.red,
            borderBottom : defaultColours.red
        },

        body : {
            bg : defaultColours.red
        },

        icons : {
            stroked : {
                thickness : 2,
                default   : {
                    line : defaultColours.slate40
                },
                onHover   : {
                    line : defaultColours.slate80
                },
                isActive  : {
                    line : defaultColours.slate
                }
            },
            filled  : {
                default  : {
                    bg : defaultColours.slate40
                },
                onHover  : {
                    bg : defaultColours.slate80
                },
                isActive : {
                    bg : defaultColours.slate
                }
            }
        },

        links : {
            default    : {
                bg     : defaultColours.red,
                text   : `${lighten(0.56, defaultColours.red)}`,
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : `${lighten(0.08, defaultColours.red)}`,
                text : defaultColours.red
            },
            isSelected : {
                bg     : `${lighten(0.16, defaultColours.red)}`,
                border : defaultColours.red,
                text   : defaultColours.red
            },
            hasAlert   : {
                bg : defaultColours.red
            }
        },

        subLinks : {
            header  : {
                weight : 600
            },
            default : {
                bg     : defaultColours.white,
                text   : `${lighten(0.24, defaultColours.red)}`,
                weight : 400,
                scale  : 92
            },
            onHover : {
                bg   : defaultColours.slate10,
                text : defaultColours.red
            },
            chevron : {
                border : defaultColours.slate40
            }
        },

        footer : {
            bg        : defaultColours.red,
            borderTop : defaultColours.red
        }
    }
}
