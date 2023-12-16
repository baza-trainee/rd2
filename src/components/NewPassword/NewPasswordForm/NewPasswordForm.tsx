import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";
import { useMutation } from "react-query";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/NewPassword/InputContainer/InputContainer";
import { PasswordField } from "components/NewPassword/PasswordField/PasswordField";
import { validationSchema } from "components/NewPassword/NewPasswordForm/validationSchema";
import { updatePassword } from "api/updatePassword";
import { ModalError } from "components/commonComponents/ModalError/ModalError";
import { useIsOpenModal } from "hooks/useIsOpenModal";

interface Props {
  handleOpenModal: () => void;
}

export const NewPasswordForm = ({ handleOpenModal }: Props) => {
  const { isOpenModal, handleIsOpenModal } = useIsOpenModal();

  const mutation = useMutation(
    (credential: FormPasswords) => updatePassword(credential),
    {
      onSuccess: (data) => {
        if (data?.status === 200) {
          handleOpenModal();
        }

        throw new Error("Password was not changed");
      },

      onError: () => {
        handleIsOpenModal();
      },
    },
  );

  const { isLoading } = mutation;

  const handleSubmit = (credentials: FormPasswords, _: FormikHelpers<FormPasswords>) => {
    mutation.mutate(credentials);
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
          Підтвердити
        </Button>

        <ModalError isOpenModal={isOpenModal} handleCloseModal={handleIsOpenModal}>
          Пароль не змінено
        </ModalError>
      </Form>
    </Formik>
  );
};
