import { useState, useCallback } from "react";
import {
    RadioTabGroup,
    Select,
    Row,
    Portion,
    Card,
    Form,
    Header,
    Heading6,
    Text,
    Divider,
    CodeBlock,
    ListBox,
    Checkbox,
    InputField,
} from "fictoan-react";

// Master configurations for different prop types
const MASTER_PROPS_CONFIG = {
    // Label props =====================================================================================================
    content : {
        type         : "text",
        label        : "Content",
        defaultValue : "Badge",
    },

    // Size props ======================================================================================================
    size : {
        type    : "size",
        label   : "Size",
        options : [
            { id : "size-opt-0", value : "none", label : "none" },
            { id : "size-opt-1", value : "nano", label : "nano" },
            { id : "size-opt-2", value : "micro", label : "micro" },
            { id : "size-opt-3", value : "tiny", label : "tiny" },
            { id : "size-opt-4", value : "small", label : "small" },
            { id : "size-opt-5", value : "medium", label : "medium" },
            { id : "size-opt-6", value : "large", label : "large" },
            { id : "size-opt-7", value : "huge", label : "huge" },
        ],
    },

    // Spacing props ===================================================================================================
    padding : {
        type    : "spacing",
        label   : "Padding",
        options : [
            { id : "spacing-opt-0", value : "none", label : "none" },
            { id : "spacing-opt-1", value : "nano", label : "nano" },
            { id : "spacing-opt-2", value : "micro", label : "micro" },
            { id : "spacing-opt-3", value : "tiny", label : "tiny" },
            { id : "spacing-opt-4", value : "small", label : "small" },
            { id : "spacing-opt-5", value : "medium", label : "medium" },
            { id : "spacing-opt-6", value : "large", label : "large" },
            { id : "spacing-opt-7", value : "huge", label : "huge" },
        ],
    },

    // Shape-related props =============================================================================================
    shape : {
        type    : "shape",
        label   : "Shape",
        options : [
            { id : "shape-opt-0", value : "none", label : "none" },
            { id : "shape-opt-1", value : "rounded", label : "rounded" },
            { id : "shape-opt-2", value : "curved", label : "curved" },
        ],
    },

    // Color-related props =============================================================================================
    bgColour     : {
        type               : "select",
        label              : "Background colour",
        defaultOption      : "Select colour",
        customOptionPrefix : "bg",
    },
    textColour   : {
        type               : "select",
        label              : "Text colour",
        defaultOption      : "Select colour",
        customOptionPrefix : "text",
    },
    borderColour : {
        type               : "select",
        label              : "Border colour",
        defaultOption      : "Select colour",
        customOptionPrefix : "border",
    },

    // Boolean props ===================================================================================================
    isFullWidth : {
        type  : "boolean",
        label : "Full width",
    },
    disabled    : {
        type  : "boolean",
        label : "Disabled",
    },
    withDelete  : {
        type  : "boolean",
        label : "Show a delete icon",
    },

    // Kind/emphasis props =============================================================================================
    kind : {
        type    : "emphasis",
        label   : "Kind",
        options : [
            { id : "kind-opt-0", value : "none", label : "none" },
            { id : "kind-opt-1", value : "primary", label : "primary" },
            { id : "kind-opt-2", value : "secondary", label : "secondary" },
            { id : "kind-opt-3", value : "tertiary", label : "tertiary" },
        ],
    },
};

