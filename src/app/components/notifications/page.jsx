"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Element,
    Heading,
    HRule,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    Select,
    Button,
    Range,
    NotificationsWrapper,
    NotificationItem,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./page-notifications.css";

// HOOKS ===============================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";

// UTILS ===============================================================================================================
import { colourOptions } from "../../../utils/colours";

// DATA ================================================================================================================
import { toastProps } from "./config";

const ToastDocs = () => {
    const { componentVariables, handleVariableChange, cssVariablesList } = useThemeVariables(toastProps.variables);

    // SAMPLE ==========================================================================================================
    const [notifications, setNotifications] = useState([]);

    // CUSTOMISE =======================================================================================================
    const [selectedPosition, setSelectedPosition] = useState("right");
    const [selectedAnchor, setSelectedAnchor] = useState("top");
    const [selectedOrder, setSelectedOrder] = useState("new-on-top");

    const [secondsToShowFor, setSecondsToShowFor] = useState(1000);

    // THEME ===========================================================================================================

    const handleShowNotification = (type) => {
        const id = Date.now();
        const count = notifications.filter(notification => notification.type === type).length + 1;

        const newNotification = {
            id,
            type,
            count,
            message : `I’m ${type} notification #${count}`,
        };

        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
    };

    return (
        <Article id="page-component">
            <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
                <Portion>
                    <Heading as="h1">Toast</Heading>
                    <Text size="large" marginBottom="small">
                        The component is
                    </Text>
                </Portion>

                <Portion>
                    <Heading as="h4" marginBottom="micro">Characteristics</Heading>
                    <Text>&bull; </Text>
                </Portion>
            </Row>

            <HRule kind="primary" horizontalMargin="huge" verticalMargin="small" />

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/*  CONFIGURATOR */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="small" className="rendered-component">
                {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
                <Portion id="component-wrapper">
                    <Element
                        as="div" padding="small" shape="rounded" bgColour="slate-light-80"
                        data-centered-children
                    >
                        <Button
                            kind="custom" bgColour="slate-light-90" textColour="slate"
                            shape="rounded" shadow="mild"
                            marginBottom="nano" marginRight="nano"
                            onClick={() => handleShowNotification("generic")}
                        >
                            Show generic notification
                        </Button>

                        <Button
                            kind="custom" bgColour="blue-20" textColour="blue"
                            shape="rounded" shadow="mild"
                            marginBottom="nano" marginRight="nano"
                            onClick={() => handleShowNotification("info")}
                        >
                            Show info notification
                        </Button>

                        <Button
                            kind="custom" bgColour="amber-20" textColour="amber"
                            shape="rounded" shadow="mild"
                            marginBottom="nano" marginRight="nano"
                            onClick={() => handleShowNotification("warning")}
                        >
                            Show warning notification
                        </Button>

                        <Button
                            kind="custom" bgColour="red-20" textColour="red"
                            shape="rounded" shadow="mild"
                            marginBottom="nano" marginRight="nano"
                            onClick={() => handleShowNotification("error")}
                        >
                            Show error notification
                        </Button>

                        <Button
                            kind="custom" bgColour="green-20" textColour="green"
                            shape="rounded" shadow="mild"
                            marginBottom="nano" marginRight="nano"
                            onClick={() => handleShowNotification("success")}
                        >
                            Show success notification
                        </Button>
                    </Element>
                </Portion>

                {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Form spacing="none">
                        <Card padding="micro" shape="rounded">
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="micro">
                                    Customise individually
                                </Text>
                            </Header>

                            <Row marginBottom="none">
                                <Portion>
                                    <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                                        {[
                                            `// Paste this in your content file`,
                                            `const [showSampleNotification, setShowSampleNotification] = useState(false); \n`,
                                            `<NotificationsWrapper`,
                                            selectedPosition ? `    position="${selectedPosition}"` : null,
                                            `>`,
                                            `    <NotificationItem`,
                                            `        showWhen={showSampleNotification}`,
                                            `        secondsToShowFor={${secondsToShowFor}}`,
                                            `        closeWhen={() => setShowSampleNotification(false)}`,
                                            `    >`,
                                            `        <Text>Just a basic notification</Text>`,
                                            `    </NotificationItem>`,
                                            `</NotificationsWrapper>`,
                                        ].filter(Boolean).join("\n")}
                                    </CodeBlock>
                                </Portion>

                                {/* POSITION ======================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="position" label="Position" name="position"
                                        options={[
                                            { id : "position-opt-0", value : "left", label : "left" },
                                            { id : "position-opt-1", value : "right", label : "right" },
                                        ]}
                                        defaultValue={selectedPosition || "right"}
                                        onChange={() => setSelectedPosition(event.target.value)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* ANCHOR ========================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="anchor" label="Anchor" name="anchor"
                                        options={[
                                            { id : "anchor-opt-0", value : "top", label : "top" },
                                            { id : "anchor-opt-1", value : "bottom", label : "bottom" },
                                        ]}
                                        defaultValue={selectedAnchor || "right"}
                                        onChange={() => setSelectedAnchor(event.target.value)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* ANCHOR ========================================================================= */}
                                <Portion>
                                    <RadioTabGroup
                                        id="order" label="Order" name="order"
                                        options={[
                                            { id : "order-opt-0", value : "new-on-top", label : "new-on-top" },
                                            { id : "order-opt-1", value : "new-on-bottom", label : "new-on-bottom" },
                                        ]}
                                        defaultValue={selectedOrder || "right"}
                                        onChange={() => setSelectedOrder(event.target.value)}
                                    />

                                    <HRule kind="secondary" horizontalMargin="none" marginTop="micro" />
                                </Portion>

                                {/* SHOW FOR ======================================================================= */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Show toast for"
                                        value={secondsToShowFor}
                                        onChange={(e) => setSecondsToShowFor(e.target.value)}
                                        min={1} max={50} step={1}
                                        suffix={secondsToShowFor > 1 ? " seconds" : " second"}
                                    />
                                </Portion>
                            </Row>
                        </Card>
                    </Form>
                </Portion>

                {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="half">
                    <Card padding="micro" shape="rounded">
                        <Form>
                            <Header verticallyCentreItems pushItemsToEnds>
                                <Text size="large" weight="700" textColour="white" marginBottom="nano">
                                    Set values globally
                                </Text>
                            </Header>

                            <Row marginBottom="micro">
                                <Portion>
                                    <CodeBlock
                                        source={cssVariablesList}
                                        language="css"
                                        showCopyButton
                                    />
                                </Portion>
                            </Row>

                            {/* GENERIC NOTIFICATION /////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Generic notification</Text>
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-generic-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-generic-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BG COLOUR ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-generic-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-generic-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* TEXT COLOUR ==================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Text colour"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-generic-text"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-generic-text", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER RADIUS ================================================================== */}
                                <Portion desktopSpan="half">
                                    <Range
                                        label="Border radius"
                                        value={componentVariables["notification-item-border-radius"].value}
                                        onChange={(e) => handleVariableChange("notification-item-border-radius", e.target.value)}
                                        min={0} max={50} step={1}
                                        suffix={componentVariables["notification-item-border-radius"].unit}
                                    />
                                </Portion>
                            </Row>

                            <HRule kind="secondary" verticalMargin="micro" />

                            {/* INFO NOTIFICATION ////////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Info notification</Text>
                                </Portion>

                                {/* BACKGROUND ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-info-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-info-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-info-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-info-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <HRule kind="secondary" verticalMargin="micro" />

                            {/* ERROR NOTIFICATION ///////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Error notification</Text>
                                </Portion>

                                {/* BACKGROUND ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-error-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-error-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-error-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-error-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>

                            <HRule kind="secondary" verticalMargin="micro" />

                            {/* SUCCESS NOTIFICATION /////////////////////////////////////////////////////////////// */}
                            <Row marginBottom="none">
                                <Portion>
                                    <Text weight="700">Success notification</Text>
                                </Portion>

                                {/* BACKGROUND ===================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Background"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-success-bg"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-success-bg", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>

                                {/* BORDER ====================================================================== */}
                                <Portion desktopSpan="half">
                                    <Select
                                        label="Border"
                                        options={[{
                                            label    : "Select a colour",
                                            value    : "select-a-colour",
                                            disabled : true,
                                            selected : true,
                                        }, ...colourOptions]}
                                        defaultValue={componentVariables["notification-item-success-border"].defaultValue || "select-a-colour"}
                                        onChange={(e) => handleVariableChange("notification-item-success-border", e.target.value)}
                                        isFullWidth
                                    />
                                </Portion>
                            </Row>
                        </Form>
                    </Card>
                </Portion>
            </Row>

            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            {/* ACTUAL COMPONENT INSTANCE */}
            {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <NotificationsWrapper
                position={selectedPosition}
                anchor={selectedAnchor}
                order={selectedOrder}
            >
                {notifications.map(({ id, type, message }) => (
                    <NotificationItem
                        key={id}
                        kind={type}
                        showWhen={true}
                        closeWhen={() => setNotifications(prevNotifications => prevNotifications.filter(notification => notification.id !== id))}
                        secondsToShowFor={secondsToShowFor}
                        isDismissible
                    >
                        <Text>{message}</Text>
                    </NotificationItem>
                ))}
            </NotificationsWrapper>
        </Article>
    );
};

export default ToastDocs;
