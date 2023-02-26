import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#fff',
    textColor: '#000'
  };
  
  export const darkTheme = {
    body: '#16151d',
    textColor: '#fff'
  };

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({theme})=>theme.body};
        color: ${({theme})=>theme.textColor};
    }
`

