import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { useMutation } from "react-query";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/NewPassword/InputContainer/InputContainer";
import { PasswordField } from "components/NewPassword/PasswordField/PasswordField";
import { validationSchema } from "components/NewPassword/NewPasswordForm/validationSchema";
import { PasswordCredentials, updatePassword } from "api/updatePassword";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";

interface Props {
  handleOpenModal: () => void;
}

export const NewPasswordForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const mutation = useMutation(
    (credential: PasswordCredentials) => updatePassword(credential),
    {
      onSuccess: () => {
        handleOpenModal();
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
