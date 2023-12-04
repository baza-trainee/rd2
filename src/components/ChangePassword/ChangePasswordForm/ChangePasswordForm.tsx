import { Button, Typography } from "@mui/material";
import { Form, Formik, FormikHelpers } from "formik";

import { InputContainer } from "components/ChangePassword/InputContainer/InputContainer";
import { PasswordField } from "components/ChangePassword/PasswordField/PasswordField";

import { validationSchema } from "components/ChangePassword/ChangePasswordForm/validationSchema";

interface NewPasswordForm {
  oldPassword: string;
  newPassword: string;
  newPasswordRepeat: string;
}

interface Props {
  handleOpenModal: () => void;
}

export const ChangePasswordForm = ({ handleOpenModal }: Props) => {
  const handleSubmit = (
    _: NewPasswordForm,
    formikHelpers: FormikHelpers<NewPasswordForm>,
  ) => {
    handleOpenModal();
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ oldPassword: "", newPassword: "", newPasswordRepeat: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <Typography variant="h4" textAlign="center" marginBottom="32px">
          Змінити пароль
        </Typography>

        <InputContainer>
          <PasswordField labelText="Введіть старий пароль*" name="oldPassword" />

          <PasswordField labelText="Введіть новий пароль*" name="newPassword" />

          <PasswordField labelText="Підтвердіть новий пароль*" name="newPasswordRepeat" />
        </InputContainer>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Надіслати
        </Button>
      </Form>
    </Formik>
  );
};
