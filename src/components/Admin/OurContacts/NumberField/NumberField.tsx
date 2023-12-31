import { Box, FilledInput, Typography } from "@mui/material";
import { ErrorMessage, Field } from "formik";

import {
  BoxStyles,
  InputStyles,
} from "components/Admin/OurContacts/NumberField/NumberField.classes";

interface Props {
  labelText: string;
  name: "currentNumber" | "newNumber";
  disabled?: boolean;
  number?: string;
}

export const NumberField = ({ disabled, labelText, name, number }: Props) => {
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
        disabled={disabled}
        placeholder={number}
        type="text"
        name={name}
      />

      <ErrorMessage className="error-message" name={name} component="div" />
    </Box>
  );
};
