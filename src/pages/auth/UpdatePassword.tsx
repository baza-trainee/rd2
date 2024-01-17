/* eslint-disable max-len */
import { Typography } from "@mui/material";

import { PaperContainer } from "components/Auth/PaperContainer/PaperContainer";
import { UpdatePasswordForm } from "components/Auth/UpdatePassword/UpdatePasswordForm/UpdatePasswordForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const UpdatePassword = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <PaperContainer>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <UpdatePasswordForm handleOpenModal={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Пароль успішно відновлено
      </ModalSuccess>
    </PaperContainer>
  );
};

export default UpdatePassword;
