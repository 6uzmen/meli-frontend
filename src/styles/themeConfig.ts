import { createGlobalStyle } from 'styled-components';

export const defaultTheme = {
  body: '#EEEEEE',
  text: '#333',
  header: '#FFF',
  background: '#363537',
  fontFamily: 'Roboto',
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${defaultTheme.fontFamily};
    transition: all 0.50s linear;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    font-family: Roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  h1 {
  font-size: 46px;
  }   
`;
