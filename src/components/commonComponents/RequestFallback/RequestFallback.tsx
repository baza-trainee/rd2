import { CircularProgress } from "@mui/material";

export const RequestFallback = (): JSX.Element => {
  return <CircularProgress sx={{ bgcolor: "inherit", color: "#fff" }} />;
};
