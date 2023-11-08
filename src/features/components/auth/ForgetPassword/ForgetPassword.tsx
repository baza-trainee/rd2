import { Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { ROUTES_ENUM } from "types/enums/routes.enum";

import { BoxStyles, LinkStyles } from "./ForgetPassword.classes";

export const ForgetPassword = () => {
  return (
    <Box sx={BoxStyles}>
      <Link sx={LinkStyles} component={RouterLink} to={ROUTES_ENUM.RESTORE}>
        Забули пароль?
      </Link>
    </Box>
  );
};