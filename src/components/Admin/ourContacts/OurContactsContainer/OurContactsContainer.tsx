import { PropsWithChildren } from "react";

import { Box } from "@mui/material";

export const OurContactsContainer = ({ children }: PropsWithChildren) => {
  return (
    <Box
      sx={{
        width: "100%",
        paddingBlock: "32px",
        paddingInline: "24px",
        bgcolor: "#fff",
        marginTop: "32px",
        borderRadius: "20px",
        height: "fit-content",
      }}
    >
      {children}
    </Box>
  );
};
