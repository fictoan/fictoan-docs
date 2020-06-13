export const snippetInstall = `
yarn add reactised-fictoan
# or
npm install reactised-fictoan
`;

export const snippetCardSample = `
<Card
    padding="medium"
    bgColor="amber-10"
    shape="rounded"
    shadow="soft"
    borderColor="blue"
    marginBottom="tiny"
>
    <Heading
        as="h4"
        textColor="hue"
    >
        Hello.
    </Heading>
    <Text
        marginTop="none"
        marginBottom="tiny"
    >
        I’m a Card component, and can be customised
        in about 4 million different ways. Nice to meet you.
        
    </Text>

    <Button
        kind="primary"
        size="small"
        shape="rounded"
        shadow="mild"
        marginRight="nano"
    >
        Main action
    </Button>

    <Button
        kind="secondary"
        size="small"
        shape="rounded"
        shadow="mild"
    >
        Other action
    </Button>
</Card>
`;
