import { Box, CircularProgress } from "@mui/material";

export const Fallback = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.15)",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
