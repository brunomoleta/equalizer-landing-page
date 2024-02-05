import styled from 'styled-components';
// import { BtnProps } from './TestBtn';

export interface BtnProps {
  color?: string;
    size?:string;
}


export const StyledTestBtn = styled.button<BtnProps>`
    background-color: ${(props) => props.color};
    width: 200px;
    height: 200px;
    font-size:${(props) => props.size}
`;