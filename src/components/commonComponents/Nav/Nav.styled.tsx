import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { theme } from "theme/theme";

const hoverLinkColor = theme.palette.primary.dark;
const linkColor = theme.palette.primary.main;

export const NavigationLink = styled(NavLink)`
  color: #151515;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &.active {
    color: ${linkColor};
  }

  &:hover {
    color: ${hoverLinkColor};
  }
`;
