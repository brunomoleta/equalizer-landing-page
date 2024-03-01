import styled from "styled-components";

export const ContainerIcon = styled.div`

  // Mobile screen size
  @media screen and (max-width: 767px) {
    margin: 20px 10px;
    width: 100px;
    display: flex;
    justify-content: space-around;
    height: auto;
  }

  // Teblet screen size
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    // background-color:green;
    margin-right:5%;
    display:flex;
    grid-area:C;
    justify-content:end;
    align-items:center;
    gap:20px;
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
