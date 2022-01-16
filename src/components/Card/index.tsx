import React from 'react';
import * as S from './styled';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: IProps) {
  return <S.Card className={`${className}`}>{children}</S.Card>;
}
