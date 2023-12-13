import { Box, Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

import {
  BoxStyles,
  LinkStyles,
} from "components/Auth/ForgetPassword/ForgetPassword.classes";

export const ForgetPassword = () => {
  return (
    <Box sx={BoxStyles}>
      <Link sx={LinkStyles} component={RouterLink} to="restore">
        Забули пароль?
      </Link>
    </Box>
  );
};
