import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as S from './styles';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Card } from '../../components/Card/styles';
import { ItemDetailsContainer } from './styles';
import { Button } from '../../components';

export default function ItemDetail() {
  const router = useRouter();
  const itemId = router.query.itemId?.toString();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [item, setItem] = useState<any | undefined>();

  useEffect(() => {
    setIsLoading(true);
    ItemServices.getItemDetails(itemId)
      .then((item) => setItem(item))
      .finally(() => setIsLoading(false));
  }, [itemId]);

  return (
    <div className="container">
      {isLoading ? (
        `loading`
      ) : item ? (
        <S.ItemDetailsContainer>
          <div className="d-flex flex-wrap">
            <Image
              src={item.image}
              width={650}
              height={400}
              objectFit="cover"
              alt="Item image"
            />
            <S.ItemDetailsMainInformation>
              <S.ItemDetailsName>{item.name}</S.ItemDetailsName>
              <S.ItemDetailsPrice>{`$${item.price}`}</S.ItemDetailsPrice>
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
      ) : (
        `Item not found`
      )}
    </div>
  );
}
