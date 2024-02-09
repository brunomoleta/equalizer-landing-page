import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import DownloadBtn from "../components/Buttons/DownloadBtn";
import Logo from '../components/Logo/Logo';


export default class LandingPage extends Component {
  onClick = () => {
    console.log('Your cliked button');
    // alert('You cliked Download button');
  }

  render() {
    return (
      <div>
        <StyledLandingPage theme={theme} $font={font}>
          <Logo label="equalizer" />          
          <DownloadBtn onClick={this.onClick} label="Android" />
          <DownloadBtn onClick={this.onClick} label="IOS" />
        </StyledLandingPage>
      </div>
    );
  }
}
