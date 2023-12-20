/* eslint-disable max-len */
import React, {useState} from "react";

import { PageContainer } from "components/Contacts/PageContainer/PageContainer";
import { ContactFormContainer } from "components/Contacts/ContactFormContainer/ContactFormContainer";
import { OurContacts } from "components/Contacts/OurContacts/OurContacts";
import ContactForm from "components/commonComponents/ContactFormSection/ContactForm/ContactForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

import {ModalError} from "../../components/commonComponents/ModalError/ModalError";

export const Contacts = () => {

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
    <PageContainer>

      <ContactFormContainer>
        <ContactForm openModalError={handleOpenModalError}
                     openModalSuccess={openSuccess.handleIsOpenModal}
        />
      </ContactFormContainer>

      <OurContacts />

        <ModalError isOpenModal={openError} handleCloseModal={handleCloseModalError} >
            {modalText}
        </ModalError>

        <ModalSuccess isOpenModal={openSuccess.isOpenModal}
                      handleCloseModal={openSuccess.handleIsOpenModal}
        >
            Повідомлення успішно відправлено
        </ModalSuccess>

    </PageContainer>
  );
};

export default Contacts;
