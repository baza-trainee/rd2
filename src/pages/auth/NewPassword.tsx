import { Typography } from "@mui/material";
import { NewPasswordForm } from "features/components/newPassword/NewPasswordForm/NewPasswordForm";

export const Component = () => {
  return (
    <>
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "32px" }}>
        Відновити пароль
      </Typography>

      <NewPasswordForm />
    </>
  );
};

Component.displayName = "NewPassword";
