"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
    Div,
    Heading1,
    Heading2,
    Heading3,
    Heading4,
    Heading5,
    Heading6,
    Divider,
    Portion,
    Row,
    Text,
    Article,
    Card,
    Form,
    Header,
    RadioTabGroup,
    InputField,
    ToastItem,
    ToastsWrapper,
    Button,
    Range,
    FormItemGroup,
    Checkbox,
    CodeBlock,
    Badge,
    Drawer
} from "fictoan-react";

// COMPONENTS ==========================================================================================================
import { FormWithInsertions } from "./components/FormWithInsertions";

// STYLES ==============================================================================================================
import "./page-form-builder.css";

// HOOKS ===============================================================================================================

// UTILS ===============================================================================================================

// DATA ================================================================================================================

const FormBuilderDocs = () => {
    // MAIN FORM =======================================================================================================
    const [selectedSpacing, setSelectedSpacing] = useState("large");
    const [isJoint, setIsJoint] = useState(false);
    const [isButtonFullWidth, setIsButtonFullWidth] = useState(false);

    // DRAWER ==========================================================================================================
    const [isAddElementDrawerOpen, setIsAddElementDrawerOpen] = useState(false);

    return (
        <Article id="page-form-builder">
            {/* INTRO ////////////////////////////////////////////////////////////////////////////////////////////// */}
            <Row horizontalPadding="huge" marginTop="micro" marginBottom="small">
                <Portion>
                    <Heading5>Form builder</Heading5>
                </Portion>
            </Row>

            <Row horizontalPadding="micro">
                {/* MAIN FORM ////////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="one-third">
                    <Card padding="micro" shape="rounded" shadow="soft">
                        <Text size="large" weight="700" marginBottom="micro">Sign up</Text>

                        <FormWithInsertions onAddElement={() => setIsAddElementDrawerOpen(true)}>
                            <InputField label="Email" />

                            <InputField label="Address" />

                            <InputField label="Mobile" />

                            <Button
                                kind="primary"
                                {...(
                                    isButtonFullWidth ? { isFullWidth : true } : {}
                                )}
                            >
                                Submit
                            </Button>
                        </FormWithInsertions>
                    </Card>
                </Portion>

                {/* CONFIGURE ////////////////////////////////////////////////////////////////////////////////////// */}
                <Portion desktopSpan="two-third">
                    <Card padding="micro" shape="rounded" shadow="soft">
                        <Text size="large" weight="700" marginBottom="micro">Sign up</Text>
                    </Card>
                </Portion>
            </Row>

            {/* CONFIGURE ////////////////////////////////////////////////////////////////////////////////////// */}
            <Drawer
                position="right"
                padding="micro"
                openWhen={isAddElementDrawerOpen}
                closeWhen={() => setIsAddElementDrawerOpen(false)}
                isDismissable={true}
                closeOnClickOutside={true}
                size="large"
            >
                <Heading2 marginBottom="nano">Hello</Heading2>
                <Text>You can add all sorts of content here inside the info panel.</Text>
                <Button onClick={() => setIsAddElementDrawerOpen(false)}>Close</Button>
            </Drawer>
        </Article>
    );
};

export default FormBuilderDocs;
