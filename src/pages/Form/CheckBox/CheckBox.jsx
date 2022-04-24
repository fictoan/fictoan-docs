import React, { useEffect } from "react";

import { CheckBox, CodeBlock, Element, Heading, HRule, Portion, Row, Switch, Table, Text } from "fictoan-react";

import { CheckBoxDocsStyled } from "./CheckBox.styled";
import { sampleCheckBox, sampleCheckBoxTheming, sampleSwitch } from "./CodeSamples";

export const CheckBoxDocs = () => {
    useEffect(() => {
        document.title = "CheckBox — Fictoan";

        try {
            window.scroll({
                top  : 0,
                left : 0
            });
        } catch (error) {
            window.scrollTo(0, 0);
        }
    }, []);

    return (
        <CheckBoxDocsStyled>
            <Row sidePadding="huge" marginTop="small" marginBottom="small">
                <Portion>
                    <Heading as="h2" className="text-hue">CheckBox / Switch</Heading>
                </Portion>
            </Row>

            <Row sidePadding="huge">
                <Portion>
                    <Heading as="h3" marginBottom="micro">Props</Heading>

                    <Heading as="h5" marginBottom="nano">Custom props</Heading>
                    <Text>None</Text>

                    <HRule kind="tertiary" marginTop="tiny" marginBottom="tiny" />

                    <Heading as="h5" marginBottom="nano">Shared props</Heading>
                    <Text>None</Text>
                </Portion>
            </Row>

            <HRule sideMargin="huge" />

            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT CHECKBOX */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Default Checkbox</Heading>

                        <Text marginBottom="micro">
                            The <code>CheckBox</code> is a modified default <code>input type="checkbox"</code> element to allow for
                            better usability and styling.
                        </Text>

                        <CodeBlock source={sampleCheckBox} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            It needs all of the above attributes to work, so make sure you add them all.
                        </Text>

                        <CheckBox
                            id="checkbox-1"
                            value="checkbox-1"
                            name="checkbox-1"
                            label="Check me"
                        />

                        <CheckBox
                            id="checkbox-2"
                            value="checkbox-2"
                            name="checkbox-2"
                            label="No, check me"
                        />

                        <CheckBox
                            id="checkbox-3"
                            value="checkbox-3"
                            name="checkbox-3"
                            label="Check me, too!"
                        />
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  DEFAULT CHECKBOX */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="default">
                <Row sidePadding="huge">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Switching to a switch</Heading>

                        <Text marginBottom="micro">
                            The <code>Switch</code> is a modified default <code>CheckBox</code> to act as a toggle
                            switch. It works in the exact same way as the checkbox, but just looks different.
                        </Text>

                        <CodeBlock source={sampleSwitch} language="jsx" />

                        <Text marginTop="micro" marginBottom="micro">
                            It needs all of the above attributes to work, so make sure you add them all.
                        </Text>

                        <Switch
                            id="switch-1"
                            value="switch-1"
                            name="switch-1"
                            label="Toggle me"
                            disabled
                        />

                        <Switch
                            id="switch-2"
                            value="switch-2"
                            name="switch-2"
                            label="No, toggle me"
                        />

                        <Switch
                            id="switch-3"
                            value="switch-3"
                            name="switch-3"
                            label="Toggle me, too!"
                        />
                    </Portion>
                </Row>
            </Element>


            <HRule sideMargin="huge" />


            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            {/*  THEMING  */}
            {/*  /////////////////////////////////////////////////////////////////////////////////////////////  */}
            <Element as="section" id="theming">
                <Row sidePadding="huge" marginBottom="small">
                    <Portion>
                        <Heading as="h3" marginBottom="tiny">Theming</Heading>

                        <CodeBlock source={sampleCheckBoxTheming} language="css" />
                    </Portion>
                </Row>
            </Element>
        </CheckBoxDocsStyled>
    );
}
