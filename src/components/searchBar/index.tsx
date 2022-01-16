import React, { useState } from 'react';
import * as S from './styles';

export default function SerachBar() {
  const [searchInput, setSerachInput] = useState<string>('');

  const handleSearch = () => {};

  return (
    <S.Wrapper>
      <S.SearchInput />
      <S.SearchButton />
    </S.Wrapper>
  );
}
