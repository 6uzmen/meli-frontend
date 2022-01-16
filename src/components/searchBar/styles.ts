import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  background-color: white;
  font-size: 18px;
`;

export const SearchButton = styled.button`
  height: 100%;
  background-color: ${(p) => p.theme.body};
`;

export const SearchButtonIcon = styled.div``;
