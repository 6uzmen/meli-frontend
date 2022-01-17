import React from 'react';
import * as S from './styles';

interface IProps {
  items: string[];
}

export default function Breadcrumb({ items }: IProps) {
  return (
    <S.BreadcrumbContainer>
      {items.map((item, index) => {
        <S.BreadcrumbItem key={index}>{item}</S.BreadcrumbItem>;
      })}
    </S.BreadcrumbContainer>
  );
}
