//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleBreadcrumb = `<BreadcrumbsWrapper>
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


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleBreadcrumbTheme = `breadcrumbs : {
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
