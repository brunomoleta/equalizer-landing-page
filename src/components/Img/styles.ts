import styled from "styled-components";

export const StyledImage = styled.img`
  position: absolute;
  z-index: 1;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    top: -250px;
    left: 50px;
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width:35%;
    top:600px;
    left:10%;
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
    width:27%;  
    top:680px;
    left:9%;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    width:22%;
    top:700px;
    left:19%;
  }
`;
