import React, {useState} from "react";

import {useTranslation} from "react-i18next";

import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import ContactForm from "../commonComponents/ContactFormSection/ContactForm/ContactForm";

import {ContactItem} from "../commonComponents/ContactItem/ContactItem";

import ModalSuccessSent from "../commonComponents/ContactFormSection/ModalSuccessSent";

import {
  BlockItem,
  ContactFormBlock,
  ContactsTitleStyled,
  ContentWrapper, FormTitleStyled,
  ItemTitle,
  OurContactsBlock,
  PageWrapper,
} from "./ContactUs.styled";

import {contactsUsList} from "./contactsUsList";

const ContactUs = () => {

  const { t } = useTranslation();

  const [open, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <PageWrapper>
      <Container maxWidth="xl">
        <ContentWrapper>

          <ContactFormBlock>
            <FormTitleStyled variant="h4" align="center">
              { t("contacts_block.contact_page_title")}
            </FormTitleStyled>

            <Typography align="center">
              { t("contacts_block.contact_page_desc")}
            </Typography>

            <ContactForm  openModal={onOpenModal}/>
          </ContactFormBlock>

          <OurContactsBlock>
            <ContactsTitleStyled variant="h4" align="center">
              { t("our_contacts.title")}
            </ContactsTitleStyled>

            {contactsUsList.map((item) => {
              return (
                <BlockItem key={item.info.alt + item.info.id}>
                  <ItemTitle>
                    { t(item.title) }
                  </ItemTitle>

                  <ContactItem {...item.info}/>
                </BlockItem>
              );
            })}


          </OurContactsBlock>

          <ModalSuccessSent
            open={open}
            onCloseModal={onCloseModal}
          />

        </ContentWrapper>
      </Container>
    </PageWrapper>
  );
};

export {ContactUs};