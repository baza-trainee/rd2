/* eslint-disable max-len */
import Typography from "@mui/material/Typography";

import { OurContactsContainer } from "components/Admin/ourContacts/OurContactsContainer/OurContactsContainer";
import { OurContactsForm } from "components/Admin/ourContacts/OurContactsForm/OurContactsForm";

export const Component = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Контакти
      </Typography>

      <OurContactsContainer>
        <OurContactsForm />
      </OurContactsContainer>
    </>
  );
};

Component.displayName = "OurContacts";
