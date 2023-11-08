import React from "react";

import Container from "@mui/material/Container";

import {ROUTES_ENUM} from "../../types/enums/routes.enum";

import {DonateButton} from "../commonComponents/DonateButton/DonateButton";

import {Logo} from "./Logo/Logo";


import {TabletNav} from "./TabletNav/TabletNav";

import {HeaderToolbar, LanguageMenuStyled, LinkStyled} from "./Header.styled";

import {DesktopNav} from "./DesktopNav/DesktopNav";


export const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <HeaderToolbar>

          <LinkStyled to={ROUTES_ENUM.HOME} >
            <Logo/>
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
