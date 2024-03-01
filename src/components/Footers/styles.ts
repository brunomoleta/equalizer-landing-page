import styled from "styled-components";
export const StyledFooter = styled.footer`
  width: 100%;
  height: auto;
  background-color: black;
  color: white;
`;

export const StyledContentFooter = styled.span`
  display: inline-block;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #191826;
  /* color:red; */
  width: 85%;
  padding: 5% 2%;
        @media screen and (max-width:767px){
          padding: 2% 4%;
        }

        // Tablet
        @media screen and (min-width:768px) and (max-width:1023px){
          grid-area:B;
          padding-left:5%;
        }

        // Labtop
        @media screen and (min-width:1024px) and (max-width:1439px){
            // background-color:yellow;
            /* padding: 5% 5%; */
        }

        // Desktop
        @media screen and (min-width:1440px) and (max-width:1919px){
            // background-color:red;
            /* padding:5% 5%; */
        }
`;

