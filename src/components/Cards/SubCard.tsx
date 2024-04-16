import { Component, ReactNode } from "react";
import { StyledSubCard } from "./styles";
import PriceLabel from "../Prices/PriceLabel";
import DownloadBtn from "../Buttons/DownloadBtn";
import { Title, Content } from "./styles";
import { Container } from "../Buttons/styles";

interface subCardProps {
  title: string;
  content?: string;
  price?: string;
  unit?: string;
}

export default class SubCard extends Component<subCardProps> {
  onClick = () => {
    console.log("You click");
  };

  render(): ReactNode {
    const { title, content, price, unit } = this.props;
    return (
      <StyledSubCard>
        <Container gap="24px">
          <Title>{title}</Title>
          <Content>{content}</Content>
          <PriceLabel price={price} unit={unit} />
        </Container>
        <Container gap="32px">
          <DownloadBtn label="Android" onClick={this.onClick} />
          <DownloadBtn label="IOS" onClick={this.onClick} />
        </Container>
      </StyledSubCard>
    );
  }
}
