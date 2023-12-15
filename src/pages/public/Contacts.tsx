/* eslint-disable max-len */
import { PageContainer } from "components/Contacts/PageContainer/PageContainer";
import { ContactFormContainer } from "components/Contacts/ContactFormContainer/ContactFormContainer";
import { OurContacts } from "components/Contacts/OurContacts/OurContacts";
import ContactForm from "components/commonComponents/ContactFormSection/ContactForm/ContactForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const Contacts = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <PageContainer>
      <ContactFormContainer>
        <ContactForm openModal={handleIsOpenModal} />
      </ContactFormContainer>

      <OurContacts />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Повідомлення успішно відправлено
      </ModalSuccess>
    </PageContainer>
  );
};

export default Contacts;