export const createPropsConfigurator = (componentName, propsToConfig = [], colorOptions = []) => {
    // Initialise state with undefined values ==========================================================================
    const [propValues, setPropValues] = useState(() => {
        // Initialise with default values for text props
        const defaults = {};
        propsToConfig.forEach(prop => {
            const config = MASTER_PROPS_CONFIG[prop];
            if (config?.type === "text" && config?.defaultValue) {
                defaults[prop] = config.defaultValue;
            }
        });
        return defaults;
    });

    // Generic handler for prop changes
    const handlePropChange = useCallback((propName, value) => {
        setPropValues(prev => {
            // Only update if value is meaningful
            if (value === "select-default" || value === "none" || value === undefined) {
                const newProps = { ...prev };
                delete newProps[propName];
                return newProps;
            }
            return { ...prev, [propName] : value };
        });
    }, []);

    // Generate JSX for the code block =================================================================================
    const generateCodeString = useCallback(() => {
        // Filter out undefined values and content prop
        const props = Object.entries(propValues)
            .filter(([key, value]) => value !== undefined && value !== "select-default" && key !== "content")
            .map(([key, value]) => {
                // Special handling for boolean props
                const config = MASTER_PROPS_CONFIG[key];
                if (config?.type === "boolean") {
                    // Only show prop name if true, omit if false
                    return value === true ? `    ${key}` : null;
                }
                // For all other props, show key="value"
                return `    ${key}="${value}"`;
            })
            .filter(Boolean) // Remove null values from boolean props that were false
            .join("\n");

        // Conditional prop addition -----------------------------------------------------------------------------------
        // Add onDelete prop when withDelete is true
        const additionalProps = propValues.withDelete
            ? `    onDelete={() => doSomething()}`
            : "";

        // Decide if the closing tag should on a new line or not
        const shouldClosingTagBeInNewLine = props.length > 0 || additionalProps
            ? [`<${componentName}`, props, additionalProps, ">"].filter(Boolean).join("\n")
            : `<${componentName}>`;

        // Content prop addition ---------------------------------------------------------------------------------------
        const content = propValues.content;

        return [
            `{/* Paste this in your content file */}`,
            `import { ${componentName} } from "fictoan-react";\n`,
            shouldClosingTagBeInNewLine,
            content ? `    ${content}` : "",
            `</${componentName}>`,
        ].filter(Boolean).join("\n");
    }, [componentName, propValues]);

    // Generate controls for different prop types ======================================================================
    const generateControl = useCallback((propName) => {
        const config = MASTER_PROPS_CONFIG[propName];
        if (!config) return null;

        const { type, label, options } = config;

        switch (type) {
            // RadioTabGroup for spacing, shape, size, and emphasis ====================================================
            case "spacing":
            case "shape":
            case "size":
            case "emphasis":
                return (
                    <Portion key={propName}>
                        <RadioTabGroup
                            id={propName}
                            label={label}
                            name={propName}
                            options={options}
                            value={propValues[propName]}
                            onChange={(e) => handlePropChange(propName, e.target.value)}
                        />
                    </Portion>
                );

            // ListBox for color props =================================================================================
            case "select":
                const { defaultOption } = config;
                return (
                    <Portion key={propName} desktopSpan="half">
                        <ListBox
                            label={label}
                            options={[
                                {
                                    label    : defaultOption,
                                    value    : undefined,
                                    disabled : true,
                                    selected : !propValues[propName],
                                },
                                ...colorOptions,
                            ]}
                            value={propValues[propName]}
                            onChange={(value) => handlePropChange(propName, value)}
                            isFullWidth
                        />
                    </Portion>
                );

            // Checkbox for boolean props ==============================================================================
            case "boolean":
                return (
                    <Portion key={propName} desktopSpan="half" verticallyCentreItems>
                        <Checkbox
                            id={propName}
                            label={label}
                            name={propName}
                            isChecked={propValues[propName] || false}
                            onChange={(e) => handlePropChange(propName, e.target.checked)}
                        />
                    </Portion>
                );

            // InputField for text props ===============================================================================
            case "text":
                return (
                    <Portion key={propName}>
                        <InputField
                            type="text"
                            label={label || "Label"}
                            placeholder={label}
                            value={propValues[propName]}
                            onChange={(e) => handlePropChange(propName, e.target.value)}
                            isFullWidth
                        />
                    </Portion>
                );

            default:
                return null;
        }
    }, [propValues, handlePropChange, colorOptions]);

    // Get valid configuration for requested props
    const validProps = propsToConfig.filter(prop => MASTER_PROPS_CONFIG[prop]);

    // Component props based on current values - filter out undefined and select-default values
    const componentProps = Object.fromEntries(
        Object.entries(propValues)
            .filter(([_, value]) => value !== undefined && value !== "select-default"),
    );

    // Return the props configurator function
    const propsConfigurator = () => (
        <Card padding="micro" shape="rounded">
            <Header marginBottom="micro">
                <Heading6 style={{ marginBottom : "4px" }}>
                    Configure props
                </Heading6>
                <Text size="small">
                    This is for individual instances of {componentName}
                </Text>
            </Header>

            <Row marginBottom="none">
                <Portion>
                    <CodeBlock
                        language="jsx"
                        showCopyButton
                        marginBottom="micro"
                    >
                        {generateCodeString()}
                    </CodeBlock>
                </Portion>

                {validProps.map(generateControl)}
            </Row>
        </Card>
    );

    return {
        propsConfigurator,
        componentProps,
        propValues,
    };
};
