import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import Container from "@mui/material/Container";

import { contactsList } from "components/commonComponents/ContactItem/contactsList";

import { ContactItem } from "components/commonComponents/ContactItem/ContactItem";

import { rulesList } from "./footerList";

import {
  FooterSection,
  Content,
  FooterNav,
  NavWrapper,
  FooterNavigation,
  RulesList,
  RulesItem,
  Address,
  Rights,
} from "./Footer.styled";

import { FooterLogo } from "./FooterLogo/FooterLogo";
import { FooterModal } from "./FooterModal/FooterModal";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
              <RulesList>
                {rulesList.map(({ id, descKey }) => (
                  <RulesItem key={id} onClick={openModal}>
                    {t(descKey)}
                  </RulesItem>
                ))}
              </RulesList>
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
      <FooterModal onCloseModal={closeModal} open={isModalOpen} />
    </FooterSection>
  );
};
