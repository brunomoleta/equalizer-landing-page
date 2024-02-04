import React, { Component, ReactNode } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import AndroidBtn from "../components/Buttons/AndroidBtn";

export default class LandingPage extends Component {
  render(): ReactNode {
    return (
      <div>
        <StyledLandingPage theme={theme} $font={font}>
          <h1>Hellow Landing Page</h1>
          <AndroidBtn />
        </StyledLandingPage>
      </div>
    );
  }
}
