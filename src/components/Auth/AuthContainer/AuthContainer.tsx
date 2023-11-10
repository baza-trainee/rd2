import { PropsWithChildren } from "react";

import { Container } from "@mui/material";

import { ContainerStyles } from "./AuthContainer.classes";

export const AuthContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container sx={ContainerStyles} maxWidth="xl">
      {children}
    </Container>
  );
};
