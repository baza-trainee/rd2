import { Typography } from "@mui/material";

import { NewPasswordForm } from "components/NewPassword/NewPasswordForm/NewPasswordForm";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useState } from "react";

export const NewPassword = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  const handleCloseModal = () => {
    setIsOpenModal((prev) => !prev);
  };

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <NewPasswordForm handleOpenModal={handleOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleCloseModal}>
        Пароль успішно відновлено
      </ModalSuccess>
    </>
  );
};

export default NewPassword;
