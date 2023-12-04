import { PropsWithChildren } from "react";

import { Box, Paper } from "@mui/material";

import {
  BoxContainerStyle,
  BoxWrapperStyle,
  PaperStyle,
} from "components/ChangePassword/FormContainer/FormContainer.classes";

export const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={BoxWrapperStyle}>
      <Box sx={BoxContainerStyle}>
        <Paper elevation={0} sx={PaperStyle}>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};
