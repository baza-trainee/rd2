import React from "react";

import Container from "@mui/material/Container";

import {Link} from "react-router-dom";

import {ROUTES_ENUM} from "../../types/enums/routes.enum";

import {Logo} from "../Logo/Logo";

import {DonateButton} from "../DonateButton/DonateButton";

import {TabletNav} from "./TabletNav/TabletNav";

import {HeaderToolbar} from "./Header.styled";

import {LanguageMenu} from "./LanguageMenu/LanguageMenu";

import {DesktopNav} from "./DesktopNav/DesktopNav";


export const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <HeaderToolbar>

          <Link to={ROUTES_ENUM.HOME}>
            <Logo/>
          </Link>

          <DesktopNav />

          <LanguageMenu />

          <DonateButton />

          <TabletNav />

        </HeaderToolbar>

      </Container>
    </header>
  );
};
