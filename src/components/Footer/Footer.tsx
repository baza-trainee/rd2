import React, { useState } from "react";

import Container from "@mui/material/Container";

import {contactsList} from "../commonComponents/ContactItem/contactsList";

import {ContactItem} from "../commonComponents/ContactItem/ContactItem";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <FooterSection id="footer">
      <Container maxWidth="xl">
        <Content>
          <FooterLogo />
          <FooterNav>
            <NavWrapper>
              <FooterNavigation className="custom-nav-class" />
              <RulesList>
                {rulesList.map(({ id, desc }) => (
                  <RulesItem key={id} onClick={openModal}>
                    {desc}
                  </RulesItem>
                ))}
              </RulesList>
            </NavWrapper>
            <Address>
              {contactsList.map(({ id, icon, alt, desc }) => (
                  <ContactItem key={id}
                               icon={icon}
                               alt={alt}
                               desc={desc}
                  />
              ))}
            </Address>
          </FooterNav>
        </Content>
        <Rights>
          Розробка Baza Trainee Ukraine 2023 © Всі права захищені
        </Rights>
      </Container>
      <FooterModal onCloseModal={closeModal} open={isModalOpen} />
    </FooterSection>
  );
};
