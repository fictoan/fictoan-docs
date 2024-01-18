// Code sample 01 //////////////////////////////////////////////////////////////
export const sampleBadge = `<Badge>NEW</Badge>`;

// Code sample 02 //////////////////////////////////////////////////////////////
export const sampleBadgeSibling = `<Element as="div" verticallyCentreItems>
    <Heading as="h6" marginRight="nano">
        Apple sundae
    </Heading>

    <Badge
        shape="curved" size="small"
        bgColour="green-light-60" textColour="green-dark-40"
    >
        NEW
    </Badge>
</Element>`;

// Code sample 03 //////////////////////////////////////////////////////////////
export const sampleBadgeTheming = `--badge-font          : var(--paragraph-font);
--badge-border-radius : var(--global-border-radius);
--badge-border-width  : var(--global-border-width);`;
