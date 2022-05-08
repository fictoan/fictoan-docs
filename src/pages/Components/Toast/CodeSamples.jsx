//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleToast = `// Initialise state --------------------
const [showHelloToast, setShowHelloToast] = useState(false);

// Actual component --------------------
<ToastsWrapper position="top">
    <ToastItem
        show={showHelloToast}
        onCloseCallback={() => setShowHelloToast(false)}
        shadow="soft"
    >
        <Text>Hello there, folks!</Text>
    </ToastItem>
</ToastsWrapper>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleToastsPosition = `<ToastsWrapper
    position="top" | "bottom"
>`;

//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleToastShow = `const [showHelloToast, setShowHelloToast] = useState(false);

<ToastItem
    show={showHelloToast}
    onCloseCallback={() => setShowHelloToast(false)}
/>`;

//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleNotificationsCallback = `<NotificationItem
    onClose={() => setShowNotification(false)}
/>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleToastTimeout = `<ToastItem
    showFor={5000}  // 5 seconds
/>`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleToastTheme = `toast : {
    bg   : String(defaultColours.slate),
    text : String(defaultColours.slate10)
},`;
