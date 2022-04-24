import { defaultColours } from "fictoan-react";
import { darken, lighten } from "polished";


export const FictoanDarkTheme = {
    themeName : "FictoanDark",

    body : {
        bg : `${darken(0.32, defaultColours.slate)}`
    },

    //  BREADCRUMBS  ///////////////////////////////////////////////////////////
    breadcrumbs : {
        wrapper : {
            bg : `${darken(0.32, defaultColours.slate)}`
        }
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "SF Pro Text",
            mono  : "JetBrains Mono",
            serif : "FF Franziska"
        },
        paras     : {
            font       : "SF Pro Text",
            color      : defaultColours.grey90,
            lineHeight : 1.44,
            size       : 1,
            subtext    : defaultColours.slate80
        },
        headings  : {
            font       : "SF Pro Text",
            weight     : 600,
            lineHeight : 1.2,
            color      : defaultColours.grey40,
            multiplier : 1.16
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
                bg    : `${darken(0.16, defaultColours.slate)}`,
                text  : defaultColours.blue40,
                scale : 88
            },
            block  : {
                bg    : `${darken(0.16, defaultColours.slate)}`,
                scale : 92
            },
            prism  : {
                tokens : {
                    plain : `${lighten(0.56, defaultColours.red)}`,
                    selector : defaultColours.violet70
                }
            }
        }
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : `${darken(0.24, defaultColours.slate)}`,
        border : `${darken(0.12, defaultColours.slate)}`
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

    //  SWITCH  ///////////////////////////////////////////////////////////////
    toggleSwitch : {
        case : {
            default   : {
                bg : defaultColours.slate50
            },
            onHover   : {
                bg : defaultColours.green40
            },
            isChecked : {
                bg : defaultColours.green90
            },
            isDisabled : {
                bg : defaultColours.grey
            }
        },
        actuator : {
            default   : {
                bg : defaultColours.white
            },
            onHover   : {
                bg : defaultColours.white
            },
            isChecked : {
                bg : defaultColours.white
            },
            isDisabled : {
                bg : defaultColours.grey70
            }
        }
    },

    //  BUTTON  ///////////////////////////////////////////////////////////////
    button : {
        // font  : "UntitledSans",
        borderWidth : "1px",
        primary     : {
            default   : {
                bg           : defaultColours.blue90,
                border       : defaultColours.blue90,
                text         : defaultColours.white,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.08, defaultColours.blue90)}`,
                border : `${lighten(0.08, defaultColours.blue90)}`,
                text   : defaultColours.white
            },
            isActive  : {
                bg     : defaultColours.blue90,
                border : defaultColours.blue90,
                text   : defaultColours.white
            },
            isLoading : {
                bg            : defaultColours.blue90,
                spinnerBorder : defaultColours.white
            }
        },
        secondary   : {
            default   : {
                bg           : `${lighten(0.36, defaultColours.blue90)}`,
                border       : defaultColours.blue90,
                text         : defaultColours.blue90,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.4, defaultColours.blue90)}`,
                border : defaultColours.blue90,
                text   : defaultColours.blue90
            },
            isActive  : {
                bg     : `${lighten(0.2, defaultColours.blue90)}`,
                border : defaultColours.blue90,
                text   : defaultColours.blue90
            },
            isLoading : {
                bg            : defaultColours.white,
                spinnerBorder : defaultColours.blue90
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
        bg      : `${darken(0.12, defaultColours.slate)}`,
        text    : defaultColours.white,
        border  : `${darken(0.24, defaultColours.slate)}`,
        striped : {
            header : {
                bg : defaultColours.slate
            },
            cell   : {
                bg : `${lighten(0.24, defaultColours.slate)}`
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
            bg     : `${lighten(0.48, defaultColours.slate)}`,
            height : "1px"
        },
        secondary : {
            bg     : `${lighten(0.32, defaultColours.slate)}`,
            height : "1px"
        },
        tertiary  : {
            bg     : `${darken(0.12, defaultColours.slate)}`,
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
        bg : `${darken(0.32, defaultColours.slate)}`,

        isCollapsed : {
            label : {
                text : defaultColours.white,
                bg   : `${darken(0.24, defaultColours.slate)}`
            }
        },

        header : {
            bg           : `${darken(0.32, defaultColours.slate)}`,
            borderBottom : `${darken(0.12, defaultColours.slate)}`,
            logoWidth : "200px",
            iconWidth : "40px"
        },

        icons : {
            stroked : {
                thickness : 2,
                default   : {
                    line : defaultColours.slate
                },
                onHover   : {
                    line : defaultColours.grey20
                },
                isActive  : {
                    line : defaultColours.white
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
                bg     : `${darken(0.24, defaultColours.slate)}`,
                text   : `${lighten(0.08, defaultColours.slate)}`,
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : `${lighten(0.2, defaultColours.blue)}`,
                text : defaultColours.grey20
            },
            isSelected : {
                bg     : `${lighten(0.16, defaultColours.blue)}`,
                border : defaultColours.blue,
                text   : defaultColours.white
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
                bg     : `${darken(0.32, defaultColours.slate)}`,
                text   : `${lighten(0.24, defaultColours.slate)}`,
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
            bg        : `${darken(0.32, defaultColours.slate)}`,
            borderTop : `${darken(0.12, defaultColours.slate)}`
        }
    },

    toast : {
        bg   : String(defaultColours.slate10),
        text : String(defaultColours.slate)
    },
}
