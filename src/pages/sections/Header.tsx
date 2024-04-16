import { Component } from "react";
import { StyledHeader } from "./styles";
import Logo from "../../components/Logo/Logo";

export default class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <Logo label="equilizer" />
      </StyledHeader>
    );
  }
}
