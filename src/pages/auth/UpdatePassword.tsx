/* eslint-disable max-len */
import { Typography } from "@mui/material";

import { UpdatePasswordForm } from "components/Auth/UpdatePassword/UpdatePasswordForm/UpdatePasswordForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const UpdatePassword = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <UpdatePasswordForm handleOpenModal={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Пароль успішно відновлено
      </ModalSuccess>
    </>
  );
};

export default UpdatePassword;
