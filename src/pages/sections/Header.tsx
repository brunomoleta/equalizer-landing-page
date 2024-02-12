import { Component } from 'react'
import { StyledHeader,  StyledBoxHeaderContent } from './styles';
import Logo from '../../components/Logo/Logo'
import { dataHeaderContent } from '../../apis/dataContentApis';
import Image from '../../components/Img/Image';
import bgMobilePng from '../../assets/bg-main-mobile.png';

export default class Header extends Component {

    render() {
        const { title, content } = dataHeaderContent;
        return (
            <StyledHeader>
                <Logo label="equilizer" />
                <StyledBoxHeaderContent>
                    <span>{title}</span>
                    <span>{content}</span>
                </StyledBoxHeaderContent>
                <Image urlImg={bgMobilePng} />
            </StyledHeader>
        )
    }
}
