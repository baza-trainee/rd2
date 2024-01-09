import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";

import {
  BoxStyles,
  LinkStyles,
} from "components/Auth/LinkForgotPassword/LinkForgotPassword.classes";

export const ForgetPassword = () => {
  return (
    <Box sx={BoxStyles}>
      <Link
        sx={LinkStyles}
        component={RouterLink}
        to={`/${ROUTES_ENUM.AUTH}/${ROUTES_ENUM.FORGOT_PASSWORD}`}
      >
        Забули пароль?
      </Link>
    </Box>
  );
};
