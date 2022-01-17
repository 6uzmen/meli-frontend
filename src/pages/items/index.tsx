import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ItemServices } from '../../services';
import { Card, ItemPreview } from '../../components';

export default function Index() {
  const router = useRouter();
  const searchString = router.query.search?.toString();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [items, setItems] = useState<any | undefined>();

  useEffect(() => {
    setIsLoading(true);
    ItemServices.getItems(searchString)
      .then((items) => setItems(items))
      .finally(() => setIsLoading(false));
  }, [searchString]);

  return (
    <div className="container">
      <Card>
        {items?.map((item, index) => {
          <ItemPreview key={index} {...item} />;
        })}
      </Card>
    </div>
  );
}
