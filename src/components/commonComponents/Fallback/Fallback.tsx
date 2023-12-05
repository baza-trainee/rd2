import { Box, CircularProgress } from "@mui/material";

export const Fallback = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: "2",
        minHeight: "calc(100vh - 129px)",
        backgroundColor: "rgba(0,0,0,0.15)",
      }}
    >
      <CircularProgress />
    </Box>
  );
};
