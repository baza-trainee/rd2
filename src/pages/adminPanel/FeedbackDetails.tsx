/* eslint-disable max-len */
import Typography from "@mui/material/Typography";

import { UserFeedbackDetails } from "components/Admin/AdminFeedback/UserFeedbackDetails/UserFeedbackDetails";

export const Component = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Детальна інформація по зверненню
      </Typography>

      <UserFeedbackDetails />
    </>
  );
};

Component.displayName = "FeedbackDetails";
