import styled from "@emotion/styled";

import {Nav} from "../../commonComponents/Nav/Nav";

const NavContainer = styled.div`
    display: none;
  @media (min-width: 1280px) {
    display: flex;
  }
`;

const NavStyled = styled(Nav)`
  display: flex;
  width: 600px;
  justify-content: space-between;
  
  a {
    font-weight: 600;
  }
  
  @media (min-width: 1440px) {
    width: 670px;
  }
`;

export {NavContainer, NavStyled};
