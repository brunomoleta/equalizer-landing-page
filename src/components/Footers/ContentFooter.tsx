import { Component, ReactNode } from "react";
import { StyledContentFooter } from "./styles";

interface IContentFooter {
  content: string;
}
class ContentFooter extends Component<IContentFooter> {
  render(): ReactNode {
    const { content } = this.props;
    return <StyledContentFooter>{content}</StyledContentFooter>;
  }
}

export default ContentFooter;
