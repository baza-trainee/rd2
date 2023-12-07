import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { ModalSuccess } from "../ModalSuccess/ModalSuccess";

import { Container, SectionWrapper, Desc } from "./ContactFormSection.styled";
import ContactForm from "./ContactForm/ContactForm";

const ContactFormSection: React.FC = () => {
  const { t } = useTranslation();

  const [open, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <SectionWrapper>
        <Desc>{t("contacts_block.main_page_title")}</Desc>
        <ContactForm openModal={onOpenModal} />
      </SectionWrapper>

      <ModalSuccess isOpenModal={open} handleCloseModal={onCloseModal}>
        Повідомлення успішно відправлено
      </ModalSuccess>
    </Container>
  );
};
export default ContactFormSection;
