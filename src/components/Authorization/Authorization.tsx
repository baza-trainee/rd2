import { FormikHelpers } from "formik";
import * as Yup from "yup";

import { FormValues } from "types/formValues";
import { AuthContainer } from "features/components/auth/AuthContainer/AuthContainer";
import { AuthForm } from "features/components/auth/AuthForm/AuthForm";
import { UsernameField } from "features/components/auth/UsernameField/UsernameField";
import { PasswordField } from "features/components/auth/PasswordField/PasswordField";
import { ForgetPassword } from "features/components/auth/ForgetPassword/ForgetPassword";
import { SubmitButton } from "features/components/auth/SubmitButton/SubmitButton";
import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";

export const Authorization = () => {
  const validationSchema = Yup.object({
    username: Yup.string().required("введіть вірний логін"),
    password: Yup.string().required("введіть вірний пароль"),
  });

  const handleSubmit = (values: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.resetForm();
  };

  return (
    <AuthContainer>
      <AuthTitle>Вхід</AuthTitle>

      <AuthForm validationSchema={validationSchema} handleSubmit={handleSubmit}>
        <UsernameField />

        <PasswordField />

        <ForgetPassword />

        <SubmitButton>Вхід</SubmitButton>
      </AuthForm>
    </AuthContainer>
  );
};
