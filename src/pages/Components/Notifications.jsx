import React from "react";
import { Row, Portion, NotificationWrapper, NotificationItem, HRule, Button } from "reactised-fictoan";

import Highlight, { defaultProps } from "prism-react-renderer";

// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
// {/*   SAMPLE CODES  */}
// {/*  RF  //////////////////////////////////////////////////////////////////////////////////////////  */}
//  Code sample 01 ========================================================================================
const snippetNotificationSample = `
<Notification
    type="info"
    position="top-right"
>
    <p>This is a sample notification.</p>
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
                <NotificationWrapper position="right" anchor="top">
                    <NotificationItem isDismissible type="info">
                        <p>Just running diagnostics.</p>
                    </NotificationItem>

                    <NotificationItem isDismissible type="warning">
                        <p>Um, the telescope is picking up something on the horizon.</p>
                    </NotificationItem>

                    <NotificationItem isDismissible type="error">
                        <p className="text-red weight-600">OH GOD! THE ALIENS ARE INVADING! SAVE YOURSELVES!</p>

                        <Button className="size-small shape-rounded bg-red text-white margin-top-fixed" value="RUN!!"/>
                    </NotificationItem>

                    <NotificationItem isDismissible type="success">
                        <p>Oh. That was just a spider on the lens. You can relax now.</p>
                    </NotificationItem>
                </NotificationWrapper>

                <Row sidePadding="large">
                    <Portion>
                        <h4>Basics</h4>
                    </Portion>

                    <Portion>
                        <p>The notification component is essentially a small box that can also be used as a toast.</p>

                        <Highlight {...defaultProps} code={snippetNotificationSample} language="jsx" theme={undefined}>
                            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                                <pre className={className} style={style}>
                                    <code>
                                        {tokens.map((line, i) => (
                                            <div {...getLineProps({ line, key: i })}>
                                                {line.map((token, key) => (
                                                    <span {...getTokenProps({ token, key })} />
                                                ))}
                                            </div>
                                        ))}
                                    </code>
                                </pre>
                            )}
                        </Highlight>
                    </Portion>
                </Row>

                <HRule
                    thin
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large">
                    <Portion>
                        <h4>Types</h4>

                        <p>
                            Notifications come in four varieties, set using the <code>type</code> attribute—
                            <code>info</code>, <code>warning</code>, <code>error</code>, and <code>success</code>.</p>

                        <p>Each of these have individual colours, displayed in a thick left border of the notification box. For example, <code>info</code> is blue, <code>warning</code> is amber, <code>error</code> is red, and <code>success</code> is green. These can be tweaked using variables in the theme.
                        </p>
                    </Portion>
                </Row>

                <HRule
                    thin
                    sideMargin="large"
                    bgColor="slate-20"
                    className="margin-top-fixed-3x margin-bottom-fixed-3x"
                />

                <Row sidePadding="large">
                    <Portion>
                        <h4>Position</h4>

                        <p>
                            It can be displayed in the four corners of the screen using the <code>position</code>{" "}
                            attribute, which takes <code>top-left</code>, <code>top-right</code>,{" "}
                            <code>bottom-left</code> and <code>bottom-right</code> as values.
                        </p>
                    </Portion>
                </Row>
            </article>
        );
    }
}

export default Notifications;
