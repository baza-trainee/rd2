import { SxProps } from "@mui/material";

import { theme } from "theme/theme";

const bgColor = theme.palette.secondary.main;

const BoxStyles: SxProps = {
  width: "100%",
  backgroundColor: `${bgColor}`,
};

const ContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  minHeight: "calc(100vh - 8rem)",
  letterSpacing: 0.5,
};

export { BoxStyles, ContainerStyles };
