//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleTabs = `<BreadcrumbsWrapper>
    <BreadcrumbItem>
        <NavLink exact to="/">
            Home
        </NavLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
        <NavLink exact to="/components">
            Components
        </NavLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
        <NavLink exact to="/components/breadcrumbs">
            Breadcrumbs
        </NavLink>
    </BreadcrumbItem>
</BreadcrumbsWrapper>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleTabsTabs = `tabs={[
    {
        key     : "string",
        label   : "string",
        content : tabOneContent()
    },
    {
        key     : "string",
        label   : "string",
        content : tabTwoContent()
    },
    {
        key     : "string",
        label   : "string",
        content : tabThreeContent()
    }
]}`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleTabsTheme = `breadcrumbs : {
    wrapper   : {
        bg : defaultColours.white
    },
    item      : {
        text     : customColours.shade,
        active   : customColours.shade,
        inactive : customColours.shade
    },
    separator : {
        text    : defaultColours.slate80,
        content : "\\"/\\""
    }
}`;
