import React, { useState } from "react";

import {useTranslation} from "react-i18next";

import ContactForm from "./ContactForm/ContactForm";
import ModalSuccessSent from "./ModalSuccessSent";
import { Container, SectionWrapper, Desc } from "./ContactFormSection.styled";

const ContactFormSection: React.FC = () => {

  const { t } = useTranslation();

  const [open, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return <Container>

    <SectionWrapper>
      <Desc>{t("contacts_block.main_page_title")}</Desc>
      <ContactForm openModal={onOpenModal} />
    </SectionWrapper>

    <ModalSuccessSent
      open={open}
      onCloseModal={onCloseModal}
    />
  </Container>;
};
export default ContactFormSection;
