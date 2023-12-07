/* eslint-disable max-len */
import { useState } from "react";

import { PageContainer } from "components/Contacts/PageContainer/PageContainer";
import { ContactFormContainer } from "components/Contacts/ContactFormContainer/ContactFormContainer";
import { OurContacts } from "components/Contacts/OurContacts/OurContacts";
import ContactForm from "components/commonComponents/ContactFormSection/ContactForm/ContactForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";

export const Contacts = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return (
    <PageContainer>
      <ContactFormContainer>
        <ContactForm openModal={handleOpenModal} />
      </ContactFormContainer>

      <OurContacts />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        Повідомлення успішно відправлено
      </ModalSuccess>
    </PageContainer>
  );
};

export default Contacts;
