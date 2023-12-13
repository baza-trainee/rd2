import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/Auth/UsernameField/UsernameField.classes";

export const UsernameField = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h6" component="label" htmlFor="email">
        Логін
      </Typography>
      <Field
        sx={InputStyles}
        as={FilledInput}
        disableUnderline
        placeholder="Введіть логін"
        variant="filled"
        fullWidth
        type="text"
        name="email"
      />
      <ErrorMessage className="error-message" name="email" component="div" />
    </Box>
  );
};
