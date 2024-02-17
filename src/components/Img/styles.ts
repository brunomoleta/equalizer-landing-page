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
    top: -220px;
    left: -400px;
  }

  /* Laptop screen */
  @media screen and (min-width:1024px) and (max-width:1439px){
    top:-220px;
    left:-400px;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    top: -200px;
    left: -300px;
  }
`;
