import React from 'react';
import { Button } from '../..';
import { moneyFormatter } from '../../../utils';
import * as S from './styles';

interface IProps {
  picture: string;
  title: string;
  price: {
    amount: string;
    currency: string;
    decimals: string;
  };
  description: string;
  condition: string;
  sold_quantity: string;
}

export default function ItemDetails(props: IProps) {
  const soldQuantity = Number(props.sold_quantity);

  let extraInformation = `${props.condition}`;
  if (soldQuantity > 0) {
    extraInformation = extraInformation + ` · ${soldQuantity} vendidos`;
  }

  return (
    <>
      <S.ItemDetailsContainer>
        <div className="d-flex flex-wrap">
          <S.ItemDetailsImageWrapper className="col-12 col-md-7 col-lg-8">
            <S.ItemDetailsImage src={props.picture} alt="Item image" />
          </S.ItemDetailsImageWrapper>
          <S.ItemDetailsMainInformation className="col-12 col-md-5 col-lg-4">
            <S.ItemDetailsExtraInformation>
              {extraInformation}
            </S.ItemDetailsExtraInformation>
            <S.ItemDetailsName>{props.title}</S.ItemDetailsName>
            <S.ItemDetailsWrapper>
              <S.ItemDetailsPrice>{`${moneyFormatter(
                props.price.amount,
                props.price.currency,
              )}`}</S.ItemDetailsPrice>
              <S.ItemDetailsPriceDecimals>
                {props.price.decimals}
              </S.ItemDetailsPriceDecimals>
            </S.ItemDetailsWrapper>
            <Button>Comprar</Button>
          </S.ItemDetailsMainInformation>
        </div>
        <S.ItemDetailsDescriptionContainer>
          <S.ItemDetailsDescriptionTitle>
            Descripcion del Producto
          </S.ItemDetailsDescriptionTitle>
          <S.ItemDetailsDescriptionParagraph>
            {props.description}
          </S.ItemDetailsDescriptionParagraph>
        </S.ItemDetailsDescriptionContainer>
      </S.ItemDetailsContainer>
    </>
  );
}
