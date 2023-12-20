import React, { useState } from "react";

import { useTranslation } from "react-i18next";

import { ModalSuccess } from "../ModalSuccess/ModalSuccess";

import {useIsOpenModal} from "../../../hooks/useIsOpenModal";

import {ModalError} from "../ModalError/ModalError";

import { Container, SectionWrapper, Desc } from "./ContactFormSection.styled";

import ContactForm from "./ContactForm/ContactForm";


const ContactFormSection: React.FC = () => {
  const { t } = useTranslation();

  const openSuccess = useIsOpenModal();
  const [openError, setOpenError] = useState(false);
  const [modalText, setModalText] = useState("");

    const handleOpenModalError = (text:string) => {
        setModalText(text)
        setOpenError(true);
    };

    const handleCloseModalError = () => {
        setOpenError(false);
    };

  return (
    <Container>
      <SectionWrapper>
        <Desc>{t("contacts_block.main_page_title")}</Desc>
        <ContactForm openModalError={handleOpenModalError}
                     openModalSuccess={openSuccess.handleIsOpenModal}
        />
      </SectionWrapper>

      <ModalError isOpenModal={openError} handleCloseModal={handleCloseModalError} >
        {modalText}
      </ModalError>

      <ModalSuccess isOpenModal={openSuccess.isOpenModal}
                    handleCloseModal={openSuccess.handleIsOpenModal}
      >
        Повідомлення успішно відправлено
      </ModalSuccess>

    </Container>
  );
};
export default ContactFormSection;
