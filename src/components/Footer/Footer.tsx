import React from "react";

import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import { contactsList } from "components/commonComponents/ContactItem/contactsList";

import { ContactItem } from "components/commonComponents/ContactItem/ContactItem";

import {
  FooterSection,
  Content,
  FooterNav,
  NavWrapper,
  FooterNavigation,
  Address,
  Rights,
} from "./Footer.styled";

import { FooterLogo } from "./FooterLogo/FooterLogo";

import {FooterReports} from "./FooterReports/FooterReports";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const clickHandler = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterSection id="footer">
      <Container maxWidth="xl">

        <Content>
          <FooterLogo />

          <FooterNav>

            <NavWrapper>
              <FooterNavigation className="custom-nav-class" onClick={clickHandler} />
              <FooterReports />
            </NavWrapper>

            <Address>
              {contactsList.map((item) => (
                <ContactItem key={item.id} {...item} />
              ))}
            </Address>

          </FooterNav>
        </Content>

        <Rights>{t("developers")}</Rights>

      </Container>
    </FooterSection>
  );
};
