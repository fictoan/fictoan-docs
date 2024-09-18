"use client";

// EXTERNAL DEPS =======================================================================================================
import React, { useEffect, useState } from "react";

// INTERNAL DEPS =======================================================================================================
import {
  Element,
  Row,
  Portion,
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Text,
  Divider,
  InputField,
  Callout,
  Article,
  Switch,
  Checkbox,
  Header,
  Card,
  Form,
  Button,
  Range,
  Select,
} from "fictoan-react";
import { CodeBlock } from "fictoan-react/components";

// COMPONENTS ==========================================================================================================

// STYLES ==============================================================================================================
import "./input-field.css";

// CODE SNIPPETS =======================================================================================================

// DATA ================================================================================================================
import { useThemeVariables } from "../../../utils/useThemeVariables";
import { inputProps } from "./config";
import { colourOptions } from "../../../utils/colours";

const InputFieldDocs = () => {
  useEffect(() => {
    document.title = "Input field — Fictoan";
  }, []);

  // SAMPLE ==========================================================================================================

  // CUSTOMISE =======================================================================================================
  const [label, setLabel] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [helpText, setHelpText] = useState("");
  const [validateThis, setValidateThis] = useState(false);
  const [pattern, setPattern] = useState("");
  const [emailPattern, setEmailPattern] = useState(
    "[a-zA-Z0-9_.+\\-]+@[a-zA-Z0-9\\-]+\\.[a-zA-Z0-9\\-.]+$"
  );
  const [errorText, setErrorText] = useState("");

  // THEME ===========================================================================================================
  const { componentVariables, handleVariableChange, cssVariablesList } =
    useThemeVariables(inputProps.variables);

  return (
    <Article id="page-input-field">
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/* INTRO */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Row horizontalPadding="huge" marginTop="medium" marginBottom="small">
        <Portion>
          <Heading1 marginBottom="tiny">Input field</Heading1>
        </Portion>

        <Portion>
          <Heading4 marginBottom="micro">Characteristics</Heading4>
          <ul>
            <li>
              The input field also forms the styling base for Select, Textarea
              etc.
            </li>
          </ul>
        </Portion>
      </Row>

      <Divider kind="primary" horizontalMargin="huge" verticalMargin="small" />

      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      {/*  CONFIGURATOR */}
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <Row horizontalPadding="small" className="rendered-component">
        {/* DEMO COMPONENT ///////////////////////////////////////////////////////////////////////////////// */}
        <Portion id="component-wrapper">
          <Element
            as="div"
            padding="small"
            shape="rounded"
            bgColour="slate-light-80"
            data-centered-children
          >
            <InputField
              {...(label !== undefined ? { label: label } : {})}
              {...(placeholder !== undefined
                ? { placeholder: placeholder }
                : {})}
              {...(isRequired !== undefined ? { required: isRequired } : {})}
              {...(helpText !== undefined ? { helpText: helpText } : {})}
              {...(validateThis !== undefined
                ? { validateThis: validateThis }
                : {})}
              {...(pattern !== undefined ? { pattern: pattern } : {})}
              {...(errorText !== undefined ? { errorText: errorText } : {})}
            />
          </Element>
        </Portion>

        {/* CONFIGURATOR /////////////////////////////////////////////////////////////////////////////////// */}
        <Portion desktopSpan="half">
          <Form spacing="none">
            <Card padding="micro" shape="rounded">
              <Header
                verticallyCentreItems
                pushItemsToEnds
                marginBottom="micro"
              >
                <Text size="large" weight="700" textColour="white">
                  Customise individually
                </Text>
              </Header>

              <Row marginBottom="none">
                <Portion>
                  <CodeBlock language="jsx" showCopyButton marginBottom="micro">
                    {[
                      `// Paste this in your content file`,
                      `<InputField`,
                      label ? `    label="${label}"` : null,
                      placeholder ? `    placeholder="${placeholder}"` : null,
                      isRequired ? `    required` : null,
                      helpText ? `    helpText="${helpText}"` : null,
                      validateThis ? `    validateThis` : null,
                      pattern ? `    pattern="${pattern}"` : null,
                      errorText ? `    errorText="${errorText}"` : null,
                      `/>`,
                    ]
                      .filter(Boolean)
                      .join("\n")}
                  </CodeBlock>
                </Portion>

                {/* LABEL ========================================================================== */}
                <Portion>
                  <InputField
                    type="text"
                    label="Label"
                    onChange={(e) => setLabel(e.target.value)}
                  />

                  <Divider
                    kind="secondary"
                    horizontalMargin="none"
                    marginTop="micro"
                  />
                </Portion>

                {/* PLACEHOLDER ==================================================================== */}
                <Portion>
                  <InputField
                    type="text"
                    label="Placeholder"
                    onChange={(e) => setPlaceholder(e.target.value)}
                  />

                  <Divider
                    kind="secondary"
                    horizontalMargin="none"
                    marginTop="micro"
                  />
                </Portion>

                {/* REQUIRED ======================================================================= */}
                <Portion>
                  <Checkbox
                    id="checkbox-required"
                    value="checkbox-required"
                    name="checkbox-required"
                    label="Make it a required field"
                    checked={isRequired}
                    onChange={() => setIsRequired(event.target.checked)}
                  />

                  <Divider
                    kind="secondary"
                    horizontalMargin="none"
                    marginTop="micro"
                  />
                </Portion>

                {/* HELP TEXT ====================================================================== */}
                <Portion>
                  <InputField
                    type="text"
                    label="Help text"
                    onChange={(e) => setHelpText(e.target.value)}
                  />

                  <Divider
                    kind="secondary"
                    horizontalMargin="none"
                    marginTop="micro"
                  />
                </Portion>

                {/* REQUIRED ======================================================================= */}
                <Portion>
                  <Checkbox
                    id="checkbox-validate-this"
                    value="checkbox-validate-this"
                    name="checkbox-validate-this"
                    label="I want to validate this input"
                    checked={validateThis}
                    onChange={() => setValidateThis(event.target.checked)}
                  />

                  <Divider
                    kind="secondary"
                    horizontalMargin="none"
                    marginTop="micro"
                  />
                </Portion>

                {/* PATTERN ======================================================================== */}
                {validateThis && (
                  <Portion>
                    <InputField
                      type="text"
                      label="Validation regex pattern"
                      value={pattern}
                      onChange={(e) => setPattern(e.target.value)}
                    />

                    <Button
                      type="button"
                      size="small"
                      kind="tertiary"
                      onClick={() => setPattern(emailPattern)}
                      marginTop="micro"
                    >
                      Use email pattern
                    </Button>

                    <Divider
                      kind="secondary"
                      horizontalMargin="none"
                      marginTop="micro"
                    />
                  </Portion>
                )}

                {/* HELP TEXT ====================================================================== */}
                {validateThis && (
                  <Portion>
                    <InputField
                      type="text"
                      label="Error text"
                      onChange={(e) => setErrorText(e.target.value)}
                    />

                    <Divider
                      kind="secondary"
                      horizontalMargin="none"
                      marginTop="micro"
                    />
                  </Portion>
                )}
              </Row>
            </Card>
          </Form>
        </Portion>

        {/* GLOBAL THEME /////////////////////////////////////////////////////////////////////////////////// */}
        <Portion desktopSpan="half">
          <Card padding="micro" shape="rounded">
            <Form>
              <Header verticallyCentreItems pushItemsToEnds>
                <Text
                  size="large"
                  weight="700"
                  textColour="white"
                  marginBottom="nano"
                >
                  Set values globally
                </Text>
              </Header>

              <Row marginBottom="none">
                <Portion>
                  <CodeBlock
                    source={cssVariablesList}
                    language="css"
                    showCopyButton
                    marginBottom="micro"
                  />
                </Portion>
              </Row>

              {/* COMMON ///////////////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Common
                  </Text>
                </Portion>

                {/* BORDER RADIUS ================================================================== */}
                <Portion desktopSpan="half">
                  <Range
                    label="Border radius"
                    value={
                      componentVariables["input-border-radius-default"].value
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-radius-default",
                        e.target.value
                      )
                    }
                    min={0}
                    max={50}
                    step={1}
                    suffix="px"
                  />
                </Portion>

                {/* BORDER WIDTH =================================================================== */}
                <Portion desktopSpan="half">
                  <Range
                    label="Border width"
                    value={
                      componentVariables["input-border-width-default"].value
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-width-default",
                        e.target.value
                      )
                    }
                    min={0}
                    max={50}
                    step={1}
                    suffix="px"
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* DEFAULT STATE ////////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Default state
                  </Text>
                </Portion>

                {/* BACKGROUND ===================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Background"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-default"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-default", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER ====================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Border"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-default"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-default",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL ========================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Label"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-label-default"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-label-default",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL ========================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Placeholder"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-placeholder-default"]
                        .defaultValue || "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-placeholder-default",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* TEXT =========================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Text"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-text-default"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-text-default", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                <Portion desktopSpan="half" />

                {/* HELP TEXT ====================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Help text"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-helptext"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-helptext", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* HELP TEXT SCALE ================================================================ */}
                <Portion desktopSpan="half">
                  <Range
                    label="Help text scale"
                    value={componentVariables["input-helptext-scale"].value}
                    onChange={(e) =>
                      handleVariableChange(
                        "input-helptext-scale",
                        e.target.value
                      )
                    }
                    min={80}
                    max={100}
                    step={1}
                    suffix="%"
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* FOCUS STATE //////////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Focus state
                  </Text>
                </Portion>

                {/* INPUT FOCUS BACKGROUND ==========================================================*/}
                <Portion desktopSpan="half">
                  <Select
                    label="Input focus background"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-focus"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-focus", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* INPUT FOCUS BORDER ============================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Input focus border"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-focus"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-border-focus", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER WIDTH =================================================================== */}
                <Portion desktopSpan="half">
                  <Range
                    label="Border width"
                    value={componentVariables["input-border-width-focus"].value}
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-width-focus",
                        e.target.value
                      )
                    }
                    min={0}
                    max={50}
                    step={1}
                    suffix="px"
                  />
                </Portion>

                {/* INPUT FOCUS TEXT  ============================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Input focus text"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-text-focus"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-text-focus", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* VALID STATE //////////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Valid state
                  </Text>
                </Portion>

                {/* BACKGROUND VALID =============================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Background valid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-valid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-valid", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER VALID =================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Border valid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-valid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-border-valid", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL VALID ==================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Label valid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-label-valid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-label-valid", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* INVALID STATE ////////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Invalid state
                  </Text>
                </Portion>

                {/* BACKGROUND INVALID ============================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Background invalid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-invalid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-invalid", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER INVALID ================================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Border invalid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-invalid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-invalid",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL INVALID ================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Label invalid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-label-invalid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-label-invalid",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* TEXT INVALID =================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Text invalid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-text-invalid"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-text-invalid", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* ERROR TEXT INVALID ============================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Error text invalid"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-error-text-invalid"]
                        .defaultValue || "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-error-text-invalid",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* DISABLED STATE ///////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Disabled state
                  </Text>
                </Portion>

                {/* BACKGROUND DISABLED ============================================================ */}
                <Portion desktopSpan="half">
                  <Select
                    label="Background disabled"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-disabled"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-disabled", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER DISABLED ================================================================ */}
                <Portion desktopSpan="half">
                  <Select
                    label="Border disabled"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-disabled"]
                        .defaultValue || "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-disabled",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL DISABLED ================================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Label disabled"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-label-disabled"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-label-disabled",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* TEXT DISABLED ================================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Text disabled"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-text-disabled"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-text-disabled",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>
              </Row>

              <Divider kind="secondary" verticalMargin="micro" />

              {/* READ ONLY STATE //////////////////////////////////////////////////////////////////// */}
              <Row marginBottom="none">
                <Portion>
                  <Text weight="700" size="large">
                    Read-only state
                  </Text>
                </Portion>

                {/* BACKGROUND READ-ONLY =========================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Background read only"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-bg-read-only"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange("input-bg-read-only", e.target.value)
                    }
                    isFullWidth
                  />
                </Portion>

                {/* BORDER READ-ONLY =============================================================== */}
                <Portion desktopSpan="half">
                  <Select
                    label="Border read only"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-border-read-only"]
                        .defaultValue || "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-border-read-only",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* LABEL READ-ONLY ================================================================ */}
                <Portion desktopSpan="half">
                  <Select
                    label="Label read only"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-label-read-only"]
                        .defaultValue || "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-label-read-only",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>

                {/* TEXT READ-ONLY ================================================================= */}
                <Portion desktopSpan="half">
                  <Select
                    label="Text read only"
                    options={[
                      {
                        label: "Select a colour",
                        value: "select-a-colour",
                        disabled: true,
                        selected: true,
                      },
                      ...colourOptions,
                    ]}
                    defaultValue={
                      componentVariables["input-text-read-only"].defaultValue ||
                      "select-a-colour"
                    }
                    onChange={(e) =>
                      handleVariableChange(
                        "input-text-read-only",
                        e.target.value
                      )
                    }
                    isFullWidth
                  />
                </Portion>
              </Row>
            </Form>
          </Card>
        </Portion>
      </Row>
    </Article>
  );
};

export default InputFieldDocs;
