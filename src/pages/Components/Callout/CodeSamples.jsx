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
export const sampleCodeInsideCallout = 
`/* this is some sample css */
kind   : {
    info : {
        border-color : defaultColours.blue;
    }
}`
;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleCalloutTheme = `callout : {
    default : {
        background-color : white;
        border-color     : defaultColours.grey;
    },
    kind   : {
        info : {
            border-color     : defaultColours.blue;
        },
        warning : {
            border-color     : defaultColours.green;
        },
        error : {
            border-color     : defaultColours.red;
        },
        success : {
            border-color     : defaultColours.green;
        }
    }
}`;
