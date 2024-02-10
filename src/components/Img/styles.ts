import styled from "styled-components";

export const StyledImage = styled.img`
  //
  position:absolute;
  @media screen and (max-width:375px){
  top:50%;
  left:50%;
  transform:translate(-30%,-68%);
  }
  @media screen and (min-width:375px){
  top:50%;
  left:50%;
  transform:translate(-30%,-70%);

  }
`;
