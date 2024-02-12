import styled from "styled-components";
import { theme, font } from "../utilities";

export const StyledLandingPage = styled.section<{
  theme: typeof theme;
  $font: typeof font;
}>`

  width: 100%;
  height: 1954px;
  overflow: hidden;

  // Mobile screen size
  @media screen and (max-width: 767px){
    // background-color:red;
  }

  // Teblet screen size
  @media screen and (min-width:768px) and (max-width:1023px){
    
    // background-color:green;
  } 

  // Labtop screen size
  @media screen and (min-width:1024px) and (max-width:1439px){
    // background-color:blue;
  }

  // Desktop screen size
  @media screen and (min-width:1440px){
    // background-color:yellow;
  }


`;
