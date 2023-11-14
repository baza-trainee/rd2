import { PropsWithChildren } from "react";

import { Paper } from "@mui/material";

import { PaperStyles } from "./PaperContainer.classes";

export const PaperContainer = ({ children }: PropsWithChildren) => {
  return (
    <Paper sx={PaperStyles} elevation={3}>
      {children}
    </Paper>
  );
};
