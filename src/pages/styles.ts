import styled from "styled-components";
import { theme, font } from "../utilities";

export const StyledLandingPage = styled.section<{ theme: typeof theme; font: typeof font }>`
  overflow: hidden;
  background-color: ${(props) => props.theme.firstColor};
  font-family: ${(props) => props.font.primaryFont}; // Applying the font-family here
`;