import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/Auth/ForgotPassword/EmailField/EmailField.classes";

export const EmailField = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h6" component="label" htmlFor="email">
        Email
      </Typography>
      <Field
        sx={InputStyles}
        as={FilledInput}
        disableUnderline
        placeholder="Введіть email"
        variant="filled"
        fullWidth
        type="text"
        name="email"
      />
      <ErrorMessage className="error-message" name="email" component="div" />
    </Box>
  );
};
