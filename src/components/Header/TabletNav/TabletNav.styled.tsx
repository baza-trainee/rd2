import styled from "@emotion/styled";

import { theme } from "theme/theme";

import { DonateButton } from "components/commonComponents/DonateButton/DonateButton";
import { Nav } from "components/commonComponents/Nav/Nav";
import { LanguageMenu } from "components/Header/LanguageMenu/LanguageMenu";

const deliverColor = theme.palette.grey[300];
const closeButtonColor = theme.palette.grey[500];

const TabletContainer = styled.div`
  display: flex;

  @media (min-width: 1280px) {
    display: none;
  }
  & button {
    padding: 0;
  }
  & svg {
    font-size: 2.5rem;
  }
`;

const WrapBlock = styled.div`
  width: 100%;

  @media (min-width: 468px) {
    width: 360px;
  }

  & .MuiIconButton-root {
    position: absolute;
    right: 8px;
    top: 8px;

    color: ${closeButtonColor};
  }
`;

const DonateButtonStyled = styled(DonateButton)`
  width: calc(100% - 32px);
  margin: 66px 16px 32px 16px;
`;
const NavStyled = styled(Nav)`
  display: block;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 66px;

    font-size: 1.125rem;
    color: #151515;

    border-top: 1px solid ${deliverColor};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  a:last-of-type {
    border-bottom: 1px solid ${deliverColor};
  }

  a:first-of-type {
    border-top: 1px solid transparent;
  }

  a:hover {
    background-color: #c6dafc;
    border-top: 1px solid #c6dafc;
  }

  a.active {
    background-color: #c6dafc;
    border-top: 1px solid #c6dafc;

    font-weight: 600;
  }
  a.active + a {
    border-top: 1px solid transparent;
  }
  a.active:last-of-type {
    border-bottom: 1px solid #c6dafc;
  }
`;

const LanguageMenuStyled = styled(LanguageMenu)`
  display: flex;
  justify-content: center;

  margin-top: 15px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export { WrapBlock, DonateButtonStyled, NavStyled, LanguageMenuStyled, TabletContainer };
