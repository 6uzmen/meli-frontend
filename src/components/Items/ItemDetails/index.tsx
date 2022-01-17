import React from 'react';
import { Breadcrumb, Button } from '../..';
import { moneyFormatter } from '../../../utils';
import * as S from './styles';

interface IProps {
  picture: string;
  title: string;
  price: {
    amount: number;
    currency: string;
  };
  description: string;
}

export default function ItemDetails(props: IProps) {
  return (
    <>
      <Breadcrumb items={[]} />
      <S.ItemDetailsContainer>
        <div className="d-flex flex-wrap">
          <S.ItemDetailsImage src={props.picture} alt="Item image" />
          <S.ItemDetailsMainInformation>
            <S.ItemDetailsName>{props.title}</S.ItemDetailsName>
            <S.ItemDetailsPrice>{`${moneyFormatter(
              props.price.amount,
              props.price.currency,
            )}`}</S.ItemDetailsPrice>
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
