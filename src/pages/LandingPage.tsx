import { Component } from "react";
import { theme, font } from "../utilities";
import { StyledLandingPage } from "./styles";
import Card from "./sections/Card";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Image from "../components/Img/Image";
import bgMobile from "../assets/bg-main-mobile.png";

export default class LandingPage extends Component {
  state = {
    windowWidthState: window.innerWidth,
  };

  updateWindowWidth = () => {
    this.setState({
      windowWidthState: window.innerWidth,
    });
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render() {
    const {windowWidthState} = this.state;
    return (
      <StyledLandingPage theme={theme} $font={font}>
        <Header windowWidth={windowWidthState} />
        <h1>{windowWidthState}</h1>
        <Image urlImg={bgMobile} />
        <Card />
        <Footer />
      </StyledLandingPage>
    );
  }
}
