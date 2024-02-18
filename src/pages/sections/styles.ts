import styled from "styled-components";
export const StyledHeader = styled.section`
  width: 100%;
  height: auto;
  margin-bottom: 20%;
`;

// BoxHeaderContent2

export const StyledBoxHeaderContent = styled.div`
  font-family: "IBM Plex Sans";
  font-style: normal;
  color: #191826;
  display: flex;
  flex-direction: column;
  padding: 5% 3%;
  * {
    margin: 2% 0%;
    z-index: 500;
  }

  //Mobile screen
  @media screen and (max-width: 767px) {
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
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
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
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 5% 5%;
    height: auto;
    :nth-child(1) {
      width: 80%;
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -1px;
    }

    :nth-child(2) {
      width: 80%;
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
    }
  }

  //Desktop screen
  @media screen and (min-width: 1440px) {
    padding-left: 10%;
    :nth-child(1) {
      width: 80%;
      font-weight: 700;
      font-size: 88px;
      line-height: 88px;
      letter-spacing: -1px;
    }

    :nth-child(2) {
      width: 70%;
      font-weight: 400;
      font-size: 20px;
      line-height: 34px;
    }
  }
`;

export const StyledFooter = styled.section`
  // Mobile screen size
  @media screen and (max-width: 767px) {
    // background-color:red;
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // background-color:green;
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    // background-color:blue;
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
  }
  //
`;

export const StyledCard = styled.section`
  margin-top: 40%;

  // Mobile screen size
  @media screen and (max-width: 767px) {
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // background-color:green;
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    // background-color:blue;
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
  }
`;
