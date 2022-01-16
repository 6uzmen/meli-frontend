import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: fit-content;
  overflow: hidden;
  border-radius: 4px;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: white;
`;

export const SearchButton = styled.button`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.body};
`;

export const SearchButtonIcon = styled.div``;
