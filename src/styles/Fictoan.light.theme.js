import { lighten } from "polished";

import { defaultColours } from "fictoan-react";


export const FictoanLightTheme = {
    themeName : "FictoanLight",

    body : {
        bg : defaultColours.white
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
            color      : defaultColours.grey,
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
            bg   : defaultColours.blue90,
            text : defaultColours.white
        },
        code      : {
            inline : {
                bg    : `${lighten(0.16, defaultColours.sky90)}`,
                text  : defaultColours.indigo,
                scale : 88
            },
            block  : {
                scale : 92,
                bg    : defaultColours.slate10
            },
            prism  : {
                tokens : {
                    plain : defaultColours.grey
                }
            }
        }
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : defaultColours.white,
        border : defaultColours.slate20
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default     : {
            bg     : defaultColours.white,
            border : defaultColours.slate40,
            label  : defaultColours.grey90,
            text   : defaultColours.grey90
        },
        onFocus     : {
            bg       : defaultColours.white,
            border   : defaultColours.blue90,
            text     : defaultColours.grey90,
            helpText : defaultColours.grey90
        },
        isValid     : {
            bg     : defaultColours.white,
            border : defaultColours.green80,
            label  : defaultColours.grey90
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
            label  : defaultColours.grey90
        },
        required    : {
            text : defaultColours.red
        },
        icons       : {
            default : {
                fill : defaultColours.slate30
            },
            onFocus : {
                fill : defaultColours.blue90
            },
            isValid : {
                bg     : defaultColours.grey50,
                border : defaultColours.red30
            }
        },
        select      : {
            chevron : defaultColours.blue90
        },
        radioButton : {
            default : {}
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
        bg      : defaultColours.white,
        text    : defaultColours.grey90,
        border  : defaultColours.slate40,
        striped : {
            header : {
                bg : defaultColours.teal40
            },
            cell   : {
                bg : defaultColours.slate10
            }
        },
        onHover : {
            bg   : defaultColours.amber20,
            text : defaultColours.grey90
        }
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg            : defaultColours.white,
        border        : defaultColours.slate20,
        dismissButton : {
            bg      : defaultColours.white,
            color   : defaultColours.slate90,
            content : "×"
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        header : {
            logoWidth : "200px",
            iconWidth : "40px"
        },

        isCollapsed : {
            label : {
                bg   : defaultColours.blue90
            }
        },

        icons : {
            stroked : {
                thickness : 2,
                default   : {
                    line : defaultColours.slate40
                },
                onHover   : {
                    line : defaultColours.blue60
                },
                isActive  : {
                    line : defaultColours.blue90
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
                bg     : defaultColours.white,
                text   : defaultColours.grey90,
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : defaultColours.slate10,
                text : defaultColours.blue90
            },
            isSelected : {
                bg     : defaultColours.white,
                border : defaultColours.blue90,
                text   : defaultColours.blue90
            },
            hasAlert   : {
                bg : defaultColours.red70
            }
        },

        subLinks : {
            header  : {
                weight : 600
            },
            default : {
                bg     : defaultColours.white,
                text   : `${lighten(0.24, defaultColours.grey90)}`,
                weight : 400,
                scale  : 92
            },
            onHover : {
                bg   : defaultColours.slate10,
                text : defaultColours.blue90
            },
            chevron : {
                border : defaultColours.slate40
            }
        },

        footer : {
            bg        : defaultColours.white,
            borderTop : defaultColours.slate10
        }
    },


    toast : {
        bg   : String(defaultColours.slate),
        text : String(defaultColours.slate10)
    },
}
