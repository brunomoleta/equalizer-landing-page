import { Component } from "react";
import { StyledHeader, StyledBoxHeaderContent } from "./styles";
import Logo from "../../components/Logo/Logo";
import { dataHeaderContent } from "../../apis/dataContentApis";
import VectorTablet from "../../components/Vectors/VectorTablet";

interface windowWidthState {
  windowWidth: number;
}
export default class Header extends Component<windowWidthState> {
  render() {
    const { title, content } = dataHeaderContent;
    const {windowWidth} = this.props;
    const shoudRenderVector = windowWidth >= 768;
    return (
      <StyledHeader>
        <Logo label="equilizer" />
        <StyledBoxHeaderContent>
          <span>{title}</span>
          <span>{content}</span>
        </StyledBoxHeaderContent>
        {shoudRenderVector && <VectorTablet />}
      </StyledHeader>
    );
  }
}
