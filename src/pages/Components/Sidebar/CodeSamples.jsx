//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleSidebar = `<ParentContainer>
    <Sidebar></Sidebar> // All links go inside

    <ContentWrapper></ContentWrapper> // All your page content go inside
</ParentContainer>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleSidebarWrapper = `<SidebarWrapper>
    <SidebarHeader></SidebarHeader> // Header
    
    <SidebarLinksWrapper></SidebarLinksWrapper> // All links go inside

    <SidebarFooter></SidebarFooter> // Footer
</SidebarWrapper>`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleSidebarHeader = `<SidebarWrapper>
    <SidebarHeader isSticky></SidebarHeader>
</SidebarWrapper>`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleSidebarFooter = `<SidebarWrapper>
    <SidebarFooter isSticky></SidebarFooter>
</SidebarWrapper>`;


//  Code sample 05 ////////////////////////////////////////////////////////////
let sidebarState;
export const sampleSidebarCollapse = `export const Sidebar = () => {
    const [sidebarState, setSidebarState] = useState("");
    
    const headerOnClick = () => {
        setSidebarState(sidebarState === "collapsed" ? "" : "collapsed");
    }
    
    return (
        <SidebarWrapper className={\`\${sidebarState === "collapsed" ? "collapsed" : ""}\`}>
            <SidebarHeader onClick={headerOnClick}>
            </SidebarHeader>
        </SidebarWrapper>
    )
}`;


//  Code sample 06 ////////////////////////////////////////////////////////////
export const sampleSidebarTheming = `sidebar : {
    isCollapsed : {
        label : {
            text : defaultColours.white,
            bg   : customColours.hue
        }
    },

    body : {
        bg : defaultColours.white
    },

    header : {
        bg           : defaultColours.white,
        borderBottom : defaultColours.slate10,
        logoWidth    : "50%"
    },

    footer : {
        height    : "32px",
        bg        : defaultColours.white,
        borderTop : defaultColours.slate10
    }
},`;
