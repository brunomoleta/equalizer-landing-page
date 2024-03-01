import styled from "styled-components";


export const StyledLogo = styled.div`
    display:block;
    padding:5% 3%;
    z-index:3;

  /*; mobile screen */
  @media screen and (max-width: 767px) {
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding:3% 3%;
    grid-area:A;
  }

  /* Laptop screen */
  @media screen and (min-width:1024px) and (max-width:1439px){
    padding-left:5%;
    grid-area:A;
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    padding-left:10%;
  }
  
`;