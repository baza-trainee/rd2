import { Typography } from "@mui/material";

import { AuthForm } from "components/Auth/AuthForm/AuthForm";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";

export const Auth = () => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Вхід
      </Typography>

      <AuthForm handleIsOpenModal={handleIsOpenModal} />

      <ModalError handleCloseModal={handleIsOpenModal} isOpenModal={isOpenModal}>
        Ви ввели не вірний логін, або пароль
      </ModalError>
    </>
  );
};

export default Auth;
