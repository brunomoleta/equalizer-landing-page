import { Component, ReactNode } from 'react'
// import StyledAndroidBtn from './styles';
import { StyledAndroidBtn } from './styles';

export interface AndroidBtnProps {
    style: {
        color: string;
        height: string;
        width: string;
    };
    content: string | ReactNode;
}


export default class AndroidBtn extends Component<AndroidBtnProps> {
    render() {
        const { style, content } = this.props;
        return (
            <StyledAndroidBtn {...style}>
                {content}
            </StyledAndroidBtn >
        )
    }
}