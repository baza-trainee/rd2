import { PropsWithChildren } from "react";

import { Typography } from "@mui/material";

import { TitleStyles } from "./AuthTitle.classes";

export const AuthTitle = ({ children }: PropsWithChildren) => {
  return (
    <Typography sx={TitleStyles} variant="h4">
      {children}
    </Typography>
  );
};
