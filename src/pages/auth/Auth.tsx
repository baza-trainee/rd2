import { useEffect } from "react";

import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AuthForm } from "components/Auth/AuthForm/AuthForm";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { AccessTokenService } from "services/AccessTokenService";
import { checkIsTokenValid } from "helpers/auth/checkIsTokenValid";

export const Auth = () => {
  const navigate = useNavigate();
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  useEffect(() => {
    const { getAccessToken } = new AccessTokenService();

    const isValidToken = checkIsTokenValid(getAccessToken());

    if (isValidToken) {
      navigate("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
