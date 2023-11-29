import Typography from "@mui/material/Typography";

import { AdminFeedback } from "components/Admin/AdminFeedback/AdminFeedback";

export const Feedback = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Звернення
      </Typography>

      <AdminFeedback />
    </>
  );
};

export default Feedback;
