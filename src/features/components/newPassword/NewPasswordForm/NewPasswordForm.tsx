import { Form, Formik, FormikHelpers } from "formik";
import { object, ref, string } from "yup";
import { Button } from "@mui/material";

import { FormPasswords } from "types/formPasswords";
import { InputContainer } from "components/Auth/InputContainer/InputContainer";

import { PasswordField } from "features/components/newPassword/PasswordField/PasswordField";

export const NewPasswordForm = () => {
  const validationShema = object({
    password: string(),
    passwordRepeat: string()
      .oneOf([ref("password")], "пароль має співпадать")
      .required("пароль має співпадать"),
  });

  const handleSubmit = (
    _: FormPasswords,
    formikHelpers: FormikHelpers<FormPasswords>,
  ) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ password: "", passwordRepeat: "" }}
      validationSchema={validationShema}
      onSubmit={handleSubmit}
    >
      <Form>
        <InputContainer>
          <PasswordField labelText="Введіть новий пароль*" name="password" />

          <PasswordField labelText="Підтвердіть новий пароль*" name="passwordRepeat" />
        </InputContainer>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Підтвердити
        </Button>
      </Form>
    </Formik>
  );
};
