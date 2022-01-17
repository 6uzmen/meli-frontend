import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './styles';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Card } from '../../components/Card/styles';
import { ItemDetailsContainer } from './styles';
import { Breadcrumb, Button } from '../../components';
import { moneyFormatter } from '../../utils';

export default function ItemDetail() {
  const router = useRouter();
  const itemId = router.query.itemId?.toString();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [item, setItem] = useState<any | undefined>();

  useEffect(() => {
    setIsLoading(true);
    ItemServices.getItemDetails(itemId)
      .then((res) => setItem(res.data.item))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  return (
    <div className="container">
      {isLoading ? (
        `loading`
      ) : item ? (
        <>
          <Breadcrumb items={[]} />
          <S.ItemDetailsContainer>
            <div className="d-flex flex-wrap">
              <S.ItemDetailsImage src={item.picture} alt="Item image" />
              <S.ItemDetailsMainInformation>
                <S.ItemDetailsName>{item.title}</S.ItemDetailsName>
                <S.ItemDetailsPrice>{`${moneyFormatter(
                  item.price.amount,
                  item.price.currency,
                )}`}</S.ItemDetailsPrice>
                <Button>Comprar</Button>
              </S.ItemDetailsMainInformation>
            </div>
            <S.ItemDetailsDescriptionContainer>
              <S.ItemDetailsDescriptionTitle>
                Descripcion del Producto
              </S.ItemDetailsDescriptionTitle>
              <S.ItemDetailsDescriptionParagraph>
                {item.description}
              </S.ItemDetailsDescriptionParagraph>
            </S.ItemDetailsDescriptionContainer>
          </S.ItemDetailsContainer>
        </>
      ) : (
        `Item not found`
      )}
    </div>
  );
}
