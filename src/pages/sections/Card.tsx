import { Component, ReactNode } from "react";
import { StyledCard } from "./styles";
import MainCard from "../../components/Cards/MainCard";
import SubCard from "../../components/Cards/SubCard";
import { dataSubCard } from "../../apis/dataContentApis";

export default class Card extends Component {
  render(): ReactNode {
    return (
      <StyledCard>
        <MainCard />
        <SubCard {...dataSubCard} />
      </StyledCard>
    );
  }
}
