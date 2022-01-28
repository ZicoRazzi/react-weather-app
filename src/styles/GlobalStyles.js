import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before{
  padding: 0; margin: 0; box-sizing: border-box;
}
ul, li{
  list-style: none;
}
a{
  text-decoration: none;
}
button{
  outline: none;
} 

`

export default GlobalStyles