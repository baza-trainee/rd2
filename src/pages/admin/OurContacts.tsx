/* eslint-disable max-len */
import { useState } from "react";

import Typography from "@mui/material/Typography";

import { EmailForm } from "components/Admin/ourContacts/EmailForm/EmailForm";

import { PhoneForm } from "components/Admin/ourContacts/PhoneForm/PhoneForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";

import {PageContentWrapper} from "../../components/Admin/PageContentWrapper/PageContentWrapper";

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

        <PageContentWrapper>
            <PhoneForm handleOpenModal={handleOpenModal} />

            <EmailForm handleOpenModal={handleOpenModal} />
        </PageContentWrapper>

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        Відредаговано
      </ModalSuccess>
    </>
  );
};

export default OurContacts;
