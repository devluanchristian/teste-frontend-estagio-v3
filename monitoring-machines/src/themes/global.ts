import { createGlobalStyle } from "styled-components";
import theme from "./styles";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: ${theme.color.background};
    font-family: ${theme.fontFamily};
}

`;
