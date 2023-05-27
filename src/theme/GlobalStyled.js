import { createGlobalStyle } from "styled-components";
import { typeColors } from "./typeColors";

export const theme = typeColors

export const GlobalStyles = createGlobalStyle`


html{
    font-size: 62.5%;
    font-family: 'Patrick Hand SC', cursive;
  }
  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
}
h1{
    font-family: 'Pokemon';
}
a{
    text-decoration: none;
    color: #000000;
}
ul{
    list-style: none;
}

`