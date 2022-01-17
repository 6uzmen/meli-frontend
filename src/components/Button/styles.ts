import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 46px;
  color: white;
  background-color: ${(p) => p.theme.buttonPrimary};
  border-radius: 4px;
`;
