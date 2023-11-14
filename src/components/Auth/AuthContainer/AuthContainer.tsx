import { PropsWithChildren } from "react";

import { Box, Container } from "@mui/material";

import { BoxStyles, ContainerStyles } from "./AuthContainer.classes";

export const AuthContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={BoxStyles}>
      <Container sx={ContainerStyles} maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
};
