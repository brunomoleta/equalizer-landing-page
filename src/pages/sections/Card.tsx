import { Component, ReactNode } from "react";
import { StyledBoxHeaderContent, StyledCard } from "./styles";
import MainCard from "../../components/Cards/MainCard";
import SubCard from "../../components/Cards/SubCard";
import { dataHeaderContent, dataSubCard } from "../../apis/dataContentApis";
import VectorTablet from "../../components/Vectors/VectorTablet";

interface windowWidthState {
  windowWidth: number;
  windowHeight: number;
}

export default class Card extends Component<windowWidthState> {
  render(): ReactNode {
    const { title, content } = dataHeaderContent;
    const { windowWidth } = this.props;
    const shouldRenderVector = windowWidth >= 768;
    return (
      <main>
        <StyledBoxHeaderContent>
          <h1>{title}</h1>
          <p>{content}</p>
        </StyledBoxHeaderContent>
        {shouldRenderVector && <VectorTablet />}
        <StyledCard>
          <MainCard />
          <SubCard {...dataSubCard} />
        </StyledCard>
      </main>
    );
  }
}
