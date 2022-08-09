import styled from "styled-components";

const TableHead = styled.thead`
background-color: ${p => p.theme.colors.blue};
`;

const TableHeadItem = styled.th`
text-align: center;
font-size: ${p => p.theme.fontSizes.xs};
font-weight: ${p => p.theme.fontWeights.semiBold};
text-transform: uppercase;
color: ${p => p.theme.colors.white};
padding: ${p => p.theme.space[4]}px 0;
width: 170px;
:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.white}`};
}
:first-child {  text-align: start;
    padding-left:  ${p => p.theme.space[6]}px;
}
`;

const TableRow = styled.tr`
    :nth-child(even) {
        background-color: ${p=>p.theme.colors.tableAccent};
    }
`

const TableItem = styled.td`
color: ${p => p.theme.colors.grey};
font-size: ${p => p.theme.fontSizes.xs};
text-align: center;
padding: ${p => p.theme.space[4]}px 0;
width: 170px;
:not(:last-child) {
    border-right: ${p => `${p.theme.borders.normal} ${p.theme.colors.tableAccent}`};
}
:first-child {  text-align: start;
    padding-left:  ${p => p.theme.space[6]}px;
}
`;


export { TableHead, TableHeadItem, TableRow, TableItem }