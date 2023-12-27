//  Code sample 01 ========================================================================================
export const snippetForm = `
<Form>
    All form elements
</Form>
`;

//  Code sample 02 ========================================================================================
export const snippetFormItem = `<Form>
    <FormItem>
        Some element
    </FormItem>

    <FormItem>
        Some element
    </FormItem>

    ...how many ever you need.
</Form>`;

//  Code sample 03 ========================================================================================
export const snippetTextInput = `<InputField
    label="Label, visible by default"
    helpText="This is a very long helpText"
    placeholder="Placeholder"
/>`;

//  Code sample04
export const snippetInputValidation = `
<InputField
    label="Email"
    helpText="Your work email works best"
    placeholder="name@example.com"
    errorText="Enter a valid email"
    validateThis
    pattern="^([0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$"
/>`;
