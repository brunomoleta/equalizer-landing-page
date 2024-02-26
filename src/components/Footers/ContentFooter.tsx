import { Component, ReactNode } from "react";
import { StyledContentFooter } from "./styles";

interface IContentFooter {
  content: string;
}
class ContentFooter extends Component<IContentFooter> {
  render(): ReactNode {
    const { content } = this.props;
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    // const emailMatch = content.match(emailRegex);

    return <StyledContentFooter>{content}</StyledContentFooter>;
  }
}

export default ContentFooter;
