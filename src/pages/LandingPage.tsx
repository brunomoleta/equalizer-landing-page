import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import Card from "./sections/Card";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Image from "../components/Img/Image";
import bgMobile from '../assets/bg-main-mobile.png';

export default class LandingPage extends Component {
  render() {
    return (
      <StyledLandingPage theme={theme} $font={font}>
        <Header />
        <Image urlImg={bgMobile} />
        <Card />
        <Footer />
      </StyledLandingPage>
    );
  }
}

