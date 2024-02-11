import styled from "styled-components";
export const StyledHeader = styled.section`
  width: 100%;
  height: auto;
`;

export const BoxHeaderContent = styled.div`
  width: 327px;
  margin: 0 auto;
  font-family: "IBM Plex Sans";
  height: auto;
  display: block;
  display: flex;
  flex-direction: column;
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
  @media screen and (min-width: 375px) {
    padding: 20px;
    width: 327px;
    margin: 0 auto;
    font-family: "IBM Plex Sans";
    height: auto;
    display: block;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    * {
      margin: 10px 0px;
    }
  }
  @media screen and (max-width: 375px) {
    padding: 20px;
    width: 327px;
    margin: 0 auto;
    font-family: "IBM Plex Sans";
    height: auto;
    display: block;
    display: flex;
    flex-direction: column;
    background-color: lightblue;
    * {
      margin: 10px 0px;
    }
  }
`;

export const StyledFooter = styled.section`
  //
`;
export const StyledCard = styled.section`
  //
`;
