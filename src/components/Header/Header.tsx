import Container from "@mui/material/Container";

import Button from "@mui/material/Button";


import {Logo} from "../Logo/Logo";

import {Nav} from "../Nav/Nav";

import {HeaderToolbar} from "./Header.styled";

import {LanguageMenu} from "./LanguageMenu/LanguageMenu";


export const Header = () => {
  return (
      <header>
          <Container maxWidth="xl">
              <HeaderToolbar>

                  <Logo/>

                  <Nav/>

                  <LanguageMenu />

                  <Button variant="contained">підтримати</Button>

              </HeaderToolbar>

          </Container>
      </header>
  )
};
