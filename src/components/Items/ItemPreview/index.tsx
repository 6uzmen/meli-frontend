import React from 'react';
import Image from 'next/image';
import * as S from './styles';
import { moneyFormatter } from '../../utils';
import Link from 'next/link';
import shippingIcon from '../../public/assets/ic_shipping.png';

interface IProps {
  id: string;
  picture: string;
  // location: string;
  price: { currency: string; amount: number };
  title: string;
  free_shipping: boolean;
}

export default function ItemPreview(props: IProps) {
  return (
    <Link href={`/items/${props.id}`}>
      <S.ItemPreviewContainer>
        <S.ItemPreviewImage
          src={props.picture}
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
            {props.free_shipping && (
              <div className="d-flex align-items-center">
                <Image
                  className="align-self-center"
                  src={shippingIcon}
                  alt="Free shipping icon"
                />
              </div>
            )}
            {/* <S.ItemPreviewLocation>{props.location}</S.ItemPreviewLocation> */}
          </S.ItemPreviewPriceContainer>
          <S.ItemPreviewDescription>{props.title}</S.ItemPreviewDescription>
        </S.ItemPreviewInformation>
      </S.ItemPreviewContainer>
    </Link>
  );
}
