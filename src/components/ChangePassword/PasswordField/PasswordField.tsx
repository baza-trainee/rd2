import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/ChangePassword/PasswordField/PasswordField.classes";

interface Props {
  labelText: string;
  name: "oldPassword" | "newPassword" | "newPasswordRepeat";
}

export const PasswordField = ({ labelText, name }: Props) => {
  return (
    <Box sx={BoxStyles}>
      <Typography fontSize="h5" component="label" htmlFor={name}>
        {labelText}
      </Typography>
      <Field
        sx={InputStyles}
        as={FilledInput}
        disableUnderline
        variant="filled"
        fullWidth
        type="password"
        name={name}
      />
      <ErrorMessage className="error-message" name={name} component="div" />
    </Box>
  );
};
