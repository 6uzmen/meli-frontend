import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(p) => p.theme.header};
  padding: 10px 0;
`;

export const HeaderContainer = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
