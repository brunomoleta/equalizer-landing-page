import styled from "styled-components";
export const StyledSubCard = styled.div`
  margin: 0 auto;
  background-color: #fa7453;
  font-family: "IBM Plex Sans";
  font-style: normal;
  padding: 5% 5%;
  border-radius: 20px;
  /* mobile screen */
  @media screen and (max-width: 767px) {
    width: 375px;
    height: 546px;
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
    :nth-child(3) {
      margin: 5% 0;
    }

    :nth-child(4) {
      margin: 5% 0;
    }
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width:399px;
    height:546px;
    border-radius:20px;
    position:relative;
    top:-400px; 
    left:60px;
    z-index:800;
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
  border-radius: 20px;

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
    width: 696px;
    height: 600px;
    margin: 0 auto;
    :nth-child(2) {
      width: 35%;
      position: absolute;
      top: 50%;
      left: 43%;
      transform: translate(-95%, -45%);
    }
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
  }
`;
