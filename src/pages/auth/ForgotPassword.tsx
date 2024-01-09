/* eslint-disable max-len */
import { Typography } from "@mui/material";

import { Description } from "components/ForgotPassword/Description/Description";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalSuccess } from "components/commonComponents/ModalSuccess/ModalSuccess";
import { ForgotPasswordForm } from "components/ForgotPassword/ForgotPasswordForm/ForgotPasswordForm";

export const ForgotPassword = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Відновити пароль
      </Typography>

      <Description>
        Для відновлення паролю введіть Вашу електронну адресу. Вам надійде лист із
        посиланням для зміни паролю
      </Description>

      <ForgotPasswordForm handleOpenModalSuccess={handleIsOpenModal} />

      <ModalSuccess isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
        Перейдіть за посиланням, відправленим у листі на Вашу пошту
      </ModalSuccess>
    </>
  );
};

export default ForgotPassword;
