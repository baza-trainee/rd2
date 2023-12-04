import { useContext } from "react";

import { Form, Formik, FormikHelpers } from "formik";

import { Button } from "@mui/material";

import { FormValues } from "types/formValues";
import { UsernameField } from "components/Auth/UsernameField/UsernameField";
import { PasswordField } from "components/Auth/PasswordField/PasswordField";
import { ForgetPassword } from "components/Auth/ForgetPassword/ForgetPassword";

import { validationSchema } from "components/Auth/AuthForm/validationSchema";

import { useNavigate } from "react-router-dom";

import { FetchAuthCredentials } from "../../../api/adminAuth";

import { AuthContext } from "../../../routes/layouts/Authorization";

export const AuthForm = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (_: FormValues, formikHelpers: FormikHelpers<FormValues>) => {
    console.log(_);
    FetchAuthCredentials(_).then((response) => {
      if (response) {
        setIsLoggedIn(true);
        formikHelpers.resetForm();
        navigate("/admin");
      }
    });
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
