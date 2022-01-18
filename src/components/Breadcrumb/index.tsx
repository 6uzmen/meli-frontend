import React from 'react';
import * as S from './styles';

interface IProps {
  items: string[];
}

export default function Breadcrumb({ items }: IProps) {
  return (
    <S.BreadcrumbContainer>
      {items.map((item, index) => {
        return (
          <>
            <S.BreadcrumbWrapper key={index}>
              <S.BreadcrumbItem>{item}</S.BreadcrumbItem>
            </S.BreadcrumbWrapper>
            {index + 1 < items.length && `>`}
          </>
        );
      })}
    </S.BreadcrumbContainer>
  );
}
