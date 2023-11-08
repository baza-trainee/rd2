import { SxProps } from "@mui/material";

const ContainerStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  bgcolor: "#f5f5f5",
  height: "calc(100vh - 8rem)",
  letterSpacing: 0.5,
  color: "#151515",
};

const PaperStyles: SxProps = {
  maxWidth: "390px",
  height: "fit-content",
  padding: "50px 50px 40px 50px",
  borderRadius: "10px",
};

export { ContainerStyles, PaperStyles };
