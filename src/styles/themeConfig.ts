import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  body: '#EEEEEE',
  text: '#333333',
  header: '#FFF',
  background: '#363537',
  fontFamily: 'Roboto',
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) => theme.fontFamily};
    transition: all 0.50s linear;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    outline: none;
    border: none;
  }

  button:focus {
    outline: none;
  }

  input {
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
  }

  input::placeholder {
    color: #999999;
    opacity: 1;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 46px;
  }   
`;
