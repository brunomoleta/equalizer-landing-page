import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import Image from "../components/Img/Image";
import mobilePng from '../assets/bg-main-mobile.png';
import Card from "./sections/Card";
import Footer from "./sections/Footer";
import Header from "./sections/Header";


export default class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage theme={theme} $font={font}>
        <Header />
        <Card />
        <Footer />
        {/* <Header /> */}
        <Image urlImg={mobilePng} />
      </StyledLandingPage>
    );
  }
}

