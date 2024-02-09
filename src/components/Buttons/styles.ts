import styled from "styled-components";
// import { BtnProps } from './TestBtn';

export interface BtnProps {
  label?: string;
  color?: string;
  size?: string;
  width?: string;
}

export const StyledTestBtn = styled.button<BtnProps>`
  background-color: ${(props) => props.color};
  width${(props) => props.width};
  height: 200px;
  font-size: ${(props) => props.size};
`;

export const StyledDownloadBtn = styled.button<BtnProps>`
  border-radius: 12px;
  background-color: ${(props) => props.label === "Android" ? "#FCFAF9" : "#191826"};
  color: ${(props) => (props.label === "Android" ? "black" : "#FCFAF9")};
  border: none;
  width: 333px;
  height: 61px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.18px;

  :nth-child(2) {
    margin-left: 5px;
  }
  :nth-child(3) {
    margin-left: 5px;
    text-transform: capitalize;
  }
`;
