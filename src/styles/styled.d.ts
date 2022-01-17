import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    header: string;
    fontFamily: string;
    buttonPrimary: string;
    buttonDisabled: string;
  }
}
