import styled from "styled-components";
import { theme, font } from "../utilities";

export const StyledLandingPage = styled.section<{ theme: typeof theme; $font: typeof font }>`
  width:100%;
  height:auto;
  // font-family: ${(props) => props.$font.primaryFont}; // Applying the font-family here
  // font-style:normal;
  // font-weight:700;
  // font-size:72px;
  // overflow:hidden;
  :nth-child(1){
    display:inline;
  }
`;