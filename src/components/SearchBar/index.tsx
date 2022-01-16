import React, { useState } from 'react';
import Image from 'next/image';
import searchIcon from '../../public/assets/ic_Search.png';
import * as S from './styles';

interface IProps {
  onSearch: (searchText: string) => void;
}

export default function SearchBar({ onSearch }: IProps) {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <S.SearchBarContainer>
      <S.SearchInput
        size={1}
        value={searchText}
        placeholder="Nunca dejes de buscar"
        onChange={(e) => setSearchText(e.target.value)}
      />
      <S.SearchButton onClick={() => onSearch(searchText)}>
        <Image src={searchIcon} alt="search_icon" />
      </S.SearchButton>
    </S.SearchBarContainer>
  );
}
