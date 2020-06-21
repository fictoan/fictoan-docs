import React from "react";
import {
    Row,
    Portion,
    Text,
    NotificationsWrapper,
    NotificationItem,
    HRule,
    Button,
    CodeBlock
} from "fictoan-react";

// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
// {/*   SAMPLE CODES  */}
// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
//  Code sample 01 ========================================================================================
const snippetNotificationSample = `
<Notification
    type="info"
    position="top-right"
>
    <Text>This is a sample notification.</Text>
</Notification>
`;

class Notifications extends React.PureComponent {
    componentDidMount() {
        document.title = "Components — FICTOAN";

        window.scrollTo(0, 0);
    }

    render() {
        return (
            <article id="page-components">
                <Row sidePadding="large" className="margin-top-small margin-bottom-small">
                    <Portion>
                        <h2 className="text-hue">Notifications</h2>
                    </Portion>
                </Row>

                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                {/*   SETTING IT UP  */}
                {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
                <NotificationsWrapper position="right" anchor="top">
                    <NotificationItem isDismissible type="info">
                        <Text>Just running diagnostics.</Text>
                    </NotificationItem>

                    <NotificationItem isDismissible type="warning">
                        <Text>Um, the telescope is picking up something on the horizon.</Text>
                    </NotificationItem>

                    <NotificationItem isDismissible type="error">
                        <Text marginBottom="tiny" textColor="red">OH GOD! THE ALIENS ARE INVADING! SAVE YOURSELVES!</Text>

                        <Button size="small" shape="rounded" bgColor="red" textColor="white">
                            RUN!!
                        </Button>
                    </NotificationItem>

                    <NotificationItem isDismissible type="success">
                        <Text>Oh. That was just a spider on the lens. You can relax now.</Text>
                    </NotificationItem>
                </NotificationsWrapper>

                <Row id="basics" sidePadding="large">
                    <Portion>
                        <h4>Basics</h4>
                    </Portion>

                    <Portion>
                        <Text>The notification component is essentially a small box that can also be used as a toast.</Text>

                        <CodeBlock source={snippetNotificationSample} language="jsx" />
                    </Portion>
                </Row>

                <HRule
                    thin
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row id="types" sidePadding="large">
                    <Portion>
                        <h4>Types</h4>

                        <Text>
                            Notifications come in four varieties, set using the <code>type</code> attribute—
                            <code>info</code>, <code>warning</code>, <code>error</code>, and <code>success</code>.</Text>

                        <Text>Each of these have individual colours, displayed in a thick left border of the notification box. For example, <code>info</code> is blue, <code>warning</code> is amber, <code>error</code> is red, and <code>success</code> is green. These can be tweaked using variables in the theme.
                        </Text>
                    </Portion>
                </Row>

                <HRule
                    thin
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row id="position" sidePadding="large">
                    <Portion>
                        <h4>Position</h4>

                        <Text>
                            It can be displayed in the four corners of the screen using the <code>position</code>{" "}
                            attribute, which takes <code>top-left</code>, <code>top-right</code>,{" "}
                            <code>bottom-left</code> and <code>bottom-right</code> as values.
                        </Text>
                    </Portion>
                </Row>
            </article>
        );
    }
}

export default Notifications;
