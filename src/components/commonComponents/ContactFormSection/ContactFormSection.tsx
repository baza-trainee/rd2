import React, { useState } from "react";

import ContactForm from "./ContactForm";
import ModalSuccessSent from "./ModalSuccessSent";
import { Container, SectionWrapper, Desc } from "./ContactFormSection.styled";

const ContactFormSection: React.FC = () => {
  const [open, setOpenModal] = useState(false);

  const onOpenModal = () => {
    setOpenModal(true);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  return <Container>
    <SectionWrapper>
      <Desc> Якщо у вас є питання, зауваження або пропозиції, просимо заповнити
        форму зворотного зв’язку
      </Desc>
      <ContactForm openModal={onOpenModal} />
    </SectionWrapper>

    <ModalSuccessSent
      open={open}
      onCloseModal={onCloseModal}
    />
  </Container>;
};
export default ContactFormSection;
