import { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, FilledInput, IconButton, InputAdornment, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import { BoxStyles, InputStyles } from "./PasswordField.classes";

export const PasswordField = () => {
  const [isVisiblePassword, setIsVisiblePassword] = useState<boolean>(false);

  const handleChangePasswordVisibility = () => {
    setIsVisiblePassword((prev) => !prev);
  };

  const inputType = isVisiblePassword ? "text" : "password";

  return (
    <Box sx={BoxStyles}>
      <Typography variant="h6" component="label" htmlFor="username">
        Пароль
      </Typography>
      <Field
        as={FilledInput}
        sx={InputStyles}
        disableUnderline
        fullWidth
        placeholder="Введіть пароль"
        type={inputType}
        id="password"
        name="password"
        aria-label="toggle password visibility"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={handleChangePasswordVisibility} edge="end">
              {isVisiblePassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
      <ErrorMessage className="error-message" name="password" component="div" />
    </Box>
  );
};
