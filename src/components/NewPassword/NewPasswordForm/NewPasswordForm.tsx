import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/NewPassword/InputContainer/InputContainer";
import { PasswordField } from "components/NewPassword/PasswordField/PasswordField";
import { validationSchema } from "components/NewPassword/NewPasswordForm/validationSchema";

interface Props {
  handleOpenModal: () => void;
}

export const NewPasswordForm = ({ handleOpenModal }: Props) => {
  const handleSubmit = (
    _: FormPasswords,
    formikHelpers: FormikHelpers<FormPasswords>,
  ) => {
    formikHelpers.resetForm();
    handleOpenModal();
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
