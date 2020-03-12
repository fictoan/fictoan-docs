export const installSnippet = `
yarn add reactised-fictoan
# or
npm install reactised-fictoan
`;

export const sampleSnippet = `
<Card
    padding="medium"
    bgColor="white"
    shape="rounded"
    shadow="soft"
>
    <Heading
        as="h2"
        textColor="amber"
    >
        Hello.
    </Heading>
    <Text marginBottom="tiny">
        I am FICTOAN UI. Nice to meet you.
    </Text>

    <Button
        kind="primary" 
        size="small" 
        shape="rounded" 
        shadow="mild" 
        marginRight="fixed"
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
