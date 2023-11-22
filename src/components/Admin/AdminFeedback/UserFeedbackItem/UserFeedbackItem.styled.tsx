import styled from "@emotion/styled";

import {Link} from "react-router-dom";

import {theme} from "../../../../theme/theme";

const linkColor = theme.palette.primary.main;
const linkHvrColor = theme.palette.primary.dark;

const ItemWrap = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin-bottom: 10px;
`;

const LinkStyled = styled(Link)`
    color: ${linkColor};
  transition: all 0.5s;
  
  &:hover {
    color: ${linkHvrColor};
  }
`;

export {ItemWrap, LinkStyled}