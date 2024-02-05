//  Code sample 01 ========================================================================================
export const snippetForm = `<Form>
    {/* All form elements */}
</Form>`;

//  Code sample 02 ========================================================================================
export const snippetFormItem = `<Form>
    <FormItemGroup spacing="tiny">
        <InputField label="Label" />

        <InputField label="Label" />
    </FormItemGroup>

    <FormItemGroup spacing="tiny">
        <InputField label="Label" />

        <InputField label="Label" />

        <InputField label="Label" />
    </FormItemGroup>
</Form>`;

//  Code sample 03 ========================================================================================
export const snippetTextInput = `<InputField
    label="Label, visible by default"
    helpText="This is a very long helpText"
    placeholder="Placeholder"
/>`;

//  Code sample04
export const snippetInputValidation = `<InputField
    label="Email"
    helpText="Your work email works best"
    placeholder="name@example.com"
    errorText="Enter a valid email"
    validateThis
    pattern="^([0-9a-zA-Z]([-.\\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\\w]*[0-9a-zA-Z]\\.)+[a-zA-Z]{2,9})$"
/>`;
