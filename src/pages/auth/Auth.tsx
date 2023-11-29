import { Typography } from "@mui/material";

import { AuthForm } from "components/Auth/AuthForm/AuthForm";

export const Auth = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Вхід
      </Typography>

      <AuthForm />
    </>
  );
};

export default Auth;
