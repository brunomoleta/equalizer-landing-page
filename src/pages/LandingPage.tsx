import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import DownloadBtn from "../components/Buttons/DownloadBtn";
// import TestBtn from "../components/Buttons/TestBtn";

export default class LandingPage extends Component {
  onClick = () => {
    console.log('Your cliked button');
    // alert('You cliked Download button');
  }

  render() {
    return (
      <div>
        <StyledLandingPage theme={theme} $font={font}>
          <h1>Hellow Landing Page</h1>
          {/* <TestBtn onClick={this.onClick} label='test'/> */}
          <DownloadBtn onClick={this.onClick} label="Android" />
          <DownloadBtn onClick={this.onClick} label="IOS" />
        </StyledLandingPage>
      </div>
    );
  }
}
