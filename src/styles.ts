import { createGlobalStyle } from "styled-components";
import { theme, font } from "./utilities";

const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
  fonts: typeof font;
}>`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    body {
        // Mobile 
        @media screen and (max-width:374px){
            background-color:green;
        }

        // Tablet
        @media screen and (min-width:375px) and (max-width:767px){
            background-color:orange;
        }

        // Labtop
        @media screen and (min-width:768px) and (max-width:1439px){
            background-color:yellow
        }

        // Desktop
        @media screen and (min-width:1440px){
            background-color:red;
        }
    }
`;

export default GlobalStyles;
