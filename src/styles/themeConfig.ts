import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  body: '#EEEEEE',
  text: '#333333',
  header: '#FFE600',
  fontFamily: 'Roboto',
  buttonPrimary: '#3483FA',
  buttonDisabled: '#999999',
};

export const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.body};
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
    font-size: 18px;
    padding: 0 20px;
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
