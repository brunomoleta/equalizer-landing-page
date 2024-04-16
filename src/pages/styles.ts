import styled from "styled-components";
import { theme, font } from "../utilities";

export const StyledLandingPage = styled.div<{
  theme: typeof theme;
  $font: typeof font;
}>`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;

  // Mobile screen size
  @media screen and (max-width: 767px) {
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // background-color:green;
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    // background-color:blue;
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
  }
`;
export const StyledScreenDetect = styled.section`
  display: inline-block;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -10%);
`;
