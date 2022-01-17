import React from 'react';
import * as S from './styles';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ className, children, ...props }: IProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
