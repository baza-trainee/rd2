import React, {useState} from "react";

import Container from "@mui/material/Container";

import Typography from "@mui/material/Typography";

import ContactForm from "../commonComponents/ContactFormSection/ContactForm";

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
                            Зворотний зв’язок
            </FormTitleStyled>

            <Typography align="center">
                            Ваші відгуки та пропозиції будуть корисними для нас.
            </Typography>

            <ContactForm  openModal={onOpenModal}/>
          </ContactFormBlock>

          <OurContactsBlock>
            <ContactsTitleStyled variant="h4" align="center">
                            Контактні дані
            </ContactsTitleStyled>

            {contactsUsList.map((item) => {
              return (
                <BlockItem key={item.info.alt + item.info.id}>
                  <ItemTitle>
                    {item.title}
                  </ItemTitle>

                  <ContactItem
                    icon={item.info.icon}
                    alt={item.info.alt}
                    desc={item.info.desc}/>
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