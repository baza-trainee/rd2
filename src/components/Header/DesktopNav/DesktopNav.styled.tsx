import styled from "@emotion/styled";

import {Nav} from "../../commonComponents/Nav/Nav";

import {theme} from "../../../theme/theme";

const hoverLinkColor = theme.palette.primary.dark;
const linkColor = theme.palette.primary.main;

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
    color: #151515;

    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }

  a.active {
    color: ${linkColor};
  }
  
  a:hover {
    color: ${hoverLinkColor};
  }

  @media (min-width: 1440px) {
    width: 670px;
  }
`;

export {NavContainer, NavStyled};
