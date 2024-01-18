//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleInput = `<InputField />`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleInputBasicProps = `<InputField
    label="This is a label"
    placeholder="This is a placeholder"
/>`;


//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleInputHelpText = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent here"
/>`;

//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleInputRequired = `<InputField
    label="Email"
    placeholder="Work email preferred"
    helpText="Confirmation will be sent to this id"
    required
/>`;

//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleInputTheme = `--input-bg-default            : var(--white);

--input-border-default        : var(--slate-light-40);
--input-border-radius-default : var(--global-border-radius);
--input-border-width-default  : var(--global-border-width);

--input-label-default         : var(--paragraph-text-colour);
--input-placeholder-default   : var(--slate-light-40);
--input-text-default          : var(--shade);

--input-bg-focus              : var(--white);
--input-border-focus          : var(--slate-light-40);
--input-border-width-focus    : var(--global-border-width);
--input-text-focus            : var(--shade);

--input-bg-valid              : var(--white);
--input-border-valid          : var(--green-dark-30);
--input-label-valid           : var(--shade);

--input-bg-invalid            : var(--red-light-60);
--input-border-invalid        : var(--red-dark-30);
--input-label-invalid         : var(--red);
--input-text-invalid          : var(--red);
--input-error-text-invalid    : var(--red);

--input-bg-disabled           : var(--slate-light-40);
--input-border-disabled       : var(--slate-light-40);
--input-label-disabled        : var(--slate-dark-40);
--input-text-disabled         : var(--slate-dark-60);

--input-bg-read-only          : var(--slate-light-40);
--input-border-read-only      : var(--slate-light-40);
--input-label-read-only       : var(--slate-dark-40);
--input-text-read-only        : var(--slate-dark-60);

--input-required-indicator    : var(--red);

--input-helptext              : var(--slate-dark-40);
--input-helptext-scale        : 92%;

--input-icon-default          : var(--slate-light-40);
--input-icon-focus            : var(--hue);
--input-icon-valid            : var(--green-dark-30);`;
