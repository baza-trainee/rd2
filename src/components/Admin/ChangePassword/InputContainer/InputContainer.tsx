import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

import { BoxStyles } from "components/Admin/ChangePassword/InputContainer/InputContainer.classes";

export const InputContainer = ({ children }: PropsWithChildren) => {
  return <Box sx={BoxStyles}>{children}</Box>;
};
