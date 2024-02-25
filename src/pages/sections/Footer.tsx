import { Component } from 'react'
import {StyledFooter} from './styles';
import Logo from '../../components/Logo/Logo';
import { footerContent } from '../../apis/dataContentApis';import ContentFooter from '../../components/Footers/ContentFooter';
import { ContainerIcon } from '../../components/Icons/styles';
import IconFaceBook from '../../components/Icons/IconFaceBook';
import IconIG from '../../components/Icons/IconIG';
import IconX from '../../components/Icons/IconX';
export default class Footer extends Component {
  render() {
    const content= footerContent.content;
    return (
      <StyledFooter>
        <Logo label="Logo" />
        <ContentFooter content={content} />
        <ContainerIcon>
          <IconFaceBook />
          <IconIG />
          <IconX />
        </ContainerIcon>
      </StyledFooter>
    )
  }
}
