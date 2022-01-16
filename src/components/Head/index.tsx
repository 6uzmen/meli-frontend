import React from 'react';
import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
      <title>Mercado Libre</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.5/mercadolibre/favicon.svg"
        rel="icon"
        data-head-react="true"
      />
      <link
        href="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.5/mercadolibre/180x180.png"
        rel="apple-touch-icon"
        data-head-react="true"
      />
      <meta
        name="description"
        content="Comprá productos con Envío Gratis en el día en Mercado Libre. Encontrá miles de marcas y productos a precios increíbles."
        data-head-react="true"
      />
      <meta
        property="og:image"
        content="https://http2.mlstatic.com/static/org-img/homesnw/mercado-libre.png?v=2"
        data-head-react="true"
      />
    </NextHead>
  );
}
