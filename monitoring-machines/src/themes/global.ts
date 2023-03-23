import { createGlobalStyle } from "styled-components";
import theme from "./styles";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    background: ${theme.color.background};
    font-family: ${theme.fontFamily.primary};
  }


`;
