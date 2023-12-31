import Container from "@mui/material/Container";

import { ROUTES_ENUM } from "types/enums/routes.enum";
import {
  HeaderToolbar,
  LanguageMenuStyled,
  LinkStyled,
  Wrapper,
} from "components/Auth/AuthHeader/AuthHeader.styled";
import { DonateButton } from "components/commonComponents/DonateButton/DonateButton";
import { Logo } from "components/Header/Logo/Logo";

export const AuthHeader = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <HeaderToolbar>
          <LinkStyled to={ROUTES_ENUM.HOME}>
            <Logo />
          </LinkStyled>

          <Wrapper>
            <LanguageMenuStyled />

            <DonateButton />
          </Wrapper>
        </HeaderToolbar>
      </Container>
    </header>
  );
};
