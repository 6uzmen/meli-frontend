import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, defaultTheme } from '../styles/themeConfig';
import '../styles/globalStyles.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Head, Header } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Head />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
