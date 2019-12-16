/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { Row, Portion } from "reactised-fictoan";

import Highlight, { defaultProps } from "prism-react-renderer";

// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
// {/*   SAMPLE CODES  */}
// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
//  Code sample 01 ========================================================================================
const sampleCode1 = `
//  Global sizing values  =====================================================
$measureFixed   : 8px !default;
$measureDynamic : 2vmax !default;
  
  
//  Colours  ==================================================================
$colorHue      :            $colorAmber !default;
$colorTint     :    lighten($colorHue, 36%) !default;
$colorShade    :     darken($colorHue, 56%) !default;
$colorAnalogue : complement($colorHue) !default;
$colorAccent   : adjust-hue($colorHue, -216deg) !default;
  
  
//  Body basics  ==============================================================
$bodyBgColor : $colorWhite !default;
  
//  Fonts
$fontSans  : "Space Grotesk", sans-serif !default;
$fontSerif : "Eczar", serif !default;
$fontMono  : "Space Mono", monospace !default;
  
//  Paragraph-specific variables
$baseFontSize : 1em !default;
$scaleFactor  : 1.24 !default;
  
//  Variables for text
$bodyFontSize   : 1em !default;
$bodyFontColor  : $colorShade !default;
$bodyLineHeight : 1.6 !default;
$bodyFontWeight : 400 !default;
  
$headingLineHeight : 1.6 !default;
$headingFontWeight : 600 !default;
  
$linkColor      : $colorAnalogue !default;
$linkHoverColor : rgba($colorAnalogue, 0.64) !default;
  
//  Inline code
$fontCode      : $fontMono !default;
$codeTextColor : $colorRed !default;
  
$inlineCodeBGColor : $colorRed-10 !default;
$blockCodeBGColor  : rgba($colorSlate-10, 0.64);
  
//  Selection highlight
$textHighlightBG    : $colorHue !default;
$textHighlightColor : $colorWhite !default;
  
  
//  Gradient button  ==========================================================
$buttonGradientStartColour : $colorHue !default;
$buttonGradientEndColour   : $colorAnalogue !default;
  
//  Inputs  ===================================================================
$inputBG-DefaultColor     : $colorWhite !default;
$inputBG-FocusColor       : $colorWhite !default;
$inputBorder-DefaultColor : $colorSlate-40 !default;
$inputBorder-FocusColor   : $colorHue !default;
$inputBorder-InvalidColor : $colorRed !default;
  
$inputHelpTextDefaultColor : $colorShade !default;
$inputHelpTextErrorColor   : $colorRed !default;
  
$inputBG-ReadOnlyColor         : $colorSlate-20 !default;
$inputReadOnlyTextDefaultColor : $colorSlate-80 !default;
  
$inputIconFillColor      : $colorSlate-30 !default;
$inputFocusIconFillColor : $colorHue !default;
  
$spinnerBorder : $colorWhite !default;
  
//  Progress bar  =============================================================
$progressBarBG   : $colorTint !default;
$progressBarFill : $colorHue !default;
  
  
//  Header  ===================================================================
$headerLinkBG : $colorGrey-10 !default;
  
$headerLinkColor      : $colorShade !default;
$headerLinkHoverColor : $colorHue !default;
  
$navItemBorderColor : 1px solid $colorGrey-20 !default;
  
  
//  Tabs  =====================================================================
$activeTabLabelBG          : $colorWhite !default;
$activeTabLabelTextColor   : $colorShade !default;
  
$inactiveTabLabelBG        : $colorSlate-20 !default;
$inactiveTabLabelHoverBG   : $colorSlate-10 !default;
$inactiveTabLabelTextColor : $colorSlate-70 !default;
  
$tabsBorderColor           : $colorSlate-30 !default;
  
  
//  Sidebar  ==================================================================
$sideBarBG     : $colorWhite !default;
$sideBarLogoBG : $colorSlate-10 !default;
  
//  Links
$sideBarLinkBG        : $colorSlate-10 !default;
$sideBarLinkBGOnHover : $colorSlate-20 !default;
  
//  For line icons
$sideBarLinkIconStrokeColor        : $colorShade !default;
$sideBarLinkIconStrokeColorOnHover : $colorShade !default;
  
//  For fill icons
$sideBarLinkIconFillColor        : $colorShade !default;
$sideBarLinkIconFillColorOnHover : $colorHue !default;
  
//  Text styling
$sidebarTextColor        : $colorShade !default;
$sidebarSmallTextColor   : $colorSlate-60 !default;
$sidebarTextColorOnHover : $colorHue !default;
  
//  The chevron
$sideBarLinkChevronBG           : $colorSlate-20 !default;
$sideBarLinkChevronColor        : $colorSlate-40 !default;
$sideBarLinkChevronBGOnHover    : $colorHue !default;
$sideBarLinkChevronColorOnHover : $colorWhite !default;
  
// Floating labels when collapsed
$sidebBarCollapsedLabelBG        : $colorHue !default;
$sidebBarCollapsedLabelTextColor : $colorWhite !default;
  
  
//  Table  ====================================================================
$tableBG        : $colorWhite !default;
$tableTextColor : $colorShade !default;
  
$tableBorderColor : $colorSlate-40 !default;
  
$tableStripedHeaderBG : $colorHue !default;
$tableStripedCellBG   : $colorSlate-20 !default;
  
$tableHoverableBG        : $colorAmber-20 !default;
$tableHoverableTextColor : $colorShade !default;
  
  
//  Modal  ====================================================================
$modalOverlayBG : rgba($colorHue, 0.64) !default;
`;

class GettingStarted extends React.PureComponent {
    componentDidMount() {
        document.title = "Getting started — Reactised-FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <section id="blog">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Getting started.</h2>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <p>
                            Just do&mdash;{" "}
                            <code>
                                <span className="text-pistachio">npm install</span>{" "}
                                <span className="text-green">reactised-fictoan</span>
                            </code>
                            . That’s it. Now you’re ready to use RF.
                        </p>
                    </Portion>
                </Row>

                <Row sidePadding="large">
                    <Portion>
                        <p>
                            Nearly everything on RF can be controlled with simple global variables. This allows us to
                            create a nice theme file that you can use to control the look and feel of your project. Here
                            is the full list of themeable values&mdash;
                        </p>
                    </Portion>

                    <Portion>
                        <Highlight {...defaultProps} code={sampleCode1} language="scss" theme={undefined}>
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                    <code>
                                        {tokens.map((line, i) => (
                                            <div
                                                {...getLineProps({
                                                    line,
                                                    key: i
                                                })}
                                            >
                                                {line.map((token, key) => (
                                                    <span
                                                        {...getTokenProps({
                                                            token,
                                                            key
                                                        })}
                                                    />
                                                ))}
                                            </div>
                                        ))}
                                    </code>
                                </pre>
                            )}
                        </Highlight>
                    </Portion>
                </Row>
            </section>
        );
    }
}

export default GettingStarted;