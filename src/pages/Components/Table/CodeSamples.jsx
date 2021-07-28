//  Code sample 01 ////////////////////////////////////////////////////////////
export const sampleTable = `<Table>
    <thead>
        <tr>
            <td>Header 1</td>
            <td>Header 2</td>
            <td>Header 3</td>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
        </tr>
        <tr>
            <td>Cell 4</td>
            <td>Cell 5</td>
            <td>Cell 6</td>
        </tr>
    </tbody>
</Table>`;


//  Code sample 02 ////////////////////////////////////////////////////////////
export const sampleTableBordersFor = `<Table bordersFor="both" />`;


//  Code sample 03 ////////////////////////////////////////////////////////////
export const sampleTablePadding = `<Table bordersFor="both" padding="tiny" />`;


//  Code sample 04 ////////////////////////////////////////////////////////////
export const sampleTableStripes = `<Table bordersFor="both" padding="tiny" isStriped />`;


//  Code sample 05 ////////////////////////////////////////////////////////////
export const sampleTableFullWidth = `<Table bordersFor="both" padding="tiny" isStriped isHoverable isFullWidth />`;


//  Code sample 06 ////////////////////////////////////////////////////////////
export const sampleTableAlignText = `<Table
    bordersFor="both" padding="tiny"
    isStriped isHoverable isFullWidth
    alignText="centre"
/>`;


//  Code sample 07 ////////////////////////////////////////////////////////////
export const sampleTableTheme = `table : {
    bg      : defaultColours.white,
    text    : customColours.shade,
    border  : defaultColours.slate40,
    striped : {
        header : {
            bg : defaultColours.blue40,
        },
        cell : {
            bg : defaultColours.slate20,
        }
    },
    onHover : {
        bg   : defaultColours.amber20,
        text : customColours.shade
    },
}`;
