import { PropsWithChildren } from "react";

import { Box, Button } from "@mui/material";

import { BoxStyles } from "./SubmitButton.classes";

export const SubmitButton = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={BoxStyles}>
      <Button fullWidth type="submit" variant="contained" color="primary">
        {children}
      </Button>
    </Box>
  );
};
