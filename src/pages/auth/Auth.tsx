import { Button } from "@mui/material";
import { FormikHelpers } from "formik";
import { string, object } from "yup";

import { AuthForm } from "features/components/auth/AuthForm/AuthForm";
import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";
import { ForgetPassword } from "features/components/auth/ForgetPassword/ForgetPassword";
import { PasswordField } from "features/components/auth/PasswordField/PasswordField";
import { UsernameField } from "features/components/auth/UsernameField/UsernameField";
import { FormValues } from "types/formValues";
export const Component = () => {
  const validationSchema = object({
    username: string().required("введіть вірний логін"),
    password: string().required("введіть вірний пароль"),
  });

  const handleSubmit = (_: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.resetForm();
  };

  return (
    <>
      <AuthTitle>Вхід</AuthTitle>

      <AuthForm validationSchema={validationSchema} handleSubmit={handleSubmit}>
        <UsernameField />

        <PasswordField />

        <ForgetPassword />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Вхід
        </Button>
      </AuthForm>
    </>
  );
};

Component.displayName = "Auth";
