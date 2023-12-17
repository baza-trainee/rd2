import { Typography } from "@mui/material";

import { NewPasswordForm } from "components/NewPassword/NewPasswordForm/NewPasswordForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const NewPassword = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <NewPasswordForm handleOpenModal={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Пароль успішно відновлено
      </ModalSuccess>
    </>
  );
};

export default NewPassword;
