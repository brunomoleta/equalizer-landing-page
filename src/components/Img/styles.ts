import styled from "styled-components";

export const StyledImage = styled.img`
  position: absolute;
  z-index: 1;

  /* mobile screen */
  @media screen and (max-width: 767px) {
    width:55%;
    top:640px;
    left:50%;
    transform:translate(-50%,-50%);
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
  @media screen and (min-width: 1440px) and (max-width:1919px){
    width:22%;
    top:700px;
    left:18%;
  }

  @media screen and (min-width:1920px){
    width:17%;
    top:830px;
    left:18%;
  }
`;
