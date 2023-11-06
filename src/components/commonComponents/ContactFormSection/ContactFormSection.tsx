import React, { useState } from "react";

import ContactForm from "./ContactForm";
import ModalSuccessSent from "./ModalSuccessSent";
import { Container, SectionWrapper, Desc } from "./ContactFormSection.styled";

const ContactFormSection: React.FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return <Container>
    <SectionWrapper>
      <Desc> Якщо у вас є питання, зауваження або пропозиції, просимо заповнити
        форму зворотного зв’язку
      </Desc>
      <ContactForm setModal={setIsOpenModal} />
    </SectionWrapper>
    {isOpenModal && <ModalSuccessSent setModal={setIsOpenModal} />}
  </Container>;
};
export default ContactFormSection;
