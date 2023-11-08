import { PropsWithChildren } from "react";

import { Container, Paper } from "@mui/material";

import { ContainerStyles, PaperStyles } from "./AuthContainer.classes";

export const AuthContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container sx={ContainerStyles} maxWidth="xl">
      <Paper sx={PaperStyles} elevation={3}>
        {children}
      </Paper>
    </Container>
  );
};
