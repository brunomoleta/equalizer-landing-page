import { Component, ReactNode } from "react";

interface IContentFooter {
  content: string;
}
class ContentFooter extends Component<IContentFooter> {
  render(): ReactNode {
    const { content } = this.props;
    return <span>{content}</span>;
  }
}

export default ContentFooter;
