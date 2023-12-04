/* eslint-disable max-len */
import { useState } from "react";

import { Typography } from "@mui/material";

import { ChangePasswordForm } from "components/ChangePassword/ChangePasswordForm/ChangePasswordForm";
import { FormContainer } from "components/ChangePassword/FormContainer/FormContainer";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";

const ChangePassword = () => {
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
        Змінити пароль
      </Typography>

      <FormContainer>
        <ChangePasswordForm handleOpenModal={handleOpenModal} />
      </FormContainer>

      <ModalSuccess handleCloseModal={handleCloseModal} isOpenModal={isOpenModal}>
        Пароль успішно змінено
      </ModalSuccess>
    </>
  );
};

export default ChangePassword;
