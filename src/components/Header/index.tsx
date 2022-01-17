import Image from 'next/image';
import Router from 'next/router';
import * as S from './styles';
import React from 'react';
import { SearchBar } from '..';
import logoImage from '../../public/assets/Logo_ML.png';

export default function Header() {
  const handleSearch = (searchText: string) => {
    Router.push({
      pathname: '/items',
      query: { search: searchText },
    });
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer className="container">
        <S.LogoWrapper>
          <Image src={logoImage} alt="Mercadolibre Logo" />
        </S.LogoWrapper>
        <SearchBar onSearch={handleSearch} />
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
}
