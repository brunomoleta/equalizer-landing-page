import { createGlobalStyle } from "styled-components";
import { theme, font } from "./utilities";

const GlobalStyles = createGlobalStyle<{
  theme: typeof theme;
  fonts: typeof font;
}>`
    body {
            overflow:hidden;
        @media screen and (min-width:375px){
            background:${(props) => props.theme.thirdColor};
        }

        @media screen and (min-width:768px){
            background:${(props) => props.theme.firstColor};
        }

        @media screen and (min-width:1440px){
            background:${(props) => props.theme.secoundColor}
        }
    }
`;

export default GlobalStyles;
