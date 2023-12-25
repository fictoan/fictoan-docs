export const snippetInstall = `yarn add fictoan-react
# or
npm install fictoan-react`;

export const snippetCardSample = `
<Card
    padding="medium"
    bgColour="amber-10"
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
        shadow="mild"
        marginRight="nano"
    >
        Main action
    </Button>

    <Button
        kind="secondary"
        size="small"
        shadow="mild"
    >
        Other action
    </Button>
</Card>
`;
