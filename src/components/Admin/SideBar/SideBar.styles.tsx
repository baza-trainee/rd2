import styled from "@emotion/styled";
import {NavLink} from "react-router-dom";

const NavLinkStyled = styled(NavLink)`
    color: white;

  svg {
    width: 26px;
  }
  
  &.active {
    color: #8EB6F8;
    
    svg path{
      fill: #8EB6F8;
    }
  }
  
`;

export {NavLinkStyled}