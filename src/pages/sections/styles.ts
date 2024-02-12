import styled from "styled-components";
export const StyledHeader = styled.section`
  width: 100%;
  height: auto;
`;

export const BoxHeaderContent = styled.div`
  width: 327px;
  font-family: "IBM Plex Sans";
  height: auto;
  display: inline-block;
  display: flex;
  flex-direction: column;
  color: #191826;

  * {
    margin: 10px 0px;
  }
  :nth-child(1) {
    font-style: bold;
    font-weight: 700;
    display: block;
    font-size: 40px;
    line-height: 48px;
    letter-spacing: -0.454545px;
  }

  :nth-child(2) {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  /* Mobile scree size */
  @media screen and (max-width: 375px) {
    width: 327px;
    margin: 0 auto;
    font-family: "IBM Plex Sans";
    height: auto;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    * {
      margin: 10px 0px;
    }
  }

  /* Tablet screen size */
  @media screen and (min-width: 375px) {
    width: 379px;
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 64px;
    letter-spacing: -0.727273px;
    margin-left: 25px;
  }

  // labtop screen size
  @media screen and (min-width: 1440px) {
    :nth-child(1) {
      width: 1015px;
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -1px;
    }
  }
`;

// BoxHeaderContent2

export const BoxHeaderContent2 = styled.div`
  font-family: "IBM Plex Sans";
  font-style: normal;
  color: #191826;
  display: flex;
  flex-direction: column;

  * {
    margin: 6% 0;
  }

  //Mobile screen
  @media screen and (max-width: 347px) {
    :nth-child(1) {
      font-weight: 700;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -0.454545px;
    }

    :nth-child(2) {
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
    }
  }

  //Tablet screen
  @media screen and (min-width: 375px) and (max-width: 767px) {
    :nth-child(1) {
      font-weight: 700;
      font-size: 64px;
      line-height: 64px;
      letter-spacing: 0.727273px;
    }

    :nth-child(2) {
      font-weight: 400;
      font-size: 18px;
      line-height: 28px;
    }
  }

  //Laptop screen
  @media screen and (min-width:768px) and (max-width:1439px){ 
    :nth-child(1) {
      color:green;
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -1px;

    }

    :nth-child(2) {
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
    }
  }
  //Desktop screen
  @media screen and (min-width: 1440px) {
    :nth-child(1) {
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -1px;
    }

    :nth-child(2) {
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
  }
`;

export const StyledFooter = styled.section`
  //
`;
export const StyledCard = styled.section`
  //
`;
