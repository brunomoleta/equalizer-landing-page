import { Component, ReactNode } from "react";
import { StyledCard } from "./styles";
import MainCard from "../../components/Cards/MainCard";

export default class Card extends Component {
  render(): ReactNode {
    return (
      <StyledCard>
        <MainCard />
      </StyledCard>
    );
  }
}
