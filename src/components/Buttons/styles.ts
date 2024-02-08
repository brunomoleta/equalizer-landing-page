import styled from "styled-components";
// import { BtnProps } from './TestBtn';

export interface BtnProps {
  color?: string;
  size?: string;
  width?: string;
}

export const StyledTestBtn = styled.button<BtnProps>`
  background-color: ${(props) => props.color};
  // width:200px;
  width${(props) => props.width};
  height: 200px;
  font-size: ${(props) => props.size};
`;

export const StyledDownloadBtn = styled.button`
  //
  display: flex;
  // align-items: center;
  // align-items:baseline;
  align-items:center;
  justify-content: center;
`;
