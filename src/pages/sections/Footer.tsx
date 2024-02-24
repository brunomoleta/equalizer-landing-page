import { Component } from 'react'
import {StyledFooter} from './styles';
import Logo from '../../components/Logo/Logo';
import { footerContent } from '../../apis/dataContentApis';import ContentFooter from '../../components/Footers/ContentFooter';
export default class Footer extends Component {
  render() {
    const content= footerContent.content;
    return (
      <StyledFooter>
        <Logo label="Logo" />
        <ContentFooter content={content} />
      </StyledFooter>
    )
  }
}
