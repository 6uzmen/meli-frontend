import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import { moneyFormatter } from '../../utils';

interface IProps {
  picture: string;
  // location: string;
  price: { currency: string; amount: number };
  title: string;
}

export default function ItemPreview(props: IProps) {
  return (
    <S.ItemPreviewContainer>
      <img
        src={`${props.picture}`}
        height={180}
        width={180}
        alt="Item preview image"
        className="itemPreviewImage"
      />
      <S.ItemPreviewInformation>
        <S.ItemPreviewPriceContainer>
          <S.ItemPreviewPrice>{`${moneyFormatter(
            props.price.amount,
            props.price.currency,
          )}`}</S.ItemPreviewPrice>
          {/* <S.ItemPreviewLocation>{props.location}</S.ItemPreviewLocation> */}
        </S.ItemPreviewPriceContainer>
        <S.ItemPreviewDescription>{props.title}</S.ItemPreviewDescription>
      </S.ItemPreviewInformation>
    </S.ItemPreviewContainer>
  );
}
