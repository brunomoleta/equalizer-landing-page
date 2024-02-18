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
  width: ${(props) => props.width};
  height: 200px;
  font-size: ${(props) => props.size};
`;

export const StyledDownloadBtn = styled.button<BtnProps>`
  border-radius: 12px;
  background-color: ${(props) =>
    props.label === "Android" ? "#FCFAF9" : "#191826"};
  color: ${(props) => (props.label === "Android" ? "black" : "#FCFAF9")};
  border: none;
  /* width: 333px;
  height: 62px; */
  width:99%;
  height:62px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  text-align: center;
  letter-spacing: -0.18px;

  &:hover {
    background-color: ${(props) =>
      props.label === "Android" ? "#FFB964" : "#66E2DC"};
    transition: 0.38s;
  }

  :nth-child(2) {
    margin-left: 5px;
  }
  :nth-child(3) {
    margin-left: 5px;
    text-transform: capitalize;
  }
  /* mobile screen */
  @media screen and (max-width: 767px) {
    //
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
  }
`;
