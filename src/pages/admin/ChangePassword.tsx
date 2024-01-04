/* eslint-disable max-len */
import { Typography } from "@mui/material";

import { ChangePasswordForm } from "components/Admin/ChangePassword/ChangePasswordForm/ChangePasswordForm";
import { FormContainer } from "components/Admin/ChangePassword/FormContainer/FormContainer";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { useIsOpenModal } from "hooks/useIsOpenModal";

const ChangePassword = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Змінити пароль
      </Typography>

      <FormContainer>
        <ChangePasswordForm handleOpenModal={handleIsOpenModal} />
      </FormContainer>

      <ModalSuccess handleCloseModal={handleIsOpenModal} isOpenModal={isOpenModal}>
        Пароль успішно змінено
      </ModalSuccess>
    </>
  );
};

export default ChangePassword;
