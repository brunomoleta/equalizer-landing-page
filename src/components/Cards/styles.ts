import styled from "styled-components";
export const StyledSubCard = styled.div`
  margin: 0 auto;
  background-color: #fa7453;
  font-family: "IBM Plex Sans";
  font-style: normal;
  padding: 32px 40px;
  border-radius: 20px;
  color: #fcfaf9;

  display: flex;
  flex-flow: column;
  gap: 120px;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    /* width: 375px; */
    width: 100%;

    position: absolute;
    top: 1250px;
    color: #fcfaf9;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 399px;

    border-radius: 20px;
    position: absolute;
    top: 850px;
    left: 280px;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 40%;
    height: auto;
    position: absolute;
    top: 45%;
    left: 46%;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    width: 33%;
    position: absolute;
    top: 990px;
    right: 18%;
  }
  @media screen and (min-width: 1920px) {
    width: 28%;
    top: 1100px;
    padding: 3% 3%;
  }
`;
export const StyledMainCard = styled.div`
  background-color: #191826;
  border-radius: 20px;
  margin-block-start: 100px;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    position: relative;
    margin-block-start: 300px;
    /* width: 375px; */
    width: 100%;
    height: 600px;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 600px;
    margin: 0 auto;
    margin-block-start: 180px;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 90%;
    height: 520px;
    margin: 0 auto;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    max-height: 1000px;
    margin: 160px auto;
    height: 600px;
    width: 83%;
  }
`;
export const Title = styled.h2`
  /* mobile screen */
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  display: block;

  @media screen and (max-width: 767px) {
    //
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: block;
    font-weight: 700;
    font-size: 32px;
    line-height: normal;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    //
  }
`;

export const Content = styled.p`
  /* mobile screen */
  color: #fcfaf9;
  font-family: "IBM Plex Sans";
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;

  @media screen and (max-width: 767px) {
    //
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    //
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    //
  }
`;
