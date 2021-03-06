import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Breadcrumb, ItemPreview, Spinner } from '../../components';
import * as S from './styles';

interface IItemsListProps {
  isLoading: boolean;
  items: any[];
  categories: string[];
}

const ItemsList = ({ isLoading, items, categories }: IItemsListProps) => {
  if (isLoading) return <Spinner />;
  if (items)
    return (
      <>
        <Breadcrumb items={categories} />
        <S.ItemsPreviewContainer>
          {items.map((item, index) => (
            <ItemPreview className="ItemPreviewCard" key={item.id} {...item} />
          ))}
        </S.ItemsPreviewContainer>
      </>
    );
  return <></>;
};

export default function Index() {
  const router = useRouter();
  const searchString = router.query.search;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any | undefined>();
  const [categories, setCategories] = useState<any | undefined>();

  useEffect(() => {
    if (searchString) {
      setIsLoading(true);
      ItemServices.getItems(searchString.toString())
        .then((res) => {
          setItems(res.data.items);
          setCategories(res.data.categories);
        })
        .finally(() => setIsLoading(false));
    }
  }, [searchString]);

  return (
    <div className="container">
      <ItemsList isLoading={isLoading} items={items} categories={categories} />
    </div>
  );
}
