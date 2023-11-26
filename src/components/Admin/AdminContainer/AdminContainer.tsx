import { PropsWithChildren } from "react";

import { Box, Container } from "@mui/material";

import {
  BoxStyles,
  ContainerStyles,
} from "components/Admin/AdminContainer/AdminContainer.classes";

export const AdminContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={BoxStyles}>
      <Container sx={ContainerStyles} maxWidth="xl">
        {children}
      </Container>
    </Box>
  );
};
