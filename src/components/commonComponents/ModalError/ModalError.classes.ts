import { SxProps } from "@mui/material";

import { theme } from "theme/theme";

const errorColor = theme.palette.error.main;

const ModalStyles: SxProps = {
  minHeight: "200px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 446,
  bgcolor: "background.paper",
  border: `1px solid ${errorColor}`,
  borderRadius: "5px",
  boxShadow: 24,
  paddingInline: "75px",
  textAlign: "center",

  "&:focus": {
    outlineColor: errorColor,
  },
};

const IconButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

export { ModalStyles, IconButtonStyles };
