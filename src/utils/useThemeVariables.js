import { useState, useEffect } from "react";

export const useThemeVariables = (variablesStructure) => {
    // STEP 1 — Fetch all the variables for the component directly from the HTML root ==================================
    const getDefaultVariableValues = () => {
        const root = document.documentElement;
        const styles = getComputedStyle(root);

        return Object.entries(variablesStructure).reduce((acc, [key, varStruct]) => {
            const computedValue = styles.getPropertyValue(key).trim();
            let value, unit;

            if (varStruct.type === "value-unit") {
                // Extract the numeric part of the computed value if it exists, otherwise use default value
                const match = computedValue.match(/^(\d+(?:\.\d+)?)/);
                value = match ? parseFloat(match[1]) : varStruct.defaultValue;
                unit = varStruct.unit;
            } else {
                // For non value-unit types
                value = computedValue || varStruct.defaultValue;
                unit = "";
            }

            acc[key] = {
                ...varStruct,
                value : value,
                unit  : unit,
            };

            return acc;
        }, {});
    };

    // This is just for doing column-indent alignment in the CSS code block, heh
    const findLongestVarNameLength = (variables) => {
        return Math.max(...Object.keys(variables).map(varName => varName.length));
    };

    // STEP 2 — Arrange all the variables for use in the CodeBlock =====================================================
    const generateCSSVariablesList = (variables) => {
        const longestVarNameLength = findLongestVarNameLength(variables);
        const variablesString = Object.entries(variables).map(([varName, varDetails]) => {
            let cssValue;
            switch (varDetails.type) {
                case "value-unit":
                    cssValue = `${varDetails.value}${varDetails.unit}`;
                    break;
                case "reference":
                    cssValue = `var(--${varDetails.value})`;
                    break;
                case "string":
                    cssValue = `"${varDetails.value}"`;
                    break;
                default:
                    cssValue = varDetails.value;
            }
            const paddedVarName = varName.padEnd(longestVarNameLength);
            return `--${paddedVarName} : ${cssValue};`;
        }).join("\n");

        return "// Paste this in your theme file\n" + variablesString;
    };

    const [componentVariables, setComponentVariables] = useState(getDefaultVariableValues());
    const [cssVariablesList, setCssVariablesList] = useState(generateCSSVariablesList(componentVariables));

    useEffect(() => {
        setCssVariablesList(generateCSSVariablesList(componentVariables));
    }, [componentVariables, variablesStructure]);

    // STEP 3 — Allow the user to change the values of the variables ===================================================
    const handleVariableChange = (varName, newValue) => {
        setComponentVariables(prevValues => {
            const currentVar = prevValues[varName];
            let updatedVar = { ...currentVar };

            // Check if the current variable is of type "reference" and the newValue is numeric
            // Also, ensure it's meant to be converted to "value-unit" by checking the defaultValue
            if (currentVar.type === "reference" && !isNaN(newValue) && [
                "global-border-width",
                "global-border-radius",
            ].includes(currentVar.defaultValue)) {
                updatedVar = {
                    ...updatedVar,
                    type  : "value-unit",
                    value : newValue,
                    unit  : "px", // Assuming you want to convert these references to pixel values
                };
            } else {
                // For non-special cases, update the value directly
                updatedVar.value = newValue;
            }

            return {
                ...prevValues,
                [varName] : updatedVar,
            };
        });
    };

    // Automatically update CSS variables on the document root
    useEffect(() => {
        Object.entries(componentVariables).forEach(([key, varDetails]) => {
            let cssValue;
            if (varDetails.type === "value-unit") {
                cssValue = `${varDetails.value}${varDetails.unit}`;
            }
            else if (varDetails.type === "reference") {
                cssValue = `var(--${varDetails.value})`;
            }
            else if (varDetails.type === "string") {
                cssValue = `"${varDetails.value}"`;
            }
            else {
                cssValue = varDetails.value;
            }
            document.documentElement.style.setProperty(`--${key}`, cssValue);
        });
    }, [componentVariables]);

    return { componentVariables, handleVariableChange, cssVariablesList };
};

