import styled from "@emotion/styled";
import {Link} from "react-router-dom";

import {LanguageMenu} from "./LanguageMenu/LanguageMenu";

const HeaderToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  
  padding: 24px 0;
  
  & > button {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 1280px) {
    justify-content: space-between;

    & > button {
      margin-left: 0;
      margin-right: 0;
    }
  }
`;

const LinkStyled = styled(Link)`
    flex-grow: 1;
  
  @media (min-width: 1280px) {
    flex-grow: 0;
  }
`;

const LanguageMenuStyled = styled(LanguageMenu)`
    display: none;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export {HeaderToolbar, LinkStyled, LanguageMenuStyled};