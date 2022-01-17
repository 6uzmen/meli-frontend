import React from 'react';
import * as S from './styles';

export default function Spinner() {
  return (
    <S.SpinnerWrapper>
      <S.Spinner viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="2"
        />
      </S.Spinner>
    </S.SpinnerWrapper>
  );
}
