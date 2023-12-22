import "./style.css";
import React from "react";
const createClassName = (classNames) => classNames.filter((item) => !!item).join(" "), Element = React.forwardRef((props, ref) => {
  const {
    as: Component,
    classNames = [],
    className,
    size,
    isFullWidth,
    isFullHeight,
    bgColor,
    bgColour,
    textColor,
    textColour,
    borderColor,
    borderColour,
    fillColor,
    fillColour,
    strokeColor,
    strokeColour,
    hideOnMobile,
    showOnlyOnMobile,
    hideOnTabletPortrait,
    showOnlyOnTabletPortrait,
    hideOnTabletLandscape,
    showOnlyOnTabletLandscape,
    hideOnDesktop,
    showOnlyOnDesktop,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    shadow,
    shape,
    opacity,
    horizontallyCentreThis,
    horizontallyCenterThis,
    verticallyCentreItems,
    verticallyCenterItems,
    pushItemsToEnds,
    weight,
    ...minimalProps
  } = props;
  return /* @__PURE__ */ React.createElement(
    Component,
    {
      ref,
      ...minimalProps,
      className: createClassName(
        [
          className,
          size && `size-${size}`,
          isFullWidth && "full-width",
          isFullHeight && "full-height",
          bgColor && `bg-${String(bgColor)}`,
          bgColour && `bg-${String(bgColour)}`,
          textColor && `text-${String(textColor)}`,
          textColour && `text-${String(textColour)}`,
          borderColor && `border-${String(borderColor)}`,
          borderColour && `border-${String(borderColour)}`,
          fillColor && `fill-${String(fillColor)}`,
          fillColour && `fill-${String(fillColour)}`,
          strokeColor && `stroke-${String(strokeColor)}`,
          strokeColour && `stroke-${String(strokeColour)}`,
          hideOnMobile && "hide-on-mobile",
          showOnlyOnMobile && "show-only-on-mobile",
          hideOnTabletPortrait && "hide-on-tablet-portrait",
          showOnlyOnTabletPortrait && "show-only-on-tablet-portrait",
          hideOnTabletLandscape && "hide-on-tablet-landscape",
          showOnlyOnTabletLandscape && "show-only-on-tablet-landscape",
          hideOnDesktop && "hide-on-desktop",
          showOnlyOnDesktop && "show-only-on-desktop",
          marginTop && `margin-top-${marginTop}`,
          marginRight && `margin-right-${marginRight}`,
          marginBottom && `margin-bottom-${marginBottom}`,
          marginLeft && `margin-left-${marginLeft}`,
          margin && `margin-all-${margin}`,
          paddingTop && `padding-top-${paddingTop}`,
          paddingRight && `padding-right-${paddingRight}`,
          paddingBottom && `padding-bottom-${paddingBottom}`,
          paddingLeft && `padding-left-${paddingLeft}`,
          padding && `padding-all-${padding}`,
          shadow && `shadow-${shadow}`,
          shape && `shape-${shape}`,
          opacity && `opacity-${opacity}`,
          horizontallyCentreThis && "horizontally-centre-this",
          horizontallyCenterThis && "horizontally-centre-this",
          verticallyCentreItems && "vertically-centre-items",
          verticallyCenterItems && "vertically-centre-items",
          pushItemsToEnds && "push-to-ends",
          weight && `weight-${weight}`
        ].concat(classNames)
      )
    }
  );
}), Button = React.forwardRef(
  ({ size = "medium", shape, kind, isLoading, hasDelete, ...props }, ref) => {
    let classNames = [];
    return kind && classNames.push(kind), size && classNames.push(`size-${size}`), shape && classNames.push(`shape-${shape}`), isLoading && classNames.push("is-loading"), hasDelete && classNames.push("has-delete"), /* @__PURE__ */ React.createElement(Element, { as: "button", "data-button": !0, ref, classNames, ...props });
  }
), Card = React.forwardRef(({ shape, ...props }, ref) => {
  let classNames = [];
  return shape && classNames.push(`shape-${shape}`), /* @__PURE__ */ React.createElement(Element, { as: "div", "data-card": !0, ref, classNames, ...props });
}), ContentWrapper = React.forwardRef(
  ({ ...props }, ref) => /* @__PURE__ */ React.createElement(Element, { as: "main", "data-content-wrapper": !0, ref, ...props })
), HRule = React.forwardRef(({ kind, sideMargin, ...props }, ref) => {
  let classNames = [];
  return kind && classNames.push(kind), sideMargin && classNames.push(`side-margin-${sideMargin}`), /* @__PURE__ */ React.createElement(
    Element,
    {
      as: "hr",
      ref,
      classNames,
      marginTop: "small",
      marginBottom: "small",
      ...props
    }
  );
}), Portion = React.forwardRef(
  ({ desktopSpan, mobileSpan, tabletLandscapeSpan, tabletPortraitSpan, isHorizontal, ...props }, ref) => {
    let classNames = [];
    return desktopSpan || tabletLandscapeSpan || tabletPortraitSpan || mobileSpan ? (desktopSpan && classNames.push(`${desktopSpan}`), tabletLandscapeSpan && classNames.push(`${tabletLandscapeSpan}-on-tablet-landscape`), tabletPortraitSpan && classNames.push(`${tabletPortraitSpan}-on-tablet-portrait`), mobileSpan && classNames.push(`${mobileSpan}-on-mobile`)) : classNames.push("whole"), isHorizontal && classNames.push("horizontal"), /* @__PURE__ */ React.createElement(Element, { as: "div", "data-portion": !0, ref, classNames, isFullWidth: !0, ...props });
  }
), Row = React.forwardRef(
  ({
    sidePadding,
    gutters = "medium",
    retainLayoutOnTabletLandscape,
    retainLayoutOnTabletPortrait,
    retainLayoutOnMobile,
    retainLayoutAlways,
    ...props
  }, ref) => {
    let classNames = [];
    return sidePadding && classNames.push(`side-padding-${sidePadding}`), gutters && classNames.push(gutters === "none" ? "no-gutters" : `${gutters}-gutters`), retainLayoutOnTabletLandscape && classNames.push("retain-layout-on-tablet-landscape"), retainLayoutOnTabletPortrait && classNames.push("retain-layout-on-tablet-portrait"), retainLayoutOnMobile && classNames.push("retain-layout-on-mobile"), retainLayoutAlways && classNames.push(
      "retain-layout-on-tablet-landscape retain-layout-on-tablet-portrait retain-layout-on-mobile"
    ), /* @__PURE__ */ React.createElement(
      Element,
      {
        as: "div",
        "data-row": !0,
        ref,
        classNames,
        marginBottom: "tiny",
        isFullWidth: !0,
        ...props
      }
    );
  }
), SidebarWrapper = React.forwardRef(
  ({ collapsed, ...props }, ref) => {
    let classNames = [];
    return collapsed && classNames.push("collapsed"), /* @__PURE__ */ React.createElement(Element, { as: "aside", "data-sidebar-wrapper": !0, classNames, ...props });
  }
), SidebarHeader = React.forwardRef(
  ({ isSticky, ...props }, ref) => {
    let classNames = [];
    return isSticky && classNames.push("is-sticky"), /* @__PURE__ */ React.createElement(Element, { as: "header", "data-sidebar-header": !0, ref, classNames, ...props });
  }
), SidebarItem = React.forwardRef(
  ({ hasAlert, ...props }, ref) => {
    let classNames = [];
    return hasAlert && classNames.push("has-alert"), /* @__PURE__ */ React.createElement(Element, { as: "div", "data-sidebar-item": !0, ref, classNames, ...props });
  }
), SidebarItemIcon = React.forwardRef(
  ({ iconType, ...props }, ref) => {
    let classNames = [];
    return iconType && classNames.push(`icon-${iconType}`), /* @__PURE__ */ React.createElement(
      Element,
      {
        as: "div",
        "data-sidebar-item-icon": !0,
        ref,
        classNames,
        ...props
      }
    );
  }
), SidebarItemText = React.forwardRef(
  ({ linkText, weight, size, ...props }, ref) => {
    let classNames = [];
    return weight && classNames.push(`weight-${weight}`), size && classNames.push(`text-${size}`), /* @__PURE__ */ React.createElement(
      Element,
      {
        as: "p",
        "data-sidebar-item-text": !0,
        ref,
        classNames,
        ...props
      },
      linkText
    );
  }
), SidebarFooter = React.forwardRef((props, ref) => /* @__PURE__ */ React.createElement(Element, { as: "footer", "data-sidebar-footer": !0, ref, ...props }));
export {
  Button,
  Card,
  ContentWrapper,
  Element,
  HRule,
  Portion,
  Row,
  SidebarFooter,
  SidebarHeader,
  SidebarItem,
  SidebarItemIcon,
  SidebarItemText,
  SidebarWrapper
};