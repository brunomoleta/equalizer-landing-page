import { Component, ReactNode } from "react";
import { StyledImageBg } from "./styles";

interface ImgProps {
  urlImg: string;
}

export default class ImageBg extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImageBg alt="" src={urlImg} />;
  }
}
