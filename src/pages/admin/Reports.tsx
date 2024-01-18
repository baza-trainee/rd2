import Typography from "@mui/material/Typography";

import { AdminReports } from "components/Admin/AdminReports/AdminReports";

export const Reports = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Звітність
      </Typography>

      <AdminReports />
    </>
  );
};

export default Reports;
