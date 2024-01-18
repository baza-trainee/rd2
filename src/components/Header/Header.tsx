import Container from "@mui/material/Container";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import { DonateButton } from "components/commonComponents/DonateButton/DonateButton";
import { Logo } from "components/Header/Logo/Logo";
import { TabletNav } from "components/Header/TabletNav/TabletNav";
import { DesktopNav } from "components/Header/DesktopNav/DesktopNav";

import {
  HeaderToolbar,
  LanguageMenuStyled,
  LinkStyled,
} from "components/Header/Header.styled";

export const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <HeaderToolbar>
          <LinkStyled to={ROUTES_ENUM.HOME}>
            <Logo />
          </LinkStyled>

          <DesktopNav />

          <LanguageMenuStyled />

          <DonateButton />

          <TabletNav />
        </HeaderToolbar>
      </Container>
    </header>
  );
};
