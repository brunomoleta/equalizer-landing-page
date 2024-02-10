import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
// import Logo from '../components/Logo/Logo';
import Image from "../components/Img/Image";
import mobilePng from '../assets/bg-main-mobile.png';
// import DownloadBtn from "../components/Buttons/DownloadBtn";



export default class LandingPage extends Component {
  onClick = () => {
    console.log('Your cliked button');
    // alert('You cliked Download button');
  }

  render() {
    return (
      <StyledLandingPage theme={theme} $font={font}>
        {/* <h1>Hello world</h1> */}
        {/* <DownloadBtn label="Android" onClick={this.onClick}/> */}
        {/* <Logo label="equalizer" /> */}
        <Image urlImg={mobilePng} />
      </StyledLandingPage>
    );
  }
}
