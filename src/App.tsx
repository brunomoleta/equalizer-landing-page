import { Component, ReactNode } from "react";
import LandingPage from "./pages/LandingPage";
import GlobalStyles from "./styles";
import {theme,font} from './utilities';

export default class App extends Component {
  render(): ReactNode {
    return (
      <>
      <GlobalStyles theme={theme} fonts={font} />
        <LandingPage />
      </>
    );
  }
}
