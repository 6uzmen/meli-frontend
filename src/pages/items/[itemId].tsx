import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Breadcrumb, ItemDetails, Spinner } from '../../components';

interface IItemProps {
  isLoading: boolean;
  item: any;
}

const Item = ({ isLoading, item }: IItemProps) => {
  if (isLoading) return <Spinner />;
  if (item)
    return (
      <>
        <Breadcrumb items={item.categories} />
        <ItemDetails {...item} />
      </>
    );
  return <>Item not found</>;
};

export default function Index() {
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
  console.log(item);

  return (
    <div className="container">
      <Item isLoading={isLoading} item={item} />
    </div>
  );
}
