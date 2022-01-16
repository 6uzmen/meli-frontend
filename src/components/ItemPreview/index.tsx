import React from 'react';
import Image from 'next/image';
import * as S from './styles';

interface IProps {
  image: string;
  location: string;
  price: string;
  description: string;
}

export default function ItemPreview(props: IProps) {
  return (
    <S.ItemPreviewContainer>
      <Image
        src={props.image}
        height={180}
        width={180}
        alt="Item preview image"
        className="itemPreviewImage"
      />
      <S.ItemPreviewInformation>
        <div>
          <S.ItemPreviewPrice>{`$${props.price}`}</S.ItemPreviewPrice>
          <S.ItemPreviewLocation>{props.location}</S.ItemPreviewLocation>
        </div>
        <S.ItemPreviewDescription>{props.description}</S.ItemPreviewDescription>
      </S.ItemPreviewInformation>
    </S.ItemPreviewContainer>
  );
}
