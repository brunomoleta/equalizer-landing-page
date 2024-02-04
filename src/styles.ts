import { createGlobalStyle } from "styled-components";
import { theme, font } from "./utilities";

const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
  fonts: typeof font;
}>`
    * {
        margin: 0;
        padding: 0;
        boxsing:border-box;
    }
    body {
            overflow:hidden;
        // Mobile 
        @media screen and (max-width:375px){
            background-color:green;
        }

        // Tablet
        @media screen and (min-width:375px){
            background-color:orange;
        }

        // Labtop
        @media screen and (min-width:768px){
            background-color:yellow
        }

        // Desktop
        @media screen and (min-width:1440px){
            background-color:red;
        }
    }
`;

export default GlobalStyles;
