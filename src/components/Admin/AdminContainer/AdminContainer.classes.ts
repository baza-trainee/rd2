import { SxProps } from "@mui/material";

import { theme } from "theme/theme";

const bgColor = theme.palette.secondary.main;

const BoxStyles: SxProps = {
  width: "100%",
  backgroundColor: `${bgColor}`,
  //overflow: "hidden",
};

const ContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  height: "calc(100vh - 128px)",
  letterSpacing: 0.5,
};

export { BoxStyles, ContainerStyles };
