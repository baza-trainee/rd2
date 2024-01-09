import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useMutation } from "react-query";

import { AccessTokenService } from "services/AccessTokenService";
import { FormValues } from "types/formValues";
import { UsernameField } from "components/Auth/UsernameField/UsernameField";
import { PasswordField } from "components/Auth/PasswordField/PasswordField";
import { ForgetPassword } from "components/Auth/LinkForgotPassword/LinkForgotPassword";
import { validationSchema } from "components/Auth/AuthForm/validationSchema";
import { RequestFallback } from "components/commonComponents/RequestFallback/RequestFallback";
import { signIn } from "api/signIn";
import { checkIsTokenValid } from "helpers/auth/checkIsTokenValid";

interface Props {
  handleIsOpenModal: () => void;
}

export const AuthForm = ({ handleIsOpenModal }: Props) => {
  const navigate = useNavigate();
  const { getAccessToken } = new AccessTokenService();

  const mutation = useMutation((credentials: FormValues) => signIn(credentials), {
    onSuccess: () => {
      const isAuthorizated = checkIsTokenValid(getAccessToken());

      if (isAuthorizated) {
        navigate("/admin");
      } else {
        throw new Error("invalid credentials");
      }
    },

    onError: () => {
      handleIsOpenModal();
    },
  });

  const { isLoading } = mutation;

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
