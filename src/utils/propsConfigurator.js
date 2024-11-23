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
} from "fictoan-react";

// Master configurations for different prop types
const MASTER_PROPS_CONFIG = {
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
    // Initialize state with undefined values instead of "select-default"
    const [propValues, setPropValues] = useState({});

    // Generic handler for prop changes
    const handlePropChange = useCallback((propName, value) => {
        setPropValues(prev => {
            // Only update if value is meaningful
            if (value === "select-default" || value === "none" || value === undefined) {
                const newProps = { ...prev };
                delete newProps[propName];
                return newProps;
            }
            return { ...prev, [propName]: value };
        });
    }, []);

    // Generate JSX code string based on current props
    const generateCodeString = useCallback(() => {
        const props = Object.entries(propValues)
            .filter(([_, value]) => value !== undefined && value !== "select-default")
            .map(([key, value]) => `    ${key}="${value}"`)
            .join("\n");

        return [
            `{/* Paste this in your content file */}`,
            `<${componentName}`,
            props,
            `>`,
            `    {/* Content goes here */}`,
            `</${componentName}>`,
        ].filter(Boolean).join("\n");
    }, [componentName, propValues]);

    // Generate control for a specific prop type
    const generateControl = useCallback((propName) => {
        const config = MASTER_PROPS_CONFIG[propName];
        if (!config) return null;

        const { type, label, options } = config;

        switch (type) {
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
                        <Divider kind="secondary" horizontalMargin="none" verticalMargin="nano" />
                    </Portion>
                );

            case "select":
                const { defaultOption } = config;
                return (
                    <Portion key={propName} desktopSpan="half">
                        <ListBox
                            label={label}
                            options={[
                                {
                                    label: defaultOption,
                                    value: undefined,
                                    disabled: true,
                                    selected: !propValues[propName]
                                },
                                ...colorOptions,
                            ]}
                            value={propValues[propName]}
                            onChange={(value) => handlePropChange(propName, value)}
                            isFullWidth
                        />
                    </Portion>
                );

            case "boolean":
                return (
                    <Portion key={propName} desktopSpan="half">
                        <RadioTabGroup
                            id={propName}
                            label={label}
                            name={propName}
                            options={[
                                { id: `${propName}-false`, value: "false", label: "False" },
                                { id: `${propName}-true`, value: "true", label: "True" },
                            ]}
                            value={propValues[propName]}
                            onChange={(e) => handlePropChange(propName, e.target.value === "true")}
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
                <Heading6 style={{ marginBottom: "4px" }}>
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
