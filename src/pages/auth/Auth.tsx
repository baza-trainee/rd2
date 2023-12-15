import { Typography } from "@mui/material";

import { AuthForm } from "components/Auth/AuthForm/AuthForm";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useState } from "react";

export const Auth = () => {
  const [isOpenModalError, setIsOpenModalError] = useState<boolean>(false);

  const handleIsOpenModal = () => {
    setIsOpenModalError((prev) => !prev);
  };

  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Вхід
      </Typography>

      <AuthForm handleIsOpenModal={handleIsOpenModal} />

      <ModalError handleCloseModal={handleIsOpenModal} isOpenModal={isOpenModalError}>
        Ви ввели не вірний логін, або пароль
      </ModalError>
    </>
  );
};

export default Auth;
