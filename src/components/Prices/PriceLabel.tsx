import * as React from "react";
import { StyledPriceLabel } from "./styles";

export interface IPriceLabelProps {
  price?: string;
  unit?: string;
}

export default class PriceLabel extends React.Component<IPriceLabelProps> {
  public render() {
    const { price, unit } = this.props;
    return (
      <StyledPriceLabel>
          <span>{price}</span>
          <span> / {unit}</span>
      </StyledPriceLabel>
    );
  }
}
