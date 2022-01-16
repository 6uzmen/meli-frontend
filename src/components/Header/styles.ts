import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${(p) => p.theme.header};
  padding: 10px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;
