import React from 'react';
import { useRouter } from 'next/router';

export default function ItemDetail() {
  const router = useRouter();
  const itemId = router.query.itemId;
  return <div>Detail {itemId}</div>;
}
