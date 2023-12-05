import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const NavLinkStyled = styled(NavLink)`
  display: block;
  width: 100%;
  
  color: white;

  svg {
    width: 26px;
  }

  &.active {
    color: #8eb6f8;

    svg {
      path {
        fill: #8eb6f8;
      }
    }
  }
`;

export { NavLinkStyled };
