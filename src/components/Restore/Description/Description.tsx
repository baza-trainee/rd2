import { PropsWithChildren } from "react";

import { Box, Typography } from "@mui/material";

export const Description = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      <Typography textAlign="center">{children}</Typography>
    </Box>
  );
};
