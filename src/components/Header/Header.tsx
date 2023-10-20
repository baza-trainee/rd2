import Container from "@mui/material/Container";

import {Logo} from "../Logo/Logo";

import {DonateButton} from "../DonateButton/DonateButton";

import {HeaderNav} from "./HeaderNav/HeaderNav";

import {HeaderToolbar} from "./Header.styled";

import {LanguageMenu} from "./LanguageMenu/LanguageMenu";


export const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <HeaderToolbar>

          <Logo/>

          <HeaderNav />

          <LanguageMenu />

          <DonateButton />

        </HeaderToolbar>

      </Container>
    </header>
  );
};
