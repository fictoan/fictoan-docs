"use client";

import React from "react";

import { Heading, HRule, Portion, Row, Table, Text } from "fictoan-react";

import "./page-utilities.css";

const UtilitiesDocs = () => {
    return (
        <>
            <head>
                <title>Utility props — Fictoan documentation</title>
            </head>

            <article id="page-utilities">
                <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h4" marginBottom="small">Utilities</Heading>
                        <Text>
                            A generic set of props you can apply on most elements to do some basic things.
                        </Text>
                    </Portion>
                </Row>

                <Row sidePadding="huge">
                    <Portion>
                        <Text size="large" weight="700" marginBottom="micro">Layout</Text>

                        {/*  BOX MODEL  =============================================================================== */}
                        <Table bordersFor="both" padding="tiny" marginBottom="micro" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>margin</code><br />
                                        <code>marginTop</code><br />
                                        <code>marginRight</code><br />
                                        <code>marginBottom</code><br />
                                        <code>marginLeft</code><br />
                                    </td>

                                    <td>
                                        Margins for the element on all four sides,<br />
                                        and on specific sides
                                    </td>

                                    <td>
                                        <code>nano</code><br />
                                        <code>micro</code><br />
                                        <code>tiny</code><br />
                                        <code>small</code><br />
                                        <code>medium</code><br />
                                        <code>large</code><br />
                                        <code>huge</code>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>padding</code><br />
                                        <code>paddingTop</code><br />
                                        <code>paddingRight</code><br />
                                        <code>paddingBottom</code><br />
                                        <code>paddingLeft</code><br />
                                    </td>

                                    <td>
                                        Paddings for the element on all four sides,<br />
                                        and on specific sides
                                    </td>

                                    <td>
                                        <code>nano</code><br />
                                        <code>micro</code><br />
                                        <code>tiny</code><br />
                                        <code>small</code><br />
                                        <code>medium</code><br />
                                        <code>large</code><br />
                                        <code>huge</code>
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {/*  SIZING  ================================================================================== */}
                        <Table bordersFor="both" padding="tiny" marginBottom="micro" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>isFullWidth</code>
                                    </td>

                                    <td>
                                        Make element 100% width of parent
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>isFullHeight</code>
                                    </td>

                                    <td>
                                        Make element 100% height of parent
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {/*  POSITIONING  ============================================================================= */}
                        <Table bordersFor="both" padding="tiny" marginBottom="micro" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>horizontallyCentreThis</code><br />
                                        <code>horizontallyCenterThis</code>
                                    </td>

                                    <td>
                                        Make element centred on the x-axis
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>verticallyCentreItems</code><br />
                                        <code>verticallyCenterItems</code>
                                    </td>

                                    <td>
                                        Apply to parent to align all children on their vertical centres along the x-axis
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>pushItemsToEnds</code>
                                    </td>

                                    <td>
                                        Apply to parent to push descendents to either end of parent along the x-axis
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        <HRule kind="primary" />

                        {/*  /////////////////////////////////////////////////////////////////////////////////////////  */}
                        {/*  RESPONSIVENESS  */}
                        {/*  /////////////////////////////////////////////////////////////////////////////////////////  */}
                        <Text size="large" weight="700" marginBottom="micro">Responsiveness</Text>

                        {/*  SHOWING  ================================================================================  */}
                        <Table bordersFor="both" padding="tiny" marginBottom="micro" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>showOnlyOnMobile</code>
                                    </td>

                                    <td>
                                        Display element when viewport is less than 600px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>showOnlyOnTabletPortrait</code>
                                    </td>

                                    <td>
                                        Display element when viewport is from 601px until 900px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>showOnlyOnTabletLandscape</code>
                                    </td>

                                    <td>
                                        Display element when viewport is from 901px until 1200px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>showOnlyOnDesktop</code>
                                    </td>

                                    <td>
                                        Display element when viewport more than 1200px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>

                        {/*  HIDING  =================================================================================  */}
                        <Table bordersFor="both" padding="tiny" isFullWidth>
                            <thead className="bg-slate-10">
                                <tr>
                                    <td className="weight-600">Prop</td>
                                    <td className="weight-600">Description</td>
                                    <td className="weight-600">Values</td>
                                    <td className="weight-600">Default</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <code>hideOnMobile</code>
                                    </td>

                                    <td>
                                        Hide when viewport is less than 600px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>hideOnTabletPortrait</code>
                                    </td>

                                    <td>
                                        Hide when viewport is from 601px until 900px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>hideOnTabletLandscape</code>
                                    </td>

                                    <td>
                                        Hide when viewport is from 901px until 1200px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <code>hideOnDesktop</code>
                                    </td>

                                    <td>
                                        Hide when viewport more than 1200px
                                    </td>

                                    <td>
                                        boolean
                                    </td>

                                    <td>
                                        &mdash;
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Portion>
                </Row>
            </article>
        </>
    );
};

export default UtilitiesDocs;
