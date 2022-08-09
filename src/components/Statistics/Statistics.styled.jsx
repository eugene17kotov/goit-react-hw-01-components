import styled from "styled-components"

const StatisticsTitle = styled.h2`
margin: 0 auto;
padding-top: ${p => p.theme.space[4]}px;
padding-bottom: ${p=>p.theme.space[4]}px;
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p => p.theme.fontWeights.bold};
color: ${p => p.theme.colors.grey};
`;

const StatisticsItem = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.space[2]}px;
    padding: ${p => p.theme.space[3]}px;
    color: ${p => p.theme.colors.white};
    background-color: ${() => `rgb(${Math.floor(Math.random() * 256)}, ${50+ Math.floor(Math.random() * 256)}, ${50+ Math.floor(Math.random() * 256)})`}
`

const ItemLabel = styled.span`
font-size: ${p => p.theme.fontSizes.xs};`;

const ItemPercentage = styled.span`
font-size: ${p => p.theme.fontSizes.s};`;

export { StatisticsItem, StatisticsTitle, ItemLabel, ItemPercentage };