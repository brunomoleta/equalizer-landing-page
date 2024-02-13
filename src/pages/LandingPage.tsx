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
    windowHeightState: window.innerHeight, 
  };

  updateWindowWidth = () => {
    this.setState({
      windowWidthState: window.innerWidth,
      windowHeightState: window.innerHeight, 
    });
  };

  componentDidMount(): void {
    window.addEventListener("resize", this.updateWindowWidth);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this.updateWindowWidth);
  }

  render() {
    const {windowWidthState,windowHeightState} = this.state;
    return (
      <StyledLandingPage theme={theme} $font={font}>
        <Header windowWidth={windowWidthState} windowHeight={windowHeightState} />
        <h1>width screen now : {windowWidthState}</h1>
        <h1>height screen now: {windowHeightState}</h1>
        <Image urlImg={bgMobile} />
        <Card />
        <Footer />
      </StyledLandingPage>
    );
  }
}
