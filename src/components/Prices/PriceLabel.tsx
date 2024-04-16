import * as React from "react";
import { StyledPriceLabel, Price } from "./styles";

export interface IPriceLabelProps {
  price?: string;
  unit?: string;
}

export default class PriceLabel extends React.Component<IPriceLabelProps> {
  public render() {
    const { price, unit } = this.props;
    return (
      <StyledPriceLabel>
        <em>
          <Price>{price}</Price>
          <span> / {unit}</span>
        </em>
      </StyledPriceLabel>
    );
  }
}
