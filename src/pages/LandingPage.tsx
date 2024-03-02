import { Component } from "react";
import { StyledLandingPage,StyledScreenDetect } from "./styles";
import { theme, font } from "../utilities";
import Card from "./sections/Card";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import ImageBg from "../components/Img/ImageBg";
import bgMobile from "../assets/bg-main-mobile.png";
import bgTablet from "../assets/bg-main-tablet.png";
import bgDesktop from "../assets/bg-main-desktop.png";

class LandingPage extends Component {
  // Define initial state to hold window dimensions
  state = {
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
  };

  // Function to update window dimensions in state
  updateWindowDimensions = () => {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  // Add event listener to update window dimensions when resized
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  // Remove event listener when component is unmounted
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  render() {
    // Destructure window width and height from state
    const { windowWidth, windowHeight } = this.state;

    // Determine background image based on window width
    let backgroundImage =
      windowWidth <= 767
        ? bgMobile
        : windowWidth <= 1023
        ? bgTablet
        : bgDesktop;

    let screenNow =
      windowWidth <= 767
        ? "Mobile"
        : windowWidth <= 1023
        ? "Tablet"
        : windowWidth <= 1439
        ? "Laptop"
        : "Desktop";

    // Provide a default background image if backgroundImage is undefined
    const defaultBackgroundImage = bgMobile; // Change this to your preferred default

    return (
      <StyledLandingPage theme={theme} $font={font}>
        <ImageBg urlImg={backgroundImage || defaultBackgroundImage} />
        <Header windowWidth={windowWidth} windowHeight={windowHeight} />
        <Card />
        <Footer />
        {/* <StyledScreenDetect>
          <h1>Now device for : {screenNow}</h1>
          <h1>Width of screen: {windowWidth}</h1>
          <h1>Height of screen: {windowHeight}</h1>
        </StyledScreenDetect> */}
      </StyledLandingPage>
    );
  }
}
export default LandingPage;
