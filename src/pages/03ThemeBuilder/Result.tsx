import React, { ReactElement, useState } from "react";
import {
    Element,
    Button,
    Card,
    FormWrapper,
    Heading,
    InputField,
    ProgressBar,
    Text,
    ThemeProvider,
} from "fictoan-react";
import { evaluateJS } from "./CodeManipulation";
import { STRINGIFIED_FICTOAN_THEME } from "./Theme";

export const FictoanThemeOutputSample = () => {
    const [json, setJson] = useState<any>(() => evaluateJS(STRINGIFIED_FICTOAN_THEME));

    return (
        <ThemeProvider theme={json}>
            <Element
                as="img"
                src={"http://acmelogos.com/images/logo-3.svg"}
                className="icon-large"
            />
            <Heading as="h2">ACME CORP</Heading>

            <ProgressBar
                label="Loading..."
                value={30}
                max="100"
                shape="rounded"
            />

            <Card padding="micro" shape="rounded" marginTop="micro">
                <Heading as="h4"> This is a heading</Heading>

                <Text marginTop="nano">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                </Text>

                <FormWrapper>
                    <InputField
                        placeholder="Text input"
                        marginTop="nano"
                        marginBottom="nano"
                    />
                </FormWrapper>

                <Button kind="primary">Primary Button</Button>

                <Button kind="secondary" marginLeft="nano">Secondary Button</Button>

                <Button kind="tertiary" marginLeft="nano">Tertiary Button</Button>
            </Card>
        </ThemeProvider>
    )
}
