import { Box, Button } from "@mui/material";

import { BoxStyles } from "components/Admin/ourContacts/SubmitButton/SubmitButton.classes";

interface Props {
  children: string;
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
