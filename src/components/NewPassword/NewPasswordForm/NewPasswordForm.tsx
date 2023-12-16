import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/NewPassword/InputContainer/InputContainer";
import { PasswordField } from "components/NewPassword/PasswordField/PasswordField";
import { validationSchema } from "components/NewPassword/NewPasswordForm/validationSchema";
import { useMutation } from "react-query";
import { updatePassword } from "api/updatePassword";

interface Props {
  handleOpenModal: () => void;
}

export const NewPasswordForm = ({ handleOpenModal }: Props) => {
  const mutation = useMutation(
    (credential: FormPasswords) => updatePassword(credential),
    {
      onSuccess: () => {
        handleOpenModal();
      },

      onError: () => {},
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
      </Form>
    </Formik>
  );
};
