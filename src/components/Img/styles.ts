import styled from "styled-components";

export const StyledImage = styled.img`
  position: absolute;
  z-index: 1;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    width: 55%;
    top: 640px;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 35%;
    top: 600px;
    left: 10%;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 27%;
    top: 680px;
    left: 9%;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) and (max-width: 1919px) {
    width: 22%;
    top: 700px;
    left: 18%;
  }

  @media screen and (min-width: 1920px) {
    width: 17%;
    top: 830px;
    left: 18%;
  }
`;

export const StyledImageBg = styled.img`
  position: absolute;
  z-index: 1;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    top:-250px;
    left:10px;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width:150%;
    top: -120px;
    right:-70px;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width:140%;
    top:-50px;
    left:-250px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) and (max-width: 1919px) {

  }

  @media screen and (min-width: 1920px) {
    width: 17%;
    top: 830px;
    left: 18%;
  }
`;
