/* eslint-disable max-len */
import { Button, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";
import { useMutation } from "react-query";
import { AxiosError } from "axios";

import { InputContainer } from "components/Admin/ChangePassword/InputContainer/InputContainer";
import { PasswordField } from "components/Admin/ChangePassword/PasswordField/PasswordField";
import { validationSchema } from "components/Admin/ChangePassword/ChangePasswordForm/validationSchema";
import { changePassword } from "api/changePassword";
import { PasswordCredentials } from "types/passwordCredentials";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";

interface Props {
  handleOpenModal: () => void;
}

export const ChangePasswordForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const mutation = useMutation(
    (credentials: PasswordCredentials) => changePassword(credentials),
    {
      onSuccess: () => {
        handleOpenModal();
      },
      onError: (error: AxiosError) => {
        if (error.status !== 200) {
          handleIsOpenModal();
        }
      },
    },
  );

  const { isLoading } = mutation;

  const handleSubmit = (
    credentials: PasswordCredentials,
    formikHelpers: FormikHelpers<PasswordCredentials>,
  ) => {
    mutation.mutate(credentials);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ password: "", new_password: "", confirm_password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Typography variant="h4" textAlign="center" marginBottom="32px">
          Змінити пароль
        </Typography>

        <InputContainer>
          <PasswordField labelText="Введіть старий пароль*" name="password" />

          <PasswordField labelText="Введіть новий пароль*" name="new_password" />

          <PasswordField labelText="Підтвердіть новий пароль*" name="confirm_password" />
        </InputContainer>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          {(isLoading && <RequestFallback />) || "Надіслати"}
        </Button>

        <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
          Пароль не було змінено
        </ModalError>
      </Form>
    </Formik>
  );
};
