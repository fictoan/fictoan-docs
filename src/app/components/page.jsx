"use client";

import React from "react";
import Link from "next/link";

import { Heading, Portion, Row, Text } from "fictoan-react";

const BreadcrumbsDemoDocs = () => {
    return (
        <>
            <head>
                <title>Breadcrumbs demo — Fictoan documentation</title>
            </head>

            <article id="page-breadcrumbs-demo">
                <Row sidePadding="huge" marginTop="medium" marginBottom="small">
                    <Portion>
                        <Heading as="h6" weight="400" marginBottom="micro">
                            This page only exists so that the demo link on the Breadcrumbs components doesn’t return a 404 error.
                        </Heading>

                        <Heading as="h6" weight="400" marginBottom="micro">
                            You’re welcome.
                        </Heading>

                        <Link href="/components/breadcrumbs">
                            &larr; Back to breadcrumbs docs
                        </Link>
                    </Portion>
                </Row>
            </article>
        </>
    );
};

export default BreadcrumbsDemoDocs;
