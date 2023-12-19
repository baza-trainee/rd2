import { Box, FilledInput, IconButton, InputAdornment, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/ChangePassword/PasswordField/PasswordField.classes";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface Props {
  labelText: string;
  name: "password" | "new_password" | "confirm_password";
}

export const PasswordField = ({ labelText, name }: Props) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  const handleChangePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const inputType = isVisiblePassword ? "text" : "password";

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
        type={inputType}
        name={name}
        aria-label="toggle password visibility"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleChangePasswordVisibility} edge="end">
              {isVisiblePassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <ErrorMessage className="error-message" name={name} component="div" />
    </Box>
  );
};
