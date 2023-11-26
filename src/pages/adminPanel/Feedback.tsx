import Typography from "@mui/material/Typography";

import { AdminFeedback } from "components/Admin/AdminFeedback/AdminFeedback";

export const Component = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Звернення
      </Typography>

      <AdminFeedback />
    </>
  );
};

Component.displayName = "Feedback";
