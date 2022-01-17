import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Breadcrumb, Card, ItemPreview } from '../../components';
import * as S from './styles';

export default function Index() {
  const router = useRouter();
  const searchString = router.query.search?.toString();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any | undefined>();

  useEffect(() => {
    setIsLoading(true);
    ItemServices.getItems(searchString)
      .then((res) => setItems(res.data.items))
      .finally(() => setIsLoading(false));
  }, [searchString]);

  return (
    <div className="container">
      {isLoading ? (
        `loading`
      ) : items ? (
        <>
          <Breadcrumb items={[]} />
          <S.ItemsPreviewContainer>
            {items.map((item, index) => (
              <ItemPreview key={item.id} {...item} />
            ))}
          </S.ItemsPreviewContainer>
        </>
      ) : (
        `No results`
      )}
    </div>
  );
}
