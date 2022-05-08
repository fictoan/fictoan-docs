import React, { useEffect, useState } from "react";

import {
    Button,
    CodeBlock,
    Element,
    Heading,
    HRule,
    NotificationItem,
    NotificationsWrapper,
    Portion,
    Row,
    Table,
    Text
} from "fictoan-react";

import { NotificationsDocsStyled } from "./Notifications.styled";
import {
    sampleNotifications,
    sampleNotificationsCallback,
    sampleNotificationsIsDismissible,
    sampleNotificationsOrder,
    sampleNotificationsPosition, sampleNotificationsTimeout,
    sampleNotificationTheme
} from "./CodeSamples";


export const NotificationDocs = () => {
    useEffect(() => {
        document.title = "Notification — Fictoan";

        try {
            window.scroll({
                top: 0,
                left: 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    const [showGenericNotification, setShowGenericNotification] = useState(false);
    const [showInfoNotification, setShowInfoNotification] = useState(false);
    const [showWarningNotification, setShowWarningNotification] = useState(false);
    const [showErrorNotification, setShowErrorNotification] = useState(false);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    return (
        <NotificationsDocsStyled>
            <NotificationsWrapper position="right" anchor="top" order="new-on-top">
                <NotificationItem
                    isDismissible
                    onCloseCallback={() => setShowGenericNotification(false)}
                    show={showGenericNotification}
                >
                    <Text>Diagnostics initialised.</Text>
                </NotificationItem>

                <NotificationItem
                    kind="info"
                    isDismissible
                    onCloseCallback={() => setShowInfoNotification(false)}
                    show={showInfoNotification}
                >
                    <Text>First batch complete.</Text>
                </NotificationItem>

                <NotificationItem
                    kind="warning"
                    isDismissible
                    onCloseCallback={() => setShowWarningNotification(false)}
                    show={showWarningNotification}
                >
                    <Text>Um, the telescope is picking up something on the horizon.</Text>
                </NotificationItem>

                <NotificationItem
                    kind="error"
                    isDismissible
                    onCloseCallback={() => setShowErrorNotification(false)}
                    show={showErrorNotification}
                >
                    <Text marginBottom="micro" textColor="red" weight="600">OH GOD! THE ALIENS ARE INVADING! SAVE
                        YOURSELVES!</Text>

                    <Button size="small" shape="rounded" bgColour="red" textColor="white" shadow="mild">
                        RUN!!
                    </Button>
                </NotificationItem>

                <NotificationItem
                    kind="success"
                    isDismissible
                    onCloseCallback={() => setShowSuccessNotification(false)}
                    show={showSuccessNotification}
                >
                    <Text>Oh. That was just a spider on the lens. You can relax now.</Text>
                </NotificationItem>
            </NotificationsWrapper>

            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">Notifications</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props — NotificationsWrapper</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth marginBottom="micro">
                        <thead className="bg-slate-10">
                            <tr>
                                <td className="weight-600">Prop</td>
                                <td className="weight-600">Description</td>
                                <td className="weight-600">Values</td>
                                <td className="weight-600">Default</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <code>position</code>
                                </td>

                                <td>
                                    Horizontal alignment of the wrapper.
                                </td>

                                <td>
                                    <code>left</code><br />
                                    <code>right</code>
                                </td>

                                <td>
                                    <code>right</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>anchor</code>
                                </td>

                                <td>
                                    Vertical alignment of the wrapper.
                                </td>

                                <td>
                                    <code>top</code><br />
                                    <code>bottom</code>
                                </td>

                                <td>
                                    <code>top</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>order</code>
                                </td>

                                <td>
                                    Stacking order of the notifications
                                </td>

                                <td>
                                    <code>new-on-top</code><br />
                                    <code>new-on-bottom</code>
                                </td>

                                <td>
                                    <code>new-on-top</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <Heading as="h5" marginBottom="nano">Custom props — NotificationItem</Heading>
                    <Table bordersFor="both" padding="tiny" isFullWidth>
                        <thead className="bg-slate-10">
                            <tr>
                                <td className="weight-600">Prop</td>
                                <td className="weight-600">Description</td>
                                <td className="weight-600">Values</td>
                                <td className="weight-600">Default</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <code>kind</code>
                                </td>

                                <td>
                                    Notifications for every occasion!
                                </td>

                                <td>
                                    <code>—</code><br />
                                    <code>info</code><br />
                                    <code>warning</code><br />
                                    <code>error</code><br />
                                    <code>success</code>
                                </td>

                                <td>
                                    <code>—</code>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>show</code>
                                </td>

                                <td>
                                    Trigger the notification
                                </td>

                                <td>
                                    boolean
                                </td>

                                <td>
                                    <Text>&mdash;</Text>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>isDismissible</code>
                                </td>

                                <td>
                                    Ability to close a notification manually, adds a cross mark on the top right.
                                </td>

                                <td>
                                    boolean
                                </td>

                                <td>
                                    <Text>&mdash;</Text>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>onCloseCallback</code>
                                </td>

                                <td>
                                    Callback for closing the notification
                                </td>

                                <td>
                                    function
                                </td>

                                <td>
                                    <Text>&mdash;</Text>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <code>showFor</code>
                                </td>

                                <td>
                                    Milliseconds after which to remove the notification
                                </td>

                                <td>
                                    integer
                                </td>

                                <td>
                                    <code>8000</code>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default notifications</Heading>

                        <Text marginBottom="micro">
                            The <code>NotificationsWrapper</code> acts as a container for all
                            your <code>NotificationItem</code> elements to appear inside of.
                        </Text>

                        <CodeBlock source={sampleNotifications} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            The above code will display the four types of <code>NotificationItem</code>, elements, which
                            you can test using these buttons&mdash;
                        </Text>

                        <Portion>
                            <Button
                                kind="custom" bgColour="slate-10" textColour="blue"
                                shape="rounded" shadow="mild" size="small"
                                marginBottom="nano" marginRight="nano"
                                onClick={() => setShowGenericNotification(true)}
                            >
                                Show generic notification
                            </Button>

                            <Button
                                kind="custom" bgColour="blue-20" textColour="blue"
                                shape="rounded" shadow="mild" size="small"
                                marginBottom="nano" marginRight="nano"
                                onClick={() => setShowInfoNotification(true)}
                            >
                                Show info notification
                            </Button>

                            <Button
                                kind="custom" bgColour="amber-20" textColour="amber"
                                shape="rounded" shadow="mild" size="small"
                                marginBottom="nano" marginRight="nano"
                                onClick={() => setShowWarningNotification(true)}
                            >
                                Show warning notification
                            </Button>

                            <Button
                                kind="custom" bgColour="red-20" textColour="red"
                                shape="rounded" shadow="mild" size="small"
                                marginBottom="nano" marginRight="nano"
                                onClick={() => setShowErrorNotification(true)}
                            >
                                Show warning notification
                            </Button>

                            <Button
                                kind="custom" bgColour="green-20" textColour="green"
                                shape="rounded" shadow="mild" size="small"
                                marginBottom="nano" marginRight="nano"
                                onClick={() => setShowSuccessNotification(true)}
                            >
                                Show success notification
                            </Button>
                        </Portion>

                        <Text marginTop="micro" marginBottom="micro">
                            Of course, this is just a sample implementation, feel free to use your own logic for
                            displaying notifications. The entire markup is wrapped in
                            the <code>NotificationsWrapper</code>, with
                            individual <code>NotificationItem</code> children inside it.
                        </Text>
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="wrapper-props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props — NotificationsWrapper</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  POSITION  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Position and anchor</Heading>

                        <Text marginBottom="micro">
                            The <code>position</code> prop determines if you want the notifications on
                            the <code>right</code> or the <code>left</code> of the viewport.
                        </Text>

                        <Text marginBottom="micro">
                            The <code>anchor</code> prop determines if the notifications appear on
                            the <code>top</code> or the <code>bottom</code> of the viewport.
                        </Text>

                        <Text marginBottom="micro">
                            Use these two in conjunction to place the notifications on one of the four corners of the
                            screen.
                        </Text>

                        <CodeBlock source={sampleNotificationsPosition} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />

                {/*  =============================================================================================  */}
                {/*  STACKING ORDER  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Stacking order</Heading>

                        <Text marginBottom="micro">
                            The <code>order</code> prop stacks incoming notification either <code>new-on-top</code>,
                            or <code>new-on-bottom</code>.
                        </Text>

                        <CodeBlock source={sampleNotificationsOrder} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule sideMargin="huge" />
            </Element>

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  PROPS  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="item-props">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3">Props — NotificationItem</Heading>
                    </Portion>
                </Row>

                {/*  =============================================================================================  */}
                {/*  POSITION  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Kind</Heading>

                        <Text marginBottom="micro">
                            The <code>kind</code> props comes with one four
                            values—<code>info</code>, <code>warning</code>, <code>error</code>, and <code>success</code>.
                            If the prop is not passed, a generic notification with a white box shows up.
                        </Text>

                        <CodeBlock source={sampleNotificationsPosition} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  IS DISMISSIBLE  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Manually dismissible notifications</Heading>

                        <Text marginBottom="micro">
                            Add the <code>isDismissible</code> prop to make the notification user-dismissible. It adds a
                            small cross mark to the top right of the item.
                        </Text>

                        <CodeBlock source={sampleNotificationsIsDismissible} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  CLOSE CALLBACK  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Callback for closing</Heading>

                        <Text marginBottom="micro">
                            There’s also the <code>onCloseCallback</code> prop to close the notification using
                            the <code>useState</code> hook.
                        </Text>

                        <CodeBlock source={sampleNotificationsCallback} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule kind="secondary" sideMargin="huge" />


                {/*  =============================================================================================  */}
                {/*  TIMEOUT  */}
                {/*  =============================================================================================  */}
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h5" marginBottom="nano">Show for</Heading>

                        <Text marginBottom="micro">
                            You can also add a <code>showFor</code> prop with a millisecond duration value to keep the
                            notification on-screen for that long.
                        </Text>

                        <CodeBlock source={sampleNotificationsTimeout} language="jsx" marginBottom="micro" />
                    </Portion>
                </Row>


                <HRule sideMargin="huge" />


                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*  THEMING  */}
                {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
                <Element as="section" id="theming">
                    <Row sidePadding="huge" marginBottom="small">
                        <Portion>
                            <Heading as="h3" marginBottom="tiny">Theming</Heading>

                            <CodeBlock source={sampleNotificationTheme} language="css" />
                        </Portion>
                    </Row>
                </Element>
            </Element>
        </NotificationsDocsStyled>
    );
}
