//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleNotifications = `// Initialise state --------------------
const [showInfoNotification, setShowInfoNotification] = useState(false);

// Actual component --------------------
<NotificationsWrapper position="right" anchor="bottom" order="newest-first">
    <NotificationItem
        kind="info" {/* "warning" | "error" | "success" */}
        isDismissible
        onClose={() => setShowInfoNotification(false)}
        show={showInfoNotification}
    >
        <Text>Just running diagnostics.</Text>
    </NotificationItem>
</NotificationsWrapper>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleNotificationsPosition = `<NotificationsWrapper
    position="right" | "left"
    anchor="top" | "bottom"
>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleNotificationsOrder = `<NotificationsWrapper
    order="new-on-top" | "new-on-bottom"
>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleNotificationsIsDismissible = `<NotificationItem isDimissible />`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleNotificationsCallback = `<NotificationItem
    onClose={() => setShowNotification(false)}
/>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleNotificationsTimeout = `<NotificationItem
    timeout="20000"  // 20 seconds
/>`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleNotificationTheme = `notification : {
    default : {
        bg   : defaultColours.white,
        text : customColours.shade
    },
    kinds   : {
        info : {
            border : defaultColours.blue60
        },
        warning : {
            border : defaultColours.amber
        },
        error : {
            border : defaultColours.red90
        },
        success : {
            border : defaultColours.green90
        }
    }
}`;
