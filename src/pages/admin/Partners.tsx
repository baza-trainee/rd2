import Typography from "@mui/material/Typography";

import { AdminPartnersLogo } from "components/Admin/AdminPartnersLogo/AdminPartnersLogo";

export const Partners = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Лого партнерів
      </Typography>

      <AdminPartnersLogo />
    </>
  );
};

export default Partners;
