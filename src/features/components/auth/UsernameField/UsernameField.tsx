import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import { BoxStyles, InputStyles } from "./UsernameField.classes";

export const UsernameField = () => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h6" component="label" htmlFor="username">
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
        name="username"
      />
      <ErrorMessage className="error-message" name="username" component="div" />
    </Box>
  );
};
