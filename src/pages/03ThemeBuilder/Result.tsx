import React, {  FunctionComponent, ReactElement } from "react";
import { 
    Button,
    Card, 
    Element, 
    FormWrapper, 
    Heading, 
    InputField, 
    ProgressBar, 
    Text 
} from "fictoan-react";
import { RHSStyled } from "./Styled";

const Flowing: FunctionComponent = ({ children }) => {
    return <div style={{ display: 'flex', alignItems: 'center' }}>
        {children}
    </div>
}
export const Page: ReactElement = (<RHSStyled>
    <Flowing>
        <Element
            as="img"
            src={"http://acmelogos.com/images/logo-3.svg"}
            width="100"
        />
        <Heading
            as="h2"
        >ACME CORP</Heading>
    </Flowing>
    <ProgressBar
        label="Loading..."
        value={30}
        max="100"
        shape="rounded" />
    <Card padding="micro" shape="rounded" marginTop="micro">
        <Heading as="h4"> This is a heading</Heading>
        <Text marginTop="nano">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        <FormWrapper>
            <InputField
                placeholder="Random Text Input"
                marginTop="nano"
                marginBottom="nano"
            />
        </FormWrapper>
        <Button kind="primary">Primary Button</Button>
        <Button kind="secondary" marginLeft="nano">Secondary Button</Button>
        <Button kind="tertiary" marginLeft="nano">Tertiary Button</Button>
        <Button marginLeft="nano">Default Button</Button>
    </Card>
</RHSStyled>
)