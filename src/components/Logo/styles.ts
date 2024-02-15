import styled from "styled-components";


export const StyledLogo = styled.div`
    display:block;
    padding:5% 3%;
    z-index:3;

  /* mobile screen */
  @media screen and (max-width: 767px) {
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  /* Laptop screen */
  @media screen and (min-wdith: 1024px) and (max-width: 1439px) {
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
    padding-left:10%;
  }
`;