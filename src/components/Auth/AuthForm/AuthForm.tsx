import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormValues } from "types/formValues";
import { UsernameField } from "components/Auth/UsernameField/UsernameField";
import { PasswordField } from "components/Auth/PasswordField/PasswordField";
import { ForgetPassword } from "components/Auth/ForgetPassword/ForgetPassword";
import { validationSchema } from "components/Auth/AuthForm/validationSchema";

export const AuthForm = () => {
  const handleSubmit = (_: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <UsernameField />

        <PasswordField />

        <ForgetPassword />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Вхід
        </Button>
      </Form>
    </Formik>
  );
};
