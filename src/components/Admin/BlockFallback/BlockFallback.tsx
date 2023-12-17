import {Box, CircularProgress} from "@mui/material";

const BlockFallback = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#00000026",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "100",
          width: "100%",
          borderRadius: "15px",
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export {BlockFallback};
