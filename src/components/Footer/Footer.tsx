import React, { useState } from "react";
import Container from "@mui/material/Container";

import {
  FooterSection,
  Content,
  FooterNav,
  NavWrapper,
  FooterNavigation,
  RulesList,
  RulesItem,
  Address,
  AddressItem,
  Rights,
} from "./Footer.styled";
import { FooterLogo } from "./FooterLogo/FooterLogo";
import { FooterModal } from "./FooterModal/FooterModal";
import { rulesList, contactsList } from "./footerList";

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
                <AddressItem key={id}>
                  <img src={icon} width={24} height={24} alt={alt} />
                  <span>{desc}</span>
                </AddressItem>
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
