import { PropsWithChildren } from "react";

import { Button } from "@mui/material";

export const SubmitButton = ({ children }: PropsWithChildren) => {
  return (
    <Button type="submit" variant="contained" color="primary">
      {children}
    </Button>
  );
};
