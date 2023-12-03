/* eslint-disable max-len */
import Typography from "@mui/material/Typography";

import { EmailForm } from "components/Admin/ourContacts/EmailForm/EmailForm";
import { OurContactsContainer } from "components/Admin/ourContacts/OurContactsContainer/OurContactsContainer";
import { PhoneForm } from "components/Admin/ourContacts/PhoneForm/PhoneForm";

export const OurContacts = () => {
  return (
    <>
      <Typography variant="h4" component="h4" color="info.main">
        Контакти
      </Typography>

      <OurContactsContainer>
        <PhoneForm />
      </OurContactsContainer>

      <OurContactsContainer>
        <EmailForm />
      </OurContactsContainer>
    </>
  );
};

export default OurContacts;
