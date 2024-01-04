import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/Admin/ourContacts/EmailField/EmailField.classes";

interface Props {
  labelText: string;
  name: "currentEmail" | "newEmail";
  disabled?: boolean;
  email?: string;
}

export const EmailField = ({ disabled, labelText, name, email }: Props) => {
  return (
    <Box sx={BoxStyles}>
      <Typography variant="h6" component="label" htmlFor={name}>
        {labelText}
      </Typography>
      <Field
        sx={InputStyles}
        as={FilledInput}
        disableUnderline
        variant="filled"
        fullWidth
        placeholder={email}
        disabled={disabled}
        type="text"
        name={name}
      />
      <ErrorMessage className="error-message" name={name} component="div" />
    </Box>
  );
};
