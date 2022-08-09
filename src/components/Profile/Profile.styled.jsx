import styled from 'styled-components';

const ProfileImage = styled.img`
  border-radius: 50%;
  border: ${p => p.theme.borders.gray};
  width: 130px;
  height: 130px;
  margin-bottom: ${p => p.theme.space[5]}px;
`;

const Username = styled.p`
  margin-bottom: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  color: ${p => p.theme.colors.black};
`;

const Userinfo = styled.p`
  :last-child {
    margin-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.semiBold};
  }
`;

const StatList = styled.ul`
  display: flex;
  border-top: ${p => p.theme.borders.gray};
`;

const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[2]}px;
  padding: ${p => p.theme.space[4]}px;
  :not(:last-child) {
    border-right: ${p => p.theme.borders.gray};
  }
`;

const StatLabel = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
`;

const StatQuantity = styled.span`
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export {ProfileImage, Username, Userinfo, StatList, StatItem, StatLabel, StatQuantity}