import styled from "styled-components";

// Define a styled component called StyledVector using styled-components
export const StyledVector = styled.div`
    // Set the position of the component to absolute
    position: absolute;
    z-index:400;

    // Media query for mobile screens (max-width: 767px)
    @media screen and (max-width: 767px) {
        // Styles specific to mobile screens can be added here
    }

    // Media query for tablet screens (min-width: 768px) and (max-width: 1023px)
    @media screen and (min-width: 768px) and (max-width: 1023px) {
        top: 0px;
        right: 0px;
    }

    // Media query for laptop screens (min-width: 1024px) and (max-width: 1439px)
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        top:0px;
        right:0px;
    }

    // Media query for desktop screens (min-width: 1440px)
    @media screen and (min-width: 1440px) {
        top:0px;
        right:0px;
    }
`;
