import { Box, Typography } from "@mui/material";
import { PropsWithChildren } from "react";

export const Description = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Typography textAlign="center">{children}</Typography>
    </Box>
  );
};
