/* eslint-disable max-len */
import Typography from "@mui/material/Typography";

import { EmailForm } from "components/Admin/OurContacts/EmailForm/EmailForm";
import { PhoneForm } from "components/Admin/OurContacts/PhoneForm/PhoneForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { PageContentWrapper } from "components/Admin/PageContentWrapper/PageContentWrapper";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const OurContacts = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Контакти
      </Typography>

      <PageContentWrapper>
        <PhoneForm handleOpenModal={handleIsOpenModal} />

        <EmailForm handleOpenModal={handleIsOpenModal} />
      </PageContentWrapper>

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Відредаговано
      </ModalSuccess>
    </>
  );
};

export default OurContacts;
