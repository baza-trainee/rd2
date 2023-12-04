import Typography from "@mui/material/Typography";

import { TestQuery } from "components/TestQuery/TestQuery";

export const Reports = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Звітність
      </Typography>

      <TestQuery />
    </>
  );
};

export default Reports;
