import styled from "styled-components";
export const StyledSubCard = styled.div`
  width: 375px;
  height: 546px;
  margin: 0 auto;
  background-color: #fa7453;
  font-family: "IBM Plex Sans";
  font-style: normal;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    position: relative;
    top: -210px;
    color: #fcfaf9;
    :nth-child(1) {
      display: block;
      font-weight: 700;
      font-size: 32px;
      line-height: normal;
    }
    :nth-child(2) {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
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
export const StyledMainCard = styled.div`
  background-color: #191826;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    width: 375px;
    height: 600px;
    :nth-child(2) {
      width: 54%;
      position: absolute;
      margin: 0 auto;
      top: 480px;
      left: 83px;
    }
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
