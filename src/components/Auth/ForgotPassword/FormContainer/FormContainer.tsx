import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

export const FormContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "32px",
        marginTop: "32px",
      }}
    >
      {children}
    </Box>
  );
};
