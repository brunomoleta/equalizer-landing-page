import styled from "styled-components";
export const StyledSubCard = styled.div``;
export const StyledMainCard = styled.div`
  background-color: #191826;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    width: 375px;
    height: 600px;
    :nth-child(2) {
        width:70%;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-73%);
    }
  }

  /* Tablet screen  */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }

  /* Laptop screen */
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }

  /* Desktop screen */
  @media screen and (min-width: 1440px) {
  }
`;
