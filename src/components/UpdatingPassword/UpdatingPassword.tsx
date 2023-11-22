import { FormikHelpers } from "formik";

import { FormPasswords } from "types/formPasswords";
import { AuthTitle } from "features/components/auth/AuthTitle/AuthTitle";
import { PasswordField } from "features/components/newPassword/PasswordField/PasswordField";
import { NewPasswordForm } from "features/components/newPassword/NewPasswordForm/NewPasswordForm";
import { InputContainer } from "components/Auth/InputContainer/InputContainer";
// import { SubmitButton } from "features/components/auth/SubmitButton/SubmitButton";

import { validationShema } from "./validationShema";

export const UpdatingPassword = () => {
  const handleSubmitChangePassword = (
    values: FormPasswords,
    formikHelpers: FormikHelpers<FormPasswords>,
  ) => {
    formikHelpers.resetForm();
  };
  return (
    <>
      <AuthTitle>Відновити пароль</AuthTitle>
      <NewPasswordForm
        validationSchema={validationShema}
        handleSubmit={handleSubmitChangePassword}
      >
        <InputContainer>
          <PasswordField labelText="Введіть новий пароль*" name="password" />
          <PasswordField labelText="Підтвердіть новий пароль*" name="passwordRepeat" />
        </InputContainer>

        {/* <SubmitButton>Підтвердити</SubmitButton> */}
      </NewPasswordForm>
    </>
  );
};
