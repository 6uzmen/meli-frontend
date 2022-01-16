import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    body: string;
    text: string;
    header: string;
    background: string;
    fontFamily: string;
  }
}
