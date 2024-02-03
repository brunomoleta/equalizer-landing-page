import { createGlobalStyle } from "styled-components";
import { theme, font } from "./utilities";

const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
  fonts: typeof font;
}>`
    body {
            overflow:hidden;
        @media screen and (min-width:375px){
            background-color:green;
        }

        @media screen and (min-width:768px){
            background-color:yellow
        }

        @media screen and (min-width:1440px){
            background-color:red;
        }
    }
`;

export default GlobalStyles;
