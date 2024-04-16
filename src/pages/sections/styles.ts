import styled from "styled-components";
export const StyledHeader = styled.header`
  width: 100%;
  height: auto;
  margin-bottom: 20%;
  // Mobile screen size
  @media screen and (max-width: 767px) {
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: revert;
    // background-color:green;
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    // background-color:blue;
    margin-bottom: 10%;
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
    margin-bottom: revert;
  }
`;

// BoxHeaderContent2

export const StyledBoxHeaderContent = styled.section`
  font-family: "IBM Plex Sans";
  font-style: normal;
  color: #191826;
  display: flex;
  flex-direction: column;
  padding: 5% 3%;
  * {
    margin: 2% 0%;
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

export const StyledFooter = styled.footer`
  // Mobile screen size
  @media screen and (max-width: 767px) {
    // background-color:red;
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "A A"
      "B C";
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "A A"
      "B C";
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
  }
  //
`;

export const StyledCard = styled.section`
  margin-top: 100px;
  margin-block-end: 200px;
  // Mobile screen size
  @media screen and (max-width: 767px) {
    margin-bottom: 450px;
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  // Labtop screen size
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    margin-top: 0;
  }

  // Desktop screen size
  @media screen and (min-width: 1440px) {
    // background-color:yellow;
    margin-top: 0;
  }
`;
