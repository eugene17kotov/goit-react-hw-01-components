import styled from "styled-components";

const StyledFriendList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: ${p => p.theme.space[3]}px;
    width: 223px;
    margin-bottom: ${p=>p.theme.space[3]}px;
`

const ListItem = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: ${p => p.theme.space[4]}px;
    box-shadow: ${p => p.theme.shadows.normal};
    padding: ${p => p.theme.space[2]}px;
    padding-left: ${p => p.theme.space[4]}px;
        width: 223px;

`

const OnlineCheck = styled.span`
    width: 10px;
    height: 10px;
    background-color: ${({theme, isOnline}) => isOnline ? theme.colors.green : theme.colors.red};
    border-radius: 50%;
`

const FriendImage = styled.img`
border: ${p=>p.theme.borders.gray};
border-radius: ${p=>p.theme.space[2]}px;`;

const FriendName = styled.p`
font-size: ${p => p.theme.fontSizes.s};
font-weight: ${p=>p.theme.fontWeights.semiBold};`;

export {ListItem, OnlineCheck, StyledFriendList, FriendImage, FriendName}