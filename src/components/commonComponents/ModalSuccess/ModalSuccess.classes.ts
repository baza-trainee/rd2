import { SxProps } from "@mui/material";

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
  border: "1px solid #1B3969",
  borderRadius: "5px",
  boxShadow: 24,
  paddingInline: "75px",
  textAlign: "center",
};

const IconButtonStyles = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

export { ModalStyles, IconButtonStyles };
