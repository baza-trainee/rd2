import { Form, Formik, FormikHelpers } from "formik";
import { Button } from "@mui/material";

import { FormValues } from "types/formValues";
import { UsernameField } from "components/Auth/UsernameField/UsernameField";
import { PasswordField } from "components/Auth/PasswordField/PasswordField";
import { ForgetPassword } from "components/Auth/LinkForgotPassword/LinkForgotPassword";
import { validationSchema } from "components/Auth/AuthForm/validationSchema";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { useAuthorization } from "api/query-hooks/useAuthorization";

interface Props {
  handleIsOpenModal: () => void;
}

export const AuthForm = ({ handleIsOpenModal }: Props) => {
  const mutation = useAuthorization(handleIsOpenModal);
  const { isLoading } = useAuthorization();

  const handleSubmit = (credentials: FormValues, _: FormikHelpers<FormValues>) => {
    mutation.mutate(credentials);
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
          {(isLoading && <RequestFallback />) || "Вхід"}
        </Button>
      </Form>
    </Formik>
  );
};
