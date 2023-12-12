import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { AccessTokenService } from "services/AccessTokenService";
import { FormValues } from "types/formValues";
import { UsernameField } from "components/Auth/UsernameField/UsernameField";
import { PasswordField } from "components/Auth/PasswordField/PasswordField";
import { ForgetPassword } from "components/Auth/ForgetPassword/ForgetPassword";

import { validationSchema } from "components/Auth/AuthForm/validationSchema";

import { FetchAuthCredentials } from "api/adminAuth";

import { AuthContext } from "routes/layouts/Authorization";
import { signIn } from "api/signIn";
import { useContext } from "react";

export const AuthForm = () => {
  const navigate = useNavigate();
  const { getAccessToken } = new AccessTokenService();
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleSubmit = (value: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    signIn(value)
      .then((_) => {
        if (getAccessToken()) {
          setIsLoggedIn(true);
          navigate("/admin");
        }
      })
      .finally(() => {
        formikHelpers.resetForm();
      });
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
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
