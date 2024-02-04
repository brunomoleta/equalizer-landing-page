import React, { Component, ReactNode } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <div>
        <StyledLandingPage theme={theme} font={font}>
          Hello Landing Page
        </StyledLandingPage>
      </div>
    );
  }
}
