import { Box, Button } from "@mui/material";

import { BoxStyles } from "components/Admin/OurContacts/SubmitButton/SubmitButton.classes";
import { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  isValid: boolean;
}

export const SubmitButton = ({ children, isValid }: Props) => {
  return (
    <Box sx={BoxStyles}>
      <Button
        fullWidth
        type="submit"
        disabled={!isValid}
        variant="contained"
        color="primary"
      >
        {children}
      </Button>
    </Box>
  );
};
