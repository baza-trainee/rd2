/* eslint-disable max-len */
import { useState } from "react";

import Typography from "@mui/material/Typography";

import { EmailForm } from "components/Admin/ourContacts/EmailForm/EmailForm";
import { OurContactsContainer } from "components/Admin/ourContacts/OurContactsContainer/OurContactsContainer";
import { PhoneForm } from "components/Admin/ourContacts/PhoneForm/PhoneForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";

export const OurContacts = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Контакти
      </Typography>

      <OurContactsContainer>
        <PhoneForm handleOpenModal={handleOpenModal} />
      </OurContactsContainer>

      <OurContactsContainer>
        <EmailForm handleOpenModal={handleOpenModal} />
      </OurContactsContainer>

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        Відредаговано
      </ModalSuccess>
    </>
  );
};

export default OurContacts;
