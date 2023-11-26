/* eslint-disable max-len */
import { useState } from "react";

import { PageContainer } from "components/Contacts/PageContainer/PageContainer";
import { ContactFormContainer } from "components/Contacts/ContactFormContainer/ContactFormContainer";
import { OurContacts } from "components/Contacts/OurContacts/OurContacts";
import ModalSuccessSent from "components/commonComponents/ContactFormSection/ModalSuccessSent";
import ContactForm from "components/commonComponents/ContactFormSection/ContactForm/ContactForm";

export const Component = () => {
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

      <ModalSuccessSent open={isOpenModal} onCloseModal={handleCloseModal} />
    </PageContainer>
  );
};

Component.displayName = "Contacts";
