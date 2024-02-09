import { Component, ReactNode } from "react";
import {StyledImage} from './styles'

interface ImgProps {
  urlImg: string;
}

export default class Image extends Component<ImgProps> {
  render(): ReactNode {
    const { urlImg } = this.props;
    return <StyledImage src={urlImg} />;
  }
}
