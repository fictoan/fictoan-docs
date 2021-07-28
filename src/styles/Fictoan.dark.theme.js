import { defaultColours } from "fictoan-react";
import { darken, lighten } from "polished";

import { setuColours } from "./SetuColours";


export const FictoanDarkTheme = {
    themeName : "FictoanDark",

    body : {
        bg : setuColours.murkyNight
    },

    //  TEXT  /////////////////////////////////////////////////////////////////
    text : {
        font      : {
            sans  : "UntitledSans",
            mono  : "GT America Mono",
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
            bg   : setuColours.flashTurk,
            text : setuColours.murkyNight
        },
        code      : {
            inline : {
                bg    : `${lighten(0.16, setuColours.salmonRouge)}`,
                text  : setuColours.murkyNight,
                scale : 88
            },
            block  : {
                scale : 92,
                bg    : `${lighten(0.16, setuColours.murkyNight)}`
            },
            prism  : {
                tokens : {
                    plain : `${lighten(0.56, setuColours.murkyNight)}`
                }
            }
        }
    },

    //  CARD  /////////////////////////////////////////////////////////////////
    card : {
        bg     : `${lighten(0.08, setuColours.murkyNight)}`,
        border : `${lighten(0.16, setuColours.murkyNight)}`
    },

    //  INPUT  ////////////////////////////////////////////////////////////////
    input : {
        default     : {
            bg     : `${lighten(0.16, setuColours.murkyNight)}`,
            border : `${lighten(0.32, setuColours.murkyNight)}`,
            label  : `${lighten(0.48, setuColours.murkyNight)}`,
            text   : defaultColours.white
        },
        onFocus     : {
            bg       : `${lighten(0.16, setuColours.murkyNight)}`,
            border   : setuColours.flashTurk,
            text     : defaultColours.white,
            helpText : defaultColours.slate20
        },
        isValid     : {
            bg     : defaultColours.white,
            border : defaultColours.green80,
            label  : setuColours.murkyNight
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
            label  : setuColours.murkyNight
        },
        required    : {
            text : defaultColours.red
        },
        icons       : {
            default : {
                fill : defaultColours.slate30
            },
            onFocus : {
                fill : setuColours.flashTurk
            },
            isValid : {
                bg     : defaultColours.grey50,
                border : defaultColours.red30
            }
        },
        select      : {
            chevron : setuColours.flashTurk
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
                bg           : `${darken(0.08, setuColours.flashTurk)}`,
                border       : `${darken(0.08, setuColours.flashTurk)}`,
                text         : defaultColours.white,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${lighten(0.08, setuColours.flashTurk)}`,
                border : `${lighten(0.08, setuColours.flashTurk)}`,
                text   : defaultColours.white
            },
            isActive  : {
                bg     : setuColours.flashTurk,
                border : setuColours.flashTurk,
                text   : defaultColours.white
            },
            isLoading : {
                bg            : setuColours.flashTurk,
                spinnerBorder : defaultColours.black
            }
        },
        secondary : {
            default   : {
                bg           : `${darken(0.24, setuColours.flashTurk)}`,
                border       : setuColours.flashTurk,
                text         : `${lighten(0.08, setuColours.flashTurk)}`,
                borderRadius : "4px"
            },
            onHover   : {
                bg     : `${darken(0.24, setuColours.flashTurk)}`,
                border : setuColours.flashTurk,
                text   : setuColours.flashTurk
            },
            isActive  : {
                bg     : `${darken(0.32, setuColours.flashTurk)}`,
                border : setuColours.flashTurk,
                text   : setuColours.flashTurk
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
        bg      : `${lighten(0.16, setuColours.murkyNight)}`,
        text    : defaultColours.white,
        border  : `${lighten(0.32, setuColours.murkyNight)}`,
        striped : {
            header : {
                bg : `${lighten(0.40, setuColours.murkyNight)}`
            },
            cell   : {
                bg : `${lighten(0.24, setuColours.murkyNight)}`
            }
        },
        onHover : {
            bg   : defaultColours.amber20,
            text : setuColours.murkyNight
        }
    },

    //  RULE  /////////////////////////////////////////////////////////////////
    hr : {
        primary   : {
            bg     : `${lighten(0.48, setuColours.murkyNight)}`,
            height : "1px"
        },
        secondary : {
            bg     : `${lighten(0.32, setuColours.murkyNight)}`,
            height : "1px"
        },
        tertiary  : {
            bg     : `${lighten(0.16, setuColours.murkyNight)}`,
            height : "1px"
        }
    },

    //  INFO PANEL  ///////////////////////////////////////////////////////////
    infoPanel : {
        bg            : `${lighten(0.08, setuColours.murkyNight)}`,
        border        : `${lighten(0.16, setuColours.murkyNight)}`,
        dismissButton : {
            bg      : `${lighten(0.04, setuColours.murkyNight)}`,
            color   : defaultColours.slate90,
            content : "×"
        }
    },

    //  SIDEBAR  //////////////////////////////////////////////////////////////
    sidebar : {
        isCollapsed : {
            label : {
                text : defaultColours.white,
                bg   : setuColours.flashTurk
            }
        },

        header : {
            bg           : setuColours.murkyNight,
            borderBottom : setuColours.murkyNight
        },

        body : {
            bg : setuColours.murkyNight
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
                bg     : setuColours.murkyNight,
                text   : `${lighten(0.56, setuColours.murkyNight)}`,
                scale  : 100,
                weight : 600
            },
            onHover    : {
                bg   : `${lighten(0.08, setuColours.murkyNight)}`,
                text : setuColours.flashTurk
            },
            isSelected : {
                bg     : `${lighten(0.16, setuColours.murkyNight)}`,
                border : setuColours.flashTurk,
                text   : setuColours.flashTurk
            },
            hasAlert   : {
                bg : setuColours.dartRed
            }
        },

        subLinks : {
            header  : {
                weight : 600
            },
            default : {
                bg     : defaultColours.white,
                text   : `${lighten(0.24, setuColours.murkyNight)}`,
                weight : 400,
                scale  : 92
            },
            onHover : {
                bg   : defaultColours.slate10,
                text : setuColours.flashTurk
            },
            chevron : {
                border : defaultColours.slate40
            }
        },

        footer : {
            bg        : setuColours.murkyNight,
            borderTop : setuColours.murkyNight
        }
    }
}
