import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import TestBtn from "../components/Buttons/TestBtn";

export default class LandingPage extends Component {
  onClick = () => {
    console.log("Your cliked button");
  };
  render() {
    return (
      <div>
        <StyledLandingPage theme={theme} $font={font}>
          <h1>Hellow Landing Page</h1>
          <TestBtn
            color="green"
            label="IOS download"
            size="150px"
            onClick={this.onClick}
          />
          <TestBtn
            color="blue"
            label="androin download"
            size="150px"
            width="400px"
            onClick={this.onClick}
          />
        </StyledLandingPage>
      </div>
    );
  }
}
