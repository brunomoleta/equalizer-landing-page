import { Component, ReactNode } from "react";
import { StyledMainCard } from "./styles";
import VectorCard from "../Vectors/VectorCard";
import cardPng from "../../assets/illustration-app.png";
import Image from "../Img/Image";
export default class MainCard extends Component {
  render(): ReactNode {
    return (
      <StyledMainCard>
        <VectorCard />
        <Image urlImg={cardPng} />
      </StyledMainCard>
    );
  }
}
