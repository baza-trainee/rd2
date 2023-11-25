import { Typography } from "@mui/material";

import { AuthForm } from "features/auth/AuthForm/AuthForm";

export const Component = () => {
  return (
    <>
      <Typography sx={{ marginBottom: "32px", textAlign: "center" }} variant="h4">
        Вхід
      </Typography>

      <AuthForm />
    </>
  );
};

Component.displayName = "Auth";
