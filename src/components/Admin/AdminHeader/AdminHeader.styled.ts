import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import { LanguageMenu } from "components/Header/LanguageMenu/LanguageMenu";

const HeaderToolbar = styled.div`
  min-height: 128px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0;

  & > button {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media (min-width: 1280px) {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;

export { HeaderToolbar, LinkStyled, LanguageMenuStyled, Wrapper };
