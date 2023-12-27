import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/NewPassword/InputContainer/InputContainer";
import { PasswordField } from "components/NewPassword/PasswordField/PasswordField";
import { validationSchema } from "components/NewPassword/NewPasswordForm/validationSchema";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { restorePassword } from "api/restorePassword";
import { PasswordCredentials } from "types/restorePasswordCredentials";
import { RefreshTokenService } from "services/RefreshTokenService";
import { AccessTokenService } from "services/AccessTokenService";

interface Props {
  handleOpenModal: () => void;
}

export const NewPasswordForm = ({ handleOpenModal }: Props) => {
  const navigate = useNavigate();
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const { removeRefreshToken } = new RefreshTokenService();
  const { removeAccessToken } = new AccessTokenService();

  const mutation = useMutation(
    (credential: PasswordCredentials) => restorePassword(credential),
    {
      onSuccess: () => {
        handleOpenModal();

        removeAccessToken();
        removeRefreshToken();

        setTimeout(() => navigate("/admin"), 2e3);
      },

      onError: () => {
        handleIsOpenModal();
      },
    },
  );

  const { isLoading } = mutation;

  const handleSubmit = (
    credentials: FormPasswords,
    formikHelpers: FormikHelpers<FormPasswords>,
  ) => {
    const newCredentials = {
      new_password: credentials.password,
      confirm_password: credentials.confirmPassword,
    };

    mutation.mutate(newCredentials);
  };

  return (
    <Formik
      initialValues={{ password: "", confirmPassword: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputContainer>
          <PasswordField labelText="Введіть новий пароль*" name="password" />

          <PasswordField labelText="Підтвердіть новий пароль*" name="confirmPassword" />
        </InputContainer>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {(isLoading && <RequestFallback />) || "Підтвердити"}
        </Button>

        <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
          Пароль не змінено
        </ModalError>
      </Form>
    </Formik>
  );
};
