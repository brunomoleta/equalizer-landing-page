import { Component, ReactNode } from "react";
import { StyledTestBtn } from "./styles";

export interface TesetBtnProps {
  onClick: () => void;
  label: string;
  size?: string;
  color?: string;
  width?: string;
}

export default class TestBtn extends Component<TesetBtnProps> {
  render(): ReactNode {
    const { label, color, ...rest } = this.props;
    return (
      <StyledTestBtn color={color} {...rest}>
        {label}
      </StyledTestBtn>
    );
  }
}
