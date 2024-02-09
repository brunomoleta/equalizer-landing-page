import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
// import TestBtn from "../components/Buttons/TestBtn";
import DownloadBtn from "../components/Buttons/DownloadBtn";

export default class LandingPage extends Component {
  onClick = () => {
    console.log("Your cliked button");
  };
  render() {
    return (
      <div>
        <StyledLandingPage theme={theme} $font={font}>
          <h1>Hellow Landing Page</h1>
          <DownloadBtn onClick={this.onClick} label="android" />
          <DownloadBtn onClick={this.onClick} label="ios" />
        </StyledLandingPage>
      </div>
    );
  }
}
